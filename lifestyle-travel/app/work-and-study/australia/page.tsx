'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default function Australia() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇦🇺</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Australia</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Oceanía · Work and Study</p>
          <span style={{ backgroundColor: '#ef4444', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Alto</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Capital requerido', '$18,000 - $25,000'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Alto']].map((s, i) => (
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
          '48 horas quincenales de trabajo + tiempo completo en vacaciones — más horas que NZ o Canadá',
          'TFN (Tax File Number) gratis — clave para trabajar desde la primera semana',
          'Puedes abrir Commonwealth Bank ANTES de viajar — cuenta activa al llegar',
          'Temporary Graduate Visa (485): 2-4 años de trabajo post-graduación',
          'Salarios más altos del blueprint — $22-35 AUD/hora (~$15-24 USD)',
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1666983888610-2362b2433009?q=80&w=764&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Australia tiene los salarios más altos del blueprint y el mayor número de horas de trabajo permitidas — 48 horas quincenales durante clases y tiempo completo en vacaciones. El costo es alto, pero el retorno también. Con TFN y cuenta bancaria activos en la primera semana, puedes estar generando ingresos antes de que termine el primer mes." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Student Visa Subclass 500:</strong> estudia en instituciones registradas (CRICOS) y trabaja <strong>48 horas quincenales</strong> durante clases y <strong>tiempo completo</strong> en vacaciones académicas.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Hoja de ruta:</strong> CoE → Student Visa 500 → TFN → trabajo → Temporary Graduate Visa 485 → Skilled Migrant → PR.
          </p>
          <BlueBox text="💱 Conversión Australia: 1 AUD ≈ $0.69 USD. A$200 ≈ $138 USD. Salario mínimo $23 AUD/hora ≈ $15.9 USD/hora." />
          <HackBox text="Australia permite abrir Commonwealth Bank ANTES de viajar. Eso significa que llegas con cuenta activa, tarjeta lista y puedes recibir dinero desde el día 1. Combina esto con TFN en semana 1 y puedes estar trabajando antes de que termine el primer mes." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="En Australia la academia se elige por ubicación y conexión laboral — cerca de zonas con alta actividad económica y transporte público. Sydney CBD, Melbourne CBD, Brisbane y Gold Coast son las mejores ciudades para conseguir trabajo siendo estudiante." />
          <SubHead text="🇦🇺 Matriz de Escuelas de Inglés: Australia 2026" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ciudad', 'Precio (24 semanas)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ILSC Language Schools', 'Sydney / Melbourne', '$3,000 – $4,500', 'ilsc.com', 'https://ilsc.com'],
                  ['Greenwich College', 'Sydney / Melbourne', '$3,200 – $4,800', 'greenwichcollege.edu.au', 'https://greenwichcollege.edu.au'],
                  ['Browns English', 'Brisbane / Gold Coast', '$3,600 – $5,000', 'brownsenglish.edu.au', 'https://brownsenglish.edu.au'],
                  ['Navitas English', 'Varias ciudades', '$3,500 – $5,000', 'navitasenglish.edu.au', 'https://navitasenglish.edu.au'],
                  ['Kaplan International', 'Sydney', '$3,800 – $5,200', 'kaplaninternational.com', 'https://kaplaninternational.com'],
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
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>🔴 Solvencia obligatoria:</strong> ~$15,000 – $16,000 USD (AUD $24,505) para gastos del primer año<br />
              <strong>🟢 Capital total recomendado:</strong> $18,000 – $25,000 USD (curso + visa + OSHC + gastos iniciales)<br />
              <strong>📍 Mejor estrategia:</strong> Universidades regionales (más baratas) + Subclass 485 para PR
            </p>
          </div>
          <HackBox text="Brisbane y Gold Coast tienen costos de vida 20-30% más bajos que Sydney o Melbourne con las mismas oportunidades laborales para estudiantes. Elige ubicación con transporte público cercano — eso multiplica tus opciones de empleo." />
        </Section>

        {/* VET DIPLOMAS */}
        <Section id="pre" emoji="🚀" title="VET Diplomas & Career Programs">
          <Intro text="Los programas VET (Vocational Education and Training) son más cortos y económicos que universidades. Al completar un Diploma o Advanced Diploma elegible, accedes a la Temporary Graduate Visa 485 para trabajar tiempo completo post-graduación." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Inversión', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Diploma of Business', 'Nova Vocational College', '$6,500 – $7,500', 'nvc.edu.au', 'https://nvc.edu.au'],
                  ['Diploma of Leadership & Management', 'Australian Institute of Advanced Studies', '$7,000 – $8,500', 'aias.edu.au', 'https://aias.edu.au'],
                  ['Diploma of Marketing & Communication', 'Pacific Training Group', '$7,500 – $9,000', 'ptg.edu.au', 'https://ptg.edu.au'],
                  ['Diploma of Hospitality Management', 'AIBT Global', '$9,000 – $13,000', 'aibtglobal.edu.au', 'https://aibtglobal.edu.au'],
                  ['Diploma of Information Technology', 'TAFE Australia', '$10,000 – $14,000', 'tafe.edu.au', 'https://tafe.edu.au'],
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
          <BlueBox text="🔵 TEMPORARY GRADUATE VISA 485: Al graduarte de un programa elegible puedes aplicar a la Subclass 485 — 2 a 4 años de trabajo tiempo completo en Australia. Con esa experiencia aplicas a Skilled Migrant Category para PR." />
          <HackBox text="Los Diplomas VET son la entrada más económica al sistema educativo australiano. $6,500-9,000 vs $15,000+ en universidades. Misma calificación para la Subclass 485 post-graduación. La diferencia de costo puede ser de $8,000-10,000 AUD." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior — Universidades Regionales">
          <Intro text="Las universidades regionales de Australia son más baratas, tienen menor competencia para admisión y más oportunidades laborales para estudiantes. Al graduarte calificas para la Subclass 485 post-graduación." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Nivel', 'Programa', 'Precio/año AUD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Southern Queensland', 'Bachelor / Master', 'Business / IT / Engineering', '$15,000 – $18,000', 'usq.edu.au', 'https://usq.edu.au'],
                  ['Charles Sturt University', 'Bachelor / Master', 'Business / Education / IT', '$16,000 – $19,000', 'csu.edu.au', 'https://csu.edu.au'],
                  ['Federation University Australia', 'Bachelor / Master', 'Business / Engineering / Nursing', '$16,000 – $20,000', 'federation.edu.au', 'https://federation.edu.au'],
                  ['Southern Cross University', 'Bachelor / Master', 'Business / Tourism / IT', '$17,000 – $21,000', 'scu.edu.au', 'https://scu.edu.au'],
                  ['University of the Sunshine Coast', 'Bachelor / Master', 'Business / Communication / IT', '$18,000 – $22,000', 'usc.edu.au', 'https://usc.edu.au'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}><Link text={r[4] as string} url={r[5] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💰 HACK REGIONES: Universidades fuera de Sydney o Melbourne tienen matrículas 20-30% más bajas, menos competencia y más trabajo disponible para estudiantes. Con Subclass 485 post-graduación tienes 2-4 años de trabajo tiempo completo para llegar a PR." />
          <HackBox text="University of Southern Queensland y Federation University son de las más accesibles para latinoamericanos. Sus programas califican para la Subclass 485. Costo de vida fuera de las grandes ciudades también es 30-40% más bajo." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Australia tiene el OSHC (Overseas Student Health Cover) como seguro médico obligatorio — es diferente al seguro médico normal. Sin OSHC tu visa no se aprueba. Es parte del proceso desde el principio." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo USD', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['OSHC (Overseas Student Health Cover)', '$400 – $700/año', '✅ Sí — obligatorio para visa'],
                  ['Student Visa Subclass 500', '~$650 USD (~$1,000 AUD)', '✅ Sí'],
                  ['Exámenes médicos para visa', '$200 – $350', '✅ Si requerido'],
                  ['Materiales / Libros', '$100 – $300', '✅ Sí'],
                  ['Biométricos o traducción de documentos', '$50 – $150', '✅ Si requerido'],
                  ['TFN (Tax File Number)', 'Gratis', '✅ Para trabajar legalmente'],
                  ['Solvencia obligatoria (primer año)', '~$15,000 – $16,000 USD', '✅ Obligatorio visa'],
                  ['Capital total recomendado', '$18,000 – $25,000 USD', '✅ Para arrancar bien'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA: ~$15,000 – $16,000 USD (AUD $24,505) para gastos del primer año. Sin esta prueba de fondos la Student Visa 500 será rechazada. OSHC es separado y también obligatorio — sin él no hay visa." />
          <HackBox text="Capital real = precio del curso + $650 visa + $500 OSHC + solvencia. Total $18,000-25,000 USD. Es el destino más caro del blueprint junto con Canadá, pero también tiene los salarios más altos. Un estudiante trabajando 48h quincenales puede recuperar $800-1,200 AUD/semana." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="Australia tiene el proceso de aterrizaje más flexible del blueprint — puedes abrir cuenta bancaria antes de viajar. TFN + banco son las dos prioridades de la primera semana." />
          <SubHead text="1. Student Visa 500 — Tu permiso de estudio en Australia" />
          {[
            ['Paso 1', 'Abre Commonwealth Bank ANTES de viajar — permite apertura online previa al vuelo', 'https://commbank.com.au'],
            ['Paso 2', 'Entrada con Student Visa 500 — presenta pasaporte + CoE en aeropuerto', null],
            ['Paso 3', 'TFN gratis en ato.gov.au — aplica online, llega en pocos días', 'https://ato.gov.au'],
            ['Paso 4', 'SIM card (Telstra/Optus/Vodafone) + buscar habitación permanente (Flatmates)', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Temporary Graduate Visa 485 (después de graduarte)" />
          {[
            ['Aplicas después de graduarte — 2 a 4 años de trabajo tiempo completo en Australia', null],
            ['Con experiencia acumulada aplicas a Skilled Migrant Category para PR', null],
            ['Portal oficial Department of Home Affairs para todos los trámites migratorios', 'https://homeaffairs.gov.au'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="En Australia el TFN es el documento clave para trabajar. Sin TFN los empleadores retienen impuestos muy altos de tu salario. Es gratis y se aplica online en ato.gov.au — solicítalo apenas llegues. Banco + TFN en semana 1 = empleable en semana 2-3." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Australia tiene la ventaja única de que puedes abrir Commonwealth Bank ANTES de viajar. Llegas con cuenta activa y tarjeta lista. Con cuenta abierta, el TFN llega en días y puedes empezar a trabajar." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Commonwealth Bank', 'Tradicional', 'El más usado por estudiantes. Permite apertura ANTES de viajar desde app. El #1 recomendado.', 'commbank.com.au', 'https://commbank.com.au'],
                  ['ANZ Bank Australia', 'Tradicional', 'Muy popular entre estudiantes y expatriados. Buena app bancaria.', 'anz.com.au', 'https://anz.com.au'],
                  ['NAB (National Australia Bank)', 'Tradicional', 'Cuenta para estudiantes sin comisión. Fácil apertura con visa.', 'nab.com.au', 'https://nab.com.au'],
                  ['Westpac', 'Tradicional', 'Amplia red de cajeros. Buen soporte para estudiantes internacionales.', 'westpac.com.au', 'https://westpac.com.au'],
                  ['Wise', 'Digital', 'Cuenta multi-moneda para transferencias internacionales baratas.', 'wise.com', 'https://wise.com'],
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
          <HackBox text="Abre Commonwealth Bank antes de viajar — es el único banco principal de Australia que permite apertura online previa al vuelo. Llegas con cuenta activa, tarjeta lista y puedes recibir dinero desde el día 1. Eso acelera todo el proceso de activación laboral." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales para tu proceso en Australia. ATO para el TFN. Home Affairs para la visa. Seek es el portal de empleo #1 del país." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ATO (Australian Tax Office)', 'TFN (Tax File Number) para trabajar', 'Semana 1 — prioritario', 'ato.gov.au', 'https://ato.gov.au'],
                  ['Department of Home Affairs', 'Student Visa y trámites migratorios', 'Antes de viajar + seguimiento', 'homeaffairs.gov.au', 'https://homeaffairs.gov.au'],
                  ['Seek Australia', 'Portal de empleo #1 en Australia', 'Desde semana 1', 'seek.com.au', 'https://seek.com.au'],
                  ['Indeed Australia', 'Vacantes de todo tipo', 'Desde semana 1', 'au.indeed.com', 'https://au.indeed.com'],
                  ['Jora Jobs', 'Vacantes rápidas para estudiantes', 'Desde semana 1', 'au.jora.com', 'https://au.jora.com'],
                  ['Gumtree Jobs', 'Trabajos casuales y temporales', 'Desde semana 1', 'gumtree.com.au', 'https://gumtree.com.au'],
                  ['Backpacker Job Board', 'Hospitality y trabajos para estudiantes', 'Desde semana 1', 'backpackerjobboard.com.au', 'https://backpackerjobboard.com.au'],
                  ['Flatmates', 'Portal #1 para habitaciones compartidas', 'Semana 1 para vivienda', 'flatmates.com.au', 'https://flatmates.com.au'],
                  ['Domain / Realestate', 'Alquileres y apartamentos', 'Semana 1 para vivienda', 'domain.com.au', 'https://domain.com.au'],
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
          <HackBox text="Seek es el LinkedIn de Australia para trabajos entry-level. Si ves una vacante, aplica en menos de 10 minutos — las empresas australianas revisan primero los CV que llegan más rápido. Activa alertas de empleo en Seek desde antes de llegar." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1706517229833-f41d68aae8ff?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Sydney y Melbourne tienen los alquileres más altos — una habitación compartida puede costar $280-350 AUD/semana. Brisbane, Gold Coast y ciudades regionales son 20-40% más baratas con las mismas oportunidades de trabajo para estudiantes." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal AUD', 'Precio Mensual AUD', '≈ USD/mes'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', 'A$180 – $280', 'A$720 – $1,120', '$497 – $773'],
                  ['Cuarto individual', 'A$300 – $450', 'A$1,200 – $1,800', '$828 – $1,242'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Australia también existen estafas en anuncios de alquiler online. Nunca envíes dinero sin haber visitado la habitación físicamente." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Flatmates', 'Portal #1 habitaciones compartidas', 'El más usado para estudiantes internacionales en Australia', 'flatmates.com.au', 'https://flatmates.com.au'],
                  ['Domain', 'Portal inmobiliario', 'Plataforma grande para alquileres y apartamentos', 'domain.com.au', 'https://domain.com.au'],
                  ['Realestate.com.au', 'Portal inmobiliario', 'Portal profesional con propiedades verificadas', 'realestate.com.au', 'https://realestate.com.au'],
                  ['Facebook Marketplace', 'Clasificados', 'Estudiantes suben habitaciones y subarriendos', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Sydney, Melbourne, Brisbane — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <HackBox text="Las habitaciones en Australia se alquilan muy rápido — especialmente en Sydney y Melbourne. Si ves algo en Flatmates o Facebook, escribe inmediatamente y agenda visita ese mismo día. Considera Brisbane o Gold Coast — 20-30% más barato, menos competencia y mucho trabajo en turismo y hospitality." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526958977630-bc61b30a2009?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Australia tiene los salarios más altos del blueprint — $22-35 AUD/hora. Con 48 horas quincenales (24h/semana promedio) puedes ganar $1,760-2,880 AUD/mes. En vacaciones a tiempo completo eso se duplica." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> Camina por cafés, restaurantes y tiendas en zonas comerciales. Di: <em>"I'm looking for a casual position. I have immediate availability."</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora AUD', '≈ USD/hora', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff / Kitchen Hand', '$22 – $30 AUD', '$15.2 – $20.7', 'Seek / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $30 AUD', '$15.9 – $20.7', 'Gumtree / Indeed'],
                  ['Hotels', 'Reception / Hotel Staff', '$24 – $32 AUD', '$16.6 – $22.1', 'Seek / hoteles directos'],
                  ['Retail', 'Sales Assistant', '$23 – $30 AUD', '$15.9 – $20.7', 'Seek / malls directos'],
                  ['Delivery', 'Rider / Courier', '$25 – $35 AUD', '$17.3 – $24.2', 'Uber Eats / DoorDash'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 DELIVERY HACK: Uber Eats y DoorDash en Sydney o Melbourne pagan $25-35 AUD/hora. Con 48 horas quincenales puedes ganar $1,200-1,680 AUD/quincena (~$828-1,159 USD). En vacaciones académicas a tiempo completo son $2,400-3,360 AUD/quincena." />
          <HackBox text="En Australia muchas empresas valoran actitud, presencia y disponibilidad inmediata. Los primeros CV en aplicar a Seek son los que llaman. Aplica en menos de 10 minutos cuando veas una vacante — la velocidad marca la diferencia." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Australia tiene los salarios más altos del blueprint. Salario mínimo $23 AUD/hora ($15.9 USD). Con 48h quincenales (24h/sem promedio) ganas A$1,760-2,880/mes. En vacaciones tiempo completo A$3,520-5,760/mes." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/hora AUD', '≈ USD', 'Mensual EST. (48h/quincena)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$22 – $30 AUD', '$15.2 – $20.7', 'A$1,760 – $2,400'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $30 AUD', '$15.9 – $20.7', 'A$1,840 – $2,400'],
                  ['Hotels', 'Reception / Hotel Staff', '$24 – $32 AUD', '$16.6 – $22.1', 'A$1,920 – $2,560'],
                  ['Retail', 'Sales Assistant', '$23 – $30 AUD', '$15.9 – $20.7', 'A$1,840 – $2,400'],
                  ['Delivery', 'Rider / Courier', '$25 – $35 AUD', '$17.3 – $24.2', 'A$2,000 – $2,800'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 VACACIONES ACADÉMICAS: Tiempo completo = A$3,520 – $5,600/mes (~$2,429 – $3,864 USD). Un estudiante en delivery a $30 AUD/hora trabajando 40h/semana en vacaciones gana más de $4,800 AUD/mes. Son los ingresos más altos posibles en el blueprint." />
          <HackBox text="Delivery en Australia puede llegar a $35 AUD/hora en Sydney o Melbourne durante horario pico (viernes y sábado noche). Con 48h quincenales son $1,680 AUD/quincena ($1,159 USD). En vacaciones a tiempo completo son $3,360 AUD/quincena." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Australia tiene el proceso pre-partida más complejo (OSHC + visa + CoE) pero el aterrizaje más rápido — cuenta bancaria antes de viajar y TFN en días. Una vez en el país, puedes estar trabajando en 1-2 semanas." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'CoE (Confirmation of Enrolment) + OSHC obligatorio + Student Visa 500 + Commonwealth Bank online', '2-3 meses antes'],
                  ['Antes de volar', 'Abrir Commonwealth Bank app + activar tarjeta virtual', '1-2 semanas antes'],
                  ['Semana 1', 'SIM card + TFN en ato.gov.au + buscar habitación (Flatmates)', 'Día 1-7'],
                  ['Semana 2-3', 'Aplicar en Seek, Indeed y Jora + CV en mano en restaurantes y cafés', 'Día 7-21'],
                  ['Mes 2', 'Primer empleo + primer salario + estabilizar 48h quincenales', 'Día 30-60'],
                  ['Al graduarte', 'Aplicar Subclass 485 + buscar trabajo cualificado → PR', 'Post-graduación'],
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
          <HackBox text="El orden en Australia es: Commonwealth Bank (antes de volar) → TFN (semana 1) → trabajo (semana 2-3). Ese proceso optimizado puede tener ingresos fluyendo en menos de un mes desde que llegas — el más rápido de los destinos anglófonos del blueprint." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Australia es el más rápido de los destinos anglófonos gracias a la apertura bancaria previa al vuelo. Con cuenta activa al llegar y TFN en días, puedes estar trabajando en la segunda semana." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Student Visa 500 activa', 'TFN obtenido (Australian Tax Office)', 'Cuenta bancaria activa (Commonwealth/ANZ)', 'Oferta laboral'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 1-3 semanas desde que llegas</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Contrato o acuerdo laboral', 'Alta en payroll', 'Cuenta bancaria activa'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 2-4 semanas desde que empiezas a trabajar</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>~1-3 semanas desde que llegas</strong><br />
              • Puedes cobrar tu primer salario en: <strong>~2-5 semanas desde llegada</strong>
            </p>
          </div>
          <HackBox text="Australia paga semanal o quincenal. Si empiezas a trabajar en semana 2, cobras en semana 3-4. Con cuenta bancaria abierta antes de volar y TFN en días, este es el proceso más rápido de todos los destinos anglófonos del blueprint." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. Australia tiene un sistema ordenado — sigue el canal correcto y se resuelve rápido. Con OSHC tienes cobertura médica desde el primer día." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '000 — Policía, Ambulancia, Bomberos'],
            ['Home Affairs (Visa)', 'homeaffairs.gov.au — Student Visa y permisos'],
            ['ATO (Impuestos)', 'ato.gov.au — TFN y trámites fiscales'],
            ['Seek (Empleo)', 'seek.com.au — Portal de empleo #1'],
            ['Comunidad L&T', 'Latinos en Sydney, Melbourne, Brisbane — ver grupos abajo'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Flatmates/Facebook y denunciar en Policía', 'Policía Australia'],
                  ['Problemas con Student Visa', 'Revisar en Home Affairs o contactar institución educativa', 'homeaffairs.gov.au'],
                  ['Retraso en documentos del college', 'Contactar Student Office de tu institución', 'Tu institución'],
                  ['Enfermedad / Urgencia médica', 'Hospital o clínica autorizada con tu OSHC', '000'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Australia</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Australia — links próximamente
            </p>
          </div>
          <HackBox text="En Australia muchas oportunidades aparecen primero en grupos de estudiantes internacionales y comunidades de Facebook antes de publicarse en portales oficiales. Únete a grupos de latinos en Sydney y Melbourne desde antes de llegar." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Australia como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Australia 🇦🇺'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Student Visa Subclass 500 (CRICOS)'],
                  ['Duración mínima', '24 semanas mínimo para inglés'],
                  ['Horas de trabajo', '48 horas quincenales durante estudios'],
                  ['Vacaciones académicas', 'Tiempo completo'],
                  ['Solvencia obligatoria', '~$15,000 – $16,000 USD (AUD $24,505)'],
                  ['Capital total recomendado', '$18,000 – $25,000 USD'],
                  ['Student Visa Subclass 500', '~$650 USD (~$1,000 AUD)'],
                  ['OSHC (seguro obligatorio)', '$400 – $700 USD/año'],
                  ['TFN (para trabajar)', 'Gratis — online en ato.gov.au'],
                  ['Cuenta bancaria', 'Commonwealth Bank — puede abrirse ANTES de viajar'],
                  ['Renta cuarto compartido', 'A$720 – $1,120/mes'],
                  ['Empleos más comunes', 'Hospitality, Retail, Cleaning, Delivery'],
                  ['Salario mínimo', '$23 AUD/hora (~$15.9 USD)'],
                  ['Salario delivery pico', 'Hasta $35 AUD/hora (~$24 USD)'],
                  ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
                  ['Post-graduación', 'Temporary Graduate Visa 485 (2-4 años)'],
                  ['Camino a PR', 'Subclass 485 → Skilled Migrant → Residencia Permanente'],
                  ['Nivel de dificultad', 'Alto'],
                  ['Mejores ciudades', 'Sydney, Melbourne, Brisbane, Gold Coast'],
                  ['Ventaja única', 'Salarios más altos del blueprint + cuenta bancaria antes de volar'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Australia:\n\n' + feedback)}`, '_blank')
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