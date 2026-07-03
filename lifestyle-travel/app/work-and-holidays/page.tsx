'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { usePurchase } from '../hooks/usePurchase'

const translations = {
  es: {
    hero_title: 'Visa Work and Holidays',
    hero_sub: 'Viaja y trabaja legalmente hasta 12 meses',
    selector_title: '¿De dónde eres?',
    selector_sub: 'Selecciona tu país para ver a qué destinos puedes aplicar',
    levels: { Alto: 'Alto', Medio: 'Medio', Limitado: 'Limitado', 'No disponible': 'No disponible' },
    destinations_title: 'destinos disponibles',
    no_destinations: '⚠️ Sin convenios Working Holiday activos',
    no_destinations_sub: 'Tu país no tiene acuerdos WHV vigentes por el momento.',
    destinations_warning: '⚠️ Los cupos y condiciones cambian cada año. Verifica en el portal oficial de inmigración de cada país.',
    main_destinations_title: 'Destinos principales',
    main_destinations_sub: 'Comparativa de los mejores países WHV',
    difficulty: { Baja: 'Baja', Media: 'Media', Alta: 'Alta' },
    sec_como_title: 'Cómo Aplicar — 3 Sistemas',
    systems: [
      { n: '1️⃣', title: 'Aplicación Directa (First Come, First Served)', desc: 'Las visas se otorgan al primero que aplica cuando abren los cupos. Pueden llenarse en horas.', examples: 'Australia, Nueva Zelanda', color: '#22c55e' },
      { n: '2️⃣', title: 'Sistema de Pool o Sorteo', desc: 'Entras a una base de candidatos y el gobierno envía invitaciones aleatorias para aplicar.', examples: 'Canadá (IEC)', color: '#ef4444' },
      { n: '3️⃣', title: 'Aplicación por Consulado', desc: 'Presentas documentos directamente en el consulado del país de destino.', examples: 'Alemania, Francia, Irlanda, España, Portugal', color: '#f59e0b' },
    ],
    como_hack: 'El error más común es esperar a que abran los cupos para preparar documentos. La estrategia correcta: crear cuentas en portales de inmigración, preparar documentos y tener fondos listos ANTES de la apertura. Así aplicas en los primeros minutos.',
    sec_costos_title: 'Costos de Aplicación por País',
    th_pais: 'País', th_costo: 'Costo', th_sistema: 'Sistema', th_portal: 'Portal Oficial',
    costos_hack: 'Si tu objetivo es obtener la visa rápido, los mejores destinos son Australia, Nueva Zelanda y Alemania. Procesos simples, sin sorteo y con respuesta en 2-4 semanas. Canadá puede tardar meses por el sistema de pool.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist: [
      ['Pasaporte vigente', 'Mínimo 6-12 meses de validez durante toda la estancia'],
      ['Elegibilidad verificada', 'Confirma que tu nacionalidad tiene convenio WHV con el destino'],
      ['Seguro médico internacional', 'Cobertura válida durante toda la estancia (€100-300/año)'],
      ['Prueba de fondos', '$2,500-5,000 USD según país — en extractos bancarios'],
      ['Cuenta en portal oficial', 'Créala ANTES de que abran los cupos'],
      ['Pago de tasa de visa', 'Ten tarjeta lista para pagar online el día de apertura'],
      ['Boleto de avión', '€400-1,200 dependiendo del destino'],
    ],
    checklist_hack: 'El requisito oficial de fondos suele ser $2,500-5,000 pero ese es el mínimo migratorio. La estrategia real es llegar con $4,000-6,000 para cubrir los primeros 30-60 días mientras encuentras trabajo sin presión.',
    sec_bancos_title: 'Opciones Bancarias',
    bancos_intro: 'Para una Working Holiday abre primero Wise o Revolut antes de viajar. Luego abre banco local en el país destino.',
    sec_vivienda_title: 'Protocolo de Vivienda',
    vivienda_intro: 'Reserva hostel o Airbnb para las primeras 1-2 semanas. Busca habitación permanente desde ahí.',
    vivienda_hack: 'Muchos WHV encuentran alojamiento a través de networking con otros viajeros. En ciudades con alta rotación laboral, las habitaciones se anuncian primero en grupos de Facebook o WhatsApp antes que en portales. Únete a grupos WHV de tu destino antes de volar.',
    sec_crisis_title: 'Crisis y Contingencia',
    crisis_items: [
      ['Robo / pérdida de pasaporte', 'Reportar a Policía + contactar Embajada/Consulado de tu país'],
      ['Problemas con la visa', 'Consultar portal oficial de inmigración o consulado del país'],
      ['Estafa de vivienda', 'No enviar depósitos sin ver la propiedad — reportar en la plataforma'],
      ['Problemas bancarios', 'Contactar banco inmediatamente para bloquear tarjeta'],
      ['Emergencias médicas', 'Usar tu seguro médico internacional — guardar número de emergencias del país'],
    ],
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Te ayudamos a identificar tu mejor ruta WHV según tu país.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Visto Work and Holidays',
    hero_sub: 'Viaje e trabalhe legalmente por até 12 meses',
    selector_title: 'De onde você é?',
    selector_sub: 'Selecione seu país para ver quais destinos você pode solicitar',
    levels: { Alto: 'Alto', Medio: 'Médio', Limitado: 'Limitado', 'No disponible': 'Indisponível' },
    destinations_title: 'destinos disponíveis',
    no_destinations: '⚠️ Sem acordos Working Holiday ativos',
    no_destinations_sub: 'Seu país não tem acordos WHV vigentes no momento.',
    destinations_warning: '⚠️ As vagas e condições mudam a cada ano. Verifique no portal oficial de imigração de cada país.',
    main_destinations_title: 'Destinos principais',
    main_destinations_sub: 'Comparativo dos melhores países WHV',
    difficulty: { Baja: 'Baixa', Media: 'Média', Alta: 'Alta' },
    sec_como_title: 'Como Solicitar — 3 Sistemas',
    systems: [
      { n: '1️⃣', title: 'Solicitação Direta (First Come, First Served)', desc: 'Os vistos são concedidos ao primeiro que solicita quando as vagas abrem. Podem se esgotar em horas.', examples: 'Austrália, Nova Zelândia', color: '#22c55e' },
      { n: '2️⃣', title: 'Sistema de Pool ou Sorteio', desc: 'Você entra em um banco de candidatos e o governo envia convites aleatórios para solicitar.', examples: 'Canadá (IEC)', color: '#ef4444' },
      { n: '3️⃣', title: 'Solicitação pelo Consulado', desc: 'Você apresenta documentos diretamente no consulado do país de destino.', examples: 'Alemanha, França, Irlanda, Espanha, Portugal', color: '#f59e0b' },
    ],
    como_hack: 'O erro mais comum é esperar as vagas abrirem para preparar documentos. A estratégia correta: criar contas em portais de imigração, preparar documentos e ter fundos prontos ANTES da abertura. Assim você solicita nos primeiros minutos.',
    sec_costos_title: 'Custos de Solicitação por País',
    th_pais: 'País', th_costo: 'Custo', th_sistema: 'Sistema', th_portal: 'Portal Oficial',
    costos_hack: 'Se seu objetivo é obter o visto rápido, os melhores destinos são Austrália, Nova Zelândia e Alemanha. Processos simples, sem sorteio e com resposta em 2-4 semanas. O Canadá pode demorar meses pelo sistema de pool.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist: [
      ['Passaporte válido', 'Mínimo 6-12 meses de validade durante toda a estadia'],
      ['Elegibilidade verificada', 'Confirme que sua nacionalidade tem acordo WHV com o destino'],
      ['Seguro médico internacional', 'Cobertura válida durante toda a estadia (€100-300/ano)'],
      ['Prova de fundos', '$2.500-5.000 USD conforme o país — em extratos bancários'],
      ['Conta no portal oficial', 'Crie ANTES de as vagas abrirem'],
      ['Pagamento da taxa de visto', 'Tenha cartão pronto para pagar online no dia da abertura'],
      ['Passagem aérea', '€400-1.200 dependendo do destino'],
    ],
    checklist_hack: 'O requisito oficial de fundos costuma ser $2.500-5.000 mas esse é o mínimo migratório. A estratégia real é chegar com $4.000-6.000 para cobrir os primeiros 30-60 dias enquanto você encontra trabalho sem pressão.',
    sec_bancos_title: 'Opções Bancárias',
    bancos_intro: 'Para um Working Holiday abra primeiro Wise ou Revolut antes de viajar. Depois abra banco local no país de destino.',
    sec_vivienda_title: 'Protocolo de Moradia',
    vivienda_intro: 'Reserve hostel ou Airbnb para as primeiras 1-2 semanas. Busque quarto permanente a partir daí.',
    vivienda_hack: 'Muitos WHV encontram alojamento através de networking com outros viajantes. Em cidades com alta rotatividade de trabalho, os quartos são anunciados primeiro em grupos do Facebook ou WhatsApp antes dos portais. Entre em grupos WHV do seu destino antes de viajar.',
    sec_crisis_title: 'Crise e Contingência',
    crisis_items: [
      ['Roubo / perda de passaporte', 'Registrar na Polícia + contatar Embaixada/Consulado do seu país'],
      ['Problemas com o visto', 'Consultar portal oficial de imigração ou consulado do país'],
      ['Golpe de moradia', 'Não enviar depósitos sem ver a propriedade — reportar na plataforma'],
      ['Problemas bancários', 'Contatar banco imediatamente para bloquear cartão'],
      ['Emergências médicas', 'Usar seu seguro médico internacional — salvar número de emergências do país'],
    ],
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Te ajudamos a identificar sua melhor rota WHV conforme seu país.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Work and Holidays Visa',
    hero_sub: 'Travel and work legally for up to 12 months',
    selector_title: 'Where are you from?',
    selector_sub: 'Select your country to see which destinations you can apply to',
    levels: { Alto: 'High', Medio: 'Medium', Limitado: 'Limited', 'No disponible': 'Not available' },
    destinations_title: 'available destinations',
    no_destinations: '⚠️ No active Working Holiday agreements',
    no_destinations_sub: 'Your country has no active WHV agreements at the moment.',
    destinations_warning: '⚠️ Quotas and conditions change each year. Check the official immigration portal of each country.',
    main_destinations_title: 'Main destinations',
    main_destinations_sub: 'Comparison of the best WHV countries',
    difficulty: { Baja: 'Low', Media: 'Medium', Alta: 'High' },
    sec_como_title: 'How to Apply — 3 Systems',
    systems: [
      { n: '1️⃣', title: 'Direct Application (First Come, First Served)', desc: 'Visas are granted to the first applicant when quotas open. They can fill up in hours.', examples: 'Australia, New Zealand', color: '#22c55e' },
      { n: '2️⃣', title: 'Pool or Lottery System', desc: 'You enter a candidate pool and the government sends random invitations to apply.', examples: 'Canada (IEC)', color: '#ef4444' },
      { n: '3️⃣', title: 'Consulate Application', desc: 'You submit documents directly at the consulate of the destination country.', examples: 'Germany, France, Ireland, Spain, Portugal', color: '#f59e0b' },
    ],
    como_hack: 'The most common mistake is waiting for quotas to open before preparing documents. The right strategy: create accounts on immigration portals, prepare documents and have funds ready BEFORE opening. That way you apply in the first few minutes.',
    sec_costos_title: 'Application Costs by Country',
    th_pais: 'Country', th_costo: 'Cost', th_sistema: 'System', th_portal: 'Official Portal',
    costos_hack: 'If your goal is to get the visa fast, the best destinations are Australia, New Zealand and Germany. Simple processes, no lottery and response in 2-4 weeks. Canada can take months due to the pool system.',
    sec_checklist_title: 'Documents Checklist',
    checklist: [
      ['Valid passport', 'Minimum 6-12 months validity throughout the stay'],
      ['Eligibility verified', 'Confirm your nationality has a WHV agreement with the destination'],
      ['International health insurance', 'Valid coverage throughout the stay (€100-300/year)'],
      ['Proof of funds', '$2,500-5,000 USD depending on country — in bank statements'],
      ['Account on official portal', 'Create it BEFORE quotas open'],
      ['Visa fee payment', 'Have card ready to pay online on opening day'],
      ['Airline ticket', '€400-1,200 depending on destination'],
    ],
    checklist_hack: 'The official funds requirement is usually $2,500-5,000 but that\'s the migration minimum. The real strategy is to arrive with $4,000-6,000 to cover the first 30-60 days while finding work without pressure.',
    sec_bancos_title: 'Banking Options',
    bancos_intro: 'For a Working Holiday first open Wise or Revolut before traveling. Then open a local bank in the destination country.',
    sec_vivienda_title: 'Housing Protocol',
    vivienda_intro: 'Book a hostel or Airbnb for the first 1-2 weeks. Look for permanent accommodation from there.',
    vivienda_hack: 'Many WHV travelers find accommodation through networking with other travelers. In cities with high job turnover, rooms are advertised first in Facebook or WhatsApp groups before portals. Join WHV groups for your destination before flying.',
    sec_crisis_title: 'Crisis & Contingency',
    crisis_items: [
      ['Theft / lost passport', 'Report to Police + contact your country\'s Embassy/Consulate'],
      ['Visa problems', 'Check official immigration portal or country consulate'],
      ['Housing scam', 'Don\'t send deposits without seeing the property — report on the platform'],
      ['Banking problems', 'Contact bank immediately to block card'],
      ['Medical emergencies', 'Use your international health insurance — save the country\'s emergency number'],
    ],
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We help you identify your best WHV route based on your country.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

const countries = [
  { name: 'Argentina', flag: '🇦🇷', level: 'Alto', levelColor: '#22c55e', destinations: ['🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia', '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España', '🇯🇵 Japón', '🇨🇦 Canadá', '🇳🇴 Noruega', '🇸🇪 Suecia', '🇳🇱 Países Bajos', '🇩🇰 Dinamarca'] },
  { name: 'Chile', flag: '🇨🇱', level: 'Alto', levelColor: '#22c55e', destinations: ['🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia', '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España', '🇨🇦 Canadá', '🇯🇵 Japón', '🇰🇷 Corea del Sur', '🇳🇴 Noruega', '🇸🇪 Suecia'] },
  { name: 'México', flag: '🇲🇽', level: 'Medio', levelColor: '#f59e0b', destinations: ['🇨🇦 Canadá', '🇩🇪 Alemania', '🇳🇿 Nueva Zelanda', '🇰🇷 Corea del Sur', '🇫🇷 Francia'] },
  { name: 'Uruguay', flag: '🇺🇾', level: 'Medio', levelColor: '#f59e0b', destinations: ['🇦🇺 Australia', '🇩🇪 Alemania', '🇫🇷 Francia', '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España', '🇯🇵 Japón', '🇳🇿 Nueva Zelanda', '🇳🇴 Noruega', '🇸🇪 Suecia'] },
  { name: 'Brasil', flag: '🇧🇷', level: 'Medio', levelColor: '#f59e0b', destinations: ['🇦🇺 Australia', '🇩🇪 Alemania', '🇫🇷 Francia', '🇳🇿 Nueva Zelanda'] },
  { name: 'Perú', flag: '🇵🇪', level: 'Medio', levelColor: '#f59e0b', destinations: ['🇦🇺 Australia', '🇳🇿 Nueva Zelanda', '🇩🇪 Alemania', '🇫🇷 Francia', '🇮🇪 Irlanda', '🇵🇹 Portugal', '🇪🇸 España'] },
  { name: 'Colombia', flag: '🇨🇴', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇫🇷 Francia', '🇭🇺 Hungría (desde 2025)', '🇨🇱 Chile', '🇲🇽 México', '🇵🇪 Perú (Alianza del Pacífico)'] },
  { name: 'Costa Rica', flag: '🇨🇷', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇨🇦 Canadá'] },
  { name: 'Ecuador', flag: '🇪🇨', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇫🇷 Francia', '🇦🇺 Australia (cupos limitados)'] },
  { name: 'Panamá', flag: '🇵🇦', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇫🇷 Francia'] },
  { name: 'Bolivia', flag: '🇧🇴', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇫🇷 Francia'] },
  { name: 'Rep. Dominicana', flag: '🇩🇴', level: 'Limitado', levelColor: '#ef4444', destinations: ['🇫🇷 Francia'] },
  { name: 'Guatemala', flag: '🇬🇹', level: 'No disponible', levelColor: '#6b7280', destinations: [] },
  { name: 'Honduras', flag: '🇭🇳', level: 'No disponible', levelColor: '#6b7280', destinations: [] },
  { name: 'El Salvador', flag: '🇸🇻', level: 'No disponible', levelColor: '#6b7280', destinations: [] },
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
  const resultRef = useRef<HTMLDivElement>(null)
  const { locale } = useLanguage()
  const { hasAccess, loading } = usePurchase()
  const t = translations[locale]

  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)

  const handleSelectCountry = (name: string) => {
    const next = selectedCountry === name ? null : name
    setSelectedCountry(next)
    if (next) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }

  const HackBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '8px', padding: '14px 16px', marginTop: '16px' }}>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
        <span style={{ color: '#e8572a', fontWeight: 'bold' }}>{t.hack_label}</span>{text}
      </p>
    </div>
  )

  const Section = ({ id, emoji, title, children }: any) => (
    <div style={{ border: '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer', color: '#1a1a2e' }}>
        <span style={{ fontWeight: '600', fontSize: '15px', color: '#1a1a2e' }}>{emoji} {title}</span>
        <span style={{ fontSize: '16px', color: '#555555' }}>{openSection === id ? '∧' : '∨'}</span>
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🌴</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ padding: '24px 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* SELECTOR */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a2e' }}>{t.selector_title}</h2>
          <p style={{ color: '#333333', fontSize: '13px', marginBottom: '16px' }}>{t.selector_sub}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
            {countries.map(c => (
              <button
                key={c.name}
                onClick={() => handleSelectCountry(c.name)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 10px', borderRadius: '10px', border: selectedCountry === c.name ? '2px solid #e8572a' : '2px solid #e5e7eb', backgroundColor: selectedCountry === c.name ? '#fff5f2' : 'white', cursor: 'pointer', gap: '4px', minWidth: 0, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0, overflow: 'hidden' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{c.flag}</span>
                  <span style={{ fontSize: c.name.length > 10 ? '10px' : '12px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#1a1a2e' }}>{c.name}</span>
                </div>
                <span style={{ backgroundColor: c.levelColor, color: 'white', borderRadius: '10px', padding: '2px 6px', fontSize: '9px', fontWeight: 'bold', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {t.levels[c.level as keyof typeof t.levels]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RESULTADO */}
        <div ref={resultRef}>
          {selected && (
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a2e' }}>
                {selected.flag} {selected.name} — {t.destinations_title}
              </h3>
              {selected.destinations.length === 0 ? (
                <div style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '16px', marginTop: '12px', textAlign: 'center' }}>
                  <p style={{ color: '#dc2626', fontWeight: '600', margin: 0, fontSize: '14px' }}>{t.no_destinations}</p>
                  <p style={{ color: '#1a1a2e', fontSize: '13px', margin: '8px 0 0' }}>{t.no_destinations_sub}</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginTop: '12px' }}>
                  {selected.destinations.map((dest, i) => (
                    <span key={i} style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', fontWeight: '600', color: '#166534' }}>
                      {dest}
                    </span>
                  ))}
                </div>
              )}
              {selected.destinations.length > 0 && (
                <p style={{ fontSize: '12px', color: '#333333', margin: '12px 0 0' }}>{t.destinations_warning}</p>
              )}
            </div>
          )}
        </div>

        {/* DESTINOS PRINCIPALES */}
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: '8px', color: '#1a1a2e' }}>{t.main_destinations_title}</h2>
        <p style={{ color: '#333333', fontSize: '13px', marginBottom: '16px' }}>{t.main_destinations_sub}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {destinationInfo.map((d, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '22px' }}>{d.flag}</span>
                  <span style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a2e' }}>{d.name}</span>
                  <span style={{ backgroundColor: d.color, color: 'white', borderRadius: '10px', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                    {t.difficulty[d.difficulty as keyof typeof t.difficulty]}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#1a1a2e', lineHeight: '1.6' }}>
                  ⏱ {d.duration} · 🎂 {d.age}<br />
                  💰 {d.funds} · 💵 {d.salary}
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#333333', textAlign: 'right' as const, maxWidth: '100px' }}>
                {d.system}
              </div>
            </div>
          ))}
        </div>

        {/* ACCORDION SECTIONS */}

        {/* PREMIUM LOCK */}
        {!hasAccess && (
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', margin: '16px 0', border: '2px solid #e8572a' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔒</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>Contenido Premium</h3>
          <p style={{ color: '#555555', fontSize: '14px', marginBottom: '20px' }}>Accede al blueprint completo con toda la información detallada</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
              🗂️ Comprar este Blueprint — €14.99
            </a>
            <a
              href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1"
              className="lemonsqueezy-button"
              style={{
                backgroundColor: '#e8572a',
                color: 'white',
                borderRadius: '10px',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(232,87,42,0.4)',
                border: '2px solid #ff6b3d',
              }}
            >
              🔥 Acceso Total — Todos los Blueprints €39.99
            </a>
          </div>
        </div>
        )}

        <div style={{ display: hasAccess ? 'block' : 'none' }}>

        <Section id="como" emoji="🛂" title={t.sec_como_title}>
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1722349520010-a21efb9c3bcc?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {t.systems.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px', color: '#1a1a2e' }}>{item.n} {item.title}</p>
                <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 6px', lineHeight: '1.5' }}>{item.desc}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>Ejemplos: <strong>{item.examples}</strong></p>
              </div>
            ))}
          </div>
          <HackBox text={t.como_hack} />
        </Section>

        <Section id="costos" emoji="💰" title={t.sec_costos_title}>
          <div style={{ overflowX: 'auto' as const, borderRadius: '10px', border: '1px solid #e5e7eb' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: '400px' }}>
              <thead>
                <tr>{[t.th_pais, t.th_costo, t.th_sistema, t.th_portal].map((h, i) => (
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
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', fontWeight: '700', color: '#1a1a2e' }}>{r[0]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', color: '#1a1a2e' }}>{r[1]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', color: '#1a1a2e' }}>{r[2]}</td>
                    <td style={{ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '13px' }}>{r[3]}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.costos_hack} />
        </Section>

        <Section id="checklist" emoji="📋" title={t.sec_checklist_title}>
          {t.checklist.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <HackBox text={t.checklist_hack} />
        </Section>

        <Section id="bancos" emoji="🏦" title={t.sec_bancos_title}>
          <p style={{ fontSize: '14px', color: '#1a1a2e', marginBottom: '12px', lineHeight: '1.6' }}>{t.bancos_intro}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital', 'Transferencias internacionales baratas + múltiples divisas. Abre antes de viajar.', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital', 'Tarjeta virtual inmediata. Ideal para primeras semanas.', 'revolut.com', 'https://revolut.com'],
              ['ANZ / Commonwealth', 'Tradicional AUS/NZ', 'Los más usados en Australia y Nueva Zelanda.', 'anz.com', 'https://anz.com'],
              ['Scotiabank', 'Tradicional CA', 'Popular entre WHV en Canadá.', 'scotiabank.com', 'https://scotiabank.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '12px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{r[0]} <span style={{ color: '#333333', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="vivienda" emoji="🏠" title={t.sec_vivienda_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', marginBottom: '12px', lineHeight: '1.6' }}>{t.vivienda_intro}</p>
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
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{r[0]} <span style={{ color: '#333333', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
          <HackBox text={t.vivienda_hack} />
        </Section>

        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {t.crisis_items.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </Section>

        </div>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px', color: '#1a1a2e' }}>{t.consultoria_title}</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1" className="lemonsqueezy-button" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

      </div>
    </main>
  )
}