'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

const countries = [
  {
    name: 'Argentina',
    flag: '🇦🇷',
    level: 'Alto',
    levelColor: '#22c55e',
    destinations: [
      '🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia',
      '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España', '🇯🇵 Japón',
      '🇨🇦 Canadá', '🇳🇴 Noruega', '🇸🇪 Suecia', '🇳🇱 Países Bajos',
      '🇩🇰 Dinamarca',
    ],
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    level: 'Alto',
    levelColor: '#22c55e',
    destinations: [
      '🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia',
      '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España', '🇨🇦 Canadá',
      '🇯🇵 Japón', '🇰🇷 Corea del Sur', '🇳🇴 Noruega', '🇸🇪 Suecia',
    ],
  },
  {
    name: 'México',
    flag: '🇲🇽',
    level: 'Medio',
    levelColor: '#f59e0b',
    destinations: [
      '🇨🇦 Canadá', '🇩🇪 Alemania', '🇳🇿 Nueva Zelanda',
      '🇰🇷 Corea del Sur', '🇫🇷 Francia',
    ],
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    level: 'Medio',
    levelColor: '#f59e0b',
    destinations: [
      '🇦🇺 Australia', '🇩🇪 Alemania', '🇫🇷 Francia', '🇮🇪 Irlanda',
      '🇵🇹 Portugal', '🇪🇸 España', '🇯🇵 Japón', '🇳🇿 Nueva Zelanda',
      '🇳🇴 Noruega', '🇸🇪 Suecia',
    ],
  },
  {
    name: 'Brasil',
    flag: '🇧🇷',
    level: 'Medio',
    levelColor: '#f59e0b',
    // Australia subclass 462 confirmed 2025; Canadá no tiene convenio WHV con Brasil
    destinations: [
      '🇦🇺 Australia', '🇩🇪 Alemania', '🇫🇷 Francia', '🇳🇿 Nueva Zelanda',
    ],
  },
  {
    name: 'Perú',
    flag: '🇵🇪',
    level: 'Medio',
    levelColor: '#f59e0b',
    destinations: [
      '🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia',
      '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España',
    ],
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    level: 'Limitado',
    levelColor: '#ef4444',
    // Hungría vigente desde abril 2025 según Wise/Pulzo 2026
    destinations: [
      '🇫🇷 Francia', '🇭🇺 Hungría (desde 2025)',
      '🇨🇱 Chile', '🇲🇽 México', '🇵🇪 Perú (Alianza del Pacífico)',
    ],
  },
  {
    name: 'Costa Rica',
    flag: '🇨🇷',
    level: 'Limitado',
    levelColor: '#ef4444',
    destinations: ['🇨🇦 Canadá'],
  },
  {
    name: 'Ecuador',
    flag: '🇪🇨',
    level: 'Limitado',
    levelColor: '#ef4444',
    // Australia subclass 462 confirmado; Francia confirmada
    destinations: ['🇫🇷 Francia', '🇦🇺 Australia (cupos limitados)'],
  },
  {
    name: 'Panamá',
    flag: '🇵🇦',
    level: 'Limitado',
    levelColor: '#ef4444',
    // Solo Francia confirmada con convenio bilateral activo
    destinations: ['🇫🇷 Francia'],
  },
  {
    name: 'Bolivia',
    flag: '🇧🇴',
    level: 'Limitado',
    levelColor: '#ef4444',
    destinations: ['🇫🇷 Francia'],
  },
  {
    name: 'Rep. Dominicana',
    flag: '🇩🇴',
    level: 'Limitado',
    levelColor: '#ef4444',
    destinations: ['🇫🇷 Francia'],
  },
  {
    name: 'Guatemala',
    flag: '🇬🇹',
    level: 'No disponible',
    levelColor: '#6b7280',
    destinations: [],
  },
  {
    name: 'Honduras',
    flag: '🇭🇳',
    level: 'No disponible',
    levelColor: '#6b7280',
    destinations: [],
  },
  {
    name: 'El Salvador',
    flag: '🇸🇻',
    level: 'No disponible',
    levelColor: '#6b7280',
    destinations: [],
  },
]

const destinationInfo = [
  { name: 'Australia', flag: '🇦🇺', duration: '12 meses (extensible)', age: '18 – 35', system: 'Aplicación directa', difficulty: 'Baja', funds: '~$5,000 AUD', salary: '$20 – $30 AUD/hora', color: '#22c55e' },
  { name: 'Nueva Zelanda', flag: '🇳🇿', duration: '12 meses', age: '18 – 30', system: 'Aplicación directa', difficulty: 'Baja', funds: '~$4,200 NZD', salary: '$18 – $25 NZD/hora', color: '#22c55e' },
  { name: 'Canadá', flag: '🇨🇦', duration: '12 – 24 meses', age: '18 – 35', system: 'Pool / sorteo', difficulty: 'Alta', funds: '~$2,500 CAD', salary: '$15 – $22 CAD/hora', color: '#ef4444' },
  { name: 'Irlanda', flag: '🇮🇪', duration: '12 meses', age: '18 – 30', system: 'Programa bilateral', difficulty: 'Media', funds: '€2,500 – €3,000', salary: '€13.50 – €16/hora', color: '#f59e0b' },
  { name: 'Alemania', flag: '🇩🇪', duration: '12 meses', age: '18 – 30', system: 'Consulado', difficulty: 'Baja', funds: '€2,000 – €3,000', salary: '€13.90 – €17/hora', color: '#22c55e' },
  { name: 'Francia', flag: '🇫🇷', duration: '12 meses', age: '18 – 30', system: 'Consulado', difficulty: 'Media', funds: '€2,500 – €3,500', salary: '€12.02 – €15/hora', color: '#f59e0b' },
]

export default function WorkAndHolidays() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [openSection, setOpenSection] = useState<string | null>(null)
  // ✅ FIX 2: ref para scroll automático al resultado
  const resultRef = useRef<HTMLDivElement>(null)
  const { locale } = useLanguage()

  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)

  const handleSelectCountry = (name: string) => {
    const next = selectedCountry === name ? null : name
    setSelectedCountry(next)
    if (next) {
      // Pequeño delay para que React renderice el bloque antes de hacer scroll
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }

  const HackBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '8px', padding: '14px 16px', marginTop: '16px' }}>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
        <span style={{ color: '#e8572a', fontWeight: 'bold' }}>💡 Hack de Lifestyle & Travel: </span>{text}
      </p>
    </div>
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

  const selected = countries.find(c => c.name === selectedCountry)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{
        position: 'relative',
        height: '55vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop")',
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
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🌴</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Visa Work and Holidays</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Viaja y trabaja legalmente hasta 12 meses</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ padding: '24px 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* SELECTOR PAÍS DE ORIGEN */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>¿De dónde eres?</h2>
          <p style={{ color: '#666', fontSize: '13px', marginBottom: '16px' }}>Selecciona tu país para ver a qué destinos puedes aplicar</p>

          {/* ✅ FIX 1: auto-fit para que funcione en cualquier ancho de pantalla */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
          }}>
            {countries.map(c => (
              <button
                key={c.name}
                onClick={() => handleSelectCountry(c.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 10px',
                  borderRadius: '10px',
                  border: selectedCountry === c.name ? '2px solid #e8572a' : '2px solid #e5e7eb',
                  backgroundColor: selectedCountry === c.name ? '#fff5f2' : 'white',
                  cursor: 'pointer',
                  gap: '4px',
                  minWidth: 0,         // ✅ evita overflow en grid
                  width: '100%',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0, overflow: 'hidden' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{c.flag}</span>
                  {/* ✅ FIX 3: texto truncado con ellipsis para nombres largos */}
                  <span style={{
                    fontSize: c.name.length > 10 ? '10px' : '12px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>{c.name}</span>
                </div>
                <span style={{
                  backgroundColor: c.levelColor,
                  color: 'white',
                  borderRadius: '10px',
                  padding: '2px 6px',
                  fontSize: '9px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>{c.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ✅ FIX 2: ref aquí para scroll automático */}
        <div ref={resultRef}>
          {selected && (
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
                {selected.flag} {selected.name} — Destinos disponibles
              </h3>
              {selected.destinations.length === 0 ? (
                <div style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '16px', marginTop: '12px', textAlign: 'center' }}>
                  <p style={{ color: '#dc2626', fontWeight: '600', margin: 0, fontSize: '14px' }}>⚠️ Sin convenios Working Holiday activos</p>
                  <p style={{ color: '#666', fontSize: '13px', margin: '8px 0 0' }}>Tu país no tiene acuerdos WHV vigentes por el momento.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginTop: '12px' }}>
                  {selected.destinations.map((dest, i) => (
                    <span key={i} style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#166534',
                    }}>
                      {dest}
                    </span>
                  ))}
                </div>
              )}
              {selected.destinations.length > 0 && (
                <p style={{ fontSize: '12px', color: '#888', margin: '12px 0 0' }}>
                  ⚠️ Los cupos y condiciones cambian cada año. Verifica en el portal oficial de inmigración de cada país.
                </p>
              )}
            </div>
          )}
        </div>

        {/* DESTINOS PRINCIPALES */}
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: '8px' }}>Destinos principales</h2>
        <p style={{ color: '#666', fontSize: '13px', marginBottom: '16px' }}>Comparativa de los mejores países WHV</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {destinationInfo.map((d, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '22px' }}>{d.flag}</span>
                  <span style={{ fontWeight: '700', fontSize: '15px' }}>{d.name}</span>
                  <span style={{ backgroundColor: d.color, color: 'white', borderRadius: '10px', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold' }}>{d.difficulty}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
                  ⏱ {d.duration} · 🎂 {d.age}<br />
                  💰 {d.funds} · 💵 {d.salary}
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#888', textAlign: 'right' as const, maxWidth: '100px' }}>
                {d.system}
              </div>
            </div>
          ))}
        </div>

        {/* ACCORDION SECTIONS */}
        <Section id="como" emoji="🛂" title="Cómo Aplicar — 3 Sistemas">
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1722349520010-a21efb9c3bcc?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { n: '1️⃣', title: 'Aplicación Directa (First Come, First Served)', desc: 'Las visas se otorgan al primero que aplica cuando abren los cupos. Pueden llenarse en horas.', examples: 'Australia, Nueva Zelanda', color: '#22c55e' },
              { n: '2️⃣', title: 'Sistema de Pool o Sorteo', desc: 'Entras a una base de candidatos y el gobierno envía invitaciones aleatorias para aplicar.', examples: 'Canadá (IEC)', color: '#ef4444' },
              { n: '3️⃣', title: 'Aplicación por Consulado', desc: 'Presentas documentos directamente en el consulado del país de destino.', examples: 'Alemania, Francia, Irlanda, España, Portugal', color: '#f59e0b' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px' }}>{item.n} {item.title}</p>
                <p style={{ fontSize: '13px', color: '#555', margin: '0 0 6px', lineHeight: '1.5' }}>{item.desc}</p>
                <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>Ejemplos: <strong>{item.examples}</strong></p>
              </div>
            ))}
          </div>
          <HackBox text="El error más común es esperar a que abran los cupos para preparar documentos. La estrategia correcta: crear cuentas en portales de inmigración, preparar documentos y tener fondos listos ANTES de la apertura. Así aplicas en los primeros minutos." />
        </Section>

        <Section id="costos" emoji="💰" title="Costos de Aplicación por País">
          <div style={{ overflowX: 'auto' as const, borderRadius: '10px', border: '1px solid #e5e7eb' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: '400px' }}>
              <thead>
                <tr>{['País', 'Costo', 'Sistema', 'Portal Oficial'].map((h, i) => (
                  <th key={i} style={{ backgroundColor: '#1e3a5f', color: 'white', padding: '10px 14px', textAlign: 'left' as const, fontSize: '13px', fontWeight: '700' as const }}>{h}</th>
                ))}</tr>
              </thead>
              <tbody>
                {[
                  ['🇦🇺 Australia', '$635 AUD', 'Directa', 'immi.homeaffairs.gov.au', 'https://immi.homeaffairs.gov.au'],
                  ['🇳🇿 Nueva Zelanda', '$455 NZD', 'Directa', 'immigration.govt.nz', 'https://www.immigration.govt.nz'],
                  ['🇨🇦 Canadá', '$172 CAD', 'Pool/sorteo', 'canada.ca/iec', 'https://www.canada.ca/iec'],
                  ['🇩🇪 Alemania', '€75', 'Consulado', 'auswaertiges-amt.de', 'https://www.auswaertiges-amt.de'],
                  ['🇫🇷 Francia', '€99', 'Consulado', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr'],
                  ['🇮🇪 Irlanda', '€60 – €100', 'Bilateral', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
                  ['🇪🇸 España', '€80', 'Consulado', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
                  ['🇵🇹 Portugal', '€75', 'Consulado', 'vistos.mne.gov.pt', 'https://vistos.mne.gov.pt'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', fontWeight: '700' }}>{r[0]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa' }}>{r[1]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa' }}>{r[2]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '13px' }}>{r[3]}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text="Si tu objetivo es obtener la visa rápido, los mejores destinos son Australia, Nueva Zelanda y Alemania. Procesos simples, sin sorteo y con respuesta en 2-4 semanas. Canadá puede tardar meses por el sistema de pool." />
        </Section>

        <Section id="checklist" emoji="📋" title="Checklist de Documentos">
          {[
            ['Pasaporte vigente', 'Mínimo 6-12 meses de validez durante toda la estancia'],
            ['Elegibilidad verificada', 'Confirma que tu nacionalidad tiene convenio WHV con el destino'],
            ['Seguro médico internacional', 'Cobertura válida durante toda la estancia (€100-300/año)'],
            ['Prueba de fondos', '$2,500-5,000 USD según país — en extractos bancarios'],
            ['Cuenta en portal oficial', 'Créala ANTES de que abran los cupos'],
            ['Pago de tasa de visa', 'Ten tarjeta lista para pagar online el día de apertura'],
            ['Boleto de avión', '€400-1,200 dependiendo del destino'],
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <HackBox text="El requisito oficial de fondos suele ser $2,500-5,000 pero ese es el mínimo migratorio. La estrategia real es llegar con $4,000-6,000 para cubrir los primeros 30-60 días mientras encuentras trabajo sin presión." />
        </Section>

        <Section id="bancos" emoji="🏦" title="Opciones Bancarias">
          <p style={{ fontSize: '14px', color: '#444', marginBottom: '12px', lineHeight: '1.6' }}>Para una Working Holiday abre primero Wise o Revolut antes de viajar. Luego abre banco local en el país destino.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital', 'Transferencias internacionales baratas + múltiples divisas. Abre antes de viajar.', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital', 'Tarjeta virtual inmediata. Ideal para primeras semanas.', 'revolut.com', 'https://revolut.com'],
              ['ANZ / Commonwealth', 'Tradicional AUS/NZ', 'Los más usados en Australia y Nueva Zelanda.', 'anz.com', 'https://anz.com'],
              ['Scotiabank', 'Tradicional CA', 'Popular entre WHV en Canadá.', 'scotiabank.com', 'https://scotiabank.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '12px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px' }}>{r[0]} <span style={{ color: '#888', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="vivienda" emoji="🏠" title="Protocolo de Vivienda">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <p style={{ fontSize: '14px', color: '#444', marginBottom: '12px', lineHeight: '1.6' }}>Reserva hostel o Airbnb para las primeras 1-2 semanas. Busca habitación permanente desde ahí.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Airbnb', 'Alojamiento temporal', 'Primeras semanas — base para buscar permanente', 'airbnb.com', 'https://airbnb.com'],
              ['Booking', 'Hostels económicos', 'Ideal para llegar sin compromisos largos', 'booking.com', 'https://booking.com'],
              ['Flatmates (AUS/NZ)', 'Habitaciones compartidas', 'El portal #1 en Australia y NZ para WHV', 'flatmates.com.au', 'https://flatmates.com.au'],
              ['Gumtree', 'Clasificados AUS/NZ', 'Habitaciones rápidas para viajeros', 'gumtree.com', 'https://gumtree.com'],
              ['Facebook Groups', 'Comunidad WHV', 'Grupos de viajeros WHV por país destino', 'facebook.com', 'https://facebook.com'],
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
          <HackBox text="Muchos WHV encuentran alojamiento a través de networking con otros viajeros. En ciudades con alta rotación laboral, las habitaciones se anuncian primero en grupos de Facebook o WhatsApp antes que en portales. Únete a grupos WHV de tu destino antes de volar." />
        </Section>

        <Section id="crisis" emoji="🛡️" title="Crisis y Contingencia">
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Robo / pérdida de pasaporte', 'Reportar a Policía + contactar Embajada/Consulado de tu país'],
              ['Problemas con la visa', 'Consultar portal oficial de inmigración o consulado del país'],
              ['Estafa de vivienda', 'No enviar depósitos sin ver la propiedad — reportar en la plataforma'],
              ['Problemas bancarios', 'Contactar banco inmediatamente para bloquear tarjeta'],
              ['Emergencias médicas', 'Usar tu seguro médico internacional — guardar número de emergencias del país'],
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONSULTORÍA — ✅ PLACEHOLDER para Calendly */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>Consultoría 1 a 1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>Te ayudamos a identificar tu mejor ruta WHV según tu país.</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>60 minutos · Plan completo · Respuesta en 24h</p>
          {/* 
            ✅ PRÓXIMO PASO — CALENDLY:
            Reemplaza href="#" con tu link de Calendly:
            href="https://calendly.com/TU-USUARIO/consulta-whv"
            
            Si quieres popup modal, instala: npm install @calendly/widget
            y reemplaza este <a> por el componente <PopupButton>
          */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#e8572a',
              color: 'white',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            📅 Agenda tu llamada de orientación
          </a>
        </div>

      </div>
    </main>
  )
}