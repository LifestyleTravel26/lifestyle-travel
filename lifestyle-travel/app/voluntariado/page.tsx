'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Voluntariado() {
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
        position: 'relative', height: '55vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1171&auto=format&fit=crop")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🌱</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Voluntariado Internacional</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Alojamiento + comida gratis a cambio de tu tiempo</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', 'Costo mensual', '~$0 (Aloj + comida)'], ['⏰', 'Horas/semana', '20 – 40 horas'], ['📊', 'Dificultad', 'Media – Alta']].map((s, i) => (
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542323228-002ac256e7b8?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>¿Qué es el Voluntariado Internacional?</h2>
          <Intro text="Un sistema de intercambio diseñado para eliminar tus dos gastos más grandes — alojamiento y comida — sin visa de trabajo ni costosos estudios. Ingresas como turista, cooperas en proyectos globales a cambio de beneficios en especie, y usas tus horas libres para facturar en dólares o euros por internet de forma 100% remota." />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginBottom: '12px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>✅ Lo que incluye el voluntariado:</p>
            {['Alojamiento gratis (habitación o cama)', 'Comida incluida (según programa)', 'Experiencia internacional real', 'Días libres para turismo y trabajo remoto', 'Red de contactos global'].map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#444', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
          <HackBox text="Al ingresar en la ventanilla de migración, NUNCA digas que vienes a trabajar a cambio de comida. Para la ley, eso activa alarmas de inmigración ilegal. Eres un turista en un programa de intercambio cultural. Lleva siempre pasaje de regreso, seguro médico y datos del anfitrión como 'hospedaje', nunca como 'empleador'." />
        </div>

        {/* ELEGIBILIDAD LATAM */}
        <Section id="elegibilidad" emoji="🛂" title="Elegibilidad por Pasaporte Latinoamericano">
          <Intro text="Tu nivel de acceso depende del poder de tu pasaporte. Esto determina qué programas puedes usar, cuántos trámites necesitas y qué fondos debes demostrar en frontera." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { level: '🟢 PREMIUM', countries: 'Argentina, Chile, Uruguay, Costa Rica, Panamá, Brasil', europe: '✅ Libre (Sin Visa)', asia: '✅ Libre / VoA', impact: 'BAJO — Aterrizan sin trámites consulares. 90 días directos en Schengen y acceso directo a Tailandia, Malasia y Vietnam.', color: '#22c55e', bg: '#f0fdf4', border: '#86efac' },
              { level: '🟡 MEDIO', countries: 'Colombia, Perú, México', europe: '✅ Libre (Sin Visa)', asia: '⚠️ Variable', impact: 'MEDIO — Mismo beneficio de entrada que Premium, pero migración exige fondos de contingencia ($1,500 USD obligatorios) y boleto de salida.', color: '#f59e0b', bg: '#fffbeb', border: '#fbbf24' },
              { level: '🔴 RESTRICCIÓN', countries: 'Ecuador, Bolivia, Cuba, Rep. Dominicana, Honduras, El Salvador, Guatemala, Nicaragua', europe: '⛔ Visa Schengen obligatoria', asia: '⛔ Restringido', impact: 'ALTO — Deben tramitar visa consular previa. El hostal debe enviar Carta de Invitación Formal. Recomendado: UN Volunteers o AIESEC por su respaldo institucional.', color: '#ef4444', bg: '#fef2f2', border: '#fca5a5' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: item.bg, borderRadius: '10px', padding: '14px', border: `1px solid ${item.border}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px', color: item.color }}>{item.level}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', margin: '0 0 4px' }}>{item.countries}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: '0 0 6px', lineHeight: '1.5' }}>Europa: {item.europe} · Asia: {item.asia}</p>
                <p style={{ fontSize: '12px', color: '#444', margin: 0, lineHeight: '1.5' }}>{item.impact}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROGRAMAS */}
        <Section id="programas" emoji="🚀" title="Programas Disponibles">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616680213875-8c6cbae0b933?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text="Tres programas principales, cada uno con un perfil diferente. Worldpackers para hostales y proyectos urbanos. WWOOF para granjas y vida rural. UN Volunteers para misiones humanitarias con financiación completa de la ONU." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Worldpackers', emoji: '🌐', cost: '$49 USD/año', hours: '20-24 h/semana', benefit: 'Cama + cocina + desayuno + lavandería', destinations: 'España, Portugal, Francia, Italia, Tailandia, Vietnam', roles: 'Recepción, Social Media, Bartender, Limpieza', link: 'https://www.worldpackers.com', color: '#e8572a' },
              { name: 'WWOOF', emoji: '🌾', cost: '€15-35/año', hours: '25-30 h/semana', benefit: 'Alojamiento + 3 comidas completas/día', destinations: 'Francia, Alemania, Irlanda, Japón, Corea del Sur', roles: 'Siembra, Cosecha, Animales, Permacultura, Quesos/Vino', link: 'https://wwoof.net', color: '#22c55e' },
              { name: 'UN Volunteers (ONU)', emoji: '🇺🇳', cost: '$0 (Paga la ONU)', hours: '35-40 h/semana', benefit: 'Subsidio $1,200-$2,400/mes + seguro + vuelos', destinations: 'Camboya, Laos, Nepal, Europa del Este, Latam', roles: 'Logística, DDHH, Soporte Técnico, Monitoreo', link: 'https://www.unv.org', color: '#3b82f6' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '16px', borderLeft: `4px solid ${p.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <p style={{ fontWeight: '700', fontSize: '15px', margin: 0 }}>{p.emoji} {p.name}</p>
                  <span style={{ backgroundColor: p.color, color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '12px', fontWeight: '700' }}>{p.cost}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                  {[['⏰ Horas', p.hours], ['🍽️ Beneficio', p.benefit], ['📍 Destinos', p.destinations], ['🛠️ Roles', p.roles]].map((item, j) => (
                    <div key={j}>
                      <p style={{ fontSize: '11px', color: '#888', margin: '0 0 1px', fontWeight: '600' }}>{item[0]}</p>
                      <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{item[1]}</p>
                    </div>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: p.color, textDecoration: 'underline', fontSize: '13px', fontWeight: '700' }}>Aplicar en {p.name} →</a>
              </div>
            ))}
          </div>
          <HackBox text="La ONU (UN Volunteers) es el mejor programa para pasaportes de alta restricción — la carta de la ONU exime de solvencia consular y acelera aprobación de visa. Para pasaportes Premium, Worldpackers es la entrada más rápida y flexible." />
        </Section>

        {/* REQUISITOS */}
        <Section id="requisitos" emoji="📋" title="Requisitos por Programa">
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Edad', 'Idioma', 'Antecedentes', 'Documentos'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🌐 Worldpackers', '18 – 99 años', 'Inglés básico informal', 'Solo si trabaja con niños/ONGs', 'Pasaporte +6 meses + seguro de viaje'],
                  ['🌾 WWOOF', '18 años mínimo', 'Idioma local básico o inglés', 'No requerido (90% granjas)', 'Pasaporte + registro asociación local'],
                  ['🇺🇳 UN Volunteers (Youth)', '18 – 26 años', 'Inglés/Francés/Español avanzado', '✅ Obligatorio (policía nacional)', 'Pasaporte + título universitario + CV'],
                  ['🇺🇳 UN Volunteers (Especialista)', '27 – 80 años', 'Inglés/Francés/Español avanzado', '✅ Obligatorio', 'Pasaporte + experiencia profesional + CV'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: i >= 2 ? '#dc2626' : '#166534', fontWeight: '600' }}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title="Gastos Obligatorios por Perfil">
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Perfil', 'Visa Europa', 'Seguro médico', 'Extras', 'Total estimado'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🟢 LATAM Premium/Medio → Europa', '€20 (ETIAS)', '$40-70 USD/mes', '$20-50 USD', '~€300-500/mes'],
                  ['🔴 LATAM Restricción → Europa', '€90 (Schengen)', '$40-70 USD/mes', '$30-50 USD (apostillas)', '~€400-700/mes'],
                  ['🇺🇳 UN Volunteers (cualquier pasaporte)', '$0 (ONU paga todo)', '$0 (seguro ONU)', '$20-50 USD (apostillas)', 'Subsidio $1,200-$2,400/mes'],
                  ['🇪🇺 Europeos → Latam/Asia', '$0 (libre 90 días)', '$40-70 USD/mes', '$20-30 USD', '~€200-400/mes'],
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
          <BlueBox text="💡 ETIAS 2026: Los latinoamericanos con pasaporte Premium (sin visa Schengen) ahora deben tramitar ETIAS online antes de volar a Europa. Cuesta €20, dura 3 años y se aprueba en minutos. Sin ETIAS no te dejan subir al avión." />
        </Section>

        {/* ROLES Y HORAS */}
        <Section id="roles" emoji="🛠️" title="Roles y Límites de Trabajo Voluntario">
          <Intro text="El intercambio es justo cuando se respetan los límites. Más de 30 horas semanales ya califica como empleo y debe ser remunerado. Verifica estas reglas antes de confirmar cualquier voluntariado." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {[
              ['✅ Regla del Intercambio Justo', 'Ningún voluntariado informal debe exigir más de 30 horas semanales. Más de eso = empleo = debe ser remunerado.'],
              ['✅ Días de Descanso Garantizados', 'Mínimo 2 días libres consecutivos por semana para turismo o descanso.'],
              ['✅ Prohibición de Lucro Directo', 'El voluntario no debe manejar cajas de dinero ni venta directa de forma aislada.'],
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #22c55e' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#166534', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Programa', 'Roles más demandados', 'Horas/semana', 'Beneficios'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🌐 Worldpackers', 'Recepción, Social Media, Bar, Limpieza', '20 – 24h (5 días/sem)', 'Cama + cocina + desayuno + lavandería'],
                  ['🌾 WWOOF', 'Siembra, Animales, Permacultura, Quesos', '25 – 30h (4-6h/día)', 'Alojamiento + 3 comidas/día'],
                  ['🇺🇳 UN Volunteers', 'Logística, DDHH, IT, Monitoreo', '35 – 40h (full-time)', 'Subsidio + seguro + vuelos ida/vuelta'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#0369a1', fontWeight: '600' }}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* TRABAJO REMOTO */}
        <Section id="remoto" emoji="💻" title="Trabajo Remoto — Portales para Facturar Online">
          <Intro text="En tus horas libres del voluntariado puedes facturar en dólares o euros de forma 100% remota. Estos son los mejores portales para trabajo freelance e independiente desde cualquier país." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Upwork', 'Freelance global', 'Traducción, diseño, programación, asistencia virtual. Pagos en USD.', 'upwork.com', 'https://www.upwork.com'],
              ['Fiverr', 'Servicios digitales', 'Vender servicios por proyectos cortos. Perfecta para ganar dinero rápido en el camino.', 'fiverr.com', 'https://www.fiverr.com'],
              ['We Work Remotely', 'Empleo remoto', 'La mayor comunidad de empleo remoto del mundo. Puestos estables a tiempo parcial o completo.', 'weworkremotely.com', 'https://weworkremotely.com'],
              ['LinkedIn Global', 'Red profesional', 'Configurar ubicación en el país de destino para trabajo corporativo en Europa o Asia.', 'linkedin.com', 'https://www.linkedin.com'],
              ['Indeed (por país)', 'Empleo local', 'Filtrar por país destino (es.indeed.com, th.indeed.com). Hostelería, turismo, idiomas.', 'indeed.com', 'https://www.indeed.com'],
              ['Hostel Jobs', 'Sector hostelería', 'Empleos pagados en hostales y turismo. El salto natural después de ser voluntario.', 'hosteljobs.net', 'https://www.hosteljobs.net'],
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

        {/* TIMELINE */}
        <Section id="timeline" emoji="📅" title="Timeline de Ejecución — 3 Meses Antes del Vuelo">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { phase: '📅 Mes 3 (Semanas 12-9)', title: 'Fase de Filtro y Aplicación', items: ['Sem 12: Crear y optimizar perfiles en Worldpackers, WWOOF o UN Volunteers', 'Sem 11: Revisar vigencia del pasaporte — si quedan menos de 6 meses, renovar YA', 'Sem 10: Enviar primeras 5 aplicaciones personalizadas a anfitriones', 'Sem 9: Videollamadas con anfitriones interesados y confirmar roles, horas y beneficios'], color: '#3b82f6' },
              { phase: '📅 Mes 2 (Semanas 8-5)', title: 'Fase Legal y Logística', items: ['Sem 8: Comprar pasajes de avión ida y vuelta (obligatorio)', 'Sem 7: Tramitar ETIAS (€20 online) o visa consular si aplica', 'Sem 6: Solicitar antecedentes penales apostillados si el programa lo requiere', 'Sem 5: Revisar calendario de vacunación según destino (Fiebre Amarilla en trópicos)'], color: '#f59e0b' },
              { phase: '📅 Mes 1 (Semanas 4-1)', title: 'Fase de Cierre y Blindaje', items: ['Sem 4: Contratar seguro médico (SafetyWing o Heymondo)', 'Sem 3: Notificar banco sobre viaje + configurar Wise/Revolut', 'Sem 2: Preparar equipaje + dejar copias digitales en la nube', 'Sem 1: Confirmar llegada con anfitrión + cambiar $100-200 USD en efectivo + check-in 24h antes'], color: '#22c55e' },
            ].map((phase, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '14px', borderLeft: `4px solid ${phase.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: phase.color, margin: '0 0 2px' }}>{phase.phase}</p>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 8px' }}>{phase.title}</p>
                {phase.items.map((item, j) => (
                  <p key={j} style={{ fontSize: '12px', color: '#555', margin: '3px 0', display: 'flex', gap: '6px' }}>
                    <span style={{ color: phase.color, flexShrink: 0 }}>•</span> {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* PROTOCOLO ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🛬" title="Protocolo de Aterrizaje — Primeras 72 Horas">
          <Intro text="Las primeras 72 horas son críticas para tu estatus migratorio y tu relación con el anfitrión. Sigue este protocolo exacto." />
          {[
            ['Día 1 — Primeras 24h', 'Sellar entrada / registro digital. En Europa verificar registro EES. En Asia guardar comprobante de Arrival Card. Evitar multas por entrada no registrada.'],
            ['Día 2 — Primeras 48h', 'Check-in con el anfitrión. Si el país lo exige, registrar dirección real de estancia. Confirmar roles, horario y días libres exactos para evitar malentendidos desde el inicio.'],
            ['Día 3 — Primeras 72h', 'Activar SIM local con datos para tener acceso a mapas y soporte de plataformas en caso de emergencia. Confirmar reglas de convivencia: cocina, horario nocturno, visitas, lavandería.'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px', color: '#e8572a' }}>{item[0]}</p>
                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.5' }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <RedBox text="⚠️ Si te pasas de los 90 días legales, NO intentes salir escondiéndote. Dirígete a migración local para pagar la multa y solicitar salida voluntaria. Evitas deportación y veto fronterizo." />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title="Crisis y Contingencia — Protocolos de Emergencia">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617835963886-d504ab3cca44?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { title: '🏚️ Escenario A: El voluntariado es una estafa o condiciones deplorables', steps: ['Documentar con fotos, videos y capturas de chat.', 'Worldpackers: Activar seguro — paga hasta 3 noches de hostal de emergencia y te reubica. WWOOF: Reportar al coordinador nacional.', 'Si tu integridad está en riesgo, vete inmediatamente a un hostal. Ningún voluntariado vale tu seguridad.'], color: '#dc2626' },
              { title: '🏥 Escenario B: Accidente o enfermedad grave', steps: ['Informar al anfitrión y compañeros para primeros auxilios.', 'Llamar al número de emergencia de tu póliza ANTES de entrar al hospital (SafetyWing/Heymondo). Si no es posible, guardar todas las facturas.', 'Notificar a la plataforma sobre tu estado para congelar la estancia o tramitar relevo.'], color: '#f59e0b' },
              { title: '🛃 Escenario C: Problemas migratorios o pérdida de documentos', steps: ['Pérdida de pasaporte: Ir a policía local a levantar denuncia (Police Report obligatorio).', 'Agendar cita de emergencia en embajada de tu país para pasaporte de emergencia o salvoconducto.', 'Overstay (días excedidos): No intentes salir sin reportar. Ve a migración, paga multa, pide salida voluntaria.'], color: '#3b82f6' },
            ].map((scenario, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '14px', borderLeft: `4px solid ${scenario.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 8px', color: scenario.color }}>{scenario.title}</p>
                {scenario.steps.map((step, j) => (
                  <p key={j} style={{ fontSize: '12px', color: '#555', margin: '4px 0', display: 'flex', gap: '6px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: '700', flexShrink: 0 }}>Paso {j + 1}:</span> {step}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title="Country Comparison Matrix">
          <SubHead text="🛫 Ruta A: Latinoamérica → Europa / Asia" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Detalle'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Ruta visa principal', 'ETIAS €20 (Premium/Medio) / Visa Schengen €90 (Restricción)'],
                  ['Permiso de trabajo', '0h formales (actividad no remunerada con visa turista)'],
                  ['Solvencia requerida', '€40–€90/día de estancia como garantía en control de frontera'],
                  ['Costo seguro médico', '$40–$70 USD/mes (SafetyWing / Heymondo)'],
                  ['Alojamiento promedio', '$0 USD (cubierto por el anfitrión)'],
                  ['Roles más comunes', 'Recepción, Housekeeping, Social Media, Bartender, Agricultura'],
                  ['Salario en especie', 'Equivalente a €800/mes en Europa · $500/mes en Asia'],
                  ['Tiempo hasta primer sit', '1-2 semanas (confirmado desde Worldpackers antes de volar)'],
                  ['Ruta a largo plazo', 'Voluntariado → Ingresos remotos → Visa Nómada Digital'],
                  ['Dificultad', 'Media-Alta (según restricción del pasaporte)'],
                  ['Mejores ciudades', 'Barcelona, Berlín, Bangkok, Tokio'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text="🛬 Ruta B: Europa / Asia → Latinoamérica" />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Categoría', 'Detalle'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Entrada', '$0 (libre 90 días para EU/Asia Premium)'],
                  ['Alojamiento', '$0 (cubierto por eco-lodge, ONG u hostal)'],
                  ['Roles comunes', 'Enseñanza de idiomas, Permacultura, Eco-construcción, Relaciones con huéspedes'],
                  ['Salario en especie', 'Equivalente a $400 USD/mes en Latam'],
                  ['Ruta a largo plazo', 'Voluntariado → Red ONGs → Patrocinio visa de empleo local'],
                  ['Dificultad', 'Baja (pasaportes EU/Premium asiáticos)'],
                  ['Mejores ciudades', 'Ciudad de México, Medellín, Cusco, Florianópolis'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="La ruta más inteligente: Voluntariado (0 gastos fijos) + trabajo remoto en horas libres + ingresos en USD/EUR = ahorro máximo. Con 3-6 meses de ingresos remotos demostrables, aplicas a Visa Nómada Digital en Georgia o España para residencia legal." />
        </Section>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>Te armamos la estrategia de voluntariado + trabajo remoto según tu perfil.</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            📅 Agenda tu llamada de orientación
          </a>
        </div>

      </div>
    </main>
  )
}