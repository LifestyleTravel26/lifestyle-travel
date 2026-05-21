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
        <Link
          href="/signup"
          style={{
            backgroundColor: '#e8572a',
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Comenzar
        </Link>
      </div>

      {/* HERO */}
      <div style={{
        backgroundColor: '#1a1a2e',
        padding: '48px 24px',
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
            { title: 'Visa Work and Study', countries: '9 Países', emoji: '🎓', href: '/work-and-study' },
            { title: 'Visa Work and Holidays', countries: '6 Países', emoji: '🌴', href: '/work-and-holidays' },
            { title: 'Nómada Digital', countries: '8 Países', emoji: '💻', href: '/nomada-digital' },
            { title: 'Visa Au Pair', countries: '5 Países', emoji: '👨‍👩‍👧', href: '/au-pair' },
            { title: 'Pet Sitting', countries: '4 Países', emoji: '🐾', href: '/pet-sitting' },
            { title: 'Voluntariado Internacional', countries: 'Global', emoji: '🌍', href: '/voluntariado' },
          ].map((visa, i) => (
            <Link
              key={i}
              href={visa.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{visa.emoji}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{visa.title}</span>
                </div>
                <span style={{
                  backgroundColor: '#e8572a',
                  color: 'white',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
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