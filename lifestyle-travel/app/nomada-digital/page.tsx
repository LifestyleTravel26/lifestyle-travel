'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function NomadaDigital() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)
  const { locale } = useLanguage()

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
    link: { color: '#2563eb', textDecoration: 'underline' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }

  const Link2 = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )

  const Section = ({ id, emoji, title, children }: any) => (
    <div style={{ border: '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>💻</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Visa Nómada Digital</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Vive en otro país mientras trabajas remoto</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Ingreso mínimo', '$2,000 – $3,500'], ['🕐', 'Duración', '1 – 3 años'], ['📊', 'Dificultad', 'Baja – Media']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#999', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* ENCABEZADO */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '16px' }}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530977875151-aae9742fde19?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>¿Qué es la Visa Nómada Digital?</h2>
          <Intro text="La Visa Nómada Digital es una forma legal de vivir en otro país mientras trabajas remoto para una empresa o clientes internacionales. Tu ingreso viene de fuera, pero tu vida diaria está en el país destino. Bien elegida, te da estabilidad legal, mejor calidad de vida y en algunos casos ventajas fiscales." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '10px' }}>
            A diferencia de una visa de trabajo tradicional, <strong>no requiere patrocinio de una empresa local</strong>. Está pensada para freelancers, emprendedores o empleados remotos con ingresos de fuera del país destino.
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>💡 Filtro rápido por ingreso mensual:</p>
            <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: '1.7' }}>
              • <strong>Menos de €2,500/mes:</strong> Georgia o Hungría<br />
              • <strong>€2,700 – €3,500/mes:</strong> España o Croacia<br />
              • <strong>Más de €3,500/mes:</strong> Portugal o Dubai
            </p>
          </div>
        </div>

        {/* REQUISITOS POR PAÍS */}
        <Section id="requisitos" emoji="📊" title="Requisitos Económicos por País">
          <Intro text="El factor clave para la aprobación es demostrar ingresos estables trabajando para empresas o clientes fuera del país de destino. Sin cupos, sin sorteos — solo ingresos comprobables." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['País', 'Ingreso mínimo/mes', 'Duración', 'Dificultad'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🇬🇪 Georgia', '~$2,000', '365 días', '⭐ Fácil', '#22c55e'],
                  ['🇭🇺 Hungría', '€2,000', '1 – 2 años', '⭐ Fácil', '#22c55e'],
                  ['🇭🇷 Croacia', '€2,300', '1 año', '⭐⭐ Media', '#f59e0b'],
                  ['🇦🇪 Dubai', '$3,500', '1 año', '⭐⭐ Media', '#f59e0b'],
                  ['🇪🇸 España', '€2,762', '1 – 3 años', '⭐⭐⭐ Media', '#f59e0b'],
                  ['🇵🇹 Portugal', '€3,480', '1 año renovable', '⭐⭐⭐ Alta', '#ef4444'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: r[4] as string, fontWeight: '600' }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="No elijas el país primero — elige según tu ingreso actual. Georgia (desde $2,000) y Hungría (desde €2,000) son los puntos de entrada más accesibles del blueprint. Una vez establecido con ingresos demostrables, puedes aplicar a Portugal o España." />
        </Section>

        {/* PROCESO APLICACION */}
        <Section id="aplicacion" emoji="🛂" title="Cómo Aplicar — 3 Tipos de Proceso">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="A diferencia de Working Holiday, en la Visa Nómada Digital no compites por cupos. La aprobación depende de cumplir los requisitos de ingresos y documentación. Sin sorteos, sin fechas de apertura — aplicas cuando estás listo." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { n: '1️⃣', title: 'Aplicación Online (Portal Oficial)', desc: 'Creas cuenta, subes documentos y pagas la tasa en el portal oficial. Todo digital.', examples: 'España, Croacia, Hungría', color: '#22c55e', portals: [['España', 'https://prie.comercio.gob.es'], ['Hungría', 'https://enterhungary.gov.hu'], ['Croacia', 'https://mup.gov.hr']] },
              { n: '2️⃣', title: 'Aplicación Consular', desc: 'Presentas documentos originales en el consulado del país de destino desde tu país de origen.', examples: 'Portugal (Visa D8), Italia, Grecia', color: '#f59e0b', portals: [['Portugal', 'https://pedidodevistos.mne.gov.pt']] },
              { n: '3️⃣', title: 'Desde Dentro del País', desc: 'Entras como turista y aplicas a la residencia desde dentro. Puedes abrir banco y preparar documentos localmente.', examples: 'España, Croacia, Georgia', color: '#3b82f6', portals: [['Georgia', 'https://migration.commission.ge'], ['Dubai', 'https://visitdubai.com']] },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px' }}>{item.n} {item.title}</p>
                <p style={{ fontSize: '13px', color: '#555', margin: '0 0 6px', lineHeight: '1.5' }}>{item.desc}</p>
                <p style={{ fontSize: '12px', color: '#888', margin: '0 0 6px' }}>Ejemplos: <strong>{item.examples}</strong></p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                  {item.portals.map((p, j) => (
                    <a key={j} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>{p[0]} →</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <HackBox text="En visas nómada digital no compites por cupos como en Working Holiday. El factor que determina la aprobación es demostrar ingresos remotos suficientes y estabilidad laboral. Prepara contratos, extractos bancarios y prueba de ingresos de los últimos 6 meses antes de iniciar la aplicación." />
        </Section>

        {/* TIEMPOS */}
        <Section id="tiempos" emoji="⏳" title="Tiempos de Aprobación por País">
          <Intro text="Los tiempos varían según el tipo de aplicación. Online es el más rápido (2-4 semanas). Consulado puede tardar 4-8 semanas. La clave es tener todos los documentos listos antes de aplicar." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['País', 'Tipo', 'Tiempo aprobación', 'Portal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🇬🇪 Georgia', 'Entrada directa', 'Inmediato', 'migration.commission.ge', 'https://migration.commission.ge'],
                  ['🇭🇺 Hungría', 'Consulado + residencia', '30 – 45 días', 'enterhungary.gov.hu', 'https://enterhungary.gov.hu'],
                  ['🇦🇪 Dubai', 'Online', '30 – 45 días', 'visitdubai.com', 'https://visitdubai.com'],
                  ['🇪🇸 España', 'Online / residencia', '20 – 45 días', 'prie.comercio.gob.es', 'https://prie.comercio.gob.es'],
                  ['🇭🇷 Croacia', 'Online / consulado', '30 – 60 días', 'mup.gov.hr', 'https://mup.gov.hr'],
                  ['🇵🇹 Portugal', 'Consulado (Visa D8)', '30 – 60 días', 'pedidodevistos.mne.gov.pt', 'https://pedidodevistos.mne.gov.pt'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[2]}</td>
                    <td style={T.td(i)}><Link2 text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Georgia es la única opción donde puedes estar legal desde el día 1 sin trámite previo — entras con pasaporte y tienes 365 días. Úsalo para construir historial de ingresos y luego aplicar a España o Portugal con documentación sólida." />
        </Section>

        {/* CHECKLIST */}
        <Section id="checklist" emoji="📋" title="Checklist de Documentos">
          <Intro text="El proceso va bien cuando preparas tres cosas antes de aplicar: prueba de ingresos remotos, seguro médico y antecedentes penales. La forma más limpia de aprobar es mostrar al menos 6 meses de ingresos estables." />
          {[
            ['Pasaporte vigente', 'Mínimo 12-18 meses de validez para cubrir todo el proceso'],
            ['Prueba de trabajo remoto', 'Contrato laboral con empresa extranjera o facturas de clientes internacionales'],
            ['Extractos bancarios (6 meses)', 'Demuestran ingresos estables por encima del mínimo requerido'],
            ['Seguro médico internacional', 'Cobertura válida durante toda la estancia (€300-900/año)'],
            ['Antecedentes penales apostillados', 'Del país de origen — puede tardar semanas, prepáralo primero'],
            ['Carta de la empresa o clientes', 'Confirma que puedes trabajar remotamente desde otro país'],
            ['Prueba de alojamiento', 'Contrato de alquiler, Airbnb o dirección en el país de destino'],
            ['Pago de tasa de visa', '€75 – €200 según el país'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <RedBox text="⚠️ Los antecedentes penales apostillados son el documento que más tiempo tarda. Empiézalo PRIMERO — puede tardar 2-4 semanas solo ese trámite." />
          <HackBox text="Capital de ejecución real = ingreso mínimo requerido + gastos iniciales de instalación. En la práctica muchos nómadas empiezan el proceso con €3,000-6,000 disponibles para cubrir los primeros 30-60 días mientras se establecen." />
        </Section>

        {/* COSTOS */}
        <Section id="costos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico privado', '€300 – €900/año', '✅ Sí'],
                  ['Tasa de aplicación de visa', '€75 – €200', '✅ Sí'],
                  ['Traducciones y apostillas', '€50 – €200', '✅ Sí'],
                  ['Antecedentes penales', '€20 – €80', '✅ Sí'],
                  ['Boleto de avión inicial', '€400 – €1,200', '✅ Sí'],
                  ['Alojamiento inicial', '€500 – €1,500', '✅ Primer mes'],
                  ['Capital recomendado total', '€3,000 – €6,000', '✅ Para arrancar bien'],
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
          <HackBox text="Las visas nómada digital normalmente exigen demostrar ingresos mínimos, pero eso no significa que el proceso sea barato. Muchos países también piden ahorros adicionales. Calcula: ingreso mínimo requerido + €1,500-2,000 de gastos iniciales = tu capital real de ejecución." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title="Opciones Bancarias">
          <Intro text="Para una Visa Nómada Digital abre primero Wise o Revolut antes de viajar. Te permite recibir dinero internacionalmente y pagar gastos inmediatos mientras completas la apertura de un banco local." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Banco', 'Tipo', 'País/Región', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Wise', 'Digital', 'Global', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Global', 'revolut.com', 'https://revolut.com'],
                  ['N26', 'Digital (EU IBAN)', 'Europa', 'n26.com', 'https://n26.com'],
                  ['Bunq', 'Digital', 'Europa', 'bunq.com', 'https://bunq.com'],
                  ['CaixaBank', 'Tradicional', 'España', 'caixabank.es', 'https://caixabank.es'],
                  ['Millennium BCP', 'Tradicional', 'Portugal', 'millenniumbcp.pt', 'https://millenniumbcp.pt'],
                  ['OTP Bank', 'Tradicional', 'Hungría', 'otpbank.hu', 'https://otpbank.hu'],
                  ['Bank of Georgia', 'Tradicional', 'Georgia', 'bankofgeorgia.ge', 'https://bankofgeorgia.ge'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link2 text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Abre Wise antes de viajar — te da IBAN europeo, permite recibir pagos en múltiples divisas y transferir internacionalmente barato. Es el banco puente perfecto mientras abres cuenta local en el país destino." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1652088241116-5faf85b6c6aa?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="Reserva hostel o Airbnb para las primeras 1-2 semanas. Busca habitación o apartamento permanente desde ahí. Muchos nómadas digitales encuentran vivienda a través de comunidades de expatriados antes que en portales oficiales." />
          <SubHead text="💰 Costos de Alojamiento (Estimación)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal', 'Precio Mensual'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[['Cuarto compartido', '$120 – $220', '$480 – $880'], ['Cuarto individual', '$250 – $450', '$1,000 – $1,800']].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            {[
              ['Airbnb', 'Temporal', 'Primeras semanas — base para buscar permanente', 'airbnb.com', 'https://airbnb.com'],
              ['Booking', 'Hostels económicos', 'Ideal para llegar sin compromisos', 'booking.com', 'https://booking.com'],
              ['Facebook Groups', 'Comunidad expats', 'Habitaciones y networking entre nómadas digitales', 'facebook.com', 'https://facebook.com'],
              ['Expat.com', 'Comunidad internacional', 'Vivienda y contactos locales en cada país', 'expat.com', 'https://expat.com'],
              ['Nomad List', 'Comunidad nómadas', 'Info de ciudades + comunidad de nómadas activos', 'nomadlist.com', 'https://nomadlist.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{r[0]} <span style={{ color: '#888', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
          <RedBox text="⚠️ REGLA DE ORO: CERO depósitos antes de visitar la propiedad. Aunque seas nómada digital con visa formal, las estafas de vivienda existen en todos los mercados. Verifica siempre al propietario antes de enviar dinero." />
          <HackBox text="Muchos nómadas digitales encuentran alojamiento a través de networking con otros expats. En ciudades con comunidad activa como Lisboa, Madrid o Tbilisi, las habitaciones se anuncian en grupos de Facebook o Slack antes que en portales. Únete a grupos de tu destino antes de volar." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="A diferencia de Working Holiday, en las visas nómada digital no compites por cupos. La aprobación depende de demostrar ingresos estables y documentación financiera clara. Sin fecha de apertura — aplicas cuando estás listo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1', 'Filtrar países según ingreso actual + elegir destino', '1-2 semanas'],
                  ['Fase 2', 'Verificar requisitos exactos + calcular capital necesario', '1 semana'],
                  ['Fase 3', 'Iniciar antecedentes penales apostillados (el más lento)', '2-4 semanas'],
                  ['Fase 4', 'Reunir extractos bancarios (6 meses) + contrato o facturas', '1 semana'],
                  ['Fase 5', 'Contratar seguro médico + crear cuenta en portal oficial', '1 semana'],
                  ['Fase 6', 'Enviar aplicación + pagar tasa de visa', 'Día de envío'],
                  ['Fase 7', 'Esperar aprobación + planificar viaje', '2 – 8 semanas'],
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
          <HackBox text="Empieza los antecedentes penales apostillados el día 1 — es el documento que más tarda (2-4 semanas). Mientras esperas, reúne extractos bancarios, contrato y seguro médico. Cuando lleguen los antecedentes, ya tienes todo listo para enviar la aplicación." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis y Contingencia">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1653745375567-c6741ec5fef8?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Robo / pérdida de pasaporte', 'Reportar a Policía + contactar Embajada/Consulado de tu país para documento temporal'],
              ['Problemas con visa o residencia', 'Consultar portal oficial de inmigración del país o oficina migratoria local'],
              ['Estafa de vivienda', 'No enviar depósitos sin ver la propiedad — reportar en la plataforma'],
              ['Problemas bancarios', 'Contactar banco inmediatamente para bloquear tarjeta o revisar movimientos'],
              ['Emergencias médicas', 'Contactar proveedor de seguro médico internacional — Europa: 112'],
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <BlueBox text="🔵 SOPORTE: Portal oficial de cada país + Embajada de tu país + seguro médico internacional. Guarda estos tres contactos desde el día 1 en el destino." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <Intro text="Comparativa de los destinos más populares para Visa Nómada Digital." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', '🇵🇹 Portugal', '🇪🇸 España', '🇬🇪 Georgia', '🇭🇺 Hungría'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Tipo', 'Visa D8', 'Visa Nómada', 'Visa-Free + IE', 'White Card'],
                  ['Duración', '1 – 2 años', '1 – 3 años', '365 días', '1 – 2 años'],
                  ['Ingreso mínimo', '€3,480/mes', '€2,762/mes', 'Sin requisito', '€2,000/mes'],
                  ['Sistema', 'Consulado', 'Online/Consulado', 'Entrada directa', 'Consulado'],
                  ['Impuestos', 'NHR posible', 'Régimen Beckham', '1% Small Business', 'Estándar'],
                  ['Tasa visa', '€75 – €180', '€80 – €120', 'Muy baja', '€80 – €100'],
                  ['Dificultad', 'Alta', 'Media', 'Baja', 'Fácil'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    {r.slice(1).map((v, j) => <td key={j} style={T.td(i)}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Estrategia inteligente: 1️⃣ Georgia para establecer base legal y fiscal (1% impuestos, sin requisito de ingreso mínimo). 2️⃣ Construir historial de ingresos remotos. 3️⃣ Aplicar a Portugal o España con 6 meses de extractos sólidos. Esa secuencia maximiza probabilidades de aprobación." />
        </Section>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>Te ayudamos a identificar tu mejor ruta como nómada digital.</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            📅 Agenda tu llamada de orientación
          </a>
        </div>

      </div>
    </main>
  )
}
