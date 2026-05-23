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
        background: 'linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200) center/cover',
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
            { title: 'Visa Work and Study', countries: '9 Países', emoji: '🎓', href: '/work-and-study', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800' },
            { title: 'Visa Work and Holidays', countries: '6 Países', emoji: '🌴', href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800' },
            { title: 'Nómada Digital', countries: '8 Países', emoji: '💻', href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800' },
            { title: 'Visa Au Pair', countries: '5 Países', emoji: '👨‍👩‍👧', href: '/au-pair', img: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800' },
            { title: 'Pet Sitting', countries: '4 Países', emoji: '🐾', href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800' },
            { title: 'Voluntariado Internacional', countries: 'Global', emoji: '🌍', href: '/voluntariado', img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800' },
          ].map((visa, i) => (
            <Link
              key={i}
              href={visa.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${visa.img}) center/cover`,
                borderRadius: '16px',
                padding: '24px 20px',
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