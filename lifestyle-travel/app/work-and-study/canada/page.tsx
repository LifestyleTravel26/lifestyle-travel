'use client'
import { useState } from 'react'

export default function Canada() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=765&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇨🇦</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Canadá</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>América del Norte · Work and Study</p>
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
          'Study Permit + 20h/semana de trabajo + tiempo completo en vacaciones',
          'PGWP post-graduación: hasta 3 años de trabajo abierto para conseguir PR',
          'SIN (Social Insurance Number) — gratis, mismo día en Service Canada',
          'Colleges públicos desde $8,500 CAD/año — más baratos que universidades privadas',
          'Camino claro a Residencia Permanente vía Express Entry o PNP',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497373637916-e47a55e22d0a?q=80&w=1173&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Canadá es el destino más exigente del blueprint pero también el que ofrece el camino más claro a la Residencia Permanente. Study Permit + PGWP + Express Entry = PR en 3-5 años. Si buscas construir futuro a largo plazo, Canadá es la apuesta más sólida." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Study Permit:</strong> te permite estudiar en instituciones autorizadas (DLI) y trabajar <strong>hasta 20 horas/semana</strong> durante clases y <strong>tiempo completo</strong> en vacaciones académicas.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Hoja de ruta sin humo:</strong> LOA (carta de aceptación) → Study Permit → SIN → trabajo → PGWP → Express Entry → PR. Cada paso desbloquea el siguiente.
          </p>
          <BlueBox text="💱 Conversión Canadá: 1 CAD ≈ $0.72 USD. $200 CAD ≈ $144 USD. Todos los precios en CAD con equivalente en USD." />
          <HackBox text="El SIN (Social Insurance Number) es el documento clave para trabajar en Canadá. Sin SIN ninguna empresa puede contratarte ni pagarte salario. La buena noticia es que el proceso es gratis y se completa el mismo día en Service Canada si llevas pasaporte y Study Permit." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="En Canadá la escuela se elige por ubicación y ejecución: cerca de zonas laborales y transporte público en ciudades como Toronto, Vancouver o Montreal, donde es más realista conseguir trabajo siendo estudiante." />
          <SubHead text="🇨🇦 Matriz de Escuelas de Inglés: Canadá 2026" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio (24 semanas)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ILSC Language Schools', 'Toronto / Vancouver', '$3,200 – $4,200', 'ilsc.com', 'https://ilsc.com'],
                  ['Oxford International', 'Toronto / Vancouver', '$3,200 – $4,100', 'oxfordinternationalenglish.com', 'https://oxfordinternationalenglish.com'],
                  ['EC English', 'Vancouver / Montreal', '$3,300 – $4,300', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Kaplan International', 'Toronto / Vancouver', '$3,400 – $4,500', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                  ['ILAC', 'Toronto / Vancouver', '$3,500 – $4,800', 'ilac.com', 'https://ilac.com'],
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
              <strong>🔴 Solvencia obligatoria:</strong> ~$15,000 – $16,000 USD para cubrir gastos del primer año<br />
              <strong>🟢 Capital total recomendado:</strong> $18,000 – $25,000 USD (curso + visa + gastos iniciales)<br />
              <strong>📍 Mejor estrategia:</strong> Colleges públicos en ciudades secundarias (más baratos + menos competencia)
            </p>
          </div>
          <HackBox text="Elige colleges públicos en ciudades secundarias como Newfoundland, Manitoba o British Columbia interior. Cuestan 30-40% menos que Toronto o Vancouver, hay menos competencia por trabajo y la calidad educativa es equivalente para el PGWP." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pathway Programs">
          <Intro text="Los programas University Pathway te preparan para entrar a universidades canadienses con inglés académico. Al completar un programa en college o universidad elegible, accedes al PGWP — el permiso de trabajo post-graduación más valioso del blueprint." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Inversión', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University Pathway', 'ILSC', '$10,000 – $13,000', 'ilsc.com', 'https://ilsc.com'],
                  ['Academic Pathway', 'ILAC', '$11,000 – $14,000', 'ilac.com', 'https://ilac.com'],
                  ['University Preparation', 'Kaplan', '$12,000 – $15,000', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                  ['Academic English', 'EC English', '$10,500 – $13,500', 'ecenglish.com', 'https://ecenglish.com'],
                  ['College Pathway', 'Oxford International', '$10,000 – $12,500', 'oxfordinternationalenglish.com', 'https://oxfordinternationalenglish.com'],
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
          <BlueBox text="🔵 PGWP: Al graduarte de un programa elegible en college o universidad pública canadiense, puedes aplicar al Post-Graduation Work Permit (hasta 3 años). Con ese permiso acumulas experiencia laboral canadiense para aplicar a Express Entry o PNP." />
          <HackBox text="Los programas University Pathway son la entrada más accesible a universidades canadienses. Completas inglés académico y entras directo a primer año de college o universidad. El PGWP al graduarte es el verdadero premio." />
        </Section>

        {/* COLLEGES PUBLICOS */}
        <Section id="edu" emoji="🎓" title="Colleges Públicos — La Ruta Más Inteligente">
          <Intro text="Los colleges públicos en Canadá son más económicos que las universidades privadas Y dan acceso al PGWP de hasta 3 años. Esta combinación los hace la opción más inteligente para quien busca PR en el menor tiempo posible." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Provincia', 'Programa', 'Precio/año CAD', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['College of North Atlantic', 'Newfoundland', 'Business / IT / Trades', '$8,500 – $11,000 CAD', 'cna.nl.ca', 'https://www.cna.nl.ca'],
                  ['Northern Lights College', 'British Columbia', 'Business / Energy / Trades', '$10,000 – $13,000 CAD', 'nlc.bc.ca', 'https://www.nlc.bc.ca'],
                  ['Red River College', 'Manitoba', 'Business / Technology', '$10,000 – $17,000 CAD', 'rrc.ca', 'https://www.rrc.ca'],
                  ['Lambton College', 'Ontario', 'Business / IT / Supply Chain', '$13,000 – $14,000 CAD', 'lambtoncollege.ca', 'https://www.lambtoncollege.ca'],
                  ['Camosun College', 'British Columbia', 'Hospitality / Business', '$14,000 – $15,000 CAD', 'camosun.ca', 'https://camosun.ca'],
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
          <BlueBox text="💰 HACK PGWP: Los graduados de colleges públicos son elegibles para PGWP de hasta 3 años. Con ese permiso acumulas experiencia laboral canadiense y aplicas a Express Entry o PNP para PR. College público + PGWP = camino más rápido a PR." />
          <HackBox text="College of North Atlantic en Newfoundland y Northern Lights College en BC son los más económicos. Costo de vida también más bajo que Toronto o Vancouver. Misma calificación para PGWP. La diferencia de costo puede ser de $15,000-20,000 CAD en total." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Canadá es el destino con mayor inversión inicial del blueprint. La solvencia requerida es alta pero los salarios también son los más altos — $16-25 CAD/hora desde el primer trabajo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico internacional o provincial', '$600 – $900/año', '✅ Sí'],
                  ['Study Permit (visa de estudiante)', '$150 CAD (~$108 USD)', '✅ Sí'],
                  ['Biométricos', '$85 CAD (~$61 USD)', '✅ Sí'],
                  ['Materiales / Libros', '$200 – $400', '✅ Sí'],
                  ['Examen médico migratorio (si requerido)', '$150 – $250', '✅ Según caso'],
                  ['Solvencia (primer año de vida)', '~$15,000 – $16,000 USD', '✅ Obligatorio visa'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA (CANADÁ): ~$15,000 – $16,000 USD para cubrir gastos de vida del primer año. Sin esta prueba de fondos el Study Permit será rechazado. Es el requisito más alto del blueprint — pero los salarios también son los más altos." />
          <HackBox text="Capital de Ejecución Real = precio del college + $250 visa y biométricos + $700 seguro médico + solvencia. En promedio $18,000-25,000 USD. Es el mayor desembolso del blueprint pero también el que más ROI tiene a largo plazo vía PGWP y PR." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En Canadá el proceso es más rápido que en Europa una vez que tienes el Study Permit aprobado. El día que llegas ya puedes iniciar el trámite del SIN — el documento clave para trabajar." />
          <SubHead text="1. Study Permit — Tu permiso de estudio en Canadá" />
          {[
            ['Paso 1', 'Presentar Letter of Introduction en aeropuerto — el oficial emite el Study Permit físico', null],
            ['Paso 2', 'SIN (Social Insurance Number) en Service Canada — gratis, mismo día, solo pasaporte + Study Permit', 'https://www.canada.ca'],
            ['Paso 3', 'Abrir cuenta bancaria (Scotiabank o RBC) con pasaporte + Study Permit', null],
            ['Paso 4', 'Buscar habitación permanente (Kijiji, Rentals.ca o grupos de Facebook)', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. PGWP — Post-Graduation Work Permit (después de graduarte)" />
          {[
            ['Aplicas al PGWP dentro de los 180 días después de graduarte', null],
            ['Te da hasta 3 años de permiso de trabajo abierto en cualquier provincia', null],
            ['Con experiencia acumulada aplicas a Express Entry o PNP para PR', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/after-apply-next-steps.html'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="El SIN es el documento clave para trabajar en Canadá. Sin SIN ninguna empresa puede contratarte ni pagarte salario. Solicítalo en Service Canada durante tu primera semana. Es gratis y se completa el mismo día. Sin SIN pierdes semanas de ingreso." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Canadá tiene los bancos más accesibles para estudiantes internacionales. Con pasaporte + Study Permit puedes abrir cuenta el mismo día. Scotiabank y RBC tienen programas específicos para newcomers." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Scotiabank', 'Tradicional', 'Programa StartRight para recién llegados. Fácil apertura para nuevos inmigrantes.', 'scotiabank.com', 'https://scotiabank.com'],
                  ['RBC', 'Tradicional', 'El más grande del país. Muy usado por estudiantes. Cuenta activa el mismo día.', 'rbc.com', 'https://rbc.com'],
                  ['TD Bank', 'Tradicional', 'Buena red de sucursales. Cuenta especial para estudiantes internacionales.', 'td.com', 'https://td.com'],
                  ['CIBC', 'Tradicional', 'Sin comisiones para newcomers. Muy popular entre estudiantes.', 'cibc.com', 'https://cibc.com'],
                  ['Tangerine', 'Digital', 'Banco digital de Scotiabank. Sin comisiones y gestión desde app.', 'tangerine.ca', 'https://tangerine.ca'],
                  ['Simplii Financial', 'Digital', 'Banco digital de CIBC. Transferencias gratuitas y apertura online.', 'simplii.com', 'https://simplii.com'],
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
          <HackBox text="Abre Scotiabank o RBC apenas llegues. Tienen programas para newcomers que permiten recibir salario, pagar renta y manejar dinero desde el primer día. Scotiabank tiene el programa StartRight más completo para estudiantes internacionales." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales para tu proceso en Canadá. IRCC para todo lo migratorio. Service Canada para el SIN. Job Bank es el portal de empleo del gobierno." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['IRCC (Inmigración Canadá)', 'Study Permit, visas y permisos de trabajo', 'Antes de viajar + seguimiento en Canadá', 'canada.ca', 'https://www.canada.ca'],
                  ['Service Canada (SIN)', 'Social Insurance Number para trabajar', 'Semana 1 — prioritario', 'canada.ca/sin', 'https://www.canada.ca/en/employment-social-development/services/sin.html'],
                  ['Job Bank Canada', 'Portal de empleo oficial del gobierno', 'Desde semana 1', 'jobbank.gc.ca', 'https://www.jobbank.gc.ca'],
                  ['Indeed Canada', 'Portal más usado en Canadá', 'Desde semana 1', 'indeed.ca', 'https://indeed.ca'],
                  ['LinkedIn Jobs', 'Empresas internacionales', 'Desde semana 1', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Workopolis', 'Vacantes en retail y administración', 'Desde semana 1', 'workopolis.com', 'https://workopolis.com'],
                  ['Glassdoor Canada', 'Vacantes + info de salarios', 'Desde semana 2', 'glassdoor.ca', 'https://glassdoor.ca'],
                  ['Kijiji', 'Clasificados — vivienda y trabajo', 'Semana 1 para vivienda', 'kijiji.ca', 'https://kijiji.ca'],
                  ['Rentals.ca', 'Plataforma de alquiler #1', 'Semana 1 para vivienda', 'rentals.ca', 'https://rentals.ca'],
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
          <HackBox text="El SIN es el cuello de botella en Canadá. Solicítalo el primer día en Service Canada — es gratis y se completa ese mismo día. Sin SIN no puedes trabajar legalmente y pierdes tiempo e ingresos. Prioridad #1 al llegar." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Canadá tiene el costo de vivienda más alto del blueprint — especialmente Toronto y Vancouver. Las ciudades secundarias son 40-50% más baratas con las mismas oportunidades laborales para estudiantes." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal CAD', 'Precio Mensual CAD', '≈ USD/mes'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$180 – $250', '$720 – $1,000', '$518 – $720'],
                  ['Cuarto individual', '$300 – $500', '$1,200 – $2,000', '$864 – $1,440'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Canadá también existen estafas en anuncios de alquiler, especialmente en Toronto y Vancouver. Nunca envíes dinero sin haber visitado el lugar." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Rentals.ca', 'Portal #1 en Canadá', 'Plataforma grande para todo el país', 'rentals.ca', 'https://rentals.ca'],
                  ['Kijiji', 'Clasificados', 'Muy usado para habitaciones compartidas', 'kijiji.ca', 'https://kijiji.ca'],
                  ['PadMapper', 'Portal con mapa', 'Buscador visual para apartamentos', 'padmapper.com', 'https://padmapper.com'],
                  ['Facebook Marketplace', 'Clasificados', 'Muy usado por estudiantes y locales', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Toronto, Vancouver, Montreal — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <HackBox text="En Canadá las habitaciones se alquilan muy rápido en Kijiji o Marketplace. Si encuentras una opción, escribe inmediatamente. Las mejores habitaciones desaparecen en 24-48 horas, especialmente cerca de colleges y universidades." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1153&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Canadá tiene los salarios más altos del blueprint — salario mínimo entre $15-17 CAD/hora según provincia. Con 20h/semana puedes ganar $1,200-1,700 CAD/mes (~$864-$1,224 USD)." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> Ve a hoteles, restaurantes y malls entre <strong>10:00 AM - 12:00 PM</strong>. Di: <em>"I'm looking for a Floor Staff position, I have immediate availability."</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora CAD', '≈ USD/hora', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Server / Kitchen Helper', '$16 – $20 CAD', '$11.5 – $14.4', 'Indeed / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$16 – $19 CAD', '$11.5 – $13.7', 'Job Bank / Indeed'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$17 – $21 CAD', '$12.2 – $15.1', 'LinkedIn / hotels directos'],
                  ['Retail', 'Sales Associate', '$16 – $20 CAD', '$11.5 – $14.4', 'Indeed / aplicar en tienda'],
                  ['Delivery', 'Delivery Driver / Courier', '$18 – $25 CAD', '$13 – $18', 'DoorDash / Uber Eats / Indeed'],
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
          <HackBox text="En Canadá muchas empresas valoran actitud, puntualidad y disponibilidad inmediata. Muchos trabajos se consiguen aplicando online o dejando CV directamente. La clave es aplicar RÁPIDO — Indeed Canada recibe cientos de aplicaciones por día." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Canadá tiene los salarios más altos del blueprint. Con 20h/semana y $16 CAD/hora, ganas $1,280 CAD/mes (~$922 USD). En vacaciones académicas puedes trabajar tiempo completo y duplicar esa cifra." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/hora CAD', '≈ USD', 'Mensual EST. (20h/sem)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Server / Kitchen Helper', '$16 – $20 CAD', '$11.5 – $14.4', '$1,280 – $1,600 CAD'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$16 – $19 CAD', '$11.5 – $13.7', '$1,280 – $1,520 CAD'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$17 – $21 CAD', '$12.2 – $15.1', '$1,360 – $1,680 CAD'],
                  ['Retail', 'Sales Associate', '$16 – $20 CAD', '$11.5 – $14.4', '$1,280 – $1,600 CAD'],
                  ['Delivery', 'Driver / Courier', '$18 – $25 CAD', '$13 – $18', '$1,440 – $2,000 CAD'],
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
          <BlueBox text="💡 VACACIONES ACADÉMICAS: Puedes trabajar tiempo completo (40h/semana). Un estudiante en hospitality a $18 CAD/hora puede ganar $2,880 CAD/mes (~$2,074 USD) en vacaciones. Eso es suficiente para cubrir gastos y ahorrar significativamente." />
          <HackBox text="Delivery con DoorDash o Uber Eats puede llegar a $25 CAD/hora en Toronto o Vancouver. Con 20h/semana son $2,000 CAD/mes (~$1,440 USD). En vacaciones académicas con 40h/semana son $4,000 CAD/mes. Es el sector con mayor ingreso por hora." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Canadá tiene el proceso pre-partida más largo del blueprint — el Study Permit puede tardar 8-12 semanas en aprobarse. Planifica con tiempo. Una vez en el país, el proceso es rápido." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Elegir college + Carta de Aceptación (LOA) + Prueba de fondos + Aplicar Study Permit + Biométricos', '3-4 meses antes'],
                  ['Semana 1', 'Presentar Letter of Introduction en aeropuerto + SIN en Service Canada + Abrir Scotiabank o RBC', 'Día 1-7'],
                  ['Semana 2-4', 'Buscar habitación permanente (Kijiji, Rentals.ca) + Entregar CVs + Aplicar en Indeed', 'Día 7-30'],
                  ['Mes 2', 'Conseguir empleo + Primer salario + Estabilizar 20h/semana', 'Día 30-60'],
                  ['Al graduarte', 'Aplicar al PGWP (dentro de 180 días) + Buscar trabajo profesional', 'Post-graduación'],
                  ['Años 2-5', 'Acumular experiencia laboral + Aplicar Express Entry o PNP → Residencia Permanente', '2-5 años'],
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
          <HackBox text="El Study Permit puede tardar 8-12 semanas — aplica lo antes posible. El SIN es gratis y se obtiene el primer día. Esos son los dos puntos críticos de tiempo en Canadá. El resto fluye rápido si llegas con los documentos en orden." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="Canadá es rápido si llegas con el Study Permit aprobado. El punto crítico es el SIN — sin él no puedes trabajar. Con SIN el mismo día que llegas puedes empezar a aplicar." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Study Permit activo', 'SIN (Social Insurance Number) obtenido', 'Cuenta bancaria activa', 'Oferta laboral'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 1-3 semanas desde que llegas</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Contrato firmado', 'Alta en payroll', 'Cuenta bancaria activa'].map((item, i) => (
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
          <HackBox text="Si sacas el SIN el primer día y aplicas rápido, puedes estar trabajando en 1-2 semanas. Canadá paga semanal o quincenal — mucho más rápido que Europa que paga mensual. Eso significa que puedes cobrar tu primer pago en 2-3 semanas desde que empiezas." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. En Canadá el sistema es ordenado — sigue el canal correcto y se resuelve rápido. Guarda estos contactos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '911 — Policía, Ambulancia, Bomberos'],
            ['IRCC (Inmigración)', 'canada.ca — Study Permit, visas y permisos'],
            ['Service Canada (SIN)', 'canada.ca/sin — Social Insurance Number'],
            ['Job Bank', 'jobbank.gc.ca — Empleo oficial del gobierno'],
            ['Comunidad L&T', 'Latinos en Toronto, Vancouver, Montreal — ver grupos abajo'],
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
                  ['Estafa de Vivienda', 'Reportar en Kijiji/Rentals.ca y denunciar en Policía', 'Policía local'],
                  ['Problemas con Study Permit', 'Revisar estado en IRCC o contactar institución educativa', 'canada.ca'],
                  ['Retraso en documentos del college', 'Contactar International Student Office', 'Tu college'],
                  ['Enfermedad / Urgencia médica', 'Hospital público o clínica privada según provincia y seguro', '911'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Canadá</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Canadá — links próximamente
            </p>
          </div>
          <HackBox text="En Canadá muchas oportunidades aparecen primero en comunidades de estudiantes internacionales y grupos de WhatsApp. Latinos en Toronto, Vancouver y Montreal son comunidades muy activas. Únete desde el día 1 para encontrar trabajo y vivienda más rápido." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Canadá como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Canadá 🇨🇦'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Study Permit (permiso de estudio)'],
                  ['Duración mínima', '6 meses – 2 años'],
                  ['Horas de trabajo', '20h/semana durante clases'],
                  ['Vacaciones académicas', 'Tiempo completo (40h/semana)'],
                  ['Solvencia obligatoria', '~$15,000 – $16,000 USD'],
                  ['Capital total recomendado', '$18,000 – $25,000 USD'],
                  ['Study Permit', '$150 CAD + $85 CAD biométricos'],
                  ['SIN (para trabajar)', 'Gratis — mismo día en Service Canada'],
                  ['Renta cuarto compartido', '$720 – $1,000 CAD/mes'],
                  ['Empleos más comunes', 'Hospitality, Retail, Delivery, Warehouses'],
                  ['Salario promedio entrada', '$16 – $20 CAD/hora'],
                  ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
                  ['Tiempo hasta primer cobro', '2-5 semanas desde llegada'],
                  ['Post-graduación (PGWP)', 'Hasta 3 años de trabajo abierto'],
                  ['Camino a PR', 'PGWP → Express Entry o PNP → Residencia Permanente'],
                  ['Nivel de dificultad', 'Alto'],
                  ['Mejores ciudades', 'Toronto, Vancouver, Montreal, Calgary'],
                  ['Ventaja única', 'Salarios más altos del blueprint + camino claro a PR'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Canadá:\n\n' + feedback)}`, '_blank')
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