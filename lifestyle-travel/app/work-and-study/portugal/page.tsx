'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default function Portugal() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?q=80&w=1170&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇵🇹</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Portugal</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Europa · Work and Study</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Medio</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo inicial (Cursos)', '€1,880 - €5,000'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Medio']].map((s, i) => (
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
          'NIF antes de viajar — llega con ventaja y activa todo desde el día 1',
          'Universidades públicas desde €1,500/año — entre las más baratas de Europa',
          'Tres rutas disponibles: Estudiante, Nómada Digital o Trabajo Cualificado',
          'AIMA (residencia) gestionable en pocos meses con documentación correcta',
          'Comunidad latina creciente — grupos WhatsApp en Lisboa, Porto y Algarve',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581887469434-5dacb946ab56?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Portugal ya no es el lugar donde llegas y regularizas sobre la marcha. El enfoque ahora es entrar con una estrategia definida — Estudiante, Nómada Digital o Perfil Cualificado. El NIF es la llave de todo: sin él no abres banco, no firmas contratos y no te integras al sistema." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Tres rutas disponibles en 2026:</strong>
          </p>
          {[
            ['🎓 Visa de Estudiante', 'Estudiar en universidad o curso profesional. Hasta 20h/semana de trabajo.'],
            ['💻 Nómada Digital', 'Trabajar remotamente para empresa extranjera. Requiere €3,480/mes mínimo.'],
            ['🧠 Trabajo Cualificado', 'Contrato con empresa portuguesa en sectores como IT, ingeniería, marketing digital.'],
          ].map(([title, desc], i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span><strong>{title}:</strong> {desc}</span>
            </div>
          ))}
          <BlueBox text="💱 Estándar de moneda (Portugal): primero EUR y al lado el equivalente en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD)." />
          <HackBox text="El NIF es el documento más importante en Portugal. Sin NIF no puedes abrir banco, firmar contrato ni trabajar. La jugada inteligente es sacarlo ANTES de viajar con un representante fiscal online (€90-150). Llegas con ventaja y activas todo desde el día 1." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Rutas Disponibles">
          <Intro text="Portugal tiene tres rutas migratorias viables en 2026. Elige la que corresponde a tu perfil y situación financiera antes de iniciar cualquier trámite." />

          <SubHead text="🎓 Ruta 1: Visa de Estudiante" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Nivel', 'Precio anual', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidade da Beira Interior', 'Bachelor / Master', '€1,500 – €3,000', 'ubi.pt', 'https://www.ubi.pt'],
                  ['Universidade de Évora', 'Bachelor / Master', '€2,000 – €3,500', 'uevora.pt', 'https://www.uevora.pt'],
                  ['Universidade do Algarve', 'Bachelor / Master', '€2,000 – €4,000', 'ualg.pt', 'https://www.ualg.pt'],
                  ['Instituto Politécnico de Leiria', 'Bachelor / Master', '€2,500 – €4,000', 'ipleiria.pt', 'https://www.ipleiria.pt'],
                  ['Universidade do Porto', 'Bachelor / Master', '€3,000 – €6,000', 'up.pt', 'https://www.up.pt'],
                  ['Universidade de Lisboa', 'Bachelor / Master', '€3,500 – €7,000', 'ulisboa.pt', 'https://www.ulisboa.pt'],
                  ['NOVA University Lisbon', 'Bachelor / Master', '€4,000 – €8,000', 'unl.pt', 'https://www.unl.pt'],
                  ['Cursos Profesionales (Imigrata)', 'Formación profesional', 'Desde €1,880/año', 'imigrata.com', 'https://imigrata.com/en/portugal/profcourses'],
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

          <SubHead text="💻 Ruta 2: Nómada Digital" />
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.7' }}>
              <strong>Ingresos mínimos:</strong> €3,480/mes (4x salario mínimo portugués)<br />
              <strong>Requisitos:</strong> Trabajo remoto demostrable + seguro médico + alojamiento en Portugal<br />
              <strong>Historial:</strong> 3-6 meses de ingresos en extractos bancarios
            </p>
          </div>

          <SubHead text="🧠 Ruta 3: Trabajo Cualificado" />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.7' }}>
              <strong>Sectores con más demanda:</strong> IT (developer, data analyst, cybersecurity), Ingeniería, Marketing digital, Finanzas, Multilingual roles (Google, Meta, empresas internacionales en Lisboa)<br />
              <strong>Requisitos:</strong> Contrato laboral previo + experiencia demostrable + aplicación desde consulado
            </p>
          </div>

          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>🔴 Solvencia Visa Estudiante:</strong> ~€11,040 (€920 salario mínimo × 12 meses)<br />
              <strong>🟢 Capital mínimo realista:</strong> €4,000 – €6,000 (para moverte)<br />
              <strong>✅ Capital sólido:</strong> €10,000+ (para aprobación y estabilidad)
            </p>
          </div>
          <HackBox text="Capital real = solvencia (€11,000) + alojamiento inicial + gastos administrativos (~€500-€800). Si no tienes €11,000 para la visa de estudiante, considera la ruta de nómada digital o trabajo cualificado — tienen requisitos diferentes." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pre-Careers">
          <Intro text="Los cursos profesionales en Portugal son la entrada más económica al sistema universitario. Desde €1,880/año con formación teórica, talleres prácticos y prácticas opcionales. Al graduarte puedes optar a residencia por trabajo cualificado." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Precio', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cursos Profesionales (1 año)', 'Imigrata', 'Desde €1,880', 'imigrata.com', 'https://imigrata.com/en/portugal/profcourses'],
                  ['International Foundation', 'Universidade do Porto', '€3,000 – €4,000', 'up.pt', 'https://www.up.pt'],
                  ['Foundation Program', 'Universidade de Lisboa', '€3,500 – €5,000', 'ulisboa.pt', 'https://www.ulisboa.pt'],
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
          <BlueBox text="🔵 Los cursos profesionales desde €1,880 son la ruta más económica para entrar legalmente a Portugal como estudiante. Formación teórica + prácticas opcionales. Al completar puedes aplicar a residencia por trabajo cualificado." />
          <HackBox text="Los cursos profesionales en Imigrata son los más baratos de Portugal para internacionales. €1,880/año vs €6,000+ en universidades grandes. Misma visa de estudiante, mismo derecho a residencia." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior">
          <Intro text="Portugal tiene universidades públicas entre las más baratas de Europa. La Universidade da Beira Interior y Évora son las más accesibles para internacionales. Programas disponibles en portugués (más barato) y en inglés (más caro pero más fácil)." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Nivel', 'Precio anual', 'Idioma', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidade da Beira Interior', 'Bachelor / Master', '€1,500 – €3,000', 'PT / EN', 'ubi.pt', 'https://www.ubi.pt'],
                  ['Universidade de Évora', 'Bachelor / Master', '€2,000 – €3,500', 'PT / EN', 'uevora.pt', 'https://www.uevora.pt'],
                  ['Universidade do Algarve', 'Bachelor / Master', '€2,000 – €4,000', 'PT / EN', 'ualg.pt', 'https://www.ualg.pt'],
                  ['Instituto Politécnico de Leiria', 'Bachelor / Master', '€2,500 – €4,000', 'PT / EN', 'ipleiria.pt', 'https://www.ipleiria.pt'],
                  ['Universidade do Porto', 'Bachelor / Master', '€3,000 – €6,000', 'PT / EN', 'up.pt', 'https://www.up.pt'],
                  ['Universidade de Lisboa', 'Bachelor / Master', '€3,500 – €7,000', 'PT / EN', 'ulisboa.pt', 'https://www.ulisboa.pt'],
                  ['NOVA University Lisbon', 'Bachelor / Master', '€4,000 – €8,000', 'EN', 'unl.pt', 'https://www.unl.pt'],
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
          <BlueBox text="💰 HACK UNIVERSIDADES PÚBLICAS: Universidades en Beira Interior, Évora y Algarve cobran desde €1,500/año. Un Máster de €2,000 en Portugal vs €15,000+ en Irlanda. Mismo título europeo reconocido internacionalmente." />
          <HackBox text="Elige programas en inglés si tu portugués es básico — muchas universidades públicas ofrecen Masters completamente en inglés. Beira Interior y Algarve son las más baratas y tienen buenos programas en IT y Business." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Portugal tiene gastos administrativos adicionales que no siempre se mencionan. El más importante: el NIF con representante fiscal si no tienes amigos en Portugal. Sin NIF no puedes hacer nada." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (EUR)', '≈ USD', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico (cobertura mínima €30,000)', '€80 – €150', '$92 – $173', '✅ Sí'],
                  ['Tasa de visa en consulado', '€80 – €120', '$92 – $138', '✅ Sí'],
                  ['Traducciones y apostillas de documentos', '€50 – €150', '$58 – $173', '✅ Sí'],
                  ['Representante fiscal para NIF', '€90 – €150', '$104 – $173', '✅ Sí (si no tienes contacto en PT)'],
                  ['Depósito inicial cuenta bancaria', '€100 – €250', '$115 – $288', '✅ Sí'],
                  ['Solvencia económica (Visa Estudiante)', '€11,040', '$12,696', '✅ Obligatorio visa'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA (PORTUGAL): ~€11,040 basado en €920 salario mínimo × 12 meses. Sin este monto demostrable en extractos bancarios de los últimos 3-6 meses, la visa será rechazada." />
          <HackBox text="Capital mínimo realista = solvencia €11,000 + alojamiento inicial + gastos administrativos ~€600. Capital sólido = €10,000+. Si no llegas a ese número, considera la ruta de nómada digital (requiere €3,480/mes de ingresos) o trabajo cualificado." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En Portugal el NIF lo es todo. Es el primer trámite — antes incluso de abrir banco. Sin NIF no puedes firmar contratos, alquilar vivienda ni trabajar legalmente. La jugada inteligente es sacarlo antes de viajar." />
          <SubHead text="1. NIF — Número de Identificação Fiscal" />
          {[
            ['Opción A', 'Presencial en oficinas de Finanças al llegar (gratis, pero tarda)', null],
            ['Opción B', 'Online con representante fiscal antes de viajar (€90-150, 24-72 horas)', 'https://www.nifonline.pt'],
            ['Opción C', 'Servicios alternativos: e-residence.com o anchorless.io (€90-150)', 'https://anchorless.io'],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. AIMA — Agência para a Integração, Migrações e Asilo" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '10px' }}>Una vez que tienes base legal (estudios, ingresos remotos o contrato), puedes iniciar el proceso de residencia ante AIMA. Costo aproximado €150-200.</p>
          {[
            ['Documentos necesarios: NIF + prueba de ruta elegida + NISS (si aplica) + comprobante de domicilio', null],
            ['Sitio oficial AIMA para residencia en Portugal', 'https://aima.gov.pt'],
            ['Portal de Finanças para gestión del NIF', 'https://www.portaldasfinancas.gov.pt'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="Saca el NIF antes de viajar con representante fiscal online. Con NIF puedes abrir banco, aplicar a trabajos y firmar contratos desde tu primer día en Portugal. Sin NIF pierdes semanas en trámites que bloquean todo lo demás." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Sin NIF no puedes abrir cuenta bancaria tradicional en Portugal. Abre Revolut o Wise antes de viajar para tener IBAN inmediato. Cuando tengas NIF, abre ActivoBank — el favorito de los expatriados, sin comisiones." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revolut / Wise', 'Digital', 'Abre antes de viajar. IBAN europeo inmediato para demostrar fondos y cubrir gastos desde día 1.', 'revolut.com', 'https://revolut.com'],
                  ['ActivoBank', 'Digital/Físico', 'El favorito de expatriados en Portugal. Sin comisiones mensuales. Requiere NIF.', 'activobank.pt', 'https://www.activobank.pt'],
                  ['Millennium BCP', 'Tradicional', 'El banco más grande de Portugal. Muy usado por inmigración y empresas.', 'millenniumbcp.pt', 'https://www.millenniumbcp.pt'],
                  ['Santander Totta', 'Tradicional', 'Gran red de cajeros y sucursales en todo Portugal.', 'santander.pt', 'https://www.santander.pt'],
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
          <HackBox text="Abre Revolut o Wise antes de viajar. Con eso puedes recibir dinero, demostrar fondos y cubrir gastos desde el primer día mientras completas la apertura de banco local en Portugal. ActivoBank es el paso 2 cuando tengas NIF." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales obligatorios para tu proceso en Portugal. AIMA gestiona tu residencia. Portal das Finanças gestiona tu NIF. Sin estos dos activos no puedes avanzar." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Portal das Finanças (NIF)', 'Gestión del NIF fiscal', 'Antes de viajar o semana 1', 'portaldasfinancas.gov.pt', 'https://www.portaldasfinancas.gov.pt'],
                  ['AIMA (Residencia)', 'Residencia legal en Portugal', 'Cuando tengas base legal activa', 'aima.gov.pt', 'https://aima.gov.pt'],
                  ['IEFP (Empleo)', 'Registrar perfil profesional y empleo', 'Semana 2-3', 'iefponline.iefp.pt', 'https://iefponline.iefp.pt'],
                  ['Portal de Visas', 'Visa de estudiante y trámites consulares', 'Antes de viajar', 'vistos.mne.gov.pt', 'https://vistos.mne.gov.pt'],
                  ['Net-Empregos', 'Portal de empleo más grande de Portugal', 'Desde semana 1', 'net-empregos.com', 'https://net-empregos.com'],
                  ['Indeed Portugal', 'Vacantes de todo tipo', 'Desde semana 1', 'indeed.pt', 'https://indeed.pt'],
                  ['OLX Empregos', 'Trabajos rápidos o temporales', 'Desde semana 1', 'olx.pt', 'https://olx.pt'],
                  ['Sapo Emprego', 'Turismo, hoteles y restaurantes', 'Desde semana 1', 'empregos.sapo.pt', 'https://empregos.sapo.pt'],
                  ['Idealista PT', 'Vivienda #1 en Portugal', 'Semana 1 para habitación', 'idealista.pt', 'https://www.idealista.pt'],
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
          <HackBox text="AIMA es el cuello de botella en Portugal — puede tardar meses. Inicia el proceso lo antes posible y ten todos los documentos listos antes de la cita. Quien llega preparado con NIF + documentación activa avanza el doble de rápido." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1173&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="El mercado inmobiliario en Lisboa y Porto es muy competitivo. Las habitaciones buenas se van rápido. El contrato de alquiler es NECESARIO para el proceso de AIMA — sin dirección registrada no puedes completar tu residencia." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal EUR', 'Precio Mensual EUR'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€120 – €180', '€480 – €720'],
                  ['Cuarto individual', '€250 – €400', '€720 – €1,000'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Portugal existen muchas estafas en alquileres publicados en redes sociales. Nunca envíes dinero sin haber visitado la vivienda." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Idealista PT', 'Portal #1 en Portugal', 'Activa alertas — responde inmediatamente', 'idealista.pt', 'https://www.idealista.pt'],
                  ['Imovirtual', 'Portal inmobiliario', 'Muy usado por locales para alquileres largos', 'imovirtual.com', 'https://www.imovirtual.com'],
                  ['Casa Sapo', 'Portal tradicional', 'Miles de propiedades en todo el país', 'casasapo.pt', 'https://www.casasapo.pt'],
                  ['Uniplaces', 'Plataforma estudiantil', 'Alquiler temporal seguro para estudiantes', 'uniplaces.com', 'https://www.uniplaces.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinoamericanos en Portugal — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <HackBox text="En Lisboa y Porto las habitaciones se van muy rápido. Si ves un anuncio interesante, contacta inmediatamente y agenda visita ese mismo día. El primer interesado que visita el piso suele quedarse con la habitación. Activa alertas en Idealista antes de llegar." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1670758941284-bc28b71aa134?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Portugal tiene alta demanda en turismo, hostelería y tecnología. El inglés abre muchas puertas — especialmente en Lisboa donde están los call centers internacionales de Google, Meta y otras multinacionales." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> Muchos restaurantes, cafés y hoteles prefieren contratar personas que se presenten directamente. Especialmente en zonas turísticas como <strong>Lisboa, Porto, Algarve y Cascais</strong>.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/mes EUR', '≈ USD', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€750 – €1,100', '$863 – $1,265', 'Indeed / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€750 – €1,000', '$863 – $1,150', 'Indeed / Agencias'],
                  ['Hotels', 'Reception / Hotel Staff', '€900 – €1,200', '$1,035 – $1,380', 'Sapo Emprego / LinkedIn'],
                  ['Retail', 'Sales Assistant', '€850 – €1,100', '$978 – $1,265', 'Net-Empregos / Indeed'],
                  ['Delivery', 'Delivery Rider / Courier', '€900 – €1,400', '$1,035 – $1,610', 'Glovo / Uber Eats'],
                  ['IT / Tech (cualificado)', 'Developer / Data Analyst', '€1,500 – €3,000', '$1,725 – $3,450', 'LinkedIn / empresas directas'],
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
          <HackBox text="Lisboa tiene call centers internacionales de Google, Meta, Amazon y otras multinacionales que contratan hispanohablantes. Inglés + español puede darte acceso a €1,500-2,500/mes — mucho más que hospitality. Busca en LinkedIn 'customer support Lisboa'." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Salarios en Portugal son más bajos que Irlanda o España, pero el costo de vida también es más bajo. Con €700-800/mes puedes cubrir renta + comida + transporte en ciudades secundarias." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/mes EUR', '≈ USD/mes'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€750 – €1,100', '$863 – $1,265'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€750 – €1,000', '$863 – $1,150'],
                  ['Hotels', 'Reception / Hotel Staff', '€900 – €1,200', '$1,035 – $1,380'],
                  ['Retail', 'Sales Assistant', '€850 – €1,100', '$978 – $1,265'],
                  ['Delivery', 'Rider / Courier', '€900 – €1,400', '$1,035 – $1,610'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 VENTAJA PORTUGAL: Costo de vida más bajo que España, Irlanda o Malta. Una habitación compartida en Évora o Braga cuesta €300-400/mes. Con €900/mes de salario en hospitality puedes vivir con comodidad fuera de Lisboa." />
          <HackBox text="Evita Lisboa y Porto si priorizas el ahorro. Ciudades como Évora, Braga, Faro o Coimbra tienen rentas 40-50% más baratas y menos competencia por trabajo. Misma visa, mismo acceso a AIMA, pero mucho menos gasto mensual." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Portugal requiere planificación antes de viajar — especialmente el NIF. Quien llega con NIF activo avanza el doble de rápido. Sin NIF, las primeras 2-3 semanas se van en trámites bloqueantes." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Pagar curso + Carta de Aceptación + Seguro médico + NIF con representante fiscal online + Visa Tipo D', '2-3 meses antes'],
                  ['Semana 1', 'SIM card + Abrir ActivoBank (con NIF ya activo) + Buscar habitación permanente', 'Día 1-7'],
                  ['Semana 2-4', 'Contrato de alquiler firmado + Iniciar proceso AIMA + Buscar empleo activamente', 'Día 7-30'],
                  ['Mes 2', 'NISS con empleador + Empezar a trabajar + Primer salario', 'Día 30-60'],
                  ['Mes 3-4', 'AIMA aprobada + Residencia activa + Estabilizar ingresos', 'Día 60-120'],
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
          <HackBox text="El orden en Portugal es: NIF (antes de viajar) → Banco → Alquiler → AIMA → NISS → Trabajo. Cada paso desbloquea el siguiente. Sin NIF nada avanza. Con NIF listo desde antes de viajar, puedes estar empleable en 2-4 semanas." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Portugal no requiere espera de 90 días como Malta. Si llegas con NIF activo puedes estar trabajando en 2-4 semanas. El documento clave es el NIF — todo lo demás depende de él." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Visa activa (estudiante, nómada o cualificado)', 'NIF activo', 'NISS (Seguridad Social)', 'Contrato de trabajo o actividad registrada'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 2-4 semanas (si ya tienes NIF)</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Contrato firmado', 'Alta en Seguridad Social (NISS)', 'Registro en payroll', 'Cuenta bancaria activa'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 3-5 semanas desde que empiezas a trabajar</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>~2-4 semanas (con NIF listo)</strong><br />
              • Puedes cobrar tu primer salario en: <strong>~1-2 meses desde llegada</strong>
            </p>
          </div>
          <HackBox text="Sin NIF pierdes semanas en trámites que bloquean todo lo demás. Con NIF antes de viajar, puedes estar empleable en 2-4 semanas. Esa diferencia puede ser de €800-1,100 de salario que pierdes o ganas dependiendo de si llegas preparado." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. En Portugal muchas oportunidades y soluciones aparecen antes en comunidades de networking que en portales oficiales. Pero hoy el enfoque es combinar networking + ingresos + estrategia previa." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
            ['AIMA (Residencia)', 'aima.gov.pt — Residencia y estatus migratorio'],
            ['Portal das Finanças', 'portaldasfinancas.gov.pt — NIF y trámites fiscales'],
            ['IEFP (Empleo)', 'iefponline.iefp.pt — Empleo y formación'],
            ['Comunidad L&T', 'Latinos en Lisboa, Porto y Algarve — ver grupos abajo'],
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
                  ['Estafa de Vivienda', 'No enviar dinero → reportar en plataforma + denunciar en Policía', 'Policía Portugal'],
                  ['Problemas con Residencia (AIMA)', 'Revisar estado con AIMA o institución educativa', 'aima.gov.pt'],
                  ['Problemas con NIF', 'Contactar representante fiscal o Finanças directamente', 'portaldasfinancas.gov.pt'],
                  ['Retraso en documentos', 'Contactar Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Sistema público o privado según cobertura del seguro', '112'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Portugal</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Portugal — links próximamente
            </p>
          </div>
          <HackBox text="En Portugal muchas oportunidades aparecen primero en comunidades y networking. Únete a grupos de WhatsApp de latinos en Lisboa y Porto desde el día 1. Muchas habitaciones y trabajos se publican ahí antes que en portales oficiales." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1670097937762-943d7f0e8d80?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Portugal como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Portugal 🇵🇹'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Visa de Estudiante (Tipo D4)'],
                  ['Rutas disponibles', 'Estudiante / Nómada Digital / Trabajo Cualificado'],
                  ['Horas de trabajo (estudiante)', 'Hasta 20h/semana'],
                  ['Vacaciones', 'Tiempo completo'],
                  ['Solvencia obligatoria', '~€11,040 (€920 × 12 meses)'],
                  ['Costo promedio curso', '€1,880 – €5,000/año'],
                  ['Residencia', 'AIMA (€150-200)'],
                  ['Renta cuarto compartido', '€480 – €720/mes'],
                  ['Empleos más comunes', 'Hospitality, Turismo, Retail, IT (Lisboa)'],
                  ['Salario promedio entrada', '€750 – €1,400/mes'],
                  ['Tiempo hasta primer trabajo', '2-4 semanas (con NIF listo)'],
                  ['Tiempo hasta primer cobro', '1-2 meses desde llegada'],
                  ['Documento clave', 'NIF — obtener antes de viajar'],
                  ['Idioma', 'Portugués (inglés en multinacionales)'],
                  ['Camino a residencia', 'AIMA → Residencia Permanente (5 años)'],
                  ['Nivel de dificultad', 'Medio'],
                  ['Mejores ciudades', 'Lisboa, Porto, Algarve, Braga'],
                  ['Ventaja única', 'Universidades más baratas de Europa + ruta nómada digital'],
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
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Portugal:\n\n' + feedback)}`, '_blank')
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