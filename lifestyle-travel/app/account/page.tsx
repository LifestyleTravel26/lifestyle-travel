'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HeaderMenu from '../components/HeaderMenu'
import { useLanguage } from '../context/LanguageContext'
import { createClient } from '@/lib/supabase/client'

const SUPPORT_EMAIL = 'jimmyg.leonr@gmail.com'

const translations = {
  es: {
    back: '← Lifestyle & Travel',
    title: 'Mi cuenta',
    hello: 'Hola',
    accessLabel: 'Tu acceso',
    accessNote: 'Pago único. Todos los blueprints incluidos.',
    help: 'Ayuda',
    loading: 'Cargando...',
    email: 'Email de tu cuenta',
    status: 'Estado',
    active: '✓ Acceso completo activo',
    inactive: 'Sin acceso todavía',
    go: 'Ver mis blueprints',
    buy: 'Obtener acceso',
    noPurchaseTitle: '¿Pagaste con otro email?',
    noPurchaseText: 'El acceso se activa con el mismo email con el que pagaste. Si pagaste con uno distinto al de tu cuenta, escríbenos con el email del pago y lo activamos.',
    contact: 'Escribir a soporte',
    security: 'Seguridad',
    changePw: 'Cambiar contraseña',
    changePwHint: 'Te enviaremos un link a tu email.',
    logout: 'Cerrar sesión',
    mailSubject: 'Acceso a Lifestyle & Travel',
    mailBody: 'Hola, pagué con este email: \n\nMi cuenta es: ',
  },
  pt: {
    back: '← Lifestyle & Travel',
    title: 'Minha conta',
    hello: 'Olá',
    accessLabel: 'Seu acesso',
    accessNote: 'Pagamento único. Todos os blueprints incluídos.',
    help: 'Ajuda',
    loading: 'Carregando...',
    email: 'Email da sua conta',
    status: 'Status',
    active: '✓ Acesso completo ativo',
    inactive: 'Sem acesso ainda',
    go: 'Ver meus blueprints',
    buy: 'Obter acesso',
    noPurchaseTitle: 'Pagou com outro email?',
    noPurchaseText: 'O acesso é ativado com o mesmo email usado no pagamento. Se você pagou com um email diferente do da sua conta, escreva para nós com o email do pagamento e ativamos.',
    contact: 'Falar com o suporte',
    security: 'Segurança',
    changePw: 'Alterar senha',
    changePwHint: 'Enviaremos um link para o seu email.',
    logout: 'Sair',
    mailSubject: 'Acesso ao Lifestyle & Travel',
    mailBody: 'Olá, paguei com este email: \n\nMinha conta é: ',
  },
  en: {
    back: '← Lifestyle & Travel',
    title: 'My account',
    hello: 'Hi',
    accessLabel: 'Your access',
    accessNote: 'One-time payment. All blueprints included.',
    help: 'Help',
    loading: 'Loading...',
    email: 'Your account email',
    status: 'Status',
    active: '✓ Full access active',
    inactive: 'No access yet',
    go: 'Go to my blueprints',
    buy: 'Get access',
    noPurchaseTitle: 'Paid with a different email?',
    noPurchaseText: 'Access is unlocked with the same email you paid with. If you paid with an email different from your account, write to us with the payment email and we will activate it.',
    contact: 'Contact support',
    security: 'Security',
    changePw: 'Change password',
    changePwHint: "We'll send a link to your email.",
    logout: 'Log out',
    mailSubject: 'Lifestyle & Travel access',
    mailBody: 'Hi, I paid with this email: \n\nMy account is: ',
  },
}

const card = { backgroundColor: 'white', borderRadius: '16px', padding: '20px', marginBottom: '14px', boxShadow: '0 4px 16px rgba(26,26,46,0.08)' } as const
const label = { fontSize: '11px', fontWeight: 700, color: '#a3a3a3', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' } as const
const primaryBtn = { display: 'block', backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 16px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center', boxShadow: '0 6px 16px rgba(232,87,42,0.28)' } as const

export default function AccountPage() {
  const { locale } = useLanguage()
  const t = translations[locale]
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user?.email) {
        router.replace('/login?redirectTo=/account')
        return
      }
      setEmail(user.email)
      try {
        const safeEmail = user.email.trim().replace(/[\\%_]/g, '\\$&')
        const { data } = await supabase.from('purchases').select('id').ilike('email', safeEmail).limit(1)
        setHasAccess(!!data && data.length > 0)
      } catch {
        setHasAccess(false)
      }
      setLoading(false)
    }
    load()
  }, [router])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(t.mailBody + email)}`
  const initial = email ? email.charAt(0).toUpperCase() : ''
  const name = email ? email.split('@')[0] : ''

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', colorScheme: 'light', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'relative', height: '260px', backgroundImage: 'linear-gradient(rgba(10,10,25,0.55), rgba(10,10,25,0.55)), url("/account-hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 38%' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{t.back}</Link>
          <HeaderMenu />
        </div>
        <div style={{ textAlign: 'center', padding: '8px 24px 0' }}>
          <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.title}</h1>
          {!loading && <p style={{ color: '#ddd', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hello}, {name}</p>}
        </div>
      </div>

      <div style={{ maxWidth: '560px', margin: '-56px auto 0', padding: '0 16px 64px', position: 'relative' }}>
        {loading ? (
          <section style={{ ...card, textAlign: 'center', color: '#1a1a2e' }}>{t.loading}</section>
        ) : (
          <>
            <section style={card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#1a1a2e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, flexShrink: 0 }}>{initial}</div>
                <div style={{ minWidth: 0 }}>
                  <p style={label}>{t.email}</p>
                  <p style={{ fontSize: '15px', color: '#1a1a2e', margin: 0, wordBreak: 'break-all' }}>{email}</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
                <p style={label}>{t.accessLabel}</p>
                <span style={{ display: 'inline-block', borderRadius: '999px', padding: '6px 14px', fontSize: '14px', fontWeight: 700, backgroundColor: hasAccess ? '#e7f6ec' : '#fdf0ea', color: hasAccess ? '#15803d' : '#b45309' }}>
                  {hasAccess ? t.active : t.inactive}
                </span>
                {hasAccess && <p style={{ fontSize: '13px', color: '#6b7280', margin: '10px 0 0' }}>{t.accessNote}</p>}
              </div>
            </section>

            {hasAccess ? (
              <Link href="/" style={{ ...primaryBtn, marginBottom: '14px' }}>{t.go}</Link>
            ) : (
              <>
                <Link href="/pricing" style={{ ...primaryBtn, marginBottom: '14px' }}>{t.buy}</Link>
                <section style={card}>
                  <p style={label}>{t.help}</p>
                  <h2 style={{ fontSize: '17px', color: '#1a1a2e', margin: '0 0 8px' }}>{t.noPurchaseTitle}</h2>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333333', margin: '0 0 14px' }}>{t.noPurchaseText}</p>
                  <a href={mailto} style={{ display: 'block', textAlign: 'center', border: '1.5px solid #e8572a', color: '#e8572a', borderRadius: '10px', padding: '11px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>{t.contact}</a>
                </section>
              </>
            )}

            <section style={card}>
              <p style={label}>{t.security}</p>
              <Link href="/forgot-password" style={{ color: '#1a1a2e', fontWeight: 600, fontSize: '15px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{t.changePw}</span><span style={{ color: '#a3a3a3' }}>→</span>
              </Link>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0' }}>{t.changePwHint}</p>
            </section>

            <button
              onClick={handleSignOut}
              style={{ width: '100%', backgroundColor: 'transparent', color: '#c0392b', border: '1.5px solid #c0392b', borderRadius: '12px', padding: '13px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
            >
              {t.logout}
            </button>
          </>
        )}
      </div>
    </main>
  )
}
