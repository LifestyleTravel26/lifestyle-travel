import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f8f7f4',
      fontFamily: 'sans-serif'
    }}>
      {/* HEADER */}
      <div style={{
        backgroundColor: '#1a1a2e',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>✈️</span>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
            Lifestyle & Travel
          </span>
        </div>
        <button style={{
          backgroundColor: '#e8572a',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Comenzar
        </button>
      </div>

      {/* HERO */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '72px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          Tu Camino Para Trabajar en el Extranjero
        </h1>
        <p style={{
          color: '#ccc',
          fontSize: '16px',
          marginBottom: '24px'
        }}>
          Blueprints paso a paso para emigrar y empezar a ganar dinero rápidamente.
        </p>
        <button style={{
          backgroundColor: '#e8572a',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '16px 32px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          ¿No sabes por dónde comenzar? →
        </button>
      </div>

      {/* VISA CARDS */}
      <div style={{ padding: '32px 24px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 'bold',
          marginBottom: '8px'
        }}>
          Tipos de Visa
        </h2>
        <p style={{ color: '#666', marginBottom: '24px' }}>
          Cada uno con su blueprint completo
        </p>

        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { title: 'Visa Work and Study', countries: '9 Países', emoji: '🎓', href: '/work-and-study', img: 'https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Visa Work and Holidays', countries: '6 Países', emoji: '🌴', href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Nómada Digital', countries: '8 Países', emoji: '💻', href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Visa Au Pair', countries: '5 Países', emoji: '👨‍👩‍👧', href: '/au-pair', img: 'https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Pet Sitting', countries: '4 Países', emoji: '🐾', href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Voluntariado Internacional', countries: 'Global', emoji: '🌍', href: '/voluntariado', img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1200&auto=format&fit=crop' },
          ].map((visa, i) => (
            <Link
              key={i}
              href={visa.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url("${visa.img}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '16px',
                padding: '28px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                minHeight: '80px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{visa.emoji}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>{visa.title}</span>
                </div>
                <span style={{
                  backgroundColor: '#e8572a',
                  color: 'white',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap' as const,
                }}>
                  {visa.countries}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}