'use client'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'

const translations = {
  es: {
    message: 'Usamos cookies para analizar el tráfico y mejorar tu experiencia. Puedes aceptar o rechazar las cookies no esenciales.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    privacy: 'Política de privacidad',
  },
  pt: {
    message: 'Usamos cookies para analisar o tráfego e melhorar sua experiência. Você pode aceitar ou recusar os cookies não essenciais.',
    accept: 'Aceitar',
    reject: 'Recusar',
    privacy: 'Política de privacidade',
  },
  en: {
    message: 'We use cookies to analyze traffic and improve your experience. You can accept or reject non-essential cookies.',
    accept: 'Accept',
    reject: 'Reject',
    privacy: 'Privacy policy',
  },
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const { locale } = useLanguage()
  const t = translations[locale]

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function handleAccept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    // Activar Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  function handleReject() {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
    // Bloquear Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: '#1a1a2e',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        color: 'white',
        fontSize: '13px',
        lineHeight: '1.6',
        margin: 0,
      }}>
        🍪 {t.message}{' '}
        <a
          href="/privacy"
          style={{ color: '#e8572a', textDecoration: 'underline', fontSize: '13px' }}
        >
          {t.privacy}
        </a>
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleAccept}
          style={{
            flex: 1,
            backgroundColor: '#e8572a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {t.accept}
        </button>
        <button
          onClick={handleReject}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            padding: '10px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {t.reject}
        </button>
      </div>
    </div>
  )
}