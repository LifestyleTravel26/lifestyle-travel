'use client'
import { useState } from 'react'

export default function Dubai() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=1177&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇦🇪</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Dubái</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Medio Oriente · Work and Study</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Medio</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo inicial (Cursos)', '$3,500 - $7,000'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Medio']].map((s, i) => (
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
          'Emirates ID en 10-15 días — la llave para banco, contratos y trabajo en Dubái',
          'Sin solvencia bancaria obligatoria — el pago del curso actúa como garantía',
          '10 escuelas verificadas en JLT, Knowledge Park y Business Bay',
          'Acceso a universidades internacionales con títulos británicos, australianos y canadienses',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Dubái es el destino más rápido del blueprint. El proceso de residencia se cierra en 10-15 días. Sin solvencia bancaria obligatoria — el pago del curso actúa como garantía. El Emirates ID es la llave para todo: banco, contratos y trabajo." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>⚠️ Importante:</strong> La visa de estudiante permite vivir y estudiar en Dubái, pero <strong>NO otorga automáticamente permiso de trabajo</strong>. Para trabajar legalmente, una empresa debe tramitar el permiso laboral correspondiente.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Acelerador de puesta en marcha:</strong> coordinamos el orden correcto de los pasos — Entry Permit, Medical Test, Emirates ID y contratación — para que estés listo en tiempo récord.
          </p>
          <BlueBox text="💱 Conversión Dubái: 1 AED ≈ $0.27 USD. $200 USD ≈ 735 AED. Todos los salarios en AED con equivalente en USD." />
          <HackBox text="En Dubái el Emirates ID es la llave para todo. Sin esta tarjeta no puedes abrir banco, firmar contrato ni activar trabajo. Si llevas los documentos bien, el proceso se completa en 10 a 15 días — mucho más rápido que cualquier país europeo." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="En Dubái la academia no se elige solo por precio. Lo inteligente es escoger una bien ubicada cerca de zonas laborales clave como JLT, Dubai Marina o Knowledge Park, donde se concentra el movimiento internacional y el networking que más te conviene." />
          <SubHead text="🇦🇪 Matriz de Escuelas de Inglés: Dubái 2026" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Ubicación', 'Precio (24 semanas)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Language Skills Institute', 'Al Barsha', '$2,500 – $3,200', 'languageskills.ae', 'https://languageskills.ae'],
                  ['SpotOn Training Institute', 'Al Karama', '$2,600 – $3,300', 'spoton.ae', 'https://spoton.ae'],
                  ['Learners Point Academy', 'Al Garhoud', '$2,700 – $3,400', 'learnerspoint.org', 'https://learnerspoint.org'],
                  ['Speak English Institute', 'JLT', '$2,800 – $3,500', 'speak.ae', 'https://www.speak.ae'],
                  ['Direct English Dubai', 'Business Bay', '$2,800 – $3,600', 'directenglish.ae', 'https://directenglish.ae'],
                  ['Express English College', 'Business Bay', '$2,900 – $3,600', 'expressenglish.ae', 'https://expressenglish.ae'],
                  ['English Path Dubai', 'Knowledge Park', '$3,000 – $3,800', 'englishpath.com', 'https://www.englishpath.com/destinations/middle-east/dubai/'],
                  ['UKCBC Dubai', 'Academic City', '$3,000 – $4,000', 'ukcbc.ac.ae', 'https://ukcbc.ac.ae'],
                  ['ES Dubai', 'JLT', '$3,200 – $4,200', 'esdubai.com', 'https://esdubai.com'],
                  ['EC Dubai', 'Knowledge Park', '$3,500 – $4,500', 'ecenglish.com', 'https://ecenglish.com'],
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
          <BlueBox text="🔵 SOLVENCIA DUBÁI: A diferencia de Europa, Dubái NO exige demostrar una cifra fija en el banco. El pago del curso + paquete de visa actúa como garantía financiera. Capital recomendado: $4,300 - $5,650 USD total (curso + visa + gastos iniciales)." />
          <HackBox text="Suma el precio de tu escuela + ~$900 de visa y trámites + $150 de exámenes médicos. Ese es tu Capital de Ejecución Real para Dubái. La ventaja es que no necesitas demostrar solvencia bancaria alta como en Europa." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pre-Careers">
          <Intro text="Los programas de preparación académica en Dubái abren la puerta a universidades internacionales con títulos reconocidos globalmente. Al graduarte puedes acceder a empleo profesional en Business, Finanzas, Tecnología y Turismo." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Programa', 'Duración', 'Precio', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ES Dubai', 'Academic English / EAP', '6–12 meses', '$2,600 – $3,200', 'esdubai.com', 'https://esdubai.com'],
                  ['English Path Dubai', 'Academic English + transición laboral', '6–12 meses', '$3,000 – $3,600', 'englishpath.com', 'https://www.englishpath.com/destinations/middle-east/dubai/'],
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
          <BlueBox text="🔵 UNIVERSIDADES INTERNACIONALES: Dubái alberga campus de universidades británicas, australianas y canadienses en Dubai Knowledge Park y Dubai International Academic City. Puedes obtener un título internacional estudiando en Dubái." />
          <HackBox text="Dubái tiene una ventaja única: puedes obtener un título británico, australiano o canadiense sin salir de los Emiratos. Esto abre puertas a empleos en empresas multinacionales tanto en Dubái como en otros países del Golfo." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior">
          <Intro text="Dubái tiene universidades internacionales de primer nivel con títulos reconocidos globalmente. Muchos graduados logran transicionar a una Employment Visa patrocinada por empresas multinacionales." />
          <SubHead text="🎓 Bachelor Degrees" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Programas', 'Precio anual', 'Precio total', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Bolton Dubai', 'Business, IT, Engineering', '$7,500 – $9,000', '$22k – $27k', 'bolton.ac.ae', 'https://www.bolton.ac.ae'],
                  ['Amity University Dubai', 'Business, IT, Media', '$9,000 – $12,000', '$27k – $36k', 'amityuniversity.ae', 'https://amityuniversity.ae'],
                  ['Manipal University Dubai', 'Engineering, Business, IT', '$10,000 – $13,000', '$30k – $40k', 'manipaldubai.com', 'https://www.manipaldubai.com'],
                  ['Canadian University Dubai', 'Business, Engineering', '$12,000 – $16,000', '$36k – $48k', 'cud.ac.ae', 'https://www.cud.ac.ae'],
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
          <SubHead text="⭐ Masters (MBA y MSc)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Programa', 'Precio total', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Bolton Dubai', 'MBA / MSc / LLM', '$6,000 – $10,000', 'bolton.ac.ae', 'https://www.bolton.ac.ae'],
                  ['Amity University Dubai', 'MBA / MSc', '$11,000 – $15,000', 'amityuniversity.ae', 'https://amityuniversity.ae'],
                  ['Manipal University Dubai', 'MBA / MSc', '$12,000 – $16,000', 'manipaldubai.com', 'https://www.manipaldubai.com'],
                  ['Canadian University Dubai', 'MBA / MSc', '$14,000 – $18,000', 'cud.ac.ae', 'https://www.cud.ac.ae'],
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
          <HackBox text="University of Bolton Dubai tiene los MBAs más accesibles del Golfo ($6,000-$10,000 total). Un título británico en Dubái te abre puertas en toda la región del Golfo Pérsico." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Dubái tiene una ventaja única: NO se exige solvencia bancaria fija como en Europa. Los gastos principales son el paquete de visa y los exámenes médicos obligatorios." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (USD)', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico (requerido para visa)', '$200 – $300', '✅ Sí'],
                  ['Visa de estudiante + gestión migratoria', '$600 – $1,000', '✅ Sí'],
                  ['Exámenes médicos (Dubai Health Authority)', '$100 – $150', '✅ Sí'],
                  ['Emirates ID', '$100', '✅ Sí'],
                  ['Materiales / Libros', '$50 – $100', '✅ Sí'],
                  ['Solvencia bancaria', 'No requerida formalmente', '⚪ Recomendado $3k-$5k'],
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
          <BlueBox text="🔵 VENTAJA DUBÁI: No necesitas demostrar solvencia bancaria alta como en Irlanda (€6,665) o Malta (€5,040). El pago del curso actúa como garantía. Capital de Ejecución Real: $4,300 – $5,650 USD total." />
          <HackBox text="Suma el precio de tu escuela + $900 de visa y trámites + $150 de exámenes médicos. Ese es tu número real para arrancar en Dubái. Mucho más accesible que Europa para quienes no tienen grandes ahorros." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En Dubái todo funciona con rapidez. El proceso Entry Permit → Medical Test → Emirates ID se cierra en 10-15 días si llevas los documentos correctos. El Emirates ID es tu prioridad #1 al llegar." />
          <SubHead text="1. Emirates ID — Tu ID oficial en Dubái" />
          {[
            ['Paso 1', 'Entrar a Dubái con Entry Permit emitido por tu escuela (sponsor)', null],
            ['Paso 2', 'Exámenes médicos (Medical Fitness Tests) en centros autorizados por Dubai Health Authority', 'https://dha.gov.ae'],
            ['Paso 3', 'Registro biométrico en centro de ICP (huellas y firma digital)', 'https://icp.gov.ae'],
            ['Paso 4', 'Adjuntar: Pasaporte + Carta de Aceptación + Recibo de pago + Seguro médico + Resultados médicos', null],
            ['Paso 5', 'Costo total aprox. $700-$1,000 USD (normalmente incluido en paquete de visa de la escuela)', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Permiso de Trabajo (con empleador)" />
          {[
            ['La visa de estudiante NO da permiso de trabajo automático — necesitas un empleador sponsor', null],
            ['El empleador registra el contrato en MOHRE (Ministerio de Recursos Humanos)', 'https://mohre.gov.ae'],
            ['Con Emirates ID + contrato registrado puedes trabajar legalmente en Dubái', null],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="En Dubái todo es rápido si llevas los documentos en orden. Haz los exámenes médicos en tu primera semana. El Emirates ID llega en 10-15 días. Sin Emirates ID no puedes abrir banco ni firmar nada. Ese es tu objetivo #1." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="En Dubái no puedes abrir cuenta bancaria sin Emirates ID. Abre Liv. (digital) apenas recibas tu Emirates ID — te permite recibir salario, pagar renta y transferir internacionalmente desde el primer día." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Liv. (by Emirates NBD)', 'Digital', 'Apertura en minutos con Emirates ID. Ideal para estudiantes y expatriados desde día 1.', 'liv.me', 'https://liv.me'],
                  ['Wio Bank', 'Digital', 'Banco digital moderno. Popular entre freelancers y emprendedores en Dubái.', 'wio.io', 'https://wio.io'],
                  ['Emirates NBD', 'Tradicional', 'El banco más grande de Dubái. Red amplia y muy usado para nóminas internacionales.', 'emiratesnbd.com', 'https://emiratesnbd.com'],
                  ['ADCB', 'Tradicional', 'Muy popular entre expatriados. Buena app y apertura relativamente rápida.', 'adcb.com', 'https://adcb.com'],
                  ['Mashreq Bank', 'Tradicional', 'Uno de los bancos más antiguos del país. Muy usado por empresas y trabajadores extranjeros.', 'mashreq.com', 'https://mashreq.com'],
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
          <HackBox text="Abre Liv. apenas tengas tu Emirates ID. La mayoría de expatriados usan este banco digital porque permite recibir salario, pagar renta y hacer transferencias internacionales rápidamente — mientras organizas banco tradicional si tu empresa lo requiere." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales obligatorios para tu proceso en Dubái. Guárdalos desde el día 1. GDRFA gestiona tu residencia. DHA tus exámenes médicos. MOHRE registra tu contrato laboral." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['GDRFA', 'Entry Permit y residencia estudiantil', 'Tu escuela lo gestiona antes de llegar', 'gdrfad.gov.ae', 'https://gdrfad.gov.ae'],
                  ['Dubai Health Authority', 'Exámenes médicos obligatorios', 'Semana 1 — prioritario', 'dha.gov.ae', 'https://dha.gov.ae'],
                  ['ICP (Emirates ID)', 'Registro biométrico y Emirates ID', 'Semana 1-2', 'icp.gov.ae', 'https://icp.gov.ae'],
                  ['MOHRE (Ministerio de Trabajo)', 'Registro de contratos laborales', 'Cuando consigues empleador', 'mohre.gov.ae', 'https://mohre.gov.ae'],
                  ['LinkedIn Jobs', 'Empleos profesionales e internacionales', 'Desde semana 1', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Indeed UAE', 'Vacantes de todo tipo', 'Desde semana 1', 'ae.indeed.com', 'https://ae.indeed.com'],
                  ['Dubizzle Jobs', 'Empleos entry level y habitaciones', 'Desde semana 1', 'dubizzle.com', 'https://dubizzle.com'],
                  ['GulfTalent', 'Empresas grandes del Golfo', 'Mes 2-3', 'gulftalent.com', 'https://gulftalent.com'],
                  ['Bayt', 'Vacantes corporativas regionales', 'Mes 2-3', 'bayt.com', 'https://bayt.com'],
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
          <HackBox text="En Dubái la velocidad es todo. Si ves una vacante en LinkedIn o Dubizzle, aplica en menos de 5 minutos. Las empresas reciben cientos de aplicaciones al día y los primeros CV son los que llaman." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="El mercado inmobiliario de Dubái es dinámico y muy competitivo en zonas como Dubai Marina, JLT, Al Barsha y Business Bay. A diferencia de Europa, el mercado se mueve principalmente por Dubizzle y Property Finder — muchos acuerdos se cierran rápido por WhatsApp." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal USD', 'Precio Mensual USD'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$70 – $100', '$280 – $400'],
                  ['Cuarto individual', '$120 – $180', '$480 – $720'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de visitar la propiedad. Nunca envíes dinero sin haber visto la habitación y verificado al propietario o agente. En Dubái también existen estafas en plataformas de alquiler." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Dubizzle', 'Portal #1 de clasificados', 'Habitaciones compartidas y alquileres rápidos', 'dubizzle.com', 'https://dubizzle.com'],
                  ['Property Finder', 'Portal inmobiliario', 'Apartamentos con agentes verificados', 'propertyfinder.ae', 'https://propertyfinder.ae'],
                  ['Bayut', 'Portal inmobiliario', 'Muy detallado con mapas y precios por zona', 'bayut.com', 'https://bayut.com'],
                  ['Airbnb', 'Alojamiento temporal', 'Útil para primeras semanas', 'airbnb.com', 'https://airbnb.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinoamericanos en Dubái — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <HackBox text="En Dubái muchos alquileres se cierran muy rápido por WhatsApp. Si encuentras una habitación en Dubizzle, escribe inmediatamente al número del anuncio y agenda visita lo antes posible. Las mejores habitaciones se alquilan en horas." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Para trabajar en Dubái necesitas un empleador sponsor. Los trabajos entry-level en hospitality, retail y turismo son los más accesibles. Muchos trabajos incluyen alojamiento, transporte o comida." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> Ve a hoteles, restaurantes y malls entre <strong>10:00 AM - 12:00 PM</strong>. Pregunta por el Floor Manager. Di: <em>"I'm looking for a Floor Staff position, I have immediate availability."</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/mes AED', '≈ USD/mes', 'Canal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', 'AED 2,000 – 3,500', '$540 – $945', 'LinkedIn, Indeed UAE, Dubizzle'],
                  ['Cleaning', 'Cleaner / Housekeeping', 'AED 1,500 – 2,500', '$405 – $675', 'Indeed UAE, Dubizzle'],
                  ['Hotels', 'Reception / Hotel Staff', 'AED 2,500 – 4,000', '$675 – $1,080', 'LinkedIn, Bayt, hoteles directos'],
                  ['Retail', 'Sales Assistant / Shop Staff', 'AED 2,500 – 4,000', '$675 – $1,080', 'LinkedIn, malls directos'],
                  ['Delivery', 'Delivery Rider / Courier', 'AED 3,000 – 5,000', '$810 – $1,350', 'Talabat, Deliveroo, Indeed UAE'],
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
          <HackBox text="En Dubái muchas empresas valoran más presencia, actitud y disponibilidad inmediata que experiencia. Muchos trabajos incluyen alojamiento o transporte — esto reduce significativamente el costo de vida. Si consigues trabajo con alojamiento incluido, tus gastos se reducen a la mitad." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Salarios en AED con equivalente en USD. 1 AED ≈ $0.27 USD. Dubái no tiene impuesto sobre la renta personal — lo que ganas es lo que cobras." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/mes AED', '≈ USD/mes'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', 'AED 2,000 – 3,500', '$540 – $945'],
                  ['Cleaning', 'Cleaner / Housekeeping', 'AED 1,500 – 2,500', '$405 – $675'],
                  ['Hotels', 'Reception / Hotel Staff', 'AED 2,500 – 4,000', '$675 – $1,080'],
                  ['Retail', 'Sales Assistant', 'AED 2,500 – 4,000', '$675 – $1,080'],
                  ['Delivery', 'Rider / Courier', 'AED 3,000 – 5,000', '$810 – $1,350'],
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
          <BlueBox text="💡 VENTAJA DUBÁI: Sin impuesto sobre la renta personal. Todo lo que ganas es tuyo. Delivery puede llegar a $1,350/mes — más que hospitality en Irlanda. Muchos trabajos incluyen alojamiento y transporte, lo que aumenta el poder adquisitivo real." />
          <HackBox text="Delivery en Dubái puede pagarte AED 3,000-5,000/mes ($810-$1,350). Es el trabajo con mejor relación esfuerzo/ingreso para recién llegados. Sin impuestos, ese dinero es tuyo completo." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="Dubái es el destino más rápido del blueprint. El proceso de residencia se cierra en 10-15 días. El trabajo depende de conseguir empleador — puede ser en semanas si te mueves rápido." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Pagar escuela + Carta de Aceptación + Seguro médico + Reservar hostel 1-2 semanas + Entry Permit (gestiona la escuela)', '2-3 meses antes'],
                  ['Semana 1', 'SIM card (Etisalat o Du) + Exámenes médicos (DHA) + Registro biométrico (ICP)', 'Día 1-7'],
                  ['Semana 2', 'Recibir Emirates ID + Abrir Liv. (banco digital) + Buscar habitación permanente', 'Día 7-15'],
                  ['Semana 2-4', 'Aplicar en LinkedIn, Indeed UAE y Dubizzle + CV en mano en hoteles y malls', 'Día 15-30'],
                  ['Mes 2-3', 'Conseguir empleador sponsor + Registrar contrato en MOHRE + Empezar a trabajar', 'Día 30-90'],
                  ['Mes 2-3', 'Primer salario', 'Día 60-90'],
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
          <HackBox text="El orden en Dubái es: Entry Permit → Medical Test → Emirates ID → Banco → Trabajo. Todo depende del Emirates ID. Hazlo en tu primera semana y el resto fluye. Sin Emirates ID no puedes avanzar nada." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="En Dubái todo funciona con sponsor (empresa). Tu visa depende del empleador. Si cambias de trabajo, cambias de sponsor. Es más dependiente del empleador que en Europa pero puede ser más rápido si te mueves bien." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Visa de trabajo activa (con sponsor)', 'Emirates ID aprobado', 'Contrato laboral firmado y registrado en MOHRE'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 2-6 semanas desde que te contratan</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Alta en payroll', 'Cuenta bancaria activa (Emirates ID requerido)', 'Ciclo de pago de la empresa completado'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 1-2 meses desde que empiezas a trabajar</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
              🎯 <strong>En resumen:</strong><br />
              • Puedes empezar a trabajar en: <strong>~2-6 semanas desde que te contratan</strong><br />
              • Puedes cobrar tu primer salario en: <strong>~1-2 meses desde el inicio</strong>
            </p>
          </div>
          <HackBox text="En Dubái todo depende de conseguir empleador rápido. Aplica en LinkedIn y Dubizzle desde el día 1. Ve en persona a hoteles y malls. La velocidad es tu ventaja — las empresas en Dubái contratan rápido a quien se presenta disponible." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren pero el pánico es opcional. En Dubái todo se resuelve rápido si sigues el canal correcto. Guarda estos contactos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '999 — Policía, Ambulancia, Bomberos'],
            ['GDRFA (Inmigración)', 'gdrfad.gov.ae — Residencia y visa'],
            ['Dubai Health Authority', 'dha.gov.ae — Exámenes médicos y salud'],
            ['MOHRE (Trabajo)', 'mohre.gov.ae — Contratos laborales'],
            ['Comunidad L&T', 'Latinoamericanos en Dubái — ver grupos abajo'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Dubái y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Dubizzle/Property Finder y denunciar a Policía', 'Policía Dubái'],
                  ['Problemas con Visa / Emirates ID', 'Revisar estado con sponsor o institución educativa', 'GDRFA / Escuela'],
                  ['Retraso en documentos de escuela', 'Contactar Student Office de la institución', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Hospital privado o clínica autorizada con tu seguro', '999'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en Dubái</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Dubái — links próximamente
            </p>
          </div>
          <HackBox text="En Dubái muchas oportunidades aparecen primero en comunidades de expatriados, grupos de WhatsApp o LinkedIn antes de llegar a portales oficiales. Mantente activo en estos grupos y responde rápido." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697729798591-8b7e1b271515?q=80&w=684&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de Dubái como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Dubái 🇦🇪'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Student Visa (UAE Residence Visa)'],
                  ['Duración mínima del curso', '12 – 24 semanas'],
                  ['Permiso de trabajo', 'Requiere empleador sponsor'],
                  ['Solvencia obligatoria', 'No requerida formalmente'],
                  ['Capital recomendado', '$4,300 – $5,650 USD'],
                  ['Costo promedio curso inglés', '$3,500 – $7,000'],
                  ['ID oficial', 'Emirates ID (10-15 días)'],
                  ['Renta cuarto compartido', '$280 – $400/mes'],
                  ['Empleos más comunes', 'Hospitality, Retail, Delivery, Tourism'],
                  ['Salario promedio entrada', '$540 – $1,350/mes'],
                  ['Tiempo hasta primer trabajo', '2-6 semanas desde contratación'],
                  ['Impuesto sobre la renta', '0% — sin impuesto personal'],
                  ['Idioma oficial', 'Árabe (inglés de facto en negocios)'],
                  ['Camino a residencia', 'Trabajo → Work Visa → Residencia'],
                  ['Nivel de dificultad', 'Medio'],
                  ['Mejores zonas', 'Dubai Marina, JLT, Al Barsha, Deira'],
                  ['Ventaja única', 'Sin impuestos + Emirates ID en 10-15 días'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Dubái:\n\n' + feedback)}`, '_blank')
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