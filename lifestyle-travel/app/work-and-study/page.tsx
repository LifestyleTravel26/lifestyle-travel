import Link from 'next/link';

const DIFFICULTY_COLORS: Record<string, string> = {
  Fácil: '#22c55e',
  Medio: '#f59e0b',
};

const countries = [
  { name: 'Irlanda', flag: '🇮🇪', difficulty: 'Fácil', slug: 'irlanda' },
  { name: 'Malta', flag: '🇲🇹', difficulty: 'Fácil', slug: 'malta' },
  { name: 'Dubai', flag: '🇦🇪', difficulty: 'Medio', slug: 'dubai' },
  { name: 'España', flag: '🇪🇸', difficulty: 'Medio', slug: 'espana' },
  { name: 'Portugal', flag: '🇵🇹', difficulty: 'Fácil', slug: 'portugal' },
  { name: 'Canadá', flag: '🇨🇦', difficulty: 'Medio', slug: 'canada' },
  { name: 'Georgia', flag: '🇬🇪', difficulty: 'Fácil', slug: 'georgia' },
  { name: 'Nueva Zelanda', flag: '🇳🇿', difficulty: 'Medio', slug: 'nueva-zelanda' },
  { name: 'Australia', flag: '🇦🇺', difficulty: 'Medio', slug: 'australia' },
] as const;

export default function WorkAndStudy() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'sans-serif' }}>
      <div
        style={{
          backgroundColor: '#1a1a2e',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          ← ✈️ <span style={{ fontWeight: 'bold' }}>Lifestyle & Travel</span>
        </Link>
      </div>

      <div
        style={{
          backgroundColor: '#1a1a2e',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎓</div>
        <h1
          style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '12px',
          }}
        >
          Visa Work and Study
        </h1>
        <p
          style={{
            color: '#ccc',
            fontSize: '15px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          9 países con blueprint completo paso a paso
        </p>
      </div>

      <div style={{ padding: '32px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Elige tu destino
        </h2>
        <p style={{ color: '#666', marginBottom: '24px' }}>
          Cada país con su guía migratoria detallada
        </p>

        <div style={{ display: 'grid', gap: '16px' }}>
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/work-and-study/${country.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{country.flag}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{country.name}</span>
                </div>
                <span
                  style={{
                    backgroundColor: DIFFICULTY_COLORS[country.difficulty],
                    color: 'white',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {country.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
