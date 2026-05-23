'use client'
import { useState } from 'react'

export default function Irlanda() {
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

      {/* HEADER */}
      <div style={{ backgroundColor: '#1a1a2e', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
      </div>

      {/* HERO */}
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1570875450638-044bca38ec92?q=80&w=1234&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '56px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇮🇪</div>
        <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px' }}>Irlanda</h1>
        <p style={{ color: '#ccc', fontSize: '15px', margin: '0 0 14px' }}>Europa · Work and Study</p>
        <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Fácil</span>
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo inicial (Cursos)', '€3,000 - €5,000'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Fácil']].map((s, i) => (
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
        {['Stamp 2 permite estudiar full-time y trabajar 20h/semana (40h en vacaciones)', 'PPS Number en MyWelfare.ie apenas llegues — clave para evitar Emergency Tax del 40%', 'Stamp 1G post-graduación: trabajá tiempo completo 1-2 años como camino a residencia', 'Escuelas desde €3,000/año — 18 opciones verificadas en Dublín y Limerick', 'Comunidad latina consolidada — grupos de WhatsApp para vivienda y trabajo'].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span style={{ color: '#22c55e', fontSize: '16px', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.5' }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px' }}>

        {/* FREE */}
        <Section id="autoridad" emoji="🧭" title="Encabezado de Autoridad" free={true}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505576457712-b769c0c0a354?q=80&w=686&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', height: '160px', marginBottom: '16px' }} />
          <Intro text="Irlanda es el destino número 1 para latinoamericanos en Europa. Inglés oficial, alta demanda laboral, comunidad latina consolidada y un camino claro hacia la residencia permanente a través del Stamp 1G post-graduación." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Stamp 2 (Student Visa):</strong> te permite estudiar a tiempo completo y trabajar <strong>20 horas/semana</strong> durante clases y <strong>40 horas/semana</strong> en vacaciones oficiales.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Acelerador de puesta en marcha:</strong> una hoja de ruta clara para que aterrices, te actives legalmente y empieces a generar ingresos sin improvisar. La clave es el orden y el timing correcto desde el día 1.
          </p>
          <BlueBox text="💱 Estándar de moneda: todos los precios van en EUR primero, luego el equivalente en USD. Referencia: 1 EUR ≈ $1.10 USD. Ejemplo: €300 → $330 USD." />
          <HackBox text="El PPS Number es la llave para todo en Irlanda. Sin él, tu empleador te aplicará Emergency Tax (~40%). Prioriza conseguirlo en la primera semana usando un Job Offer como prueba de necesidad." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="Elegir bien tu escuela es la decisión financiera más importante de tu proceso. No se trata solo de estudiar — es tu inversión base que determina tu velocidad de inserción laboral. Las escuelas AM son más caras pero te dejan las tardes libres para trabajar. Las PM son más baratas y te dejan las mañanas libres." />
          <SubHead text="🇮🇪 Matriz: Dublín (Sede Central)" />
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px', lineHeight: '1.6' }}>18 escuelas verificadas en Dublín ordenadas por precio. AM = turno mañana (más caro), PM = turno tarde (más barato y libera mañanas para trabajar).</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio AM', '≈ USD', 'Precio PM', '≈ USD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Active Language Learning', 'Dublin 1', '€3,000', '$3,300', '€2,700', '$2,970', 'all.ie', 'https://all.ie'],
                  ['Central School of English', 'Dublin', '€3,000', '$3,300', '€2,700', '$2,970', 'centralschool.ie', 'https://centralschool.ie'],
                  ['ICOT College Dublin', 'Dublin 1/2', '€3,000', '$3,300', '€2,800', '$3,080', 'icot.ie', 'https://icot.ie'],
                  ['ULearn English School', 'Dublin 1', '€3,100', '$3,410', '€2,800', '$3,080', 'ulearnschool.com', 'https://ulearnschool.com'],
                  ['Erin School of English', 'Dublin 1', '€3,200', '$3,520', '€2,900', '$3,190', 'erincollege.com', 'https://erincollege.com'],
                  ['Ned Training Centre', 'Dublin 1', '€3,200', '$3,520', '€2,900', '$3,190', 'ned.ie', 'https://ned.ie'],
                  ['GoLearn', 'Dublin 1', '€3,300', '$3,630', '€3,000', '$3,300', 'golearnireland.com', 'https://golearnireland.com'],
                  ['Seda College', 'Dublin 1', '€3,500', '$3,850', '€3,200', '$3,520', 'seda.college', 'https://seda.college'],
                  ['Swan Training Institute', 'Dublin 2', '€3,700', '$4,070', '€3,200', '$3,520', 'swantraining.ie', 'https://swantraining.ie'],
                  ['ATC Language Schools', 'Dublin 2', '€3,800', '$4,180', '€3,300', '$3,630', 'atclanguageschools.com', 'https://atclanguageschools.com'],
                  ['Delfin English School', 'Dublin 1', '€3,800', '$4,180', '€3,400', '$3,740', 'delfin.ie', 'https://delfin.ie'],
                  ['ISI Dublin', 'Dublin 2', '€3,900', '$4,290', '€3,400', '$3,740', 'isi-ireland.ie', 'https://isi-ireland.ie'],
                  ['CES Dublin', 'Dublin 2', '€3,900', '$4,290', '€3,400', '$3,740', 'ces-schools.com', 'https://ces-schools.com'],
                  ['Dorset College', 'Dublin 1', '€4,200', '$4,620', '€3,800', '$4,180', 'dorset-college.ie', 'https://dorset-college.ie'],
                  ['EC English Dublin', 'Dublin 2', '€4,200', '$4,620', '€3,700', '$4,070', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Emerald Cultural Institute', 'Dublin', '€4,200', '$4,620', '€3,700', '$4,070', 'emeraldculturalinstitute.com', 'https://emeraldculturalinstitute.com'],
                  ['IBAT College Dublin', 'Dublin 2', '€4,500', '$4,950', '€3,900', '$4,290', 'ibat.ie', 'https://ibat.ie'],
                  ['Kaplan International Dublin', 'Dublin 2', '€4,500', '$4,950', '€4,000', '$4,400', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}>{r[5]}</td>
                    <td style={T.td(i)}><Link text={r[6] as string} url={r[7] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text="☘️ Matriz: Limerick (Optimización de costos)" />
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px', lineHeight: '1.6' }}>Limerick es la segunda ciudad universitaria de Irlanda. Renta más barata (€100-200/mes menos que Dublín), menor competencia laboral y escuelas más económicas. Ideal si tu prioridad es ahorrar.</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio AM', '≈ USD', 'Precio PM', '≈ USD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Limerick City College', "O'Connell St", '€3,000', '$3,300', '€2,700', '$2,970', 'limerickcitycollege.ie', 'https://limerickcitycollege.ie'],
                  ['Rightword Institute', 'Winthrop H.', '€3,200', '$3,520', '€2,900', '$3,190', 'rightword.ie', 'https://rightword.ie'],
                  ['Limerick Language Centre', 'The Crescent', '€3,800', '$4,180', 'N/A', '-', 'english-in-limerick.com', 'https://english-in-limerick.com'],
                  ['Griffith College Limerick', "O'Connell Av", '€3,600', '$3,960', '€3,200', '$3,520', 'griffith.ie', 'https://griffith.ie'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}>{r[5]}</td>
                    <td style={T.td(i)}><Link text={r[6] as string} url={r[7] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>🔵 Solvencia requerida para inglés (25 semanas):</strong> €6,665 (≈ $7,330 USD)<br />
              <strong>🔵 Solvencia requerida para universidad/master:</strong> €10,000 (≈ $11,000 USD)
            </p>
          </div>
          <HackBox text="Antes de elegir escuela aplica este filtro: ¿El horario AM o PM te permite trabajar? ¿Está en zona con empleos cerca? ¿Precio total (escuela + solvencia) cabe en tu capital? Si no pasa los 3 filtros, descártala." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pre-Careers">
          <Intro text="Si tu objetivo es una universidad irlandesa pero no tienes notas de bachillerato europeo equivalentes, los programas Pre-Foundation son tu puerta de entrada. Son más cortos, más baratos que un Bachelor completo y te dan acceso al mismo Stamp 1G post-graduación." />
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '12px', color: '#444' }}>
            Estos programas de entre 1 y 2 años te preparan para entrar directamente a colleges y universidades irlandesas. Al graduarte, calificas para el <strong>Stamp 1G</strong> que te permite trabajar tiempo completo por 1-2 años.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Precio EUR', '≈ USD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Diploma in Project Management', 'IBAT', '€2,500 - €3,500', '$2,750 - $3,850', 'ibat.ie', 'https://ibat.ie'],
                  ['Certificate in IT Skills', 'CCT College', '€3,000 - €4,500', '$3,300 - $4,950', 'cct.ie', 'https://cct.ie'],
                  ['English for Academic Purposes', 'Atlas Language', '€4,500 - €5,500', '$4,950 - $6,050', 'atlaslanguageschool.com', 'https://atlaslanguageschool.com'],
                  ['International Foundation', 'NCIRL', '€6,000 - €8,000', '$6,600 - $8,800', 'ncirl.ie', 'https://ncirl.ie'],
                  ['Pre-Masters in Business', 'Griffith College', '€7,500 - €9,500', '$8,250 - $10,450', 'griffith.ie', 'https://griffith.ie'],
                  ['Foundation in Science', 'DCU', '€8,500 - €12,000', '$9,350 - $13,200', 'dcu.ie', 'https://dcu.ie'],
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
          <BlueBox text="🔵 SOLVENCIA UNIVERSITARIA: Para programas de nivel universitario necesitas demostrar €10,000 (≈ $11,000 USD) de solvencia. Beneficio clave: al graduarte aplicas al Stamp 1G por 1-2 años de trabajo tiempo completo." />
          <HackBox text="Los programas Pre-Foundation son la ruta más inteligente si quieres universidad sin las notas europeas. Cuestan menos que un Bachelor y te dan el mismo Stamp 1G. Verifica que el programa esté acreditado en la lista ILEP antes de pagar." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior">
          <Intro text="Para quienes buscan una ruta sólida hacia la residencia permanente en Irlanda. Un título de Bachelor o Master de una universidad irlandesa acreditada te da acceso al Stamp 1G por 1-2 años para trabajar a tiempo completo antes de solicitar residencia." />
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '12px', color: '#444' }}>
            Los colleges privados son más accesibles para no-UE y tienen programas de 1 año. Las universidades públicas son más prestigiosas pero más costosas y selectivas. El Stamp 1G se aplica a ambas opciones.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Universidad / College', 'Área de Estudio', 'Precio Anual EUR', '≈ USD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['CCT College Dublin', 'Computing & Business', '€4,000 - €12,000', '$4,400 - $13,200', 'cct.ie', 'https://cct.ie'],
                  ['IBAT College', 'Business & Management', '€6,500 - €9,000', '$7,150 - $9,900', 'ibat.ie', 'https://ibat.ie'],
                  ['Dorset College', 'Healthcare & IT', '€7,500 - €10,500', '$8,250 - $11,550', 'dorset-college.ie', 'https://dorset-college.ie'],
                  ['DBS - Dublin Business School', 'Business / Marketing', '€9,000 - €12,500', '$9,900 - $13,750', 'dbs.ie', 'https://dbs.ie'],
                  ['Independent College Dublin', 'Law / Business', '€10,000 - €13,000', '$11,000 - $14,300', 'independentcolleges.ie', 'https://independentcolleges.ie'],
                  ['ICD Business School', 'Business / Finance', '€10,000 - €13,500', '$11,000 - $14,850', 'icd.ie', 'https://icd.ie'],
                  ['NCI - National College of Ireland', 'Data / HR / Finance', '€10,000 - €15,000', '$11,000 - $16,500', 'ncirl.ie', 'https://ncirl.ie'],
                  ['Griffith College Dublin', 'Law / Media / Business', '€12,000 - €14,000', '$13,200 - $15,400', 'griffith.ie', 'https://griffith.ie'],
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
          <BlueBox text="🔵 SOLVENCIA UNIVERSITARIA: €10,000 (≈ $11,000 USD) obligatorios en cuenta bancaria para programas universitarios y de máster. Esto NO es el costo del programa — es el dinero que debes demostrar tener." />
          <HackBox text="CCT e IBAT son los más accesibles para latinoamericanos. Tienen programas de 1 año que califican para Stamp 1G. Verifica que el programa esté en la lista ILEP (Irish Language Education Providers) antes de pagar matrícula." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Estos son los costos que tu escuela NO incluye en el precio del curso. Son absolutamente obligatorios y debes tenerlos calculados y disponibles antes de iniciar el proceso de visa. No tenerlos puede significar el rechazo de tu solicitud." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (EUR)', '≈ USD', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico', '€150', '$165', '✅ Sí'],
                  ['Examen Final del curso', '€150 - €200', '$165 - $220', '✅ Sí'],
                  ['Materiales / Libros', '€40 - €70', '$44 - $77', '✅ Sí'],
                  ['Cita IRP (Inmigración)', '€300', '$330', '✅ Sí'],
                  ['Solvencia - Inglés (25 semanas)', '€6,665', '$7,330', '✅ Obligatorio visa'],
                  ['Solvencia - Universidad/Master', '€10,000', '$11,000', '✅ Obligatorio visa'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA (STAMP 2): €6,665 para inglés — €10,000 para universidad. Sin este monto exacto en tu cuenta bancaria, la visa será RECHAZADA de inmediato. Este dinero no se gasta — solo se demuestra." />
          <HackBox text="Tu Capital de Ejecución Real = precio de tu escuela + €6,665 de solvencia + €650 de gastos fijos. Ese es el número mínimo que necesitas antes de arrancar. Si no lo tienes completo, no inicies el proceso." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="El aterrizaje es la fase más crítica de tu proceso migratorio. Los primeros 30 días determinan si trabajas y cobras rápido o si quemas ahorros esperando trámites. El orden correcto lo es todo: primero el PPS, luego el banco, luego el IRP." />
          <SubHead text="1. PPS Number — Tu número de seguridad social irlandés" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>Sin PPS tu empleador está obligado a aplicarte Emergency Tax (~40%). Es el primer trámite que debes hacer al llegar. Tarda 2-4 semanas si lo haces bien desde el día 1.</p>
          {[
            ['Paso 1', 'Crear cuenta en MyGovID.ie (portal digital del gobierno irlandés)', 'https://mygovid.ie'],
            ['Paso 2', 'Solicitar PPS Number en MyWelfare.ie — sección servicios online', 'https://mywelfare.ie'],
            ['Paso 3', 'Adjuntar: Pasaporte + Proof of Address + Prueba de necesidad (Job Offer es la vía más rápida)', null],
            ['Paso 4', 'Con PPS activo, registrarte en Revenue.ie para evitar Emergency Tax del 40%', 'https://revenue.ie'],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. IRP — Registro de Inmigración (Obligatorio)" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '10px' }}>El IRP es tu tarjeta de residencia física. Debes registrarte dentro de los primeros 90 días de llegada. Sin IRP no puedes renovar tu visa ni demostrar estatus legal.</p>
          {[
            ['Registrar dentro de 90 días de llegada — si no, estás en situación irregular', null],
            ['Coste: €300 (≈ $330 USD) — se paga en el momento del registro', null],
            ['Cita en IrishImmigration.ie — sácala ANTES de llegar, puede tardar semanas', 'https://irishimmigration.ie'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="La cita IRP puede tardar semanas o meses si llegas sin una. Sácala desde el portal IrishImmigration.ie ANTES de volar a Irlanda. Llegar sin cita puede significar esperar 2-3 meses para registrarte legalmente y trabajar." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Para cobrar tu nómina en Irlanda necesitas un IBAN europeo o irlandés. Sin cuenta bancaria activa, tu empleador no puede pagarte legalmente. Abre primero una cuenta digital (Revolut o N26) — en 24-48 horas tienes tu IBAN activo." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>Estrategia recomendada:</strong> Abre Revolut o N26 los primeros días para tener IBAN inmediato. Luego abre AIB o Bank of Ireland para trámites que requieren banco tradicional (como estados de cuenta para visa).
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revolut Ireland', 'Digital', 'IBAN irlandés (IE) activo en 24h. El más usado para nóminas rápidas.', 'revolut.com', 'https://revolut.com'],
                  ['N26', 'Digital', 'IBAN europeo. App excelente y sin comisiones de mantenimiento.', 'n26.com', 'https://n26.com'],
                  ['AIB', 'Tradicional', 'Necesario para depósitos en efectivo y estados de cuenta para visa.', 'aib.ie', 'https://aib.ie'],
                  ['Bank of Ireland', 'Tradicional', 'Mayor red de cajeros y sucursales físicas en todo el país.', 'bankofireland.com', 'https://bankofireland.com'],
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
          <HackBox text="Abre Revolut o N26 ANTES de llegar o el primer día. Descarga la app, verifica tu identidad con pasaporte y activa la tarjeta virtual en Apple Pay / Google Pay para usarla inmediatamente. La tarjeta física llega en 5-7 días." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Estos son los portales oficiales que necesitas conocer y usar desde tu primera semana en Irlanda. Guárdalos en favoritos antes de volar. Cada uno tiene un rol específico en tu proceso de instalación legal y laboral." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['MyGovID.ie', 'Cuenta digital del gobierno irlandés', 'Semana 1 — antes de todo lo demás', 'mygovid.ie', 'https://mygovid.ie'],
                  ['MyWelfare.ie', 'Solicitar PPS Number', 'Semana 1-2 al llegar', 'mywelfare.ie', 'https://mywelfare.ie'],
                  ['IrishImmigration.ie', 'Cita y registro IRP', 'Antes de volar — saca la cita anticipada', 'irishimmigration.ie', 'https://irishimmigration.ie'],
                  ['Revenue.ie', 'Registro fiscal — evitar Emergency Tax 40%', 'Antes de tu primer día de trabajo', 'revenue.ie', 'https://revenue.ie'],
                  ['Indeed.ie', 'Búsqueda de empleo general', 'Desde semana 1', 'indeed.ie', 'https://indeed.ie'],
                  ['IrishJobs.ie', 'Empleo local irlandés', 'Desde semana 1', 'irishjobs.ie', 'https://irishjobs.ie'],
                  ['LinkedIn Jobs', 'Empleos profesionales y networking', 'Desde mes 2-3', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Daft.ie', 'Búsqueda de vivienda #1 en Irlanda', 'Desde semana 1 — activa alertas push', 'daft.ie', 'https://daft.ie'],
                  ['Rent.ie', 'Habitaciones compartidas', 'Desde semana 1', 'rent.ie', 'https://rent.ie'],
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
          <HackBox text="Revenue.ie es el portal más crítico y el más olvidado. Si empiezas a trabajar sin vincular tu empleo en Revenue, tu empleador te aplica Emergency Tax y pierde hasta el 40% de tu salario. Créa la cuenta el mismo día que firmes tu contrato." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <Intro text="El mercado de vivienda en Irlanda es extremadamente competitivo, especialmente en Dublín. Las habitaciones buenas se alquilan en horas. No busques suerte — aplica un sistema técnico de búsqueda con alertas en tiempo real y networking desde el primer día." />
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601805824475-527ed396e4d2?q=80&w=764&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', height: '160px', marginBottom: '16px' }} />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2025)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal EUR', '≈ USD', 'Precio Mensual EUR', '≈ USD'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Habitación compartida (Dublín)', '€120 - €180', '$132 - $198', '€480 - €720', '$528 - $792'],
                  ['Habitación individual (Dublín)', '€180 - €260', '$198 - $286', '€720 - €1,040', '$792 - $1,144'],
                  ['Habitación compartida (Limerick)', '€80 - €130', '$88 - $143', '€320 - €520', '$352 - $572'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos a distancia. Si no has visto la habitación físicamente y probado la llave en la cerradura, NO pagues depósito. Las estafas de vivienda son comunes y el dinero no se recupera." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Daft.ie', 'Portal oficial #1', 'Activa alertas push — responde en menos de 2 horas', 'daft.ie', 'https://daft.ie'],
                  ['Rent.ie', 'Portal oficial #2', 'Filtra por habitaciones compartidas', 'rent.ie', 'https://rent.ie'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Únete al grupo de tu país — Mexicanos, Ticos, Colombianos, Argentinos en Irlanda', 'Ver grupos', '#'],
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
          <HackBox text="No busques habitación desde tu país — es casi imposible y lleno de estafas. Reserva un hostel para las primeras 2 semanas y busca desde ahí. Pide los links de WhatsApp de latinos en tu escuela el primer día. Las mejores habitaciones nunca llegan a Daft.ie." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1630784032313-f780ae5532c6?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', height: '160px', marginBottom: '16px' }} />
          <Intro text="Con Stamp 2 puedes trabajar 20 horas por semana durante el período académico y 40 horas durante las vacaciones oficiales. Estos son los sectores con mayor rotación y acceso más rápido para recién llegados sin experiencia local." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>Estrategia CV en mano:</strong> imprime 50 copias de tu CV y preséntate en pubs entre 3pm y 5pm (antes del turno de la noche). Pide hablar con el Floor Manager y di: <em>"I'm looking for Floor Staff, I have immediate availability."</em> Este método funciona 3x más que aplicar online.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora EUR', '≈ USD', 'Canal principal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Floor Staff / Kitchen Porter', '€12 - €14', '$13.2 - $15.4', 'CV en mano en pubs 3-5pm'],
                  ['Cleaning / Housekeeping', 'Cleaner / Housekeeper', '€11 - €13', '$12.1 - $14.3', 'Indeed, agencias, grupos WhatsApp'],
                  ['Security', 'Static Guard / Event Security', '€13 - €16', '$14.3 - $17.6', 'Requiere PSA License (4 días, ~€400)'],
                  ['Retail', 'Shop Assistant / Cashier', '€12 - €13', '$13.2 - $14.3', 'Indeed, tiendas directas'],
                  ['Care Sector', 'Care Assistant', '€14 - €17', '$15.4 - $18.7', 'Agencias: CPL, Staffline Ireland'],
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
          <HackBox text="Imprime 50 copias de tu CV. Ve a pubs entre 3pm y 5pm. Pide hablar con el Floor Manager. Di exactamente: 'I am looking for Floor Staff, I have immediate availability and my PPSN is ready.' Este método consigue trabajo en 1-2 semanas vs 6-8 semanas aplicando solo online." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Estimación de ingresos reales para estudiantes con Stamp 2 trabajando 20 horas semanales. En vacaciones puedes duplicar estas cifras trabajando 40 horas. Todos los valores ya descontados de impuestos aproximados." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Puesto', 'Salario/hora EUR', '≈ USD', 'Horas/semana', 'Mensual EUR', '≈ USD'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Waiter / Floor Staff', '€12 - €14', '$13.2 - $15.4', '20h', '€960 - €1,120', '$1,056 - $1,232'],
                  ['Cleaner / Housekeeping', '€11 - €13', '$12.1 - $14.3', '20h', '€880 - €1,040', '$968 - $1,144'],
                  ['Security Guard', '€13 - €16', '$14.3 - $17.6', '20h', '€1,040 - €1,280', '$1,144 - $1,408'],
                  ['Shop Assistant', '€12 - €13', '$13.2 - $14.3', '20h', '€960 - €1,040', '$1,056 - $1,144'],
                  ['Care Assistant', '€14 - €17', '$15.4 - $18.7', '20h', '€1,120 - €1,360', '$1,232 - $1,496'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[4]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text="💡 En vacaciones oficiales (verano, Navidad, Semana Santa) puedes trabajar 40h/semana. Eso duplica estos ingresos. Un estudiante en hospitality puede ganar €1,800 - €2,400/mes en períodos de vacaciones." />
          <HackBox text="Con 20h/semana en hospitality ganas €960-€1,120/mes. Si consigues el Stamp 1G post-graduación y trabajas 40h, puedes ganar €1,900-€2,240/mes. La diferencia entre hacer el plan bien o mal puede ser €1,000+ al mes." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Este es el mapa de ruta mes a mes. Sigue este orden exacto — cada paso desbloquea el siguiente. Saltarte uno puede costarte semanas de espera o el 40% de tu salario en Emergency Tax." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Pagar escuela + Letter of Acceptance + Contratar seguro médico + Reservar hostel 2 semanas + Sacar cita IRP en IrishImmigration.ie', '3-4 meses antes'],
                  ['Semana 1', 'Comprar SIM card local + Abrir Revolut/N26 + Entregar CVs en mano en pubs + Iniciar solicitud PPS en MyWelfare.ie', 'Día 1-7'],
                  ['Semana 2-4', 'Recibir PPS Number + Registrar en Revenue.ie + Buscar habitación fija (salir del hostel)', 'Día 7-30'],
                  ['Semana 3-5', 'Registro IRP en IrishImmigration.ie — pagar €300 — recibir tarjeta', 'Día 21-35'],
                  ['Mes 2', 'Vincular empleo con PPS en Revenue.ie + Estabilizar rutina laboral 20h/semana', 'Día 30-60'],
                  ['Mes 3+', 'Estabilizar ingresos + Planear upgrade a Educación Superior si aplica + Renovar visa si necesario', 'Día 60+'],
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
          <HackBox text="El orden PPS → Banco → IRP → Revenue es sagrado. Si lo sigues bien, puedes estar trabajando y cobrando en menos de 3 semanas desde que aterrizas. Si lo saltás, puedes perder meses y el 40% de tu salario." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Estos son los dos hitos reales que marcan tu independencia económica en Irlanda. Planifica con estos tiempos — no con los tiempos ideales que te digan en foros." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['PPS Number activo y recibido', 'Cuenta bancaria con IBAN activo', 'CV entregado en persona', 'Registrado en Revenue.ie'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 1-3 semanas desde que llegas</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Contrato de trabajo firmado', 'Alta en payroll (sistema de nómina)', 'Cuenta bancaria activa para recibir pago'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 2-5 semanas desde que empiezas a trabajar</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>1-3 semanas desde que aterrizas</strong><br />
              • Puedes cobrar tu primer salario en: <strong>3-6 semanas desde que llegas</strong>
            </p>
          </div>
          <HackBox text="Si empiezas a trabajar sin estar registrado en Revenue.ie, te aplican Emergency Tax y pierdes hasta el 40% de tu salario. Ese dinero se devuelve, pero puede tardar meses. Hazlo bien desde el principio: crea la cuenta en Revenue ANTES de tu primer día de trabajo." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. Lo que diferencia a quien los resuelve rápido de quien se paraliza es tener el protocolo claro antes de que pasen. Guarda estos contactos en tu teléfono desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '999 o 112 — Policía (Garda), Ambulancia, Bomberos'],
            ['INIS / Inmigración', 'IrishImmigration.ie — Para problemas con visa y IRP'],
            ['Revenue / Impuestos', 'Revenue.ie — Para Emergency Tax y trámites fiscales'],
            ['GP (Médico)', 'Busca tu GP más cercano por código postal en hse.ie'],
            ['Comunidad L&T', 'Mexicanos, Ticos, Colombianos, Argentinos en Irlanda — ver grupos abajo'],
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
                  ['Robo / Pérdida de Pasaporte', 'Denuncia en Garda Station + Contactar Embajada de tu país de inmediato', 'Garda.ie + Embajada'],
                  ['Estafa de Vivienda', 'No más pagos. Denunciar en Garda y reportar en Facebook/WhatsApp', 'Garda.ie'],
                  ['Emergency Tax (sin PPS)', 'Entrar a Revenue.ie y vincular empleo con PPSN — dinero se devuelve en próxima nómina', 'Revenue.ie'],
                  ['Rechazo de IRP', 'Generalmente falta Proof of Address válido o Job Offer — revisar documentos', 'IrishImmigration.ie'],
                  ['Problemas con empleador', 'Contactar Workplace Relations Commission — servicio gratuito', 'WRC.ie'],
                  ['Enfermedad / Urgencia médica', 'Ir a Urgent Care Center más cercano con seguro médico', '999 / 112'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Irlanda</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Irlanda — links próximamente
            </p>
          </div>
          <HackBox text="La mayoría de las crisis en Irlanda se resuelven siguiendo el proceso burocrático correcto. Mantén la calma, usa Google Translate si necesitas, y recuerda: todo tiene solución si sigues el paso a paso. Nunca respondas solo a notificaciones de Revenue o Inmigración — consulta primero." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555577508-d4497bed817e?q=80&w=725&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', height: '160px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Irlanda como destino de migración para latinoamericanos. Úsalo para comparar con otros países del blueprint y tomar la decisión más informada." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Irlanda 🇮🇪'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Student Visa — Stamp 2'],
                  ['Duración mínima del curso', '25 semanas (6 meses)'],
                  ['Horas de trabajo durante clases', '20 horas/semana'],
                  ['Horas de trabajo en vacaciones', '40 horas/semana'],
                  ['Solvencia para inglés', '€6,665 (≈ $7,330)'],
                  ['Solvencia para universidad', '€10,000 (≈ $11,000)'],
                  ['Costo promedio curso inglés', '€2,700 - €4,500/año'],
                  ['Registro de inmigración (IRP)', '€300 (≈ $330)'],
                  ['Renta habitación compartida', '€480 - €720/mes'],
                  ['Empleos más comunes', 'Hospitality, Cleaning, Security, Care'],
                  ['Salario promedio entrada', '€12 - €16 por hora'],
                  ['Tiempo hasta primer trabajo', '1-4 semanas'],
                  ['Tiempo hasta primer cobro', '3-6 semanas desde llegada'],
                  ['Idioma oficial', 'Inglés'],
                  ['Camino a residencia', 'Stamp 1G → Stamp 4'],
                  ['Nivel de dificultad', 'Fácil / Medio'],
                  ['Mejores ciudades', 'Dublín / Limerick'],
                  ['Comunidad latina', 'Muy consolidada — grupos WhatsApp activos'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Irlanda:\n\n' + feedback)}`, '_blank')
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