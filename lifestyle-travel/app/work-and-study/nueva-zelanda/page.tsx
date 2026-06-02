'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default function NuevaZelanda() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1171&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇳🇿</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Nueva Zelanda</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Oceanía · Work and Study</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Medio</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Capital requerido', '$15,000 - $22,000'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Medio']].map((s, i) => (
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
          'Student Visa + 20h/semana + tiempo completo en vacaciones académicas',
          'Post-Study Work Visa: hasta 3 años de trabajo abierto post-graduación',
          'IRD Number gratis — clave para trabajar desde la primera semana',
          'Salario mínimo $23 NZD/hora — entre los más altos del blueprint',
          'Green List: sectores en demanda con camino directo a residencia permanente',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531804159968-24716780d214?q=80&w=688&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Nueva Zelanda combina lo mejor de Canadá (salarios altos, camino a PR) con lo mejor de Europa (clima más accesible que Canadá, trámites más simples). Salario mínimo de $23 NZD/hora, paisajes únicos y una comunidad internacional activa en Auckland, Wellington y Christchurch." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Student Visa:</strong> estudia en institutos aprobados (NZQA) y trabaja <strong>hasta 20 horas/semana</strong> durante clases y <strong>tiempo completo</strong> en vacaciones académicas.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Hoja de ruta:</strong> Offer of Place → Student Visa → IRD Number → trabajo → Post-Study Work Visa → Green List → Residencia Permanente.
          </p>
          <BlueBox text="💱 Conversión NZ: 1 NZD ≈ $0.57 USD. NZ$200 ≈ $114 USD. Salario mínimo $23 NZD/hora ≈ $13.1 USD/hora." />
          <HackBox text="El IRD Number es el documento clave para trabajar en Nueva Zelanda. Sin él ningún empleador puede pagarte legalmente. Es gratis y se obtiene en pocos días si ya tienes cuenta bancaria y pasaporte verificado. Solicítalo en tu primera semana — es la prioridad #1." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="En Nueva Zelanda la escuela se elige por ubicación y conexión laboral — cerca de zonas con alta actividad económica y turismo como Auckland, Wellington o Christchurch, donde hay más oportunidades de trabajo para estudiantes." />
          <SubHead text="🇳🇿 Matriz de Escuelas de Inglés: Nueva Zelanda 2026" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio (24 semanas)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['NZLC', 'Auckland / Wellington', '$3,200 – $4,000', 'nzlc.ac.nz', 'https://nzlc.ac.nz'],
                  ['LSI Auckland', 'Auckland', '$3,200 – $4,000', 'lsi.edu', 'https://lsi.edu'],
                  ['Worldwide School of English', 'Auckland', '$3,300 – $4,100', 'worldwide.ac.nz', 'https://worldwide.ac.nz'],
                  ['Languages International', 'Auckland', '$3,400 – $4,200', 'languages.ac.nz', 'https://languages.ac.nz'],
                  ['Kaplan International', 'Auckland', '$3,500 – $4,400', 'kaplaninternational.com', 'https://kaplaninternational.com'],
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
              <strong>🔴 Solvencia obligatoria:</strong> ~$12,000 – $13,000 USD para cubrir gastos del primer año<br />
              <strong>🟢 Capital total recomendado:</strong> $15,000 – $22,000 USD (curso + visa + gastos iniciales)<br />
              <strong>📍 Mejor estrategia:</strong> ITPs (Institutes of Technology) + Green List para PR rápido
            </p>
          </div>
          <HackBox text="Elige institutos fuera de Auckland para costos más bajos. Southern Institute of Technology (SIT) en Invercargill tiene programas gratuitos para internacionales en algunos cursos. Misma calificación para Post-Study Work Visa — 30-40% menos costo." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pathway Programs">
          <Intro text="Los programas University Pathway te preparan para universidades neozelandesas. Al completar un programa Level 7+ en instituto o politécnico (ITP) elegible, accedes al Post-Study Work Visa — el permiso más valioso para conseguir PR." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Inversión', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University Pathway', 'NZLC', '$9,500 – $12,500', 'nzlc.ac.nz', 'https://nzlc.ac.nz'],
                  ['Academic English', 'Worldwide School of English', '$9,800 – $12,000', 'worldwide.ac.nz', 'https://worldwide.ac.nz'],
                  ['College Pathway', 'LSI Auckland', '$9,500 – $12,000', 'lsi.edu', 'https://lsi.edu'],
                  ['Academic Pathway', 'Languages International', '$10,000 – $13,000', 'languages.ac.nz', 'https://languages.ac.nz'],
                  ['University Preparation', 'Kaplan International', '$11,000 – $14,000', 'kaplaninternational.com', 'https://kaplaninternational.com'],
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
          <BlueBox text="🔵 POST-STUDY WORK VISA: Al graduarte de un programa Level 7+ elegible, puedes aplicar al Post-Study Work Visa (hasta 3 años). Con ese permiso acumulas experiencia para aplicar a Skilled Migrant Category o Green List PR." />
          <HackBox text="Los programas en IT, Ingeniería y Salud están en la Green List de Nueva Zelanda — tu empleador puede patrocinar tu residencia casi de inmediato al graduarte. Elige bien tu especialidad y aceleras el camino a PR." />
        </Section>

        {/* COLLEGES */}
        <Section id="edu" emoji="🎓" title="Institutes of Technology (ITPs) — La Ruta Más Inteligente">
          <Intro text="Los ITPs (Institutes of Technology and Polytechnics) son más económicos que las universidades y ofrecen programas prácticos alineados con la demanda laboral real. Programas en la Green List = PR rápido con apoyo del empleador." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Programa', 'Precio/año USD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Southern Institute of Technology (SIT)', 'Invercargill', 'Business / IT / Hospitality', '$11,000 – $14,000', 'sit.ac.nz', 'https://www.sit.ac.nz'],
                  ['Otago Polytechnic', 'Dunedin / Auckland', 'Design / IT / Business', '$13,000 – $17,000', 'op.ac.nz', 'https://www.op.ac.nz'],
                  ['Ara Institute of Canterbury', 'Christchurch', 'Engineering / Business', '$13,000 – $18,000', 'ara.ac.nz', 'https://www.ara.ac.nz'],
                  ['Toi Ohomai Institute', 'Tauranga / Rotorua', 'Tourism / IT / Business', '$14,000 – $18,000', 'toiohomai.ac.nz', 'https://www.toiohomai.ac.nz'],
                  ['Manukau Institute of Technology', 'Auckland', 'Trades / Engineering / Business', '$15,000 – $19,000', 'manukau.ac.nz', 'https://www.manukau.ac.nz'],
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
          <BlueBox text="💰 GREEN LIST HACK: Si estudias IT, Ingeniería, Construcción o Salud en un ITP, tu empleador puede patrocinar tu residencia permanente casi de inmediato al graduarte. ITP más barato + Green List = camino más rápido a PR en Nueva Zelanda." />
          <HackBox text="SIT (Southern Institute of Technology) en Invercargill ofrece algunos programas gratuitos para internacionales bajo el Zero Fees Scheme. Misma calificación para Post-Study Work Visa y Green List. Investiga esta opción antes de elegir instituto." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Nueva Zelanda es más accesible que Canadá en solvencia requerida (~$12,000 vs ~$16,000 USD) pero los costos de vida en Auckland son altos. Ciudades secundarias reducen gastos significativamente." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico internacional', '$300 – $600/año', '✅ Sí'],
                  ['Student Visa (INZ Fee)', '$230 – $375 USD', '✅ Sí'],
                  ['Examen médico y Rayos X', '$150 – $250', '✅ Si requerido'],
                  ['Materiales / Libros', '$150 – $300', '✅ Sí'],
                  ['IRD Number (número fiscal)', 'Gratis', '✅ Para trabajar'],
                  ['Solvencia obligatoria', '~$12,000 – $13,000 USD', '✅ Obligatorio visa'],
                  ['Capital total recomendado', '$15,000 – $22,000 USD', '✅ Para arrancar bien'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA: ~$12,000 – $13,000 USD para cubrir gastos del primer año. Sin esta prueba de fondos la Student Visa será rechazada. Adicionalmente: $20,000 NZD mínimos en extractos bancarios según normativa de inmigración." />
          <HackBox text="Capital real = precio del instituto + $350 visa + $400 seguro médico + solvencia. Total $15,000-22,000 USD. Más barato que Canadá ($18,000-25,000) y con salarios similares. Nueva Zelanda es la versión más accesible de la ruta anglófona de alta calidad." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En Nueva Zelanda el proceso es rápido y ordenado. Banco + IRD Number son las dos prioridades de la primera semana. Sin IRD no puedes trabajar legalmente." />
          <SubHead text="1. Student Visa — Tu permiso de estudio en Nueva Zelanda" />
          {[
            ['Paso 1', 'Entrada con Student Visa aprobada por Immigration New Zealand (INZ)', null],
            ['Paso 2', 'Abrir cuenta bancaria (ANZ o ASB) con pasaporte + Student Visa + dirección en NZ', 'https://www.anz.co.nz'],
            ['Paso 3', 'IRD Number gratis en ird.govt.nz — necesitas cuenta bancaria activa primero', 'https://www.ird.govt.nz'],
            ['Paso 4', 'Buscar habitación permanente (Trade Me, Facebook Marketplace, grupos latinos)', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Post-Study Work Visa (después de graduarte)" />
          {[
            ['Aplicas dentro de 6 meses después de graduarte — hasta 3 años de trabajo abierto', null],
            ['Con experiencia acumulada aplicas a Skilled Migrant Category o Green List', null],
            ['Portal oficial de Immigration New Zealand para todos los trámites', 'https://www.immigration.govt.nz'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="El orden correcto en NZ es: Banco → IRD Number → trabajo. Primero abre la cuenta bancaria (mismo día con pasaporte + visa), luego solicita el IRD online (2-3 días). Sin banco no puedes obtener el IRD. Sin IRD no puedes trabajar legalmente." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Abre ANZ o ASB tu primera semana — son los más usados por estudiantes internacionales. Con cuenta activa puedes solicitar el IRD Number y empezar a trabajar. Sin banco, sin IRD, sin trabajo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ANZ Bank NZ', 'Tradicional', 'El más grande del país. Muy usado por estudiantes internacionales. Cuenta activa el mismo día.', 'anz.co.nz', 'https://www.anz.co.nz'],
                  ['ASB Bank', 'Tradicional', 'Cuenta sencilla para estudiantes con excelente app móvil.', 'asb.co.nz', 'https://www.asb.co.nz'],
                  ['BNZ (Bank of New Zealand)', 'Tradicional', 'Gran red de sucursales. Buenos servicios para newcomers.', 'bnz.co.nz', 'https://www.bnz.co.nz'],
                  ['Westpac NZ', 'Tradicional', 'Banco internacional con cuentas para estudiantes y migrantes.', 'westpac.co.nz', 'https://www.westpac.co.nz'],
                  ['Wise', 'Digital', 'Ideal para transferencias internacionales y conversión de divisas.', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Banca digital popular entre estudiantes internacionales.', 'revolut.com', 'https://revolut.com'],
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
          <HackBox text="Abre ANZ o ASB apenas llegues — son los más rápidos para estudiantes internacionales. Con cuenta activa solicitas el IRD Number online en 2-3 días. Esa secuencia banco → IRD → trabajo es el camino más rápido al primer ingreso en NZ." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales para tu proceso en Nueva Zelanda. INZ para todo lo migratorio. IRD para el número fiscal. Seek NZ es el portal de empleo más usado del país." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Immigration NZ (INZ)', 'Student Visa, permisos de trabajo y residencia', 'Antes de viajar + seguimiento', 'immigration.govt.nz', 'https://www.immigration.govt.nz'],
                  ['Inland Revenue (IRD)', 'IRD Number para trabajar y pagar impuestos', 'Semana 1 — prioritario', 'ird.govt.nz', 'https://www.ird.govt.nz'],
                  ['Work and Income NZ', 'Ofertas de empleo y recursos laborales', 'Desde semana 1', 'workandincome.govt.nz', 'https://www.workandincome.govt.nz'],
                  ['Seek NZ', 'Portal de empleo más usado en NZ', 'Desde semana 1', 'seek.co.nz', 'https://www.seek.co.nz'],
                  ['Indeed NZ', 'Vacantes de todo tipo', 'Desde semana 1', 'nz.indeed.com', 'https://nz.indeed.com'],
                  ['Trade Me Jobs', 'Muy usado por empresas locales', 'Desde semana 1', 'trademe.co.nz/jobs', 'https://www.trademe.co.nz/jobs'],
                  ['Backpacker Board', 'Hospitality y trabajos temporales', 'Desde semana 1', 'backpackerboard.co.nz', 'https://www.backpackerboard.co.nz'],
                  ['Seasonal Jobs NZ', 'Fruit picking y trabajos de temporada', 'Según temporada', 'seasonaljobs.co.nz', 'https://www.seasonaljobs.co.nz'],
                  ['Trade Me (vivienda)', 'Portal #1 para alquiler en NZ', 'Semana 1 para vivienda', 'trademe.co.nz', 'https://www.trademe.co.nz'],
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
          <HackBox text="Seek NZ es el equivalente de Indeed en Nueva Zelanda — es el portal más usado por empresas locales. Si ves una vacante, aplica rápido. Las empresas reciben muchos CV y los primeros candidatos son los que llaman primero." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595125989588-36d745a2a828?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Auckland tiene el costo de vivienda más alto de Nueva Zelanda. Wellington y Christchurch son 20-30% más baratas. Ciudades como Dunedin o Invercargill son 40-50% más baratas y tienen menos competencia por trabajo." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal NZD', 'Precio Mensual NZD', '≈ USD/mes'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', 'NZ$180 – $250', 'NZ$720 – $1,000', '$411 – $570'],
                  ['Cuarto individual', 'NZ$280 – $400', 'NZ$1,120 – $1,600', '$638 – $912'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Nueva Zelanda también existen estafas en alquileres online. Nunca envíes dinero sin haber visitado el lugar físicamente." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Trade Me', 'Portal #1 en NZ', 'El portal más usado para alquiler en todo el país', 'trademe.co.nz', 'https://www.trademe.co.nz'],
                  ['Realestate.co.nz', 'Portal inmobiliario', 'Plataforma profesional para alquileres verificados', 'realestate.co.nz', 'https://www.realestate.co.nz'],
                  ['Facebook Marketplace', 'Clasificados', 'Muy usado por estudiantes y locales para alquileres rápidos', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Airbnb', 'Temporal', 'Primeras 1-2 semanas mientras buscas permanente', 'airbnb.com', 'https://airbnb.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Auckland, Wellington, Christchurch', 'Ver grupos', '#'],
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
          <HackBox text="Las habitaciones buenas en Auckland desaparecen en 24-48 horas. Si ves algo en Trade Me o Facebook, escribe inmediatamente. Considera ciudades como Christchurch o Dunedin — renta 30-40% más barata, menos competencia por trabajo y misma calificación para Post-Study Work Visa." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589364902763-41b8c0a099c5?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Nueva Zelanda tiene uno de los salarios mínimos más altos del mundo — $23 NZD/hora ($13.1 USD). Con 20h/semana ganas $1,840 NZD/mes (~$1,049 USD). En vacaciones a tiempo completo eso se duplica." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> Funciona muy bien en cafés, restaurantes y hoteles. Di: <em>"Hi, I'm looking for a part-time position. I have immediate availability."</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora NZD', '≈ USD/hora', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Kitchen Hand', '$23 – $26 NZD', '$13.1 – $14.8', 'Seek / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $25 NZD', '$13.1 – $14.3', 'Indeed NZ / Agencias'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$24 – $27 NZD', '$13.7 – $15.4', 'Seek / hoteles directos'],
                  ['Retail', 'Sales Assistant', '$23 – $26 NZD', '$13.1 – $14.8', 'Trade Me Jobs / malls'],
                  ['Agriculture', 'Fruit Picker / Farm Worker', '$23 – $28 NZD', '$13.1 – $16', 'Seasonal Jobs NZ / Backpacker Board'],
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
          <BlueBox text="💡 FRUIT PICKING HACK: El trabajo agrícola de temporada en NZ paga $23-28 NZD/hora y muchas veces incluye alojamiento básico. En temporada alta (verano NZ: dic-mar) puedes trabajar tiempo completo y ahorrar agresivamente con gastos mínimos." />
          <HackBox text="En NZ muchos trabajos para estudiantes se consiguen combinando portales online con visitas en persona. Los cafés y restaurantes en zonas turísticas de Auckland y Wellington contratan rápido. Si aplicas en Seek y además vas en persona, duplicas tus posibilidades." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Nueva Zelanda tiene salario mínimo de $23 NZD/hora — más alto que España, Portugal o Georgia. Con 20h/semana ganas ~$1,840 NZD/mes. En vacaciones a tiempo completo ~$3,680 NZD/mes." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/hora NZD', '≈ USD', 'Mensual EST. (20h/sem)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Kitchen Hand', '$23 – $26 NZD', '$13.1 – $14.8', 'NZ$1,840 – $2,080'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $25 NZD', '$13.1 – $14.3', 'NZ$1,840 – $2,000'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$24 – $27 NZD', '$13.7 – $15.4', 'NZ$1,920 – $2,160'],
                  ['Retail', 'Sales Assistant', '$23 – $26 NZD', '$13.1 – $14.8', 'NZ$1,840 – $2,080'],
                  ['Agriculture', 'Fruit Picker / Farm Worker', '$23 – $28 NZD', '$13.1 – $16', 'NZ$1,840 – $2,240'],
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
          <BlueBox text="💡 VACACIONES ACADÉMICAS: Tiempo completo (40h/semana) = NZ$3,680 – $4,480/mes (~$2,098 – $2,554 USD). Un estudiante en hospitality a $25 NZD/hora en vacaciones gana más de $2,000 USD/mes — suficiente para ahorrar significativamente." />
          <HackBox text="NZ paga semanal o quincenal — mucho más rápido que Europa (mensual). Eso significa que puedes cobrar tu primer pago en 2-3 semanas desde que empiezas. Combina esto con el IRD en semana 1 y puedes tener ingreso en menos de un mes desde que llegas." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Nueva Zelanda tiene el proceso pre-partida más corto de los destinos anglófonos. La Student Visa tarda 4-8 semanas (vs 8-12 en Canadá). Una vez en el país, banco + IRD en una semana." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Elegir instituto + Offer of Place + Prueba de fondos + Aplicar Student Visa', '2-3 meses antes'],
                  ['Semana 1', 'Abrir ANZ o ASB (pasaporte + visa) + IRD Number online (2-3 días)', 'Día 1-7'],
                  ['Semana 2-4', 'Buscar habitación permanente (Trade Me) + Aplicar en Seek e Indeed NZ', 'Día 7-30'],
                  ['Mes 2', 'Conseguir empleo + Primer salario + Estabilizar 20h/semana', 'Día 30-60'],
                  ['Al graduarte', 'Aplicar Post-Study Work Visa (dentro de 6 meses) + Green List jobs', 'Post-graduación'],
                  ['Años 2-4', 'Acumular experiencia + Skilled Migrant Category o Green List → PR', '2-4 años'],
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
          <HackBox text="El orden en NZ es: Banco → IRD → trabajo. Banco el día 1, IRD en 2-3 días, empleo en 1-3 semanas. Sin banco no hay IRD. Sin IRD no hay salario legal. Esa secuencia rápida es lo que hace a NZ más eficiente que muchos destinos europeos." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Nueva Zelanda es rápida si haces bien dos cosas: abrir banco y obtener el IRD Number. Con eso, puedes estar trabajando en 1-3 semanas y cobrar en 2-5 semanas desde que llegas." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Student Visa activa', 'Cuenta bancaria abierta', 'IRD Number obtenido', 'Oferta laboral'].map((item, i) => (
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
          <HackBox text="NZ paga semanal o quincenal. Si empiezas a trabajar en semana 2, puedes cobrar tu primer pago en semana 3-4. Mucho más rápido que Europa (pago mensual). Eso significa flujo de caja positivo en menos de un mes desde que llegas." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. Nueva Zelanda tiene un sistema ordenado — sigue el canal correcto y se resuelve rápido. Guarda estos contactos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '111 — Policía, Ambulancia, Bomberos'],
            ['INZ (Inmigración)', 'immigration.govt.nz — Student Visa y permisos'],
            ['IRD (Impuestos)', 'ird.govt.nz — IRD Number y trámites fiscales'],
            ['Work and Income', 'workandincome.govt.nz — Empleo y recursos'],
            ['Comunidad L&T', 'Latinos en Auckland, Wellington, Christchurch — ver grupos abajo'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía NZ y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Trade Me/Facebook y denunciar en Policía', 'Policía NZ'],
                  ['Problemas con Student Visa', 'Revisar en INZ o contactar institución educativa', 'immigration.govt.nz'],
                  ['Retraso en documentos del instituto', 'Contactar International Student Office', 'Tu instituto'],
                  ['Enfermedad / Urgencia médica', 'Hospital público o clínica privada según seguro', '111'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Nueva Zelanda</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en NZ — links próximamente
            </p>
          </div>
          <HackBox text="En NZ muchas oportunidades aparecen primero en comunidades de estudiantes internacionales. Únete a grupos de WhatsApp de latinos en Auckland desde antes de llegar. Ahí se publican habitaciones, trabajos y networking antes que en portales oficiales." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1630406379079-b40993ae203e?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Nueva Zelanda como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Nueva Zelanda 🇳🇿'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Student Visa (NZQA approved providers)'],
                  ['Duración mínima', '6 meses – 2 años'],
                  ['Horas de trabajo', '20h/semana durante clases'],
                  ['Vacaciones académicas', 'Tiempo completo (40h/semana)'],
                  ['Solvencia obligatoria', '~$12,000 – $13,000 USD'],
                  ['Capital total recomendado', '$15,000 – $22,000 USD'],
                  ['Student Visa', '$230 – $375 USD'],
                  ['IRD Number (para trabajar)', 'Gratis — online en ird.govt.nz'],
                  ['Renta cuarto compartido', 'NZ$720 – $1,000/mes'],
                  ['Empleos más comunes', 'Hospitality, Retail, Agriculture, Tourism'],
                  ['Salario mínimo', '$23 NZD/hora (~$13.1 USD)'],
                  ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
                  ['Tiempo hasta primer cobro', '2-5 semanas desde llegada'],
                  ['Post-graduación', 'Post-Study Work Visa hasta 3 años'],
                  ['Camino a PR', 'PSWV → Skilled Migrant / Green List → PR'],
                  ['Nivel de dificultad', 'Medio'],
                  ['Mejores ciudades', 'Auckland, Wellington, Christchurch'],
                  ['Ventaja única', 'Salario mínimo alto + Green List + naturaleza única'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Nueva Zelanda:\n\n' + feedback)}`, '_blank')
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