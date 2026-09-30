'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { createClient } from '@/lib/supabase/client'

const menuText = {
  es: { language: 'Idioma', account: 'Cuenta', start: 'Comenzar', logout: 'Cerrar sesión' },
  pt: { language: 'Idioma', account: 'Conta', start: 'Começar', logout: 'Sair' },
  en: { language: 'Language', account: 'Account', start: 'Get Started', logout: 'Log out' },
}

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const { locale, setLocale } = useLanguage()
  const t = menuText[locale]

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const languages: { code: 'es' | 'pt' | 'en'; label: string }[] = [
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'pt', label: '🇧🇷 Português' },
    { code: 'en', label: '🇬🇧 English' },
  ]

  return (
    <div ref={ref} style={{ position: 'relative', fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Menu"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: '10px',
          width: '42px',
          height: '42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ width: '18px', height: '2px', backgroundColor: 'white', borderRadius: '2px' }} />
          <span style={{ width: '18px', height: '2px', backgroundColor: 'white', borderRadius: '2px' }} />
          <span style={{ width: '18px', height: '2px', backgroundColor: 'white', borderRadius: '2px' }} />
        </span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            backgroundColor: 'white',
            borderRadius: '14px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.22)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            minWidth: '230px',
            zIndex: 1000,
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#a3a3a3', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t.language}
          </p>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              style={{
                background: locale === lang.code ? '#fdf0ea' : 'transparent',
                color: locale === lang.code ? '#e8572a' : '#1a1a2e',
                border: 'none',
                borderRadius: '9px',
                padding: '10px 12px',
                textAlign: 'left',
                fontSize: '15px',
                fontWeight: locale === lang.code ? 600 : 500,
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              {lang.label}
            </button>
          ))}

          <div style={{ borderTop: '1px solid #eee', margin: '10px 0' }} />

          <p style={{ fontSize: '11px', fontWeight: 700, color: '#a3a3a3', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t.account}
          </p>
          {!loading && (
            isLoggedIn ? (
              <button
                onClick={handleSignOut}
                style={{
                  background: 'transparent',
                  color: '#c0392b',
                  border: 'none',
                  borderRadius: '9px',
                  padding: '10px 12px',
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t.logout}
              </button>
            ) : (
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                style={{
                  backgroundColor: '#e8572a',
                  color: 'white',
                  borderRadius: '9px',
                  padding: '11px 12px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block',
                }}
              >
                {t.start}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}