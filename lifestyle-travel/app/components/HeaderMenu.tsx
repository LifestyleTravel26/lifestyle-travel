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
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Menu"
        style={{
          background: 'transparent',
          border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: '8px',
          width: '40px',
          height: '40px',
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
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '210px',
            zIndex: 1000,
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#999', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.language}
          </p>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              style={{
                background: locale === lang.code ? '#fdf0ea' : 'transparent',
                color: '#1a1a2e',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 10px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: locale === lang.code ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              {lang.label}
            </button>
          ))}

          <div style={{ borderTop: '1px solid #eee', margin: '8px 0' }} />

          <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#999', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.account}
          </p>
          {!loading && (
            isLoggedIn ? (
              <button
                onClick={handleSignOut}
                style={{
                  background: 'transparent',
                  color: '#1a1a2e',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  textAlign: 'left',
                  fontSize: '14px',
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
                  borderRadius: '8px',
                  padding: '8px 10px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  textAlign: 'center',
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