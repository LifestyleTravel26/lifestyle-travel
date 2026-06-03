'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function PetSitting() {
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
    <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '16px', borderLeft: '3px solid #e8572a', paddingLeft: '12px' }}>{text}</p>
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
        <span style={{ fontSize: '16px', color: '#555555' }}>{openSection === id ? '∧' : '∨'}</span>
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1180&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🐾</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Pet & House Sitting</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Cuida mascotas y casas — alojamiento gratis mientras viajas</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Capital inicial', '€1,500 – €3,000'], ['🏠', 'Alojamiento', 'Gratis (intercambio)'], ['📊', 'Dificultad', 'Baja – Media']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#555555', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* ENCABEZADO */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '16px' }}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617028835510-3882b8bd4076?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>¿Qué es el Pet Sitting?</h2>
          <Intro text="El pet sitting (house sitting) es un intercambio: tú cuidas una casa y sus mascotas y, a cambio, te alojas allí gratis. Para quienes trabajan en remoto, es una forma muy práctica de eliminar el gasto más grande (la vivienda) sin frenar su rutina online." />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '12px' }}>
            A diferencia de otras rutas, <strong>no necesitas visa de trabajo, contrato laboral ni empleador</strong>. Solo necesitas perfil sólido, confianza y estrategia en plataformas especializadas.
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>✅ Lo que incluye el modelo Pet Sitting:</p>
            {[
              'Alojamiento gratis (el mayor ahorro posible)',
              'Flexibilidad total — tú eliges cuándo y dónde',
              'Sin visa de trabajo requerida',
              'Compatible con trabajo remoto e ingresos freelance',
              'Experiencia internacional y de vida real',
            ].map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
          <HackBox text="El pet sitting no te paga, pero te quita de encima el costo del alojamiento. Si combinas esto con trabajo remoto o ingresos freelance, reduces tu gasto mensual a casi cero en vivienda. Llega con €1,500-3,000 de colchón para los primeros sits mientras construyes reseñas." />
        </div>

        {/* VISADOS */}
        <Section id="visados" emoji="🛂" title="Visados — Opciones Legales para Pet Sitting">
          <Intro text="El pet sitting funciona con visa de turista en la mayoría de países. Es una actividad de intercambio no remunerada, por lo que no requiere permiso de trabajo. Respeta siempre los límites de estancia del país." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                flag: '🇪🇺', title: 'Zona Schengen (Europa)', detail: 'Hasta 90 días en 180 días. España, Francia, Alemania, Portugal y más. Ideal para rotar entre sits europeos.',
                link: 'home-affairs.ec.europa.eu', url: 'https://home-affairs.ec.europa.eu', color: '#22c55e', dif: 'Fácil'
              },
              {
                flag: '🇬🇧', title: 'Reino Unido', detail: 'Standard Visitor Visa — hasta 6 meses. Alta demanda de pet sitters. Competencia alta en ciudades grandes.',
                link: 'gov.uk/standard-visitor', url: 'https://www.gov.uk/standard-visitor', color: '#f59e0b', dif: 'Media'
              },
              {
                flag: '🇺🇸', title: 'Estados Unidos (B1/B2)', detail: 'Turismo y visitas temporales. Pet sitting posible como intercambio no remunerado. Requiere visa B1/B2 para la mayoría de LATAM.',
                link: 'travel.state.gov', url: 'https://travel.state.gov', color: '#f59e0b', dif: 'Media'
              },
              {
                flag: '🇦🇺🇳🇿', title: 'Australia / Nueva Zelanda', detail: 'Visa requerida (Working Holiday o turista). Estancias largas muy demandadas. Distancia y costo de vuelo son las barreras principales.',
                link: 'immi.homeaffairs.gov.au', url: 'https://immi.homeaffairs.gov.au', color: '#ef4444', dif: 'Alta'
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <p style={{ fontWeight: '700', fontSize: '14px', margin: 0 }}>{item.flag} {item.title}</p>
                  <span style={{ backgroundColor: item.color, color: 'white', borderRadius: '10px', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold', flexShrink: 0, marginLeft: '8px' }}>{item.dif}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 6px', lineHeight: '1.5' }}>{item.detail}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>{item.link} →</a>
              </div>
            ))}
          </div>
          <RedBox text="⚠️ IMPORTANTE: El pet sitting debe mantenerse como actividad no remunerada. No puedes recibir salario directo con visa de turista. El intercambio es alojamiento por cuidado — no dinero por trabajo." />
        </Section>

        {/* PLATAFORMAS */}
        <Section id="plataformas" emoji="🐕‍🦺" title="Plataformas — Cómo Encontrar Sits">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1749673802585-9023423800ba?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="El pet sitting no funciona como una visa tradicional. Todo depende de tu perfil en plataformas especializadas. Tu perfil es tu CV de confianza — sin perfil sólido, cuesta conseguir los primeros sits." />

          <SubHead text="🌍 Plataformas globales" />
          <div style={{ display: 'grid', gap: '8px', marginBottom: '14px' }}>
            {[
              ['TrustedHousesitters', 'La más grande a nivel mundial. Mayor variedad de destinos.', '€120-150/año', 'https://www.trustedhousesitters.com'],
              ['Nomador', 'Muy fuerte en Europa. Buena para empezar en España o Francia.', '€89/año', 'https://www.nomador.com'],
              ['HouseCarers', 'Comunidad sólida y veterana. Buena variedad global.', '€50/año', 'https://www.housecarers.com'],
              ['MindMyHouse', 'Opción económica para empezar. Menos competencia.', '€20/año', 'https://www.mindmyhouse.com'],
              ['HouseSitMatch', 'Buena para principiantes. Proceso de matching más guiado.', '€39/año', 'https://www.housesitmatch.com'],
              ['Luxury House Sitting', 'Propiedades premium. Requiere historial sólido.', 'Variable', 'https://www.luxuryhousesitting.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{r[0]}</p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[1]}</p>
                </div>
                <div style={{ textAlign: 'right' as const, flexShrink: 0, marginLeft: '8px' }}>
                  <p style={{ fontSize: '11px', color: '#333333', margin: '0 0 2px' }}>{r[2]}</p>
                  <a href={r[3] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>Ver →</a>
                </div>
              </div>
            ))}
          </div>

          <SubHead text="🗺️ Plataformas por país (menos competencia)" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              ['🇦🇺 Australia', 'Aussie House Sitters', 'https://www.aussiehousesitters.com.au'],
              ['🇳🇿 Nueva Zelanda', 'Kiwi House Sitters', 'https://www.kiwihousesitters.co.nz'],
              ['🇺🇸 EE.UU.', 'House Sitters America', 'https://www.housesittersamerica.com'],
              ['🇨🇦 Canadá', 'House Sitters Canada', 'https://www.housesitterscanada.com'],
              ['🇲🇽 México', 'House Sit Mexico', 'https://www.housesitmexico.com'],
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 12px' }}>
                <p style={{ fontWeight: '700', fontSize: '12px', margin: '0 0 3px' }}>{r[0]}</p>
                <a href={r[2] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>{r[1]}</a>
              </div>
            ))}
          </div>
          <HackBox text="Empieza en destinos menos competidos (ciudades secundarias en España, Portugal o Francia) para conseguir tus primeras 2-3 reseñas. Con esas reviews, accedes a mejores casas en destinos más populares. Sin reviews, todo cuesta el doble de tiempo." />
        </Section>

        {/* PROCESO */}
        <Section id="proceso" emoji="⏳" title="Proceso Paso a Paso">
          <Intro text="No gana el más calificado, sino el más rápido y confiable. Perfil fuerte + aplicación rápida = primeros sits. Reviews = acceso a mejores casas." />
          {[
            ['1️⃣', 'Crear perfil sólido', 'Fotos con animales, descripción clara y confiable, experiencia con mascotas (aunque sea informal) y referencias. Tu perfil es TODO.'],
            ['2️⃣', 'Aplicar en las primeras horas', 'Cuando aparece un sit nuevo, aplica en las primeras 1-2 horas. Los dueños revisan primero los que llegaron antes.'],
            ['3️⃣', 'Mensajes personalizados', 'Adapta cada mensaje al dueño — menciona sus mascotas por nombre, su zona, sus rutinas. Los mensajes genéricos no convierten.'],
            ['4️⃣', 'Videollamada con el dueño', 'Se evalúan compatibilidad, tareas (comida, paseos, rutinas), fechas y condiciones. Aquí se construye la confianza.'],
            ['5️⃣', 'Confirmar y ejecutar el sit', 'Acordar detalles finales, llegar puntual y cuidar la casa como si fuera tuya. Eso genera excelentes reviews.'],
            ['6️⃣', 'Conseguir review y escalar', 'Cada review mejora tu perfil y te da acceso a mejores casas. Los primeros 2-3 sits son los más difíciles — después fluye.'],
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{step[0]}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px' }}>{step[1]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0, lineHeight: '1.5' }}>{step[2]}</p>
              </div>
            </div>
          ))}
          <SubHead text="⏱ Tiempos estimados" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Fase', 'Tiempo', 'Factor clave'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Crear perfil optimizado', '1-3 días', 'Calidad de fotos y descripción'],
                  ['Primeras aplicaciones', 'Día 1 en plataforma', 'Velocidad + personalización'],
                  ['Primer sit confirmado', '1-2 semanas (perfil fuerte)', 'Competencia del destino'],
                  ['Primeras reviews', 'Tras completar sit', 'Calidad del cuidado'],
                  ['Acceso a mejores oportunidades', 'Tras 3-5 reviews', 'Historial en plataforma'],
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
          <HackBox text="Los primeros 1-2 sits son los más difíciles sin reviews. Estrategia: aplica a sits en ciudades secundarias menos competidas (no Londres, París o Nueva York al inicio). Con 2-3 reviews sólidas, ya puedes aspirar a las mejores casas en cualquier destino." />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos e Inversión Inicial">
          <Intro text="El pet sitting elimina el mayor gasto (alojamiento) pero sí requiere inversión en plataformas y colchón inicial para los primeros 30-60 días mientras consigues tus primeros sits." />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Concepto', 'Costo', 'Obligatorio'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Membresía TrustedHousesitters', '€120-150/año', '✅ Principal plataforma'],
                  ['Membresía Nomador (opcional)', '€89/año', '⚪ Recomendado para Europa'],
                  ['Membresía adicional (opcional)', '€20-50/año', '⚪ Para más visibilidad'],
                  ['Seguro médico internacional', '€100-300/año', '✅ Muy recomendado'],
                  ['Tasa de visa (si aplica)', '€0-200', '✅ Según país'],
                  ['Boleto de avión', '€400-1,200', '✅ Primer destino'],
                  ['Colchón inicial recomendado', '€1,500-3,000', '✅ Para los primeros 30-60 días'],
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
          <BlueBox text="💡 Con 2-3 sits seguidos bien coordinados puedes estar 2-3 meses sin pagar alojamiento. Si tu trabajo es remoto, tu único gasto real son comida, transporte y actividades. El ahorro mensual puede ser de €700-1,500 respecto a alquilar." />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title="Opciones Bancarias — Lifestyle Remoto">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1696875094691-815f5a332506?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="En pet sitting no necesitas banco local — no recibes ingresos del país. Lo importante es acceso a dinero internacional y pagos digitales sin comisiones. Wise y Revolut son la combinación perfecta." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital — Global', 'Transferencias internacionales baratas + múltiples divisas. El #1 para nómadas.', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital — Global', 'Apertura rápida + tarjeta virtual inmediata. Ideal para pagos diarios.', 'revolut.com', 'https://revolut.com'],
              ['N26', 'Digital — Europa', 'IBAN europeo + gestión completa desde app.', 'n26.com', 'https://n26.com'],
              ['Monzo', 'Digital — UK', 'Muy usado en UK. Ideal si haces muchos sits en Reino Unido.', 'monzo.com', 'https://monzo.com'],
              ['Bunq', 'Digital — Europa', 'IBAN europeo + control total + ideal para expats.', 'bunq.com', 'https://bunq.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{r[0]} <span style={{ color: '#333333', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
          <HackBox text="En pet sitting no necesitas banco local para empezar. Usa Wise o Revolut para gestionar dinero globalmente, pagar gastos diarios y moverte entre países sin fricción. Esto te permite viajar sin depender del sistema bancario de cada país." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis y Contingencia">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1749674240266-eda73911d98f?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="En pet sitting estás viviendo en casa de otra persona. La clave es anticiparse, comunicar rápido y gestionar bien cada situación desde el primer día." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Problemas con la mascota', 'Contactar inmediatamente al dueño y seguir sus instrucciones. Tienen protocolo para cada situación.'],
              ['Condiciones diferentes a lo acordado', 'Hablar con el dueño directamente. Si no se resuelve, contactar la plataforma (TrustedHousesitters tiene soporte).'],
              ['Cancelación de último momento', 'Activar plan B (Airbnb/hostel) y buscar nuevo sit inmediatamente en la plataforma.'],
              ['Robo / pérdida de documentos', 'Reportar a Policía + contactar Embajada/Consulado de tu país.'],
              ['Problemas de salud', 'Usar seguro médico internacional — Europa: 112.'],
              ['Perfil falso o estafa', 'Nunca confirmar sin videollamada y referencias verificadas. La plataforma tiene sistema de verificación.'],
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <BlueBox text="🔵 SOPORTE: Dueño de la casa (primer contacto) → Plataforma (TrustedHousesitters/Nomador) → Embajada de tu país → Seguro médico → Servicios de emergencia (112 en Europa, 000 en Australia, 911 en EE.UU.)." />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Comparación de Destinos">
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', '🇪🇺 Europa', '🇬🇧 Reino Unido', '🇦🇺🇳🇿 AUS/NZ'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Duración sits', '1 semana – 2 meses', '1 semana – 3 meses', '2 semanas – 6 meses'],
                  ['Competencia', 'Media', 'Alta', 'Media'],
                  ['Idioma', 'Inglés básico útil', 'Inglés requerido', 'Inglés requerido'],
                  ['Acceso', 'Schengen 90 días', 'Visa UK según país', 'Visa necesaria'],
                  ['Beneficio principal', 'Ahorro en vivienda', 'Muchas oportunidades', 'Estancias largas'],
                  ['Dificultad', '🟢 Baja', '🟡 Media', '🟡 Media'],
                  ['Mejor para', 'Empezar + rotar', 'Sits largos urbanos', 'Experiencia larga'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    {r.slice(1).map((v, j) => <td key={j} style={T.td(i)}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Europa (España, Portugal, Francia) es el mejor punto de inicio — Schengen de 90 días, media competencia y muchas familias buscando sitters. Empieza ahí, construye 3-5 reviews y luego escala a UK, Australia o Nueva Zelanda con un perfil ya consolidado." />
        </Section>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>Te ayudamos a armar tu estrategia de pet sitting + trabajo remoto.</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            📅 Agenda tu llamada de orientación
          </a>
        </div>

      </div>
    </main>
  )
}