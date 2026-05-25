'use client'
import { useState } from 'react'

export default function Malta() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?q=80&w=1170&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* NAV */}
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>

        {/* HERO CONTENT */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇲🇹</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Malta</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Europa · Work and Study</p>
          <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Fácil</span>
        </div>

        {/* BOTTOM FADE */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo inicial (Cursos)', '€2,500 - €4,500'], ['🕐', 'Duración', '6 - 12 meses'], ['📊', 'Dificultad', 'Fácil']].map((s, i) => (
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
          'Ruta Estudiante → Single Permit: la vía más segura y legal para vivir y trabajar en Malta',
          'Clima mediterráneo, inglés oficial y costo de vida más bajo que Irlanda o Canadá',
          'e-Residence Card: tu ID maltés en menos de 90 días desde llegada',
          '11 escuelas verificadas en St. Julian\'s, Sliema y Gozo con precios desde €2,500',
          'Comunidad latina activa — grupos de WhatsApp para vivienda y trabajo',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587974928552-4f4aac51b45d?q=80&w=1206&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Malta es la isla mediterránea que combina inglés oficial, clima cálido todo el año y un costo de vida más bajo que cualquier otro destino europeo de habla inglesa. La ruta es clara: entras como estudiante, activas tu e-Residence y, después de 90 días, consigues un empleador que tramite tu Single Permit." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Ruta principal:</strong> Student Visa → e-Residence → 90 días → Single Permit (permiso de trabajo). Puedes trabajar <strong>hasta 20 horas/semana</strong> una vez aprobado el permiso.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Acelerador de puesta en marcha:</strong> sincronizamos registros y tiempos (residencia, estudio y trabajo) con tu plan de ingresos para cuidar tu ahorro y acelerar el retorno de tu inversión.
          </p>
          <BlueBox text="💱 Estándar de moneda (Malta): primero moneda local y al lado el equivalente aproximado en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD)." />
          <HackBox text="En Malta el contrato de alquiler es tan importante como el curso. Sin un contrato de vivienda registrado, no hay e-Residence. Y sin e-Residence, te toca salir al día 91. Asegura tu cama antes de salir a buscar trabajo." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="Elegir bien tu escuela es la decisión financiera más importante. Las escuelas AM son más caras pero te dejan las tardes libres para trabajar. Las PM son más baratas y liberan las mañanas. Malta tiene opciones en St. Julian's (más empleo), Gozo (más económico) y Sliema." />
          <SubHead text="🇲🇹 Matriz de Escuelas de Inglés: Malta 2026" />
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px', lineHeight: '1.6' }}>11 escuelas verificadas ordenadas por precio. AM = turno mañana, PM = turno tarde.</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio AM (25 sem)', 'Precio PM (25 sem)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Gateway School (GSE)', "St. Julian's", '€2,500 – €2,850', '€2,200 – €2,400', 'english-malta.com', 'https://english-malta.com'],
                  ['International House Malta', "St. Julian's", '€2,800 – €3,200', '€2,400 – €2,700', 'ihmalta.com', 'https://ihmalta.com'],
                  ['BELS Malta', 'Gozo / St Paul\'s Bay', '€2,900 – €3,300', '€2,500 – €2,800', 'belsmalta.com', 'https://belsmalta.com'],
                  ['English Path (EP)', "St. Julian's", '€3,100 – €3,600', '€2,650 – €3,000', 'englishpath.com', 'https://englishpath.com'],
                  ['Clubclass Malta', 'Swieqi', '€3,250 – €3,700', '€2,800 – €3,200', 'clubclass.com', 'https://clubclass.com'],
                  ['Sprachcaffe Malta', "St. Julian's", '€3,200 – €3,700', '€2,900 – €3,300', 'sprachcaffe.com', 'https://sprachcaffe.com'],
                  ['Inlingua Malta', 'Sliema', '€3,300 – €3,800', '€3,000 – €3,400', 'inlinguamalta.com', 'https://inlinguamalta.com'],
                  ['ACE English Malta', "St. Julian's", '€3,500 – €3,900', '€3,200 – €3,500', 'aceenglishmalta.com', 'https://aceenglishmalta.com'],
                  ['ESE Malta', "St. Julian's", '€3,600 – €4,000', '€3,200 – €3,600', 'ese-edu.com', 'https://ese-edu.com'],
                  ['EC English Malta', "St. Julian's", '€4,000 – €4,500', '€3,600 – €4,000', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Malta University Language School', 'Lija', '€3,800 – €4,200', '€3,400 – €3,700', 'universitylanguageschool.com', 'https://universitylanguageschool.com'],
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
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>🔵 Solvencia con alojamiento pagado:</strong> €28/día → aprox. €5,040 para 6 meses<br />
              <strong>🔵 Solvencia sin alojamiento pagado:</strong> €48/día → aprox. €8,640 para 6 meses<br />
              <strong>🔵 Capital recomendado (con alojamiento):</strong> €5,500+ para instalación e imprevistos
            </p>
          </div>
          <HackBox text="Antes de elegir escuela aplica este filtro: ¿El horario AM o PM te permite trabajar? ¿Está cerca de zonas de empleo (St. Julian's tiene más trabajo)? ¿El precio total cabe en tu capital? Si no pasa los 3 filtros, descártala." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pre-Careers">
          <Intro text="Si tu objetivo es una universidad maltesa, los programas Foundation son tu puerta de entrada. Son más cortos y más baratos que un Bachelor completo. Al graduarte de Level 6+, puedes aplicar a la Stay-Back Visa por 6-9 meses para buscar trabajo profesional." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Programa', 'Duración', 'Precio', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['SBM Malta', 'NCUK International Foundation Year', '1 año', '€4,500', 'sbm.edu.mt', 'https://sbm.edu.mt'],
                  ['GBS Malta', 'Foundation Degree (IT / Business)', '1 año', '€5,000', 'gbs.edu.mt', 'https://gbs.edu.mt'],
                  ['University of Malta', 'Foundation Studies (Humanities / Nursing)', '1 año', '€6,600', 'um.edu.mt', 'https://um.edu.mt'],
                  ['Global College Malta', 'Foundation Business / Management', '1 año', '€6,800 – €8,500', 'gcm.edu.mt', 'https://gcm.edu.mt'],
                  ['University of Malta', 'Foundation in Medical & Dental', '1 año', '€16,000', 'um.edu.mt', 'https://um.edu.mt'],
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
          <BlueBox text="🔵 STAY-BACK VISA: Al graduarte de un programa Level 6 o superior, puedes aplicar a una extensión de residencia de 6 a 9 meses para buscar trabajo profesional legalmente en Malta." />
          <HackBox text="Los programas Foundation son la ruta más inteligente si quieres universidad sin las notas europeas. Cuestan menos que un Bachelor y te dan acceso a la Stay-Back Visa. Verifica que el programa sea Level 6+ antes de pagar." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior">
          <Intro text="Malta tiene universidades reconocidas internacionalmente con precios muy competitivos. El programa Get Qualified permite recuperar hasta el 70% del costo del máster en créditos fiscales si te quedas trabajando en Malta después de graduarte." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Nivel', 'Precio anual', 'Precio total', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Global College Malta', 'Bachelor / Master', '€4,000 – €4,500', '€12k – €18k', 'gcm.edu.mt', 'https://gcm.edu.mt'],
                  ['International European University (IEU)', 'Bachelor / Master', '€5,000 – €5,500', '€15k – €20k', 'ieumalta.com', 'https://ieumalta.com'],
                  ['MCAST', 'Diploma / Bachelor', '€6,000 – €8,000', '€12k – €20k', 'mcast.edu.mt', 'https://mcast.edu.mt'],
                  ['University of Malta', 'Bachelor / Master', '€6,000 – €12,000', '€18k – €36k', 'um.edu.mt', 'https://um.edu.mt'],
                  ['London School of Commerce Malta', 'Master (MBA)', '€7,000 – €8,000', '€7k – €8k', 'lscmalta.edu.mt', 'https://lscmalta.edu.mt'],
                  ['GBS Malta', 'Bachelor / Master', '€7,500 – €9,000', '€15k – €25k', 'gbs.edu.mt', 'https://gbs.edu.mt'],
                  ['STC Higher Education Malta', 'Bachelor / Master (IT, Business)', '€8,000 – €10,000', '€16k – €30k', 'stc.academy', 'https://stc.academy'],
                  ['American University of Malta', 'Bachelor / Master', '€15,000 – €17,000', '€45k – €50k', 'aum.edu.mt', 'https://aum.edu.mt'],
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
          <BlueBox text="💰 HACK GET QUALIFIED: Si terminas un Máster (Level 7) y te quedas trabajando en Malta, el gobierno te devuelve hasta el 70% del costo del curso en créditos fiscales. Un máster de €8,000 termina costándote solo €2,400." />
          <HackBox text="Global College Malta e IEU son los más accesibles para latinoamericanos. Sus programas califican para la Stay-Back Visa. Verifica que el programa sea Level 6+ antes de pagar matrícula." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Estos son los costos que tu escuela NO incluye en el precio del curso. Son absolutamente obligatorios. La solvencia en Malta se calcula por día de estancia, no es un monto fijo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (EUR)', '≈ USD', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico', '€150', '$173', '✅ Sí'],
                  ['Examen Final del curso', '€150 - €200', '$173 - $230', '✅ Sí'],
                  ['Materiales / Libros', '€40 - €70', '$46 - $81', '✅ Sí'],
                  ['e-Residence Card (Identità Malta)', '€70', '$81', '✅ Sí'],
                  ['Solvencia (con alojamiento pagado)', '€5,040', '$5,796', '✅ Obligatorio visa'],
                  ['Solvencia (sin alojamiento pagado)', '€8,640', '$9,936', '✅ Obligatorio visa'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA (MALTA): €28/día con alojamiento pagado (€5,040 para 6 meses) o €48/día sin alojamiento (€8,640). Sin estos fondos demostrables en extractos de los últimos 3 meses, la visa será RECHAZADA." />
          <HackBox text="Tu Capital de Ejecución Real = precio de tu escuela + €5,040 de solvencia + €450 de gastos fijos administrativos. Ese es el número mínimo que necesitas antes de arrancar. Si no lo tienes completo, no inicies el proceso." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="El aterrizaje en Malta tiene una regla de oro diferente a Irlanda: los primeros 90 días son de instalación legal, NO de trabajo. Úsalos para activar tu e-Residence, abrir banco y conseguir empleador." />
          <SubHead text="1. e-Residence Card — Tu ID maltés" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>Sin e-Residence no puedes abrir cuenta bancaria formal, firmar contratos ni solicitar el permiso de trabajo. Es el primer trámite obligatorio al llegar. Debes completarlo antes del día 90.</p>
          {[
            ['Paso 1', 'Al llegar, recoge tus documentos originales en la academia (Letter of Acceptance física)', null],
            ['Paso 2', 'Saca cita en Identità Malta — oficina de Msida', 'https://identitamalta.com'],
            ['Paso 3', 'Adjuntar: Pasaporte + Contrato de alquiler registrado + Formulario CEA Form N', null],
            ['Paso 4', 'Pagar €70 por la emisión de la e-Residence Card', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Single Permit — Permiso de Trabajo (después de 90 días)" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '10px' }}>No puedes trabajar legalmente hasta después de 90 días. El proceso lo inicia tu empleador en Jobsplus. El número de Seguridad Social y Tax se tramitan automáticamente al aprobarse.</p>
          {[
            ['Espera legal: 90 días desde llegada antes de poder solicitar el permiso', null],
            ['Tu empleador inicia el trámite del Single Permit en Jobsplus vinculado a su empresa', 'https://jobsplus.gov.mt'],
            ['Sin Single Permit aprobado, cualquier trabajo es ilegal y puede resultar en deportación', null],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="Los primeros 90 días son de instalación, no de trabajo. Úsalos bien: activa e-Residence, abre banco, busca empleador. El error más común es llegar sin ahorros para 3 meses. Malta requiere paciencia al principio pero la recompensa es grande." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Para cobrar tu nómina necesitas IBAN europeo o maltés. Abre primero una cuenta digital (Revolut o N26) los primeros días. Los bancos tradicionales en Malta pueden tardar 2-4 semanas en abrir cuenta." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revolut / N26', 'Digital', 'IBAN europeo activo en 24h. Usar dirección maltesa para recibir tarjeta física.', 'revolut.com', 'https://revolut.com'],
                  ['Bank of Valletta (BOV)', 'Tradicional', 'El banco más grande de Malta. Estándar para domiciliar nóminas y pagos.', 'bov.com', 'https://bov.com'],
                  ['HSBC Malta', 'Tradicional', 'Ideal si ya tienes cuenta HSBC en otro país. Muy sólido para perfiles profesionales.', 'hsbc.com.mt', 'https://hsbc.com.mt'],
                  ['Moneybase', 'Digital Local', 'Primer ecosistema financiero digital nacido en Malta. Útil para pagos locales.', 'moneybase.com', 'https://moneybase.com'],
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
          <HackBox text="No esperes al banco tradicional. Abre N26 con tu dirección de Malta apenas pises la isla. El sistema bancario tradicional de Malta es famoso por ser lento (2-4 semanas). Muévete rápido con digital y usa BOV para la nómina formal." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Estos son los portales oficiales obligatorios para tu proceso en Malta. Guárdalos desde el día 1. Sin Jobsplus no puedes trabajar legalmente. Sin Identità Malta no tienes e-Residence." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Identità Malta', 'e-Residence Card y estatus migratorio', 'Semana 1-2 — cita obligatoria antes del día 90', 'identitamalta.com', 'https://identitamalta.com'],
                  ['Jobsplus', 'Permiso de trabajo y Tax Number', 'Mes 3 — tu empleador lo inicia', 'jobsplus.gov.mt', 'https://jobsplus.gov.mt'],
                  ['Social Security Malta', 'Verificar aportaciones al seguro social', 'Desde que empieces a trabajar', 'socialsecurity.gov.mt', 'https://socialsecurity.gov.mt'],
                  ['Jobs in Malta', 'Portal de empleo local', 'Desde semana 1', 'jobsinmalta.com', 'https://jobsinmalta.com'],
                  ['Keepmeposted', 'Vacantes en hospitality y retail', 'Desde semana 1', 'keepmeposted.com.mt', 'https://keepmeposted.com.mt'],
                  ['Indeed Malta', 'Vacantes generales', 'Desde semana 1', 'indeed.com.mt', 'https://indeed.com.mt'],
                  ['Maltapark', 'Clasificados — vivienda y trabajo', 'Desde semana 1', 'maltapark.com', 'https://maltapark.com'],
                  ['QuickLets', 'Agencia de alquiler para estudiantes', 'Semana 1-2 para vivienda', 'quicklets.com.mt', 'https://quicklets.com.mt'],
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
          <HackBox text="Jobsplus es el portal más crítico en Malta. Sin registro en Jobsplus, trabajas en negro y te pueden deportar. Tu empleador lo inicia — pero tú debes hacer seguimiento. Verifica que tu registro esté activo antes de tu primer día de trabajo." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548780416-f23a4186ceb9?q=80&w=1246&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="El mercado de vivienda en Malta es de alta rotación. El contrato de alquiler REGISTRADO es obligatorio para la e-Residence — sin él no puedes completar tu trámite migratorio. En Malta, a diferencia de Irlanda, Facebook es la herramienta #1 para encontrar vivienda." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal EUR', 'Precio Mensual EUR'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€60 – €80', '€250 – €320'],
                  ['Cuarto individual', '€80 – €110', '€320 – €550'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos a distancia. Si no has probado la llave en la cerradura físicamente, ES ESTAFA. El contrato de alquiler debe estar REGISTRADO — no solo firmado." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Maltapark', 'Portal Local #1', 'El sitio #1 de clasificados en la isla', 'maltapark.com', 'https://maltapark.com'],
                  ['QuickLets', 'Agencia', 'La más grande y rápida para estudiantes', 'quicklets.com.mt', 'https://quicklets.com.mt'],
                  ['Zanzi Homes', 'Agencia', 'Especialistas en contratos largos y zonas residenciales', 'zanzihomes.com', 'https://zanzihomes.com'],
                  ['Facebook Marketplace', 'Social', 'Fuente confiable para tratos directos con dueños', 'Facebook Malta', 'https://facebook.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Mexicanos, Colombianos, Argentinos en Malta', 'Ver grupos', '#'],
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
          <HackBox text="No busques suerte, busca contactos. Pide los links de WhatsApp de estudiantes y grupos latinos apenas llegues a Malta. Si ves una habitación disponible, escribe inmediatamente — las buenas opciones se alquilan en menos de 24 horas." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527155431803-74e5f93c7111?q=80&w=1088&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Con Single Permit puedes trabajar hasta 20 horas/semana. Malta tiene sectores con alta rotación y acceso rápido para recién llegados. El iGaming es único de Malta — paga mejor que hospitality y requiere inglés intermedio." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>Estrategia CV en mano:</strong> Imprime 30-50 copias de tu CV. El mejor horario es entre <strong>3:00 PM – 5:00 PM</strong>. Di: <em>"I'm looking for a Floor Staff position, I have immediate availability"</em>.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora EUR', 'Canal principal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff / Kitchen Assistant', '€7 – €9', 'CV en mano en restaurantes / Indeed'],
                  ['Cleaning Services', 'Cleaner / Housekeeping', '€7 – €8', 'Grupos Facebook / Agencias'],
                  ['Hotels & Tourism', 'Hotel Staff / Reception Assistant', '€8 – €10', 'LinkedIn / Jobs in Malta'],
                  ['iGaming / Customer Support', 'Customer Support Agent', '€10 – €12', 'LinkedIn / portales especializados'],
                  ['Delivery / Logistics', 'Courier / Delivery Rider', '€8 – €11', 'Bolt Food / Wolt'],
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
          <HackBox text="En Malta valoran mucho la actitud y disponibilidad inmediata. Si tu inglés no es perfecto pero puedes comunicarte, igual puedes conseguir trabajo rápido en hospitality o limpieza. El iGaming es el sector premium — inglés B2 puede darte €10-12/hora." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Estimación de ingresos reales para estudiantes con Single Permit trabajando 20 horas semanales. Malta tiene salario mínimo de €8.24/hora (2026)." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/hora EUR', '≈ USD', 'Mensual EST. (20h/sem)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€7 – €9', '$8 – $10', '€560 – €720'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €8', '$8 – $9', '€560 – €640'],
                  ['Hotels', 'Hotel Staff / Reception', '€8 – €10', '$9 – $12', '€640 – €800'],
                  ['iGaming', 'Customer Support', '€10 – €12', '$12 – $14', '€800 – €960'],
                  ['Delivery', 'Rider / Courier', '€8 – €11', '$9 – $13', '€640 – €880'],
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
          <BlueBox text="💡 Malta tiene un costo de vida más bajo que Irlanda o Canadá. Con €700-800/mes puedes cubrir renta + comida + transporte. El iGaming es la joya oculta — €960/mes con solo 20h/semana es muy sólido para Malta." />
          <HackBox text="Con 20h/semana en iGaming ganas €800-960/mes. Con hospitality €560-720/mes. La diferencia es el inglés: B2 te abre el iGaming. Invierte 3 meses en mejorar tu inglés y multiplicas tus ingresos." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Malta tiene un timeline diferente a Irlanda. Los primeros 3 meses son de instalación legal — no de trabajo. Planifica tu ahorro para sobrevivir esos 3 meses antes del primer ingreso." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Pagar escuela + Letter of Acceptance + Seguro médico + Reservar hostel 1-2 semanas + Preparar pasaporte y fondos', '2-3 meses antes'],
                  ['Semana 1-2', 'SIM card + Abrir Revolut/N26 + Buscar habitación permanente + Recoger documentos en academia', 'Día 1-14'],
                  ['Semana 2-4', 'Cita en Identità Malta + Contrato de alquiler registrado + e-Residence Card (€70)', 'Día 14-30'],
                  ['Mes 1-3', 'Networking activo + Buscar empleador + Preparar CV en inglés + Entregar CV en restaurantes y hoteles', 'Día 30-90'],
                  ['Mes 3', 'Solicitar Single Permit con empleador (día 90+) + Tax Number', 'Día 90+'],
                  ['Mes 4-5', 'Single Permit aprobado + Empezar a trabajar 20h/semana + Primer salario', 'Día 120-150'],
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
          <HackBox text="El orden en Malta es: e-Residence → Banco → Buscar empleador → Single Permit. Sin e-Residence no puedes avanzar nada. Sin contrato de alquiler registrado no hay e-Residence. El primer paso es asegurar tu vivienda — todo lo demás se construye sobre eso." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Malta es el destino con el timeline más largo hasta el primer ingreso. Son 4-5 meses desde la llegada. Planifica tu capital de reserva en consecuencia." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Visa de estudiante activa', 'Cumplir 90 días en Malta', 'e-Residence Card activa', 'Single Permit aprobado por Jobsplus', 'Tax Number activo'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 3 meses + 2-6 semanas desde que llegas</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Permiso aprobado', 'Firma de contrato', 'Alta en payroll', 'Cuenta bancaria activa'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 3-6 semanas desde que empiezas a trabajar</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>~4-5 meses desde que llegas</strong><br />
              • Puedes cobrar tu primer salario en: <strong>~5-6 meses desde que llegas</strong>
            </p>
          </div>
          <HackBox text="Malta requiere paciencia. Necesitas ahorros para 4-5 meses sin trabajar. Si llegas con menos de €5,000 disponibles después de pagar la escuela, es muy arriesgado. Planifica bien tu capital de reserva antes de salir." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. Lo que diferencia a quien los resuelve rápido de quien se paraliza es tener el protocolo claro antes de que pasen. Guarda estos contactos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '112 o 999 — Policía, Ambulancia, Bomberos'],
            ['Identità Malta', 'identitamalta.com — e-Residence y estatus migratorio'],
            ['Jobsplus', 'jobsplus.gov.mt — Permiso de trabajo y Tax Number'],
            ['GP (Médico)', 'Centros de salud públicos en diferentes zonas de Malta'],
            ['Comunidad L&T', 'Mexicanos, Ticos, Colombianos, Argentinos en Malta — ver grupos abajo'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Malta y contactar Embajada/Consulado de tu país', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Facebook/Marketplace y denunciar en Policía local', 'Policía Malta'],
                  ['Problemas con e-Residence', 'Contactar directamente Identità Malta con documentos completos', 'identitamalta.com'],
                  ['Single Permit rechazado', 'Revisar con empleador el estado en Jobsplus', 'jobsplus.gov.mt'],
                  ['Retraso en documentos de escuela', 'Contactar directamente al Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Ir al centro de salud más cercano con seguro médico', '999 / 112'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Malta</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Malta — links próximamente
            </p>
          </div>
          <HackBox text="La mayoría de problemas en Malta se resuelven hablando directamente con la escuela, el empleador o los servicios públicos. Mantén la calma, usa traductor si es necesario y sigue el proceso paso a paso." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661963984279-1b0fa1b3ac0d?q=80&w=1171&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Malta como destino de migración para latinoamericanos. Úsalo para comparar con otros países del blueprint." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Malta 🇲🇹'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Student Visa → Single Permit'],
                  ['Duración mínima del curso', '25 semanas (6 meses)'],
                  ['Espera para trabajar', '90 días desde llegada'],
                  ['Horas de trabajo', '20 horas/semana (con Single Permit)'],
                  ['Solvencia (con alojamiento)', '€5,040 (€28/día × 180 días)'],
                  ['Solvencia (sin alojamiento)', '€8,640 (€48/día × 180 días)'],
                  ['Costo promedio curso inglés', '€2,500 – €4,500 (25 semanas)'],
                  ['e-Residence Card', '€70 (equivalente al IRP de Irlanda)'],
                  ['Renta cuarto compartido', '€250 – €320/mes'],
                  ['Empleos más comunes', 'Hospitality, iGaming, Cleaning, Delivery'],
                  ['Salario promedio entrada', '€7 – €12 por hora'],
                  ['Tiempo hasta primer trabajo', '4-5 meses desde llegada'],
                  ['Tiempo hasta primer cobro', '5-6 meses desde llegada'],
                  ['Idioma oficial', 'Inglés y Maltés'],
                  ['Camino a residencia', 'Stay-Back Visa → Residencia Permanente'],
                  ['Nivel de dificultad', 'Fácil'],
                  ['Mejores zonas', "St. Julian's / Sliema / Gozo"],
                  ['Comunidad latina', 'Creciente — grupos WhatsApp activos'],
                  ['Ventaja única', 'iGaming + Get Qualified (70% devolución máster)'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Malta:\n\n' + feedback)}`, '_blank')
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