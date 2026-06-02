'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function AuPair() {
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

  const ExtLink = ({ text, url }: { text: string; url: string }) => (
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=687&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>👶</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Visa Au Pair</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Vive con una familia y trabaja en cuidado infantil</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Capital inicial', '€2,000 – €4,000'], ['🕐', 'Duración', '6 – 12 meses'], ['📊', 'Dificultad', 'Baja – Media']].map((s, i) => (
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1663579170393-7076f2021b10?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>¿Qué es la Visa Au Pair?</h2>
          <Intro text="La Visa Au Pair es una ruta de intercambio cultural que te permite vivir con una familia anfitriona mientras cuidas a sus hijos. A cambio recibes alojamiento, comida y una compensación económica. Es la forma más accesible de trabajar legalmente en Europa o EE.UU. sin necesitar contrato laboral tradicional." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '10px' }}>
            A diferencia de otras rutas, <strong>primero necesitas una familia anfitriona y luego aplicas a la visa</strong>. Sin familia confirmada no hay visa — esa es la regla clave del proceso.
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>✅ Lo que incluye el programa Au Pair:</p>
            {['Alojamiento con la familia anfitriona', 'Comida incluida', 'Compensación semanal/mensual', 'Experiencia internacional y de idioma', 'Seguro médico en algunos países'].map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#444', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
        </div>

        {/* DESTINOS */}
        <Section id="destinos" emoji="🌍" title="Destinos Disponibles — Visa Au Pair">
          <Intro text="La Visa Au Pair está disponible en múltiples países europeos y en EE.UU. Cada uno tiene requisitos de edad, idioma y proceso distintos. Irlanda es el más accesible para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['País', 'Edad', 'Idioma', 'Pago mensual', 'Dificultad', 'Portal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🇮🇪 Irlanda', '18+', 'Inglés básico', '€150–€250/sem', 'Baja', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
                  ['🇩🇪 Alemania', '18–30', 'Alemán básico (A1)', '€280–€400/mes', 'Media', 'make-it-in-germany.com', 'https://www.make-it-in-germany.com/en/visa-residence/types/au-pair'],
                  ['🇫🇷 Francia', '18–30', 'Francés básico (A1)', '€300–€400/mes', 'Media', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr/en/web/france-visas/au-pair'],
                  ['🇪🇸 España', '18–30', 'Ninguno', 'Variable', 'Baja', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
                  ['🇦🇹 Austria', '18–30', 'Alemán básico (A1)', 'Alto', 'Media', 'migration.gv.at', 'https://www.migration.gv.at/en/types-of-immigration/fixed-term-settlement/au-pair/'],
                  ['🇨🇭 Suiza', '18–25', 'Básico', 'El más alto', 'Media', 'sem.admin.ch', 'https://www.sem.admin.ch'],
                  ['🇳🇱 Países Bajos', '18–25', 'Inglés / Básico', 'Competitivo', 'Media', 'ind.nl', 'https://ind.nl/en/residence-permits/exchange/au-pair'],
                  ['🇧🇪 Bélgica', '18–26', 'Básico', 'Competitivo', 'Media', 'dofi.ibz.be', 'https://dofi.ibz.be/en/themes/faq/au-pair'],
                  ['🇺🇸 EE.UU.', '18–26', 'Inglés intermedio', '~$195/semana', 'Alta', 'j1visa.state.gov', 'https://j1visa.state.gov/programs/au-pair'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}><ExtLink text={r[5] as string} url={r[6] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Irlanda es el destino más accesible para latinoamericanos — alta demanda, inglés como idioma de trabajo y proceso directo sin agencia obligatoria. Alemania y Francia requieren nivel básico del idioma local pero tienen los salarios más competitivos de Europa." />
        </Section>

        {/* COMO APLICAR */}
        <Section id="aplicacion" emoji="🛂" title="Cómo Aplicar — Proceso Paso a Paso">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1663579170702-fce379dc864e?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="La Visa Au Pair no se solicita como una Working Holiday. Primero necesitas familia anfitriona + contrato firmado. Sin familia confirmada no hay visa. Ese es el orden correcto." />

          <SubHead text="Las 2 formas de encontrar familia" />
          <div style={{ display: 'grid', gap: '10px', marginBottom: '14px' }}>
            <div style={{ backgroundColor: '#f0f9ff', borderRadius: '10px', padding: '14px', border: '1px solid #bae6fd' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 6px', color: '#0369a1' }}>Opción A: Plataformas directas</p>
              <p style={{ fontSize: '13px', color: '#444', margin: '0 0 8px', lineHeight: '1.5' }}>Tú haces el match directamente con la familia. Más libertad pero menos seguridad.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                {[['AuPairWorld', 'https://www.aupairworld.com'], ['AuPair.com', 'https://www.aupair.com']].map((p, i) => (
                  <a key={i} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #bae6fd', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>{p[0]} →</a>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '14px', border: '1px solid #86efac' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 6px', color: '#166534' }}>Opción B: Agencias (recomendado)</p>
              <p style={{ fontSize: '13px', color: '#444', margin: '0 0 8px', lineHeight: '1.5' }}>Te ayudan con matching, visa, soporte legal y acompañamiento. En EE.UU. es obligatorio.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                {[
                  ['Cultural Care', 'https://www.culturalcare.com'],
                  ['AuPairCare', 'https://www.aupaircare.com'],
                  ['Expert AuPair', 'https://expertaupair.com'],
                  ['Go Au Pair', 'https://www.goaupair.com'],
                  ['Au Pair in America', 'https://www.aupairinamerica.com'],
                  ['EurAupair', 'https://www.euraupair.com'],
                ].map((p, i) => (
                  <a key={i} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #86efac', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#166534', textDecoration: 'none' }}>{p[0]} →</a>
                ))}
              </div>
            </div>
          </div>

          <SubHead text="Los 5 pasos del proceso" />
          {[
            ['1️⃣', 'Crear perfil de Au Pair', 'Experiencia con niños (mínimo 200h recomendado), fotos naturales, video de presentación, referencias y nivel de idioma. Tu perfil es TODO.'],
            ['2️⃣', 'Aplicar activamente a familias', 'Aplica a 20-30 familias — no esperes a que te contacten. Responde rápido y con buena actitud.'],
            ['3️⃣', 'Entrevistas con familias', 'Videollamadas para evaluar compatibilidad, tareas, horarios y condiciones. Elegir bien la familia es tan importante como que te elijan.'],
            ['4️⃣', 'Contrato + documentación', 'Firma el acuerdo, recibe carta de invitación y prepara pasaporte, antecedentes penales y seguro médico.'],
            ['5️⃣', 'Aplicar a la visa', 'Con familia confirmada, solicita la visa en embajada/consulado del país de destino.'],
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{step[0]}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px' }}>{step[1]}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, lineHeight: '1.5' }}>{step[2]}</p>
              </div>
            </div>
          ))}
          <RedBox text="⚠️ REGLA CLAVE: Sin familia confirmada = sin visa. No hay manera de aplicar a la Visa Au Pair sin tener primero el match con una familia y un contrato firmado." />
          <HackBox text="El error típico es esperar a encontrar familia cuando estés 'listo'. La estrategia real: crear perfil PERFECTO primero, aplicar a 20-30 familias activamente y hacer follow-up constante. Quienes se preparan bien consiguen match en 2-4 semanas. Los demás tardan meses." />
        </Section>

        {/* TIEMPOS */}
        <Section id="tiempos" emoji="⏳" title="Tiempos del Proceso">
          <Intro text="El tiempo total depende principalmente de la rapidez para encontrar familia. Con perfil fuerte y búsqueda activa puedes cerrar en 2-4 semanas. Luego 2-8 semanas para la visa según el país." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Tiempo estimado', 'Depende de'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Crear perfil y aplicar a familias', '1-2 semanas', 'Calidad del perfil'],
                  ['Entrevistas y match con familia', '2-4 semanas', 'Actividad y comunicación'],
                  ['Contrato + documentación', '1-2 semanas', 'Velocidad de trámites'],
                  ['Aplicación de visa', '2-8 semanas', 'País de destino'],
                  ['Tiempo total estimado', '6-16 semanas', 'Todo el proceso'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Tiempo real con buen perfil y búsqueda activa: match en 2-4 semanas + visa en 3-6 semanas = 5-10 semanas en total. Sin preparación puede tardar 4-6 meses. La diferencia está en la calidad del perfil y la velocidad de aplicación." />
        </Section>

        {/* CHECKLIST */}
        <Section id="checklist" emoji="📋" title="Checklist de Documentos">
          {[
            ['Pasaporte vigente', 'Mínimo 12 meses de validez'],
            ['Contrato firmado con familia', 'Sin esto no hay visa — prioritario'],
            ['Carta de invitación de la familia', 'Emitida por la familia anfitriona'],
            ['Antecedentes penales', 'Del país de origen — apostillados'],
            ['Seguro médico internacional', '€100-300 dependiendo del país y duración'],
            ['Certificado de idioma (si aplica)', 'Alemania (A1 alemán), Francia (A1 francés), EE.UU. (inglés intermedio)'],
            ['Experiencia con niños documentada', 'Mínimo 200h recomendado'],
            ['Fotos tipo pasaporte', 'Para proceso migratorio'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <HackBox text="Aunque no hay requisito oficial de fondos para trabajar como childminder, llega con €2,000-4,000 para cubrir los primeros 30-60 días mientras te instalas. Al inicio puede tomar tiempo generar ingresos estables." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico internacional', '€100 – €300/año', '✅ Sí'],
                  ['Tasa de aplicación de visa', '€150 – €500', '✅ Sí'],
                  ['Traducciones y apostillas', '€50 – €150', '✅ Sí'],
                  ['Biometría o exámenes médicos', '€50 – €200', '✅ Si requerido'],
                  ['Boleto de avión', '€400 – €1,200', '✅ Sí'],
                  ['Capital inicial recomendado', '€2,000 – €4,000', '✅ Para los primeros 30-60 días'],
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
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title="Opciones Bancarias">
          <Intro text="Abre Wise o Revolut antes de viajar — permite recibir dinero internacionalmente y pagar gastos inmediatos mientras abres cuenta local en el país de destino." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital — Global', 'Transferencias internacionales baratas + múltiples divisas', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital — Global', 'Apertura rápida + tarjeta virtual inmediata', 'revolut.com', 'https://revolut.com'],
              ['N26', 'Digital — Europa', 'IBAN europeo + gestión desde app', 'n26.com', 'https://n26.com'],
              ['ANZ', 'Tradicional — AUS/NZ', 'Muy usado por viajeros en Australia y Nueva Zelanda', 'anz.com', 'https://anz.com'],
              ['Scotiabank', 'Tradicional — CA', 'Popular entre trabajadores WHV en Canadá', 'scotiabank.com', 'https://scotiabank.com'],
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
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629551241242-eab03e6fb655?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="Como Au Pair el alojamiento está incluido con la familia anfitriona. Pero si cambias de familia o necesitas alojamiento temporal entre llegada y inicio del programa, usa estos canales." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Airbnb', 'Temporal', 'Primeras semanas o transición entre familias', 'airbnb.com', 'https://airbnb.com'],
              ['Booking', 'Hostels', 'Económico para llegadas sin alojamiento confirmado', 'booking.com', 'https://booking.com'],
              ['Facebook Groups', 'Comunidad Au Pair', 'Grupos específicos por país con consejos y contactos', 'facebook.com', 'https://facebook.com'],
              ['Expat.com', 'Internacional', 'Comunidad de expatriados con info de vivienda por ciudad', 'expat.com', 'https://expat.com'],
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
          <RedBox text="⚠️ NUNCA viajes sin contrato firmado con la familia. Verifica perfiles y referencias antes de aceptar. Una familia falsa o mal investigada puede arruinar toda la experiencia." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis y Contingencia">
          <Intro text="Durante tu experiencia como Au Pair pueden surgir imprevistos. La clave es saber a quién acudir y actuar rápido, especialmente porque estás viviendo con una familia." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Problemas con la familia anfitriona', 'Intentar resolver con comunicación directa. Si no funciona, contactar agencia o buscar cambio de familia.'],
              ['Exceso de trabajo o condiciones injustas', 'Revisar el acuerdo inicial y establecer límites claros. Si persiste, buscar soporte externo.'],
              ['Robo / pérdida de documentos', 'Reportar a Policía + contactar Embajada/Consulado de tu país.'],
              ['Problemas de salud', 'Contactar seguro médico y acudir a centro médico local.'],
              ['Familia falsa o estafa', 'Verificar siempre perfil y referencias antes de aceptar. Nunca viajar sin contrato.'],
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <BlueBox text="🔵 SOPORTE: Familia anfitriona (primer contacto) → Agencia (si aplica) → Embajada de tu país → Seguro médico internacional → Policía local (emergencias)." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1644603847556-bfd96cfa1538?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '16px' }} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', '🇮🇪 Irlanda', '🇩🇪 Alemania', '🇫🇷 Francia', '🇺🇸 EE.UU.'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Programa', 'Childminding/Au Pair', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
                  ['Duración', 'Flexible', '6–12 meses', '6–12 meses', '12 meses'],
                  ['Edad', '18+', '18–30', '18–30', '18–26'],
                  ['Idioma', 'Inglés básico', 'Alemán A1', 'Francés A1', 'Inglés intermedio'],
                  ['Aplicación', 'Directo o agencia', 'Directo o agencia', 'Directo o agencia', 'Agencia obligatoria'],
                  ['Pago', '€150–€250/sem', '€280–€400/mes', '€300–€400/mes', '~$195/semana'],
                  ['Incluye', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida + estudios'],
                  ['Dificultad', '🟢 Baja', '🟡 Media', '🟡 Media', '🔴 Alta'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    {r.slice(1).map((v, j) => <td key={j} style={T.td(i)}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Irlanda es el punto de entrada más accesible para latinoamericanos — alta demanda de childminders, inglés como idioma de trabajo y proceso directo. Alemania y Francia son los más pagados pero requieren nivel básico del idioma local." />
        </Section>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>Te ayudamos a encontrar tu ruta Au Pair ideal según tu perfil.</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            📅 Agenda tu llamada de orientación
          </a>
        </div>

      </div>
    </main>
  )
}
