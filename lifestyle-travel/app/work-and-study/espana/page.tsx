'use client'
import { useState } from 'react'

export default function Espana() {
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1170&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇪🇸</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>España</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Europa · Work and Study</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>Medio</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo inicial (Cursos)', '€2,500 - €5,500'], ['🕐', 'Duración', '8 - 12 meses'], ['📊', 'Dificultad', 'Medio']].map((s, i) => (
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
          'Hasta 30 horas/semana de trabajo — más que Irlanda, Malta o Canadá',
          'Universidades públicas desde €1,500/año — hasta 80% más barato que otros países europeos',
          'TIE (tu ID español) en 30 días desde llegada',
          '12 escuelas verificadas en Madrid, Barcelona, Valencia y Alicante',
          'Comunidad latina enorme — grupos WhatsApp en todas las ciudades principales',
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559386081-325882507af7?q=80&w=736&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="España es el destino europeo con más horas de trabajo permitidas para estudiantes — hasta 30 horas/semana. Cultura latina, idioma compartido, clima excepcional y universidades públicas entre las más baratas de Europa. La ruta es: Visado Tipo D → Empadronamiento → TIE → trabajo legal." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Visa de Estudiante (Tipo D):</strong> te permite estudiar y trabajar <strong>hasta 30 horas/semana</strong> durante el programa académico. Más horas que Irlanda (20h), Malta (20h) o Canadá (20h).
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>Acelerador de puesta en marcha:</strong> coordinamos NIE, empadronamiento, TIE y Seguridad Social para habilitar el permiso laboral desde el inicio sin perder semanas en burocracia.
          </p>
          <BlueBox text="💱 Estándar de moneda (España): primero EUR y al lado el equivalente en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD)." />
          <HackBox text="En España el empadronamiento y el contrato de alquiler son tan importantes como la visa. Sin dirección registrada no tramitas la TIE. Sin TIE no trabajas legalmente. Prioridad #1: asegurar dirección. Todo lo demás se construye sobre eso." />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>⭐ Blueprint Completo — PREMIUM</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title="Estrategia y Presupuesto: Selección de Academia">
          <Intro text="Elegimos escuela por viabilidad migratoria y costo operativo, no por marketing. Miramos precio del programa, ciudad y cercanía a zonas con alta rotación laboral para que tu presupuesto aguante el primer año." />
          <SubHead text="🇪🇸 Matriz de Escuelas de Español: España 2026" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Escuela', 'Ciudad', 'Duración', 'Precio total', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Proyecto Español', 'Alicante / Granada', '6 meses', '€2,500 – €3,500', 'proyectoespanol.com', 'https://proyectoespanol.com'],
                  ['Conversa Spanish Institute', 'Valencia', '6 meses', '€2,760', 'conversaspanishinstitute.com', 'https://conversaspanishinstitute.com'],
                  ['Enforex', 'Valencia / Málaga / Madrid', '6 meses', '€2,800 – €3,600', 'enforex.com', 'https://www.enforex.com'],
                  ['Olé Languages', 'Barcelona', '6 meses', '€2,800 – €4,000', 'olelanguages.com', 'https://olelanguages.com'],
                  ['Speakeasy BCN', 'Barcelona', '6 meses', '€2,900 – €3,100', 'speakeasybcn.com', 'https://speakeasybcn.com'],
                  ['Don Quijote', 'Madrid / Barcelona / Valencia', '6 meses', '€3,000 – €3,800', 'donquijote.org', 'https://www.donquijote.org'],
                  ['BCNLIP', 'Barcelona', '6 meses', '€3,000 – €4,500', 'bcnlip.com', 'https://bcnlip.com'],
                  ['Expanish', 'Barcelona / Madrid', '6 meses', '€3,200 – €4,200', 'expanish.com', 'https://expanish.com'],
                  ['Taronja School', 'Valencia', '6 meses', '€3,200 – €4,000', 'taronjaschool.com', 'https://taronjaschool.com'],
                  ['Camino Barcelona', 'Barcelona', '6 meses', '€3,300 – €4,300', 'caminobarcelona.com', 'https://caminobarcelona.com'],
                  ['AIL Madrid', 'Madrid', '6–9 meses', '€3,500 – €5,500', 'ailmadrid.com', 'https://ailmadrid.com'],
                  ['IH España', 'Barcelona / Madrid / Valencia', '6 meses', '€3,800 – €5,500', 'ihspain.com', 'https://www.ihspain.com'],
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
              <strong>🔵 Solvencia obligatoria (España):</strong> ~€7,200 – €8,400 basado en el 100% del IPREM anual<br />
              <strong>🔵 Capital recomendado:</strong> solvencia + depósito + primer mes + imprevistos
            </p>
          </div>
          <HackBox text="Tu Capital de Ejecución Real = precio escuela + €7,200 solvencia + ~€700 gastos administrativos. Ese es tu número mínimo. Si no tienes el monto completo, no inicies el proceso — primero asegura tu capital." />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title="Pre-Foundations & Pre-Careers">
          <Intro text="Los programas Foundation en España abren la puerta a universidades europeas reconocidas. Al graduarte de Bachelor o Master puedes solicitar la Autorización de Búsqueda de Empleo por 12 meses para conseguir trabajo profesional en el país." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Institución', 'Inversión', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['International Foundation', 'Universidad Europea', '€4,500 – €6,500', 'universidadeuropea.com', 'https://universidadeuropea.com'],
                  ['Foundation Program', 'EU Business School', '€5,500 – €7,500', 'euruni.edu', 'https://euruni.edu'],
                  ['Access Course', 'Universidad de Valencia', '€2,500 – €3,500', 'uv.es', 'https://www.uv.es'],
                  ['Pre-Masters Program', 'EAE Business School', '€6,500 – €9,000', 'eae.es', 'https://eae.es'],
                  ['Academic Spanish Prep', 'Expanish', '€4,000 – €5,500', 'expanish.com', 'https://expanish.com'],
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
          <BlueBox text="🔵 AUTORIZACIÓN DE BÚSQUEDA DE EMPLEO: Al graduarte de Bachelor o Master en España, puedes solicitar 12 meses adicionales para buscar trabajo profesional. Esto permite posteriormente obtener permiso de trabajo → residencia legal." />
          <HackBox text="Los programas Foundation en universidades públicas de Andalucía, Valencia o Extremadura son los más económicos. Mismo título europeo, hasta 70% menos costo que Irlanda o Malta. Verifica acreditación antes de pagar." />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title="Educación Superior">
          <Intro text="España tiene el sistema universitario público más barato de Europa occidental. Universidades en Andalucía, Valencia y Extremadura cobran desde €1,500/año para estudiantes internacionales — hasta 80% más barato que Irlanda." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', 'Nivel', 'Inversión (año/total)', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidad de Jaén / Extremadura', 'Bachelor / Master', '€1,500 – €2,500', 'ujaen.es', 'https://www.ujaen.es'],
                  ['Universidades Públicas (Valencia / Granada)', 'Bachelor / Master', '€2,500 – €4,000', 'uv.es', 'https://www.uv.es'],
                  ['Universidad de Granada', 'Bachelor / Master', '€2,500 – €4,500', 'ugr.es', 'https://www.ugr.es'],
                  ['Universidad de Valencia', 'Bachelor / Master', '€2,800 – €4,500', 'uv.es', 'https://www.uv.es'],
                  ['Universidad de Salamanca', 'Bachelor / Master', '€3,000 – €4,500', 'usal.es', 'https://www.usal.es'],
                  ['Universidad Autónoma de Barcelona', 'Master', '€4,000 – €6,000', 'uab.cat', 'https://www.uab.cat'],
                  ['Universidad Complutense de Madrid', 'Master', '€8,000 – €10,000', 'ucm.es', 'https://www.ucm.es'],
                  ['EAE Business School', 'Master', '€7,000 – €12,000', 'eae.es', 'https://www.eae.es'],
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
          <BlueBox text="💰 HACK UNIVERSIDADES PÚBLICAS: Muchas universidades públicas en Andalucía, Valencia y Extremadura cobran tasas muy reducidas incluso para estudiantes internacionales. Un Máster de €2,500 vs €15,000+ en Irlanda. Mismo título europeo reconocido." />
          <HackBox text="Universidad de Jaén o Extremadura son las más baratas de España para internacionales. Mismo título europeo que UCM o UAB pero hasta 80% menos costo. La diferencia de precio puede ser de €10,000+ por año." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios No Incluidos">
          <Intro text="Estos son los costos que tu escuela NO incluye. El seguro médico en España debe ser de una compañía española, sin copagos ni carencias — no vale cualquier seguro internacional." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo (EUR)', '≈ USD', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico (compañía española, sin copagos)', '€400 – €600', '$460 – $690', '✅ Sí'],
                  ['Tasa de visado (consulado)', '€60 – €80', '$69 – $92', '✅ Sí'],
                  ['Materiales / Libros', '€50 – €100', '$58 – $115', '✅ Sí'],
                  ['TIE (Tarjeta de Identidad de Extranjero)', '€16', '$18', '✅ Sí'],
                  ['Solvencia económica (IPREM anual)', '€7,200 – €8,400', '$8,280 – $9,660', '✅ Obligatorio visa'],
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
          <RedBox text="🔴 SOLVENCIA OBLIGATORIA (ESPAÑA): ~€7,200 – €8,400 basado en el 100% del IPREM anual. No es dinero para gastar — es prueba de capacidad económica que Extranjería exige ver en tus extractos bancarios." />
          <HackBox text="Tu Capital de Ejecución Real = precio escuela + €7,200 solvencia + €700 gastos administrativos. Sin ese monto completo, no inicies el proceso. El seguro médico DEBE ser español sin copagos — rechazarán otros seguros internacionales." />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title="Protocolo de Aterrizaje y Gestión">
          <Intro text="En España el orden correcto es crítico: primero empadronamiento, luego TIE, luego trabajo. Sin dirección registrada no puedes tramitar la TIE. Sin TIE no puedes trabajar legalmente. Todo depende de asegurar tu vivienda primero." />
          <SubHead text="1. TIE — Tarjeta de Identidad de Extranjero" />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>Debes solicitar la TIE dentro de los primeros 30 días de llegada. Sin TIE no puedes trabajar legalmente ni abrir cuenta bancaria completa.</p>
          {[
            ['Paso 1', 'Entrar con Visado Nacional Tipo D del consulado español', null],
            ['Paso 2', 'Empadronamiento en el ayuntamiento de tu ciudad (mismo día si es posible)', null],
            ['Paso 3', 'Cita en Extranjería para toma de huellas (dentro de los primeros 30 días)', 'https://sede.administracionespublicas.gob.es'],
            ['Paso 4', 'Adjuntar: Pasaporte + Carta de Aceptación + Contrato alquiler + Formulario EX-17', null],
            ['Paso 5', 'Pagar tasa administrativa €16 por la TIE', null],
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text="2. Permiso de Trabajo (30h/semana)" />
          {[
            ['Puedes trabajar hasta 30 horas/semana mientras dure el programa académico', null],
            ['El empleador tramita tu registro en la Seguridad Social (NUSS)', 'https://seg-social.es'],
            ['Con NIE/TIE + Seguridad Social activo, ya puedes trabajar legalmente', null],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text="La cita de Extranjería para la TIE puede tardar semanas. Agenda tu cita lo antes posible — sin TIE activo muchos empleadores no pueden contratarte legalmente. Es el cuello de botella principal en España." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title="Matriz de Opciones Bancarias">
          <Intro text="Abre N26 o BBVA los primeros días para mover dinero rápido. Cuando tengas NIE/TIE y contrato de trabajo, migra a banco tradicional para recibir nómina y domiciliar pagos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Entidad', 'Tipo', 'Ventaja Principal', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['N26', 'Digital', 'Apertura rápida con pasaporte. IBAN europeo. Sin comisiones. Ideal para empezar.', 'n26.com', 'https://n26.com'],
                  ['Revolut', 'Digital', 'Multi-moneda y transferencias baratas. Útil para uso diario pero no siempre para nóminas.', 'revolut.com', 'https://revolut.com'],
                  ['BBVA', 'Tradicional', 'Cuenta gratuita para jóvenes, excelente app. Ideal para domiciliar pagos y nómina.', 'bbva.es', 'https://bbva.es'],
                  ['Santander', 'Tradicional', 'Red enorme de cajeros. Muy usado por estudiantes internacionales y empresas.', 'santander.es', 'https://santander.es'],
                  ['CaixaBank', 'Tradicional', 'HolaBank para extranjeros con atención en inglés. Gran presencia nacional.', 'caixabank.es', 'https://caixabank.es'],
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
          <HackBox text="Abre N26 o BBVA apenas llegues para empezar a mover dinero y recibir transferencias. Cuando ya tengas NIE/TIE y contrato de trabajo, abre Santander o BBVA para recibir nómina y domiciliar pagos como renta, luz o internet." />
        </Section>

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title="Webs de Gestión y Empleo">
          <Intro text="Portales oficiales obligatorios para tu proceso en España. Sin Seguridad Social no puedes trabajar legalmente. Sin cita en Extranjería no tienes TIE." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Portal', 'Para qué sirve', 'Cuándo usarlo', 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Sede Extranjería', 'Citas NIE/TIE y trámites migratorios', 'Semana 1 — agenda cita inmediatamente', 'sede.administracionespublicas.gob.es', 'https://sede.administracionespublicas.gob.es'],
                  ['Seguridad Social (NUSS)', 'Número de Seguridad Social para trabajar', 'Cuando consigues empleo', 'seg-social.es', 'https://seg-social.es'],
                  ['SEPE', 'Programas de empleo y formación', 'Desde semana 2-3', 'sepe.es', 'https://sepe.es'],
                  ['InfoJobs', 'Portal de empleo más grande de España', 'Desde semana 1', 'infojobs.net', 'https://infojobs.net'],
                  ['Indeed España', 'Vacantes de todo tipo', 'Desde semana 1', 'indeed.es', 'https://indeed.es'],
                  ['JobToday', 'Hostelería, retail y trabajos rápidos', 'Desde semana 1', 'jobtoday.com', 'https://jobtoday.com'],
                  ['Turijobs', 'Hoteles, restaurantes y turismo', 'Desde semana 1', 'turijobs.com', 'https://turijobs.com'],
                  ['Idealista', 'Vivienda #1 en España', 'Semana 1 para encontrar habitación', 'idealista.com', 'https://idealista.com'],
                  ['Badi', 'App de habitaciones compartidas', 'Semana 1', 'badi.com', 'https://badi.com'],
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
          <HackBox text="La cita de Extranjería es el cuello de botella en España. Agenda tu cita el mismo día que llegues — puede tardar semanas. Sin TIE activo, muchos empleadores no pueden contratarte formalmente aunque tengas NIE." />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda e Instalación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579282240050-352db0a14c21?q=80&w=652&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="El mercado inmobiliario en Madrid, Barcelona y Valencia es muy competitivo. Los pisos se alquilan en horas. El contrato de alquiler es OBLIGATORIO para el empadronamiento y la TIE — sin él no puedes completar tu trámite migratorio." />
          <SubHead text="📊 Costos de Alojamiento (Estimación 2026)" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Tipo', 'Precio Semanal EUR', 'Precio Mensual EUR'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€120 – €200', '€480 – €800'],
                  ['Cuarto individual', '€300 – €500', '€800 – €1,200'],
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
          <RedBox text="⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En España hay muchas estafas online en alquileres. Si no has visto el piso físicamente, NO pagues nada." />
          <SubHead text="📍 Canales de Búsqueda" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Canal', 'Tipo', 'Estrategia', 'Acceso'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Idealista', 'Portal #1 en España', 'Activa alertas push — responde en menos de 1 hora', 'idealista.com', 'https://idealista.com'],
                  ['Spotahome', 'Plataforma verificada', 'Propiedades verificadas con fotos y video', 'spotahome.com', 'https://spotahome.com'],
                  ['Badi', 'App de habitaciones', 'La app más popular para habitaciones compartidas', 'badi.com', 'https://badi.com'],
                  ['Uniplaces', 'Plataforma estudiantil', 'Alquiler rápido para estudiantes internacionales', 'uniplaces.com', 'https://uniplaces.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Mexicanos, Colombianos, Argentinos en Madrid/Barcelona', 'Ver grupos', '#'],
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
          <HackBox text="En España los pisos se alquilan muy rápido. Si ves una habitación en Idealista, escribe inmediatamente y agenda visita ese mismo día. El que responde primero suele quedarse con el piso. Activa notificaciones push en Idealista antes de llegar." />
        </Section>

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title="Matriz de Empleos de Alta Rotación">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1761145190969-cbeb31f64aa1?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Con 30 horas/semana puedes ganar significativamente más que en otros países del blueprint. España tiene 80+ millones de turistas al año — hoteles, restaurantes y bares contratan masivamente, especialmente en temporada." />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>CV en Mano:</strong> imprime 20-30 copias. Ve a restaurantes y bares entre <strong>3:00 PM – 6:00 PM</strong> antes del turno de la noche. Di: <em>"Hola, estoy buscando trabajo como camarero, tengo disponibilidad inmediata."</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto Típico', 'Salario/hora EUR', '≈ USD', 'Canal principal'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Camarero / Bar Staff / Ayudante de Cocina', '€7 – €10', '$8 – $12', 'CV en persona / JobToday / InfoJobs'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €9', '$8 – $10', 'Agencias / Indeed / Networking'],
                  ['Hotels & Tourism', 'Recepción / Hotel Staff', '€9 – €12', '$10 – $14', 'Turijobs / Hosco / LinkedIn'],
                  ['Retail', 'Dependiente / Shop Assistant', '€8 – €10', '$9 – $12', 'InfoJobs / Indeed'],
                  ['Delivery', 'Repartidor / Courier', '€8 – €12', '$9 – $14', 'Glovo / Uber Eats / Apps'],
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
          <HackBox text="En España valoran actitud, presencia y disponibilidad inmediata. Muchos trabajos en hostelería o comercio se consiguen hablando directamente con el encargado, incluso si tu experiencia es básica. El español básico abre muchas más puertas que en Irlanda o Malta." />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title="Matriz de Salarios Comunes">
          <Intro text="Estimación de ingresos reales para estudiantes trabajando 30 horas semanales. España permite 30h/semana — 50% más que Irlanda o Malta (20h). Esa diferencia son €300-400 más al mes." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Sector', 'Puesto', 'Salario/hora EUR', '≈ USD', 'Mensual EST. (30h/sem)'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Camarero / Bar Staff', '€7 – €10', '$8 – $12', '€840 – €1,200'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €9', '$8 – $10', '€840 – €1,080'],
                  ['Hotels', 'Recepción / Hotel Staff', '€9 – €12', '$10 – $14', '€1,080 – €1,440'],
                  ['Retail', 'Dependiente', '€8 – €10', '$9 – $12', '€960 – €1,200'],
                  ['Delivery', 'Repartidor / Courier', '€8 – €12', '$9 – $14', '€960 – €1,440'],
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
          <BlueBox text="💡 VENTAJA ESPAÑA: 30h/semana vs 20h/semana en Irlanda = €300-400 más al mes. Con hotels a €9-12/hora y 30h, puedes ganar €1,080-€1,440/mes. El costo de vida en ciudades secundarias (Valencia, Alicante) es 30-40% menor que Barcelona o Madrid." />
          <HackBox text="Elige ciudades secundarias como Valencia, Alicante o Sevilla. Hay menos competencia por trabajo, renta más barata y misma visa. Valencia tiene playa, clima excepcional y renta 40% más barata que Barcelona." />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title="Timeline de Ejecución">
          <Intro text="España es más rápida que Malta (no hay espera de 90 días) pero más lenta que Irlanda por la burocracia del empadronamiento y TIE. El cuello de botella es la cita de Extranjería." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Qué hacer', 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Fase 1: Pre-Partida', 'Pagar escuela + Carta de Aceptación + Seguro médico español + Visado Tipo D en consulado', '2-3 meses antes'],
                  ['Semana 1', 'SIM card + Empadronamiento + Abrir N26/BBVA + Agenda cita TIE en Extranjería', 'Día 1-7'],
                  ['Semana 2-4', 'Recibir TIE + Buscar habitación permanente + Entregar CVs en restaurantes y bares', 'Día 7-30'],
                  ['Mes 2', 'Conseguir empleo + Registrar Seguridad Social con empleador + Primer salario', 'Día 30-60'],
                  ['Mes 3-4', 'Estabilizar ingresos 30h/semana + Planear educación superior si aplica', 'Día 60-120'],
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
          <HackBox text="El orden en España es: Empadronamiento → Cita TIE → TIE → Seguridad Social → trabajo. Agenda la cita de Extranjería el mismo día que llegas — puede tardar semanas. Sin TIE, muchos empleadores no pueden contratarte formalmente." />
        </Section>

        {/* PRIMER SALARIO */}
        <Section id="salario1" emoji="⏳" title="Tiempo a Primer Salario">
          <Intro text="España es más flexible que Malta — no hay espera de 90 días. Si llegas con NIE adelantado puedes estar trabajando en 2-4 semanas. El trámite clave es la cita de TIE en Extranjería." />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>1️⃣ Hito 1 — Empleable (listo para trabajar)</p>
              {['Visa activa (Tipo D)', 'NIE / TIE activo', 'Número de Seguridad Social', 'Oferta laboral / contrato'].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>👉 Tiempo real: 2-4 semanas desde que llegas</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>2️⃣ Hito 2 — Primer ingreso (primer cobro)</p>
              {['Contrato firmado', 'Alta en Seguridad Social', 'Alta en payroll', 'Cuenta bancaria activa'].map((item, i) => (
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
              • Puedes empezar a trabajar en: <strong>~2-4 semanas desde que llegas</strong><br />
              • Puedes cobrar tu primer salario en: <strong>~1-2 meses desde llegada</strong>
            </p>
          </div>
          <HackBox text="Si llegas con empadronamiento y cita de TIE ya gestionada desde antes, puedes estar empleable en 2 semanas. La burocracia española es el cuello de botella — quien llega preparado avanza el doble de rápido." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis, Contingencia y Soporte">
          <Intro text="Los imprevistos ocurren. En España muchas oportunidades y soluciones aparecen primero en grupos de WhatsApp y comunidades internacionales. Mantente activo en esos grupos desde el día 1." />
          <SubHead text="🛟 Contactos de Emergencia" />
          {[
            ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
            ['Extranjería (TIE/NIE)', 'sede.administracionespublicas.gob.es'],
            ['Seguridad Social', 'seg-social.es — NUSS y trámites laborales'],
            ['SEPE (Empleo)', 'sepe.es — Programas de empleo y formación'],
            ['Comunidad L&T', 'Latinos en Madrid, Barcelona, Valencia — ver grupos abajo'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía Nacional y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en plataforma y denunciar en Policía', 'Policía Nacional'],
                  ['Problemas con TIE/NIE', 'Revisar cita en Extranjería y reunir documentos faltantes', 'Sede Extranjería'],
                  ['Retraso en documentos de escuela', 'Contactar Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Centro médico privado o urgencias con seguro', '112'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>🤝 Comunidad Latina en España</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en España — links próximamente
            </p>
          </div>
          <HackBox text="En España muchas oportunidades aparecen primero en grupos de estudiantes y comunidades internacionales. Mantente activo, responde rápido y usa networking para encontrar vivienda o trabajo antes que llegue a portales oficiales." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1728249987965-3943d53dd634?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text="Resumen ejecutivo de España como destino de migración para latinoamericanos." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'España 🇪🇸'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa principal', 'Visa de Estudiante (Tipo D)'],
                  ['Horas de trabajo', 'Hasta 30 horas/semana'],
                  ['Mínimo curso', '20 horas semanales'],
                  ['Solvencia obligatoria', '~€7,200 – €8,400 (IPREM anual)'],
                  ['Costo promedio curso español', '€2,500 – €5,500 (6 meses)'],
                  ['TIE (tarjeta residencia)', '€16 — dentro de 30 días de llegada'],
                  ['Renta cuarto compartido', '€480 – €800/mes'],
                  ['Empleos más comunes', 'Hospitality, Retail, Delivery, Tourism'],
                  ['Salario promedio entrada', '€7 – €12 por hora'],
                  ['Tiempo hasta primer trabajo', '2-6 semanas'],
                  ['Tiempo hasta primer cobro', '1-2 meses desde llegada'],
                  ['Idioma', 'Español'],
                  ['Camino a residencia', 'Búsqueda de empleo (12 meses) → Permiso de trabajo → Residencia'],
                  ['Nivel de dificultad', 'Medio'],
                  ['Mejores ciudades', 'Madrid, Valencia, Barcelona, Sevilla'],
                  ['Ventaja única', '30h/semana + universidades públicas más baratas de Europa'],
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint España:\n\n' + feedback)}`, '_blank')
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