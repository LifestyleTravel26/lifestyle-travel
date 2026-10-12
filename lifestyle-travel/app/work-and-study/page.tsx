'use client'
import Link from 'next/link'
import HeaderMenu from '../components/HeaderMenu'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  es: {
    title: 'Visa Work and Study',
    subtitle: '10 países con blueprint completo paso a paso',
    section_title: 'Elige tu destino',
    section_sub: 'Cada país con su guía migratoria detallada',
    countries: [
      { name: 'Irlanda', difficulty: 'Fácil' },
      { name: 'Malta', difficulty: 'Fácil' },
      { name: 'Dubái', difficulty: 'Medio' },
      { name: 'España', difficulty: 'Medio' },
      { name: 'Italia', difficulty: 'Media' },
      { name: 'Portugal', difficulty: 'Medio' },
      { name: 'Georgia', difficulty: 'Fácil' },
      { name: 'Canadá', difficulty: 'Alto' },
      { name: 'Nueva Zelanda', difficulty: 'Medio' },
      { name: 'Australia', difficulty: 'Alto' },
    ],
  },
  pt: {
    title: 'Visto Work and Study',
    subtitle: '10 países com blueprint completo passo a passo',
    section_title: 'Escolha seu destino',
    section_sub: 'Cada país com seu guia migratório detalhado',
    countries: [
      { name: 'Irlanda', difficulty: 'Fácil' },
      { name: 'Malta', difficulty: 'Fácil' },
      { name: 'Dubai', difficulty: 'Médio' },
      { name: 'Espanha', difficulty: 'Médio' },
      { name: 'Itália', difficulty: 'Média' },
      { name: 'Portugal', difficulty: 'Médio' },
      { name: 'Geórgia', difficulty: 'Fácil' },
      { name: 'Canadá', difficulty: 'Alto' },
      { name: 'Nova Zelândia', difficulty: 'Médio' },
      { name: 'Austrália', difficulty: 'Alto' },
    ],
  },
  en: {
    title: 'Work and Study Visa',
    subtitle: '10 countries with complete step-by-step blueprint',
    section_title: 'Choose your destination',
    section_sub: 'Each country with its detailed migration guide',
    countries: [
      { name: 'Ireland', difficulty: 'Easy' },
      { name: 'Malta', difficulty: 'Easy' },
      { name: 'Dubai', difficulty: 'Medium' },
      { name: 'Spain', difficulty: 'Medium' },
      { name: 'Italy', difficulty: 'Medium' },
      { name: 'Portugal', difficulty: 'Medium' },
      { name: 'Georgia', difficulty: 'Easy' },
      { name: 'Canada', difficulty: 'High' },
      { name: 'New Zealand', difficulty: 'Medium' },
      { name: 'Australia', difficulty: 'High' },
    ],
  },
}

const countryData = [
  {
    flag: '🇮🇪',
    difficultyColor: '#22c55e',
    href: '/work-and-study/irlanda',
    img: 'https://images.unsplash.com/photo-1570875450638-044bca38ec92?q=80&w=1234&auto=format&fit=crop',
  },
  {
    flag: '🇲🇹',
    difficultyColor: '#22c55e',
    href: '/work-and-study/malta',
    img: 'https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?q=80&w=1170&auto=format&fit=crop',
  },
  {
    flag: '🇦🇪',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/dubai',
    img: 'https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=1177&auto=format&fit=crop',
  },
  {
    flag: '🇪🇸',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/espana',
    img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1170&auto=format&fit=crop',
  },
  {
    flag: '🇮🇹',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/italia',
    img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1170&auto=format&fit=crop',
  },
  {
    flag: '🇵🇹',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/portugal',
    img: 'https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?q=80&w=1170&auto=format&fit=crop',
  },
  {
    flag: '🇬🇪',
    difficultyColor: '#22c55e',
    href: '/work-and-study/georgia',
    img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1258&auto=format&fit=crop',
  },
  {
    flag: '🇨🇦',
    difficultyColor: '#ef4444',
    href: '/work-and-study/canada',
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=765&auto=format&fit=crop',
  },
  {
    flag: '🇳🇿',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/nueva-zelanda',
    img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1171&auto=format&fit=crop',
  },
  {
    flag: '🇦🇺',
    difficultyColor: '#ef4444',
    href: '/work-and-study/australia',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop',
  },
]

export default function WorkAndStudy() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{
        position: 'relative',
        height: '55vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>←</span>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
          </Link>
          <HeaderMenu />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🎓</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.title}</h1>
          <p style={{ color: '#ddd', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.subtitle}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* COUNTRIES */}
      <div style={{ padding: '24px 20px 40px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a2e' }}>{t.section_title}</h2>
        <p style={{ color: '#333333', fontSize: '13px', marginBottom: '16px' }}>{t.section_sub}</p>

        <style>{`
          .country-card { transition: transform 0.18s ease, box-shadow 0.18s ease; }
          .country-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(26,26,46,0.22); }
          .country-card:active { transform: scale(0.98); }
        `}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {countryData.map((country, index) => (
            <Link key={country.href} href={country.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="country-card"
                style={{
                  position: 'relative',
                  backgroundImage: `linear-gradient(to top, rgba(10,10,25,0.62) 0%, rgba(10,10,25,0.18) 34%, rgba(10,10,25,0) 58%), url("${country.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '18px',
                  aspectRatio: '16 / 9',
                  minHeight: '170px',
                  boxSizing: 'border-box',
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(26,26,46,0.10)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.22)',
                      border: '1px solid rgba(255,255,255,0.45)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      lineHeight: 1,
                    }}
                  >
                    {country.flag}
                  </span>
                  <span style={{
                    backgroundColor: country.difficultyColor,
                    color: 'white',
                    borderRadius: '20px',
                    padding: '4px 14px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap' as const,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                  }}>
                    {t.countries[index].difficulty}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '21px', color: 'white', lineHeight: 1.2, textShadow: '0 1px 5px rgba(0,0,0,0.55)' }}>
                    {t.countries[index].name}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: '#e8572a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
  )
}
