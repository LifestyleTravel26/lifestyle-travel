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
    loading: 'Cargando...',
    pass: 'Pase de acceso',
    holder: 'Titular',
    status: 'Estado',
    active: 'Acceso completo',
    activeNote: 'Pago único · Todos los blueprints incluidos',
    inactive: 'Sin acceso todavía',
    inactiveNote: 'Aún no encontramos un pago con este email',
    blueprints: 'Tus blueprints',
    buy: 'Obtener acceso',
    help: 'Ayuda',
    noPurchaseTitle: '¿Pagaste con otro email?',
    noPurchaseText: 'El acceso se activa con el mismo email con el que pagaste. Si pagaste con uno distinto al de tu cuenta, escríbenos con el email del pago y lo activamos.',
    contact: 'Escribir a soporte',
    settings: 'Ajustes',
    changePw: 'Cambiar contraseña',
    changePwHint: 'Te enviaremos un link a tu email',
    logout: 'Cerrar sesión',
    terms: 'Términos',
    privacy: 'Privacidad',
    mailSubject: 'Acceso a Lifestyle & Travel',
    mailBody: 'Hola, pagué con este email: \n\nMi cuenta es: ',
    routes: ['Estudiar y trabajar', 'Work & Holidays', 'Nómada digital', 'Au Pair', 'Pet Sitting', 'Voluntariado'],
  },
  pt: {
    back: '← Lifestyle & Travel',
    title: 'Minha conta',
    hello: 'Olá',
    loading: 'Carregando...',
    pass: 'Passe de acesso',
    holder: 'Titular',
    status: 'Status',
    active: 'Acesso completo',
    activeNote: 'Pagamento único · Todos os blueprints incluídos',
    inactive: 'Sem acesso ainda',
    inactiveNote: 'Ainda não encontramos um pagamento com este email',
    blueprints: 'Seus blueprints',
    buy: 'Obter acesso',
    help: 'Ajuda',
    noPurchaseTitle: 'Pagou com outro email?',
    noPurchaseText: 'O acesso é ativado com o mesmo email usado no pagamento. Se você pagou com um email diferente do da sua conta, escreva para nós com o email do pagamento e ativamos.',
    contact: 'Falar com o suporte',
    settings: 'Configurações',
    changePw: 'Alterar senha',
    changePwHint: 'Enviaremos um link para o seu email',
    logout: 'Sair',
    terms: 'Termos',
    privacy: 'Privacidade',
    mailSubject: 'Acesso ao Lifestyle & Travel',
    mailBody: 'Olá, paguei com este email: \n\nMinha conta é: ',
    routes: ['Estudar e trabalhar', 'Work & Holidays', 'Nômade digital', 'Au Pair', 'Pet Sitting', 'Voluntariado'],
  },
  en: {
    back: '← Lifestyle & Travel',
    title: 'My account',
    hello: 'Hi',
    loading: 'Loading...',
    pass: 'Access pass',
    holder: 'Holder',
    status: 'Status',
    active: 'Full access',
    activeNote: 'One-time payment · All blueprints included',
    inactive: 'No access yet',
    inactiveNote: "We haven't found a payment with this email yet",
    blueprints: 'Your blueprints',
    buy: 'Get access',
    help: 'Help',
    noPurchaseTitle: 'Paid with a different email?',
    noPurchaseText: 'Access is unlocked with the same email you paid with. If you paid with an email different from your account, write to us with the payment email and we will activate it.',
    contact: 'Contact support',
    settings: 'Settings',
    changePw: 'Change password',
    changePwHint: "We'll send a link to your email",
    logout: 'Log out',
    terms: 'Terms',
    privacy: 'Privacy',
    mailSubject: 'Lifestyle & Travel access',
    mailBody: 'Hi, I paid with this email: \n\nMy account is: ',
    routes: ['Study & work', 'Work & Holidays', 'Digital nomad', 'Au Pair', 'Pet Sitting', 'Volunteering'],
  },
}

const ROUTES = [
  { href: '/work-and-study', img: 'https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=500&auto=format&fit=crop' },
  { href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=500&auto=format&fit=crop' },
  { href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=500&auto=format&fit=crop' },
  { href: '/au-pair', img: 'https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=500&auto=format&fit=crop' },
  { href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=500&auto=format&fit=crop' },
  { href: '/voluntariado', img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=500&auto=format&fit=crop' },
]

const BG = '#f8f7f4'
const card = { backgroundColor: 'white', borderRadius: '18px', padding: '20px', marginBottom: '16px', boxShadow: '0 4px 18px rgba(26,26,46,0.08)' } as const
const label = { fontSize: '10px', fontWeight: 700, color: '#a3a3a3', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.12em' } as const
const sectionTitle = { fontSize: '13px', fontWeight: 700, color: '#1a1a2e', margin: '22px 4px 10px', textTransform: 'uppercase', letterSpacing: '0.1em' } as const
const primaryBtn = { display: 'block', background: 'linear-gradient(135deg, #f26a3d, #e8572a)', color: 'white', borderRadius: '14px', padding: '15px 16px', fontSize: '16px', fontWeight: 700, textDecoration: 'none', textAlign: 'center', boxShadow: '0 8px 20px rgba(232,87,42,0.32)' } as const

function Plane({ color = 'white', size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function Row({ href, onClick, icon, title, hint, danger }: { href?: string; onClick?: () => void; icon: React.ReactNode; title: string; hint?: string; danger?: boolean }) {
  const inner = (
    <>
      <span style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: danger ? '#fdecea' : '#fdf0ea', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
        <span style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: danger ? '#c0392b' : '#1a1a2e' }}>{title}</span>
        {hint && <span style={{ display: 'block', fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>{hint}</span>}
      </span>
      <span style={{ color: '#c4c4c4', fontSize: '18px' }}>›</span>
    </>
  )
  const style = { display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', textDecoration: 'none', background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', fontFamily: 'inherit' } as const
  return href ? <Link href={href} style={style}>{inner}</Link> : <button onClick={onClick} style={style}>{inner}</button>
}

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
  const accent = hasAccess ? '#34d399' : '#f59e0b'

  return (
    <main style={{ minHeight: '100vh', backgroundColor: BG, colorScheme: 'light', fontFamily: 'sans-serif' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '340px', backgroundImage: 'linear-gradient(rgba(10,10,25,0.50), rgba(10,10,25,0.62)), url("/account-hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{t.back}</Link>
          <HeaderMenu />
        </div>
        <div style={{ textAlign: 'center', padding: '6px 24px 0', position: 'relative', zIndex: 1 }}>
          <img src="/logo.png" alt="Lifestyle & Travel" style={{ height: '64px', width: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.7)', margin: '0 auto 12px', display: 'block' }} />
          <p style={{ color: '#e8572a', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 6px', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{t.title}</p>
          <h1 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.55)', wordBreak: 'break-word' }}>
            {loading ? ' ' : `${t.hello}, ${name}`}
          </h1>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '90px', background: `linear-gradient(to bottom, transparent, ${BG})`, pointerEvents: 'none' }} />
      </div>

      <div style={{ maxWidth: '560px', margin: '-84px auto 0', padding: '0 16px 56px', position: 'relative', zIndex: 3 }}>
        {loading ? (
          <section style={{ ...card, textAlign: 'center', color: '#1a1a2e' }}>{t.loading}</section>
        ) : (
          <>
            {/* ACCESS PASS */}
            <section style={{ position: 'relative', borderRadius: '22px', background: 'linear-gradient(135deg, #1a1a2e 0%, #2b2b52 60%, #3a2f5c 100%)', boxShadow: '0 18px 40px rgba(26,26,46,0.35)', marginBottom: '8px', overflow: 'hidden', color: 'white' }}>
              <div style={{ padding: '20px 22px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#e8572a' }}>Lifestyle & Travel</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>{t.pass} <Plane color="rgba(255,255,255,0.8)" size={16} /></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'linear-gradient(135deg, #f26a3d, #e8572a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, flexShrink: 0, boxShadow: '0 0 0 3px rgba(255,255,255,0.15)' }}>{initial}</div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ ...label, color: 'rgba(255,255,255,0.5)' }}>{t.holder}</p>
                    <p style={{ fontSize: '15px', margin: 0, wordBreak: 'break-all', color: 'white' }}>{email}</p>
                  </div>
                </div>
              </div>

              {/* perforation */}
              <div style={{ position: 'relative', height: '0', borderTop: '2px dashed rgba(255,255,255,0.22)', margin: '0 22px' }}>
                <span style={{ position: 'absolute', left: '-34px', top: '-13px', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: BG }} />
                <span style={{ position: 'absolute', right: '-34px', top: '-13px', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: BG }} />
              </div>

              <div style={{ padding: '16px 22px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <p style={{ ...label, color: 'rgba(255,255,255,0.5)' }}>{t.status}</p>
                  <p style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: accent }}>{hasAccess ? `✓ ${t.active}` : t.inactive}</p>
                  <p style={{ fontSize: '12px', margin: '4px 0 0', color: 'rgba(255,255,255,0.6)' }}>{hasAccess ? t.activeNote : t.inactiveNote}</p>
                </div>
              </div>
            </section>

            {hasAccess ? (
              <>
                <h2 style={sectionTitle}>{t.blueprints}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {ROUTES.map((r, i) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      style={{ textDecoration: 'none', position: 'relative', aspectRatio: '1 / 1', borderRadius: '16px', overflow: 'hidden', backgroundImage: `linear-gradient(to top, rgba(10,10,25,0.78) 0%, rgba(10,10,25,0.15) 60%), url("${r.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', padding: '10px', boxShadow: '0 3px 10px rgba(26,26,46,0.14)' }}
                    >
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: 700, lineHeight: 1.2 }}>{t.routes[i]}</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div style={{ marginTop: '16px' }}>
                  <Link href="/pricing" style={primaryBtn}>{t.buy}</Link>
                </div>
                <div style={{ ...card, marginTop: '16px', borderLeft: '4px solid #e8572a' }}>
                  <p style={label}>{t.help}</p>
                  <h2 style={{ fontSize: '17px', color: '#1a1a2e', margin: '0 0 8px' }}>{t.noPurchaseTitle}</h2>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333333', margin: '0 0 14px' }}>{t.noPurchaseText}</p>
                  <a href={mailto} style={{ display: 'block', textAlign: 'center', border: '1.5px solid #e8572a', color: '#e8572a', borderRadius: '12px', padding: '12px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>{t.contact}</a>
                </div>
              </>
            )}

            {/* SETTINGS */}
            <h2 style={sectionTitle}>{t.settings}</h2>
            <div style={{ ...card, padding: '4px 0', marginBottom: '20px' }}>
              <Row
                href="/forgot-password"
                title={t.changePw}
                hint={t.changePwHint}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8572a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
              />
              <div style={{ borderTop: '1px solid #f0f0f0', margin: '0 16px' }} />
              <Row
                onClick={handleSignOut}
                title={t.logout}
                danger
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>}
              />
            </div>

            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', margin: 0 }}>
              <Link href="/terms" style={{ color: '#9ca3af' }}>{t.terms}</Link>
              {'  ·  '}
              <Link href="/privacy" style={{ color: '#9ca3af' }}>{t.privacy}</Link>
            </p>
          </>
        )}
      </div>
    </main>
  )
}
