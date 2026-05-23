import Link from 'next/link';

const visaCards = [
  {
    title: 'Visa Work and Study',
    emoji: '🎓',
    href: '/work-and-study',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=1200&auto=format&fit=crop")',
  },
  {
    title: 'Visa Work and Holidays',
    emoji: '🌴',
    href: '/work-and-holidays',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop")',
  },
  {
    title: 'Nómada Digital',
    emoji: '💻',
    href: '/nomada-digital',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop")',
  },
  {
    title: 'Visa Au Pair',
    emoji: '👨‍👩‍👧',
    href: '/au-pair',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=1200&auto=format&fit=crop")',
  },
  {
    title: 'Pet Sitting',
    emoji: '🐾',
    href: '/pet-sitting',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1200&auto=format&fit=crop")',
  },
  {
    title: 'Voluntariado Internacional',
    emoji: '🌍',
    href: '/voluntariado',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1200&auto=format&fit=crop")',
  },
] as const;

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f7f4',
        fontFamily: 'sans-serif',
      }}
    >
      {/* HERO (full screen with nav overlay) */}
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
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

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '48px 24px',
          }}
        >
          <h1
            style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Tu Camino Para Trabajar en el Extranjero
          </h1>
          <p
            style={{
              color: '#ccc',
              fontSize: '16px',
              marginBottom: '24px',
              maxWidth: '520px',
            }}
          >
            Blueprints paso a paso para emigrar y empezar a ganar dinero rápidamente.
          </p>
          <button
            style={{
              backgroundColor: '#e8572a',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 32px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            ¿No sabes por dónde comenzar? →
          </button>
        </div>
      </div>

      {/* VISA CARDS */}
      <div style={{ padding: '32px 24px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}
        >
          Tipos de Visa
        </h2>
        <p style={{ color: '#666', marginBottom: '16px' }}>
          Cada uno con su blueprint completo
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          {visaCards.map((visa) => (
            <Link
              key={visa.href}
              href={visa.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  backgroundImage: visa.backgroundImage,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '16px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ fontSize: '20px', lineHeight: 1, marginBottom: '6px' }}>
                  {visa.emoji}
                </span>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: 'white',
                    lineHeight: 1.3,
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                  }}
                >
                  {visa.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
