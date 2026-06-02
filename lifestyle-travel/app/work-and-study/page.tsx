import Link from 'next/link'
import LanguageSwitcher from '../components/LanguageSwitcher'

const countries = [
  {
    name: 'Irlanda',
    flag: '🇮🇪',
    code: 'IE',
    difficulty: 'Fácil',
    difficultyColor: '#22c55e',
    href: '/work-and-study/irlanda',
    img: 'https://images.unsplash.com/photo-1570875450638-044bca38ec92?q=80&w=1234&auto=format&fit=crop',
  },
  {
    name: 'Malta',
    flag: '🇲🇹',
    code: 'MT',
    difficulty: 'Fácil',
    difficultyColor: '#22c55e',
    href: '/work-and-study/malta',
    img: 'https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?q=80&w=1170&auto=format&fit=crop',
  },
  {
    name: 'Dubái',
    flag: '🇦🇪',
    code: 'AE',
    difficulty: 'Medio',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/dubai',
    img: 'https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=1177&auto=format&fit=crop',
  },
  {
    name: 'España',
    flag: '🇪🇸',
    code: 'ES',
    difficulty: 'Medio',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/espana',
    img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1170&auto=format&fit=crop',
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    code: 'PT',
    difficulty: 'Medio',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/portugal',
    img: 'https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?q=80&w=1170&auto=format&fit=crop',
  },
  {
    name: 'Georgia',
    flag: '🇬🇪',
    code: 'GE',
    difficulty: 'Fácil',
    difficultyColor: '#22c55e',
    href: '/work-and-study/georgia',
    img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1258&auto=format&fit=crop',
  },
  {
    name: 'Canadá',
    flag: '🇨🇦',
    code: 'CA',
    difficulty: 'Alto',
    difficultyColor: '#ef4444',
    href: '/work-and-study/canada',
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=765&auto=format&fit=crop',
  },
  {
    name: 'Nueva Zelanda',
    flag: '🇳🇿',
    code: 'NZ',
    difficulty: 'Medio',
    difficultyColor: '#f59e0b',
    href: '/work-and-study/nueva-zelanda',
    img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1171&auto=format&fit=crop',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    code: 'AU',
    difficulty: 'Alto',
    difficultyColor: '#ef4444',
    href: '/work-and-study/australia',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop',
  },
]

export default function WorkAndStudy() {
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
        {/* NAV */}
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>

        {/* HERO CONTENT */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🎓</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Visa Work and Study</h1>
          <p style={{ color: '#ddd', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>9 países con blueprint completo paso a paso</p>
        </div>

        {/* BOTTOM FADE */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* COUNTRIES */}
      <div style={{ padding: '24px 20px 40px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Elige tu destino</h2>
        <p style={{ color: '#666', fontSize: '13px', marginBottom: '16px' }}>Cada país con su guía migratoria detallada</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {countries.map((country) => (
            <Link key={country.href} href={country.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.25) 100%), url("${country.img}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '14px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                minHeight: '110px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{country.flag}</span>
                  <span style={{ fontWeight: '700', fontSize: '16px', color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{country.name}</span>
                </div>
                <span style={{
                  backgroundColor: country.difficultyColor,
                  color: 'white',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap' as const,
                }}>
                  {country.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
