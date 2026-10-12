'use client'
import Link from 'next/link';
import HeaderMenu from './components/HeaderMenu';
import { useLanguage } from './context/LanguageContext';

const translations = {
  es: {
    hero_title: 'Tu Camino Para Trabajar en el Extranjero',
    hero_sub: 'Blueprints paso a paso para emigrar y empezar a ganar dinero rápidamente.',
    hero_btn: '¿No sabes por dónde comenzar? →',
    section_title: '¿Cómo querés vivir en el extranjero?',
    section_sub: 'Elegí tu ruta y descubrí el blueprint completo',
    visas: [
      { title: 'Visa Work and Study' },
      { title: 'Visa Work and Holidays' },
      { title: 'Nómada Digital' },
      { title: 'Visa Au Pair' },
      { title: 'Pet Sitting' },
      { title: 'Voluntariado Internacional' },
    ],
  },
  pt: {
    hero_title: 'Seu Caminho Para Trabalhar no Exterior',
    hero_sub: 'Blueprints passo a passo para emigrar e começar a ganhar dinheiro rapidamente.',
    hero_btn: 'Não sabe por onde começar? →',
    section_title: 'Como você quer viver no exterior?',
    section_sub: 'Escolha sua rota e descubra o blueprint completo',
    visas: [
      { title: 'Visto Work and Study' },
      { title: 'Visto Work and Holidays' },
      { title: 'Nômade Digital' },
      { title: 'Visto Au Pair' },
      { title: 'Pet Sitting' },
      { title: 'Voluntariado Internacional' },
    ],
  },
  en: {
    hero_title: 'Your Path to Working Abroad',
    hero_sub: 'Step-by-step blueprints to emigrate and start earning money fast.',
    hero_btn: "Don't know where to start? →",
    section_title: 'How do you want to live abroad?',
    section_sub: 'Choose your route and discover the complete blueprint',
    visas: [
      { title: 'Work and Study Visa' },
      { title: 'Work and Holidays Visa' },
      { title: 'Digital Nomad' },
      { title: 'Au Pair Visa' },
      { title: 'Pet Sitting' },
      { title: 'International Volunteering' },
    ],
  },
}

const visaData = [
  { icon: 'study', href: '/work-and-study', img: 'https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=700&auto=format&fit=crop' },
  { icon: 'sun', href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=700&auto=format&fit=crop' },
  { icon: 'laptop', href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=700&auto=format&fit=crop' },
  { icon: 'users', href: '/au-pair', img: 'https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=700&auto=format&fit=crop' },
  { icon: 'paw', href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=700&auto=format&fit=crop' },
  { icon: 'globe', href: '/voluntariado', img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=700&auto=format&fit=crop' },
]


const ICON_PATHS: Record<string, React.ReactNode> = {
  study: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  laptop: (
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  paw: (
    <>
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
}

export default function Home() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>✈️</span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Lifestyle & Travel</span>
          </div>
          <HeaderMenu />
          </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px 24px' }}>
          <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.3' }}>{t.hero_title}</h1>
          <p style={{ color: '#ddd', fontSize: '14px', marginBottom: '20px', maxWidth: '400px' }}>{t.hero_sub}</p>
          <Link href="/quiz" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 28px', fontSize: '15px', fontWeight: 'bold', width: '100%', maxWidth: '360px', textDecoration: 'none', display: 'block', textAlign: 'center' }}>{t.hero_btn}</Link>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>
      <div style={{ padding: '16px 16px 32px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a2e' }}>{t.section_title}</h2>
        <p style={{ color: '#333333', marginBottom: '14px', fontSize: '13px' }}>{t.section_sub}</p>
        <style>{`
          .route-card { transition: transform 0.18s ease, box-shadow 0.18s ease; }
          .route-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(26,26,46,0.22); }
          .route-card:active { transform: scale(0.97); }
        `}</style>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {visaData.map((visa, index) => (
            <Link key={visa.href} href={visa.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="route-card"
                style={{
                  position: 'relative',
                  backgroundImage: `linear-gradient(to top, rgba(10,10,25,0.80) 0%, rgba(10,10,25,0.22) 52%, rgba(10,10,25,0.05) 100%), url("${visa.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '18px',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  padding: '12px',
                  boxShadow: '0 2px 10px rgba(26,26,46,0.12)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {ICON_PATHS[visa.icon]}
                  </svg>
                </span>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: 'white', lineHeight: '1.25', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.visas[index].title}</span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: '#e8572a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
