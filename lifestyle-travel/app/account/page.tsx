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

const card = { backgroundColor: 'white', borderRadius: '12px', padding: '20px', marginBottom: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' } as const
const label = { fontSize: '12px', color: '#6b7280', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.06em' } as const
const primaryBtn = { display: 'block', backgroundColor: '#e8572a', color: 'white', borderRadius: '10px', padding: '13px 16px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' } as const

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

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', colorScheme: 'light', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{t.back}</Link>
        <HeaderMenu />
      </div>
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '32px 20px 64px' }}>
        <h1 style={{ fontSize: '28px', color: '#1a1a2e', margin: '0 0 20px' }}>{t.title}</h1>

        {loading ? (
          <p style={{ color: '#1a1a2e' }}>{t.loading}</p>
        ) : (
          <>
            <section style={card}>
              <p style={label}>{t.email}</p>
              <p style={{ fontSize: '16px', color: '#1a1a2e', margin: '0 0 16px', wordBreak: 'break-all' }}>{email}</p>
              <p style={label}>{t.status}</p>
              <p style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: hasAccess ? '#15803d' : '#b45309' }}>
                {hasAccess ? t.active : t.inactive}
              </p>
            </section>

            {hasAccess ? (
              <Link href="/" style={{ ...primaryBtn, marginBottom: '14px' }}>{t.go}</Link>
            ) : (
              <>
                <Link href="/pricing" style={{ ...primaryBtn, marginBottom: '14px' }}>{t.buy}</Link>
                <section style={card}>
                  <h2 style={{ fontSize: '17px', color: '#1a1a2e', margin: '0 0 8px' }}>{t.noPurchaseTitle}</h2>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333333', margin: '0 0 14px' }}>{t.noPurchaseText}</p>
                  <a href={mailto} style={{ color: '#e8572a', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>{t.contact} →</a>
                </section>
              </>
            )}

            <section style={card}>
              <h2 style={{ fontSize: '17px', color: '#1a1a2e', margin: '0 0 12px' }}>{t.security}</h2>
              <Link href="/forgot-password" style={{ color: '#1a1a2e', fontWeight: 600, fontSize: '14px', textDecoration: 'underline' }}>{t.changePw}</Link>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0' }}>{t.changePwHint}</p>
            </section>

            <button
              onClick={handleSignOut}
              style={{ width: '100%', backgroundColor: 'transparent', color: '#c0392b', border: '1.5px solid #c0392b', borderRadius: '10px', padding: '12px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
            >
              {t.logout}
            </button>
          </>
        )}
      </div>
    </main>
  )
}
