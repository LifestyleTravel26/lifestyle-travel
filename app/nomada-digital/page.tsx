export default function NomadaDigital() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ← ✈️ <span style={{ fontWeight: 'bold' }}>Lifestyle & Travel</span>
        </a>
      </div>

      <div style={{ backgroundColor: '#1a1a2e', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>💻</div>
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>
          Nómada Digital
        </h1>
      </div>

      <div style={{ padding: '48px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#e8572a', fontSize: '18px', fontWeight: 'bold' }}>
          Contenido próximamente
        </p>
      </div>
    </main>
  );
}
