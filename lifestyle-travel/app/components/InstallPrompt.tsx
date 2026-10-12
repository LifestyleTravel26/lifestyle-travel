'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/context/LanguageContext'

const translations = {
  es: {
    title: 'Instala la app',
    subtitle: 'Accede más rápido desde tu pantalla de inicio.',
    install: 'Instalar',
    ios: 'Toca {share} y luego "Agregar a pantalla de inicio".',
    close: 'Cerrar',
  },
  pt: {
    title: 'Instale o app',
    subtitle: 'Acesse mais rápido pela sua tela inicial.',
    install: 'Instalar',
    ios: 'Toque em {share} e depois em "Adicionar à Tela de Início".',
    close: 'Fechar',
  },
  en: {
    title: 'Install the app',
    subtitle: 'Open it faster from your home screen.',
    install: 'Install',
    ios: 'Tap {share} then "Add to Home Screen".',
    close: 'Close',
  },
}

const HIDDEN_ROUTES = ['/login', '/signup', '/forgot-password', '/reset-password']
const DISMISS_KEY = 'install_prompt_dismissed_at'
const DISMISS_DAYS = 14
const SHOW_AFTER_MS = 5000

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function ShareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8572a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: '-2px', margin: '0 2px' }}
      aria-label="Share"
    >
      <path d="M12 3v12" />
      <path d="m7 8 5-5 5 5" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  )
}

export default function InstallPrompt() {
  const pathname = usePathname()
  const { locale } = useLanguage()
  const t = translations[locale]

  const [mode, setMode] = useState<'none' | 'native' | 'ios'>('none')
  const deferred = useRef<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const start = Date.now()

    const isStandalone = () =>
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true

    const recentlyDismissed = () => {
      try {
        const at = Number(localStorage.getItem(DISMISS_KEY))
        return !!at && Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000
      } catch {
        return false
      }
    }

    // No se muestra mientras el aviso de cookies siga pendiente
    const cookiesResolved = () => {
      try {
        return !!localStorage.getItem('cookie_consent')
      } catch {
        return true
      }
    }

    const isIos = () =>
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      deferred.current = e as BeforeInstallPromptEvent
    }

    const onInstalled = () => {
      deferred.current = null
      setMode('none')
    }

    const tick = () => {
      if (isStandalone() || recentlyDismissed()) {
        setMode('none')
        return
      }
      if (Date.now() - start < SHOW_AFTER_MS || !cookiesResolved()) return
      if (deferred.current) setMode('native')
      else if (isIos()) setMode('ios')
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)
    const id = window.setInterval(tick, 1500)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
      window.clearInterval(id)
    }
  }, [])

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {}
    setMode('none')
  }

  async function install() {
    const ev = deferred.current
    if (!ev) return
    try {
      await ev.prompt()
      await ev.userChoice
    } catch {}
    deferred.current = null
    dismiss()
  }

  if (mode === 'none' || HIDDEN_ROUTES.includes(pathname)) return null

  const iosParts = t.ios.split('{share}')

  return (
    <div
      role="dialog"
      aria-label={t.title}
      style={{
        position: 'fixed',
        left: '16px',
        right: '88px', // deja libre el botón del chat
        bottom: '16px',
        maxWidth: '380px',
        zIndex: 9000,
        backgroundColor: '#ffffff',
        border: '1px solid #f0f0f0',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        padding: '12px 12px 12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon-192.png"
        alt=""
        width={40}
        height={40}
        style={{ borderRadius: '10px', flexShrink: 0 }}
      />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a1a2e' }}>{t.title}</div>
        <div style={{ fontSize: '12px', lineHeight: 1.4, color: '#6b7280', marginTop: '2px' }}>
          {mode === 'ios' ? (
            <>
              {iosParts[0]}
              <ShareIcon />
              {iosParts[1]}
            </>
          ) : (
            t.subtitle
          )}
        </div>
      </div>

      {mode === 'native' && (
        <button
          type="button"
          onClick={install}
          style={{
            backgroundColor: '#e8572a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '9px 14px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {t.install}
        </button>
      )}

      <button
        type="button"
        onClick={dismiss}
        aria-label={t.close}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          lineHeight: 0,
          color: '#9b9b9b',
          flexShrink: 0,
          alignSelf: 'flex-start',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  )
}
