'use client'
import { useState } from 'react'

export default function Georgia() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)

  const HackBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '8px', padding: '14px 16px', marginTop: '16px' }}>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
        <span style={{ color: '#e8572a', fontWeight: 'bold' }}>💡 Hack de Lifestyle & Travel: </span>{text}
      </p>
    </div>
  )

  const Intro = ({ text }: { text: string }) => (
    <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '16px', borderLeft: '3px solid #e8572a', paddingLeft: '12px' }}>{text}</p>
  )

  const SubHead = ({ text }: { text: string }) => (
    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e', margin: '20px 0 10px', borderBottom: '2px solid #f0f0f0', paddingBottom: '6px' }}>{text}</p>
  )

  const RedBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '14px', marginTop: '12px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#dc2626', fontWeight: '600', lineHeight: '1.6' }}>{text}</p>
    </div>
  )

  const BlueBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '12px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.6' }}>{text}</p>
    </div>
  )

  const T = {
    wrap: { overflowX: 'auto' as const, marginTop: '12px', borderRadius: '10px', border: '1px solid #e5e7eb' },
    table: { width: '100%', borderCollapse: 'collapse' as const, minWidth: '400px' },
    th: { backgroundColor: '#1e3a5f', color: 'white', padding: '10px 14px', textAlign: 'left' as const, fontSize: '13px', fontWeight: '700' as const, whiteSpace: 'nowrap' as const },
    td: (i: number) => ({ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', lineHeight: '1.4' }),
    link: { color: '#2563eb', textDecoration: 'underline' as const, cursor: 'pointer' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }

  const Link = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )

  const Section = ({ id, emoji, title, children, free = false }: any) => (
    <div style={{ border: free ? '2px solid #e8572a' : '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontWeight: '600', fontSize: '15px' }}>{emoji} {title}</span>
        <span style={{ fontSize: '16px', color: '#999' }}>{openSection === id ? '∧' : '∨'}</span>
      </button>
      {openSection === id && (
        <div style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #f5f5f5' }}>{children}</div>
      )}
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{
        position: 'relative',
        height: '55vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1258&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇬🇪</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Georgia</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Cáucaso · Work and Study</p>
          <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Fácil</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Capital recomendado', '$2,000 - $3,000'], ['🕐', 'Estancia visa-free', '365 días'], ['📊', 'Dificultad', 'Fácil']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#999', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      {/* INCLUDED */}
      <div style={{ margin: '0 20px 16px', backgroundColor: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '10px', fontSize: '15px' }}>Lo que incluye el Blueprint</h3>
        {[
          '365 días sin visa — sin entrevistas, sin cartas de aceptación, sin trámites previos',
          'Individual Entrepreneur + 1% de impuestos — el régimen fiscal más favorable para freelancers',
          'Cuenta bancaria en 24-48 horas solo con pasaporte — sin NIF ni representante fiscal',
          'Costo de vida entre los más bajos del blueprint — habitación desde $240/mes',
          'Comunidad de digital nomads activa en Tbilisi y Batumi',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span style={{ color: '#22c55e', fontSize: '16px', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.5' }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px' }}>

        {/* FREE */}
        <Section id="autoridad" emoji="🧭" title="Encabezado de Autoridad" free={true}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558352532-d30aee197dea?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Georgia es el destino más accesible del blueprint. 365 días sin visa, sin trámites previos, sin solvencia obligatoria. Entras con pasaporte y tienes un año para organizar tu actividad económica desde dentro del país. El registro como Individual Entrepreneur con 1% de impuestos es la joya del sistema." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>La diferencia clave vs Europa:</strong> No dependes de una visa o patrocinio antes de viajar. Entras primero y organizas tu actividad económica desde dentro del país sin un proceso migratorio largo.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Acelerador de puesta en marcha:</strong> registro como Individual Entrepreneur → Small Business Status (1% tax) → cuenta bancaria → primer ingreso. Todo en menos de 2 semanas.
          </p>
          <BlueBox text="💱 Conversión Georgia: 1 GEL ≈ $0.37 USD. $100 USD ≈ 270 GEL. Todos los precios locales en GEL con equivalente en USD." />
          <HackBox text="365 días visa-free es la gran ventaja de Georgia. Eso te compra tiempo para hacer lo importante sin ansiedad. Mucha gente usa las primeras semanas para registrarse como Individual Entrepreneur y activar el régimen fiscal del 1%. Esa decisión puede ahorrarte miles de dólares en impuestos." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto">
          <Intro text="Georgia tiene tres rutas económicas principales. Elige la que corresponde a tu situación antes de llegar. No necesitas elegir antes de viajar — puedes decidir durante los primeros días en Tbilisi." />

          <SubHead text="Ruta 1: Freelancer / Individual Entrepreneur (la más popular)" />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.7' }}>
              <strong>Para quién:</strong> Freelancers, trabajadores remotos, emprendedores digitales<br />
              <strong>Impuestos:</strong> Solo 1% sobre ingresos hasta ~$180,000/año<br />
              <strong>Registro:</strong> Public Service Hall — mismo día, ~20-50 GEL (€7-18)<br />
              <strong>Ventaja:</strong> Factura internacionalmente, sin reportes complejos, sin IVA
            </p>
          </div>

          <SubHead text="Ruta 2: Empleo local (con empresa georgiana)" />
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.7' }}>
              <strong>Para quién:</strong> Quienes buscan trabajo presencial en Tbilisi o Batumi<br />
              <strong>Proceso:</strong> El empleador tramita el Permiso de Actividad Laboral Especial<br />
              <strong>Resultado:</strong> Visa laboral D1 para formalizar residencia<br />
              <strong>Sectores:</strong> Hospitality, turismo, tech, retail
            </p>
          </div>

          <SubHead text="Ruta 3: Trabajo remoto (para empresa extranjera)" />
          <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fbbf24', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#92400e', lineHeight: '1.7' }}>
              <strong>Para quién:</strong> Quienes ya tienen trabajo remoto para empresa de otro país<br />
              <strong>Ventaja:</strong> Georgia no regula el trabajo remoto para empleadores extranjeros<br />
              <strong>Impuestos:</strong> Registrarse como Individual Entrepreneur y pagar 1%<br />
              <strong>Resultado:</strong> Máxima flexibilidad + mínimo impuesto
            </p>
          </div>

          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>💰 Capital recomendado:</strong> $2,000 – $3,000 USD total<br />
              <strong>📦 Desglose:</strong> Alojamiento primer mes ($400-700) + Gastos iniciales ($200-400) + Colchón operativo ($1,400-1,900)<br />
              <strong>✅ No hay solvencia obligatoria</strong> — es visa-free, no exigen demostrar fondos
            </p>
          </div>
          <HackBox text="La jugada en Georgia es simple: 365 días legales sin visa te dan tiempo para hacer lo importante. Registra Individual Entrepreneur en la primera semana, activa el 1% de impuestos y empieza a facturar internacionalmente. Un freelancer que gana $2,000/mes paga solo $20 de impuestos en Georgia vs $400-800 en Irlanda o España." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios / Recomendados">
          <Intro text="Georgia es el destino con menos gastos obligatorios del blueprint. Sin visa, sin solvencia obligatoria, sin representante fiscal. Los únicos costos son los que tú decides tener." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (USD)', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa de entrada', '$0', '✅ Gratis (visa-free)'],
                  ['Seguro médico internacional', '$60 – $120', '⚪ Muy recomendado'],
                  ['Registro Individual Entrepreneur', '$7 – $18 (20-50 GEL)', '⚪ Si trabajas como freelancer'],
                  ['Apertura cuenta bancaria', '$0 – $100', '⚪ Recomendado'],
                  ['Traducciones de documentos', '$30 – $100', '⚪ Según necesidad'],
                  ['Small Business Status (1% tax)', '$0', '⚪ Gratis — activas online'],
                  ['Capital recomendado total', '$2,000 – $3,000', '⚪ Recomendado para estabilidad'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="🔵 VENTAJA GEORGIA: Sin solvencia obligatoria, sin visa previa, sin representante fiscal. El registro como Individual Entrepreneur cuesta menos de $20. El 1% de impuestos es activable online sin costo. Georgia es el destino más barato para arrancar del blueprint completo." />
          <HackBox text="Georgia no exige solvencia obligatoria para entrar. Sin embargo, para establecerte cómodamente necesitas calcular alojamiento inicial + gastos básicos + capital operativo (~$1,000-1,500). Si llegas con $2,500-3,000 tendrás margen suficiente para los primeros 30-60 días mientras organizas tus ingresos." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En Georgia el proceso es el más simple del blueprint. Sin citas de semanas, sin documentos apostillados. El día que llegas puedes empezar a activar tu estatus económico." />
          <SubHead text="1. Individual Entrepreneur — Tu registro económico en Georgia" />
          {[
            ['Paso 1', 'Entrar a Georgia visa-free con pasaporte (365 días automáticos)', null],
            ['Paso 2', 'Ir al Public Service Hall con pasaporte — registro el mismo día (~20-50 GEL)', 'https://psh.gov.ge'],
            ['Paso 3', 'Activar Small Business Status (1% tax) en Revenue Service — sin costo', 'https://www.rs.ge'],
            ['Paso 4', 'Abrir cuenta bancaria (Bank of Georgia o TBC Bank) con pasaporte — 24-48 horas', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Residencia Temporal (si planeas quedarte largo plazo)" />
          {[
            ['Costo: 100-300 GEL ($35-100) — más rápido si pagas tarifa premium', null],
            ['Documentos: Pasaporte + registro Individual Entrepreneur o contrato de trabajo + domicilio', null],
            ['Portal oficial de migración de Georgia', 'https://migration.commission.ge'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="En Georgia el documento clave no es una visa, sino el registro como Individual Entrepreneur. Con ese registro + Small Business Status pagas solo 1% de impuestos y puedes facturar internacionalmente de forma legal. Mucha gente lo activa en los primeros 2-3 días después de llegar." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Georgia tiene la apertura bancaria más fácil del blueprint — solo necesitas pasaporte. Sin NIF, sin representante fiscal, sin depósito mínimo obligatorio. Bank of Georgia y TBC Bank son los más usados por expatriados." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Bank of Georgia', 'Tradicional', 'El más grande del país. Muy usado por expatriados y emprendedores. App excelente.', 'bankofgeorgia.ge', 'https://bankofgeorgia.ge'],
                  ['TBC Bank', 'Tradicional', 'Excelente banca digital. Apertura muy rápida. Popular entre digital nomads.', 'tbcbank.ge', 'https://tbcbank.ge'],
                  ['Liberty Bank', 'Tradicional', 'Amplia red de sucursales y cajeros en todo el país.', 'libertybank.ge', 'https://libertybank.ge'],
                  ['Wise', 'Digital', 'Ideal para transferencias internacionales y conversión de divisas.', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Apertura rápida desde el móvil. Pagos internacionales.', 'revolut.com', 'https://revolut.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Abre Bank of Georgia o TBC Bank en tus primeros días — solo necesitas pasaporte. Con cuenta bancaria local + Individual Entrepreneur puedes empezar a facturar internacionalmente y recibir pagos desde clientes en cualquier país del mundo." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales para tu proceso en Georgia. Revenue Service para impuestos, Public Service Hall para registro de negocio, Migration Commission para residencia." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revenue Service (rs.ge)', 'Impuestos y Small Business Status (1%)', 'Semana 1 — registrar actividad fiscal', 'rs.ge', 'https://www.rs.ge'],
                  ['Public Service Hall (psh.ge)', 'Registro como Individual Entrepreneur', 'Semana 1 — presencial con pasaporte', 'psh.gov.ge', 'https://psh.gov.ge'],
                  ['Migration Commission', 'Residencia temporal y estatus migratorio', 'Si planeas quedarte más de 365 días', 'migration.commission.ge', 'https://migration.commission.ge'],
                  ['Jobs.ge', 'Portal de empleo más grande de Georgia', 'Desde semana 1', 'jobs.ge', 'https://jobs.ge'],
                  ['HR.ge', 'Vacantes corporativas y administrativas', 'Desde semana 1', 'hr.ge', 'https://hr.ge'],
                  ['SS.ge', 'Clasificados — trabajo y vivienda', 'Desde semana 1', 'ss.ge', 'https://ss.ge'],
                  ['MyHome.ge', 'Portal inmobiliario #1 en Georgia', 'Semana 1 para vivienda', 'myhome.ge', 'https://www.myhome.ge'],
                  ['Expat.com', 'Comunidad de expatriados — empleo y networking', 'Desde semana 1', 'expat.com', 'https://expat.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="El Revenue Service (rs.ge) es tu portal más importante en Georgia. Ahí activas el Small Business Status (1% tax) que transforma tu situación fiscal. Sin este paso, pagas impuestos normales que pueden ser hasta 20%. Es gratis y se hace online." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697730182538-406cbc7789d4?q=80&w=722&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Georgia tiene uno de los mercados de alquiler más económicos del blueprint. Tbilisi es la capital y tiene más trabajo. Batumi es la ciudad costera, más turística y barata. Muchos digital nomads prefieren Tbilisi por su comunidad internacional." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal USD', 'Precio Mensual USD'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$60 – $90', '$240 – $360'],
                  ['Cuarto individual', '$110 – $160', '$440 – $640'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. Aunque Georgia es bastante seguro, también existen anuncios falsos en portales y redes sociales. Siempre visita el apartamento o verifica al propietario antes de enviar dinero." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['MyHome.ge', 'Portal #1 en Georgia', 'Alquileres en Tbilisi y Batumi — el más completo', 'myhome.ge', 'https://www.myhome.ge'],
                  ['SS.ge', 'Clasificados populares', 'Alquileres económicos y anuncios directos de propietarios', 'ss.ge', 'https://www.ss.ge'],
                  ['Place.ge', 'Portal inmobiliario', 'Muchas opciones en Tbilisi y Batumi', 'place.ge', 'https://www.place.ge'],
                  ['Airbnb', 'Alojamiento temporal', 'Primeras semanas mientras buscas permanente', 'airbnb.com', 'https://airbnb.com'],
                  ['Digital Nomads Tbilisi (Facebook)', 'Comunidad', 'Grupos donde se comparten alquileres y oportunidades', 'Facebook', 'https://facebook.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Tbilisi tiene la comunidad de digital nomads más activa del Cáucaso. Únete a grupos de Facebook 'Digital Nomads Tbilisi' y 'Expats in Georgia' desde antes de llegar. Ahí se publican habitaciones, oportunidades de trabajo y networking antes que en portales oficiales." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549466785-f5c1771646cc?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Georgia tiene dos opciones de ingresos: trabajo local (salarios bajos pero costo de vida muy bajo) o trabajo remoto/freelance (salarios internacionales con impuestos del 1%). La segunda opción es la más recomendada." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/mes USD', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$350 – $600', 'Jobs.ge / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$300 – $500', 'Jobs.ge / SS.ge'],
                  ['Hotels', 'Reception / Hotel Staff', '$400 – $700', 'Jobs.ge / LinkedIn'],
                  ['Retail', 'Sales Assistant', '$350 – $600', 'HR.ge / Jobs.ge'],
                  ['Delivery', 'Rider / Courier (Wolt)', '$500 – $900', 'Wolt / Glovo'],
                  ['Freelance / Remoto', 'Tu especialidad para clientes internacionales', '$1,000 – $5,000+', 'LinkedIn / Upwork / Fiverr'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: i === 5 ? '#166534' : 'inherit', fontWeight: i === 5 ? '700' : 'normal' }}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 ESTRATEGIA RECOMENDADA: Si puedes trabajar remotamente para clientes internacionales, Georgia es el paraíso fiscal. $2,000/mes remotos = $20 de impuestos. $2,000/mes en España = $400-600 de impuestos. La diferencia anual es de $4,500-7,000 USD que te quedas en el bolsillo." />
          <HackBox text="En Georgia muchas empresas valoran inglés básico, actitud y disponibilidad inmediata para trabajos locales. Pero la jugada maestra es combinar trabajo remoto para clientes internacionales + Individual Entrepreneur 1% tax. Eso maximiza ingresos y minimiza impuestos." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Los salarios locales en Georgia son bajos comparados con Europa, pero el costo de vida es proporcionalmente más bajo. Un freelancer con ingresos internacionales tiene el mayor poder adquisitivo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/mes USD', 'Impuesto (1% IE)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$350 – $600', '$3.5 – $6'],
                  ['Hotels', 'Reception / Hotel Staff', '$400 – $700', '$4 – $7'],
                  ['Delivery', 'Rider / Courier', '$500 – $900', '$5 – $9'],
                  ['Freelance Junior', 'Tu especialidad (remoto)', '$1,000 – $2,000', '$10 – $20'],
                  ['Freelance Senior', 'Tu especialidad (remoto)', '$2,000 – $5,000', '$20 – $50'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#22c55e', fontWeight: '700' }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 VENTAJA ÚNICA: La columna de impuestos muestra lo que pagas con Individual Entrepreneur (1%). Un freelancer que gana $2,000/mes paga $20 de impuestos. En Irlanda pagaría $400-800. En España $400-600. La diferencia anual es de $4,500-9,000 USD." />
          <HackBox text="Con $600/mes de salario local puedes vivir bien en Tbilisi — habitación ($300) + comida ($150) + transporte ($50) + extras ($100) = $600. Con trabajo remoto de $1,500+/mes tienes un nivel de vida excepcional en Georgia." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Georgia tiene el timeline más rápido del blueprint. Sin esperas de semanas para visas o citas. El proceso de activación económica puede completarse en menos de una semana." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Solo necesitas: pasaporte vigente + seguro médico + $2,500-3,000 de capital. Sin visa previa, sin trámites.', '1-2 semanas antes'],
                  ['Día 1-2', 'SIM card (Magti/Silknet) + Airbnb temporal + Explorar Tbilisi', 'Día 1-2'],
                  ['Día 2-5', 'Abrir cuenta bancaria (Bank of Georgia o TBC Bank) con pasaporte', 'Día 2-5'],
                  ['Día 3-7', 'Registro Individual Entrepreneur en Public Service Hall (mismo día, ~$15)', 'Día 3-7'],
                  ['Día 5-10', 'Activar Small Business Status 1% en Revenue Service (rs.ge, gratis)', 'Día 5-10'],
                  ['Semana 2', 'Buscar habitación permanente (MyHome.ge) + Primer ingreso', 'Semana 2'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold, color: '#e8572a', whiteSpace: 'nowrap' as const }}>{r[0]}</td>
                    <td style={{ ...T.td(i), lineHeight: '1.6' }}>{r[1]}</td>
                    <td style={{ ...T.td(i), fontWeight: '600', whiteSpace: 'nowrap' as const, color: '#166534' }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="El orden en Georgia es: Banco → Individual Entrepreneur → Small Business 1% → Primer ingreso. Todo en menos de 10 días. Sin esperar semanas de citas o aprobaciones. Es el país más rápido para activar un negocio legal de todos los que cubrimos." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Georgia es el destino con el tiempo más corto hasta el primer ingreso. Sin espera de 90 días como Malta, sin TIE como España. Si ya tienes clientes o trabajo remoto, puedes cobrar en la primera semana." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Entrada legal al país (visa-free)', 'Pasaporte válido', 'Acuerdo laboral o clientes freelance'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: Inmediato – 1 semana</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Acuerdo de trabajo o clientes confirmados', 'Cuenta bancaria activa (opcional pero recomendado)', 'Individual Entrepreneur registrado (para freelance)'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 1-3 semanas desde llegada</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>inmediato – 1 semana</strong><br />
              • Puedes cobrar tu primer ingreso en: <strong>1-3 semanas desde llegada</strong>
            </p>
          </div>
          <HackBox text="Georgia es uno de los países más fáciles para empezar. No hay sistema complejo como Europa. No necesitas visa, no hay permiso de trabajo complicado. Si ya tienes trabajo remoto o clientes freelance, puedes cobrar tu primer ingreso en menos de 2 semanas." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Georgia es un país bastante seguro. La mayoría de problemas se resuelven rápido con los canales correctos. Guarda estos contactos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
            ['Revenue Service', 'rs.ge — Impuestos y Small Business Status'],
            ['Public Service Hall', 'psh.gov.ge — Registro de negocio y trámites'],
            ['Migration Commission', 'migration.commission.ge — Estatus migratorio'],
            ['Comunidad L&T', 'Latinos en Georgia — ver grupos abajo'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', fontWeight: '700', flexShrink: 0, minWidth: '120px' }}>{item[0]}:</span>
              <span style={{ color: '#444', lineHeight: '1.5' }}>{item[1]}</span>
            </div>
          ))}
          <SubHead text="⚠️ Gestión de Crisis Comunes (Quick Fix)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Problema', 'Acción Inmediata', 'Contacto'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Georgia y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en plataforma (MyHome/SS.ge) y denunciar en Policía', 'Policía Georgia'],
                  ['Problemas migratorios', 'Consultar con Public Service Hall o Migration Commission', 'psh.gov.ge'],
                  ['Problemas bancarios', 'Contactar Bank of Georgia o TBC Bank para bloquear tarjeta', 'Tu banco'],
                  ['Enfermedad / Urgencia médica', 'Hospital privado o clínica internacional en Tbilisi', '112'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold, color: '#dc2626' }}>{r[0]}</td>
                    <td style={{ ...T.td(i), lineHeight: '1.5' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#f0fdf4', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Georgia</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Georgia — links próximamente
            </p>
          </div>
          <HackBox text="En Georgia muchas oportunidades aparecen primero en grupos de expatriados y comunidades de digital nomads. 'Digital Nomads Tbilisi' en Facebook es el grupo más activo. Úsalo para encontrar vivienda, trabajo y contactos profesionales antes que lleguen a portales oficiales." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697730152499-dfb766ea949d?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Georgia como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Georgia 🇬🇪'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Entrada', 'Visa-free hasta 365 días'],
                  ['Visa requerida', 'No (mayoría de pasaportes LATAM)'],
                  ['Permiso de trabajo', 'Individual Entrepreneur o empleador local'],
                  ['Impuestos (freelance)', '1% con Small Business Status'],
                  ['Solvencia obligatoria', 'No — solo recomendado $2,000-3,000'],
                  ['Capital recomendado', '$3,000 – $4,000 USD'],
                  ['Registro Individual Entrepreneur', '~$15 USD — mismo día en Public Service Hall'],
                  ['Apertura cuenta bancaria', '24-48 horas solo con pasaporte'],
                  ['Renta cuarto compartido', '$240 – $360/mes'],
                  ['Empleos locales más comunes', 'Hospitality, Retail, Delivery'],
                  ['Salario local entrada', '$350 – $700/mes'],
                  ['Salario freelance (remoto)', '$1,000 – $5,000+/mes'],
                  ['Tiempo hasta primer ingreso', '1-3 semanas desde llegada'],
                  ['Idioma', 'Georgiano (inglés en turismo y negocios)'],
                  ['Residencia temporal', '100-300 GEL ($35-100)'],
                  ['Nivel de dificultad', 'Fácil'],
                  ['Mejores ciudades', 'Tbilisi / Batumi'],
                  ['Ventaja única', '365 días visa-free + 1% de impuestos para freelancers'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>Armamos tu plan migratorio personalizado con Jimmy.</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            📅 Agenda tu llamada de orientación
          </a>
        </div>

        {/* FEEDBACK */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '16px' }}>
          <div style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>📝</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', marginBottom: '4px' }}>¿Algo desactualizado o una sugerencia?</h3>
          <p style={{ color: '#888', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>Tu feedback nos ayuda a mantener el blueprint al día.</p>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="Ej: el precio de la escuela X cambió, o me gustaría ver información sobre..."
            rows={3}
            style={{ width: '100%', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '12px', fontSize: '13px', resize: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', outline: 'none' }}
          />
          <button
            onClick={() => {
              if (!feedback.trim()) return
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Georgia:\n\n' + feedback)}`, '_blank')
              setFeedback('')
            }}
            style={{ marginTop: '10px', width: '100%', backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
            Enviar sugerencia
          </button>
        </div>

      </div>
    </main>
  )
}