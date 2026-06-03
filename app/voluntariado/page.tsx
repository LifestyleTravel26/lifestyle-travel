export default function Voluntariado() {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'sans-serif' }}>
        
        <div style={{ backgroundColor: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← ✈️ <span style={{ fontWeight: 'bold' }}>Lifestyle & Travel</span>
          </a>
        </div>
  
        <div style={{ backgroundColor: '#1a1a2e', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🌍</div>
          <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>
            Voluntariado Internacional
          </h1>
          <p style={{ color: '#ccc', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
            Elimina alojamiento y comida mientras viajas el mundo.
          </p>
        </div>
  
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
  
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>🎯 Programas</h2>
          
          {[
            { nombre: 'Worldpackers', perfil: 'Latinos, Europeos, Asiáticos', costo: '$49/año', visa: 'Turista', link: 'https://www.worldpackers.com' },
            { nombre: 'WWOOF', perfil: 'Latinos, Europeos, Asiáticos', costo: '€15-40', visa: 'Turista', link: 'https://wwoof.net' },
            { nombre: 'ESC European Solidarity Corps', perfil: 'Europeos 18-30 años', costo: '€0 GRATIS', visa: 'Turista/Residencia', link: 'https://youth.europa.eu' },
            { nombre: 'UN Volunteers', perfil: 'Profesionales cualquier país', costo: '€0 GRATIS', visa: 'Visa Diplomática', link: 'https://www.unv.org' },
            { nombre: 'AIESEC', perfil: 'Asiáticos alta restricción', costo: '$150-350', visa: 'Visa Intercambio', link: 'https://aiesec.org' },
          ].map((p, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{p.nombre}</span>
                <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: 'bold' }}>{p.costo}</span>
              </div>
              <p style={{ color: '#1a1a2e', fontSize: '13px', marginBottom: '8px' }}>👥 {p.perfil}</p>
              <p style={{ color: '#1a1a2e', fontSize: '13px' }}>📋 {p.visa}</p>
              <a href={p.link} target="_blank" style={{ display: 'inline-block', marginTop: '10px', color: '#e8572a', fontSize: '13px', fontWeight: 'bold', textDecoration: 'none' }}>Ver programa →</a>
            </div>
          ))}
  
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '24px 0 16px' }}>🌎 Tu País</h2>
          
          {[
            { pais: '🇦🇷 Argentina', categoria: 'Premium', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers', color: '#22c55e' },
            { pais: '🇨🇱 Chile', categoria: 'Premium', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers', color: '#22c55e' },
            { pais: '🇨🇷 Costa Rica', categoria: 'Premium', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers', color: '#22c55e' },
            { pais: '🇧🇷 Brasil', categoria: 'Premium', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers', color: '#22c55e' },
            { pais: '🇨🇴 Colombia', categoria: 'Medio', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers + $1,500 USD', color: '#f59e0b' },
            { pais: '🇵🇪 Perú', categoria: 'Medio', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers + $1,500 USD', color: '#f59e0b' },
            { pais: '🇲🇽 México', categoria: 'Medio', europa: 'LIBRE (ETIAS €20)', recomendacion: 'Worldpackers + $1,500 USD', color: '#f59e0b' },
            { pais: '🇪🇨 Ecuador', categoria: 'Restricción Alta', europa: 'Visa Schengen Obligatoria', recomendacion: 'UN Volunteers o AIESEC', color: '#ef4444' },
            { pais: '🇧🇴 Bolivia', categoria: 'Restricción Alta', europa: 'Visa Schengen Obligatoria', recomendacion: 'UN Volunteers o AIESEC', color: '#ef4444' },
            { pais: '🇨🇺 Cuba', categoria: 'Restricción Alta', europa: 'Visa Schengen Obligatoria', recomendacion: 'UN Volunteers o AIESEC', color: '#ef4444' },
          ].map((p, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '14px', marginBottom: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{p.pais}</span>
                <span style={{ backgroundColor: p.color, color: 'white', borderRadius: '20px', padding: '3px 10px', fontSize: '11px', fontWeight: 'bold' }}>{p.categoria}</span>
              </div>
              <p style={{ color: '#1a1a2e', fontSize: '13px', marginBottom: '4px' }}>✈️ Europa: {p.europa}</p>
              <p style={{ color: '#e8572a', fontSize: '13px', fontWeight: 'bold' }}>👉 {p.recomendacion}</p>
            </div>
          ))}
  
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '24px 0 16px' }}>💡 Hacks Exclusivos</h2>
          
          {[
            { titulo: 'Hack #1: Worldpackers por $49/año', contenido: 'Una semana de alojamiento gratis ya cubre la membresía. ROI brutal.' },
            { titulo: 'Hack #2: ESC para europeos es €0', contenido: 'Financia el 100% de vuelos, alojamiento, comida y seguro para europeos 18-30.' },
            { titulo: 'Hack #3: UN Volunteers para profesionales', contenido: 'Con título universitario, paga subsidio mensual, seguro global y vuelos. Edad 18-80.' },
            { titulo: 'Hack #7: ETIAS obligatorio desde 2026', contenido: 'Latinos sin visa Schengen deben tramitar ETIAS (€20, dura 3 años) ANTES de volar a Europa.' },
            { titulo: 'Hack #12: Combina voluntariado con trabajo remoto', contenido: 'Alojamiento gratis + trabajar en Upwork o Fiverr = máximo ahorro sin violar tu visa.' },
          ].map((h, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', marginBottom: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderLeft: '4px solid #e8572a' }}>
              <p style={{ fontWeight: 'bold', color: '#e8572a', marginBottom: '6px', fontSize: '14px' }}>{h.titulo}</p>
              <p style={{ color: '#1a1a2e', fontSize: '13px', lineHeight: '1.5' }}>{h.contenido}</p>
            </div>
          ))}
  
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '24px 0 16px' }}>💰 Costos</h2>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {[
              { concepto: 'Membresía Worldpackers', precio: '$49/año' },
              { concepto: 'Membresía WWOOF', precio: '€30/año' },
              { concepto: 'ETIAS permiso Europa', precio: '€20' },
              { concepto: 'Visa Schengen restricción alta', precio: '€90' },
              { concepto: 'Seguro médico anual', precio: '€200' },
              { concepto: 'Capital inicial recomendado', precio: '$2,000 USD' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 5 ? '1px solid #f0f0f0' : 'none' }}>
                <span style={{ color: '#1a1a2e', fontSize: '14px' }}>{c.concepto}</span>
                <span style={{ fontWeight: 'bold', color: '#e8572a', fontSize: '14px' }}>{c.precio}</span>
              </div>
            ))}
          </div>
  
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '24px 0 16px' }}>✅ Checklist</h2>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {[
              'Pasaporte vigente 12+ meses',
              'ETIAS o visa Schengen si aplica',
              'Membresía Worldpackers o WWOOF',
              'Perfil completo fotos y video',
              'Seguro médico internacional',
              'Pasaje de regreso',
              'Capital mínimo $2,000 USD',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: i < 6 ? '1px solid #f0f0f0' : 'none' }}>
                <span style={{ color: '#22c55e', fontSize: '18px' }}>✓</span>
                <span style={{ color: '#1a1a2e', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }