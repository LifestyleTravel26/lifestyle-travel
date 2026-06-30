'use client'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

const translations = {
  es: {
    title: 'Planes y Precios',
    subtitle: 'Elige el plan que mejor se adapta a tu situación',
    badge_popular: '⭐ Más Popular',
    badge_best: '🔥 Mejor Valor',
    plans: [
      {
        name: 'Blueprint Individual',
        price: '€14.99',
        description: 'Perfecto si ya sabes a qué país quieres ir',
        features: [
          'Blueprint completo de 1 país',
          'Visas, costos, bancos y empleos',
          'Protocolo de aterrizaje paso a paso',
          'Acceso de por vida',
          'Actualizaciones incluidas',
        ],
        cta: 'Comprar Blueprint',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
      {
        name: 'Acceso Total',
        price: '€39.99',
        description: 'Acceso a todos los blueprints y destinos',
        features: [
          'Todos los blueprints — 9+ países',
          'Work and Study, WHV, Nómada Digital',
          'Au Pair, Pet Sitting, Voluntariado',
          'Acceso de por vida',
          'Todas las actualizaciones futuras',
        ],
        cta: 'Obtener Acceso Total',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1',
        color: '#e8572a',
        popular: true,
      },
      {
        name: 'Consultoría 1 a 1',
        price: '€59.99',
        description: 'Plan migratorio personalizado con Jimmy',
        features: [
          '60 minutos con Jimmy en persona',
          'Plan migratorio según tu perfil',
          'Tips exclusivos de quien lo vivió',
          'Respuesta en 24 horas',
          'Grabación de la llamada incluida',
        ],
        cta: 'Agendar Llamada',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
    ],
    discount_title: '🎉 Descuento de Lanzamiento',
    discount_desc: 'Usa el código',
    discount_code: 'LAUNCH50',
    discount_end: 'para obtener 50% de descuento — válido por tiempo limitado',
    faq_title: 'Preguntas Frecuentes',
    faqs: [
      ['¿El acceso es de por vida?', 'Sí — pagas una sola vez y tienes acceso para siempre incluyendo actualizaciones futuras.'],
      ['¿En qué idiomas está disponible?', 'La plataforma está disponible en Español, Portugués e Inglés.'],
      ['¿Cómo accedo después de comprar?', 'Recibes un email con el link de acceso. Creas tu cuenta en lifestylentravel.com y listo.'],
      ['¿Puedo pagar con tarjeta?', 'Sí — aceptamos todas las tarjetas de crédito y débito internacionales.'],
    ],
    back: '← Volver',
  },
  pt: {
    title: 'Planos e Preços',
    subtitle: 'Escolha o plano que melhor se adapta à sua situação',
    badge_popular: '⭐ Mais Popular',
    badge_best: '🔥 Melhor Valor',
    plans: [
      {
        name: 'Blueprint Individual',
        price: '€14,99',
        description: 'Perfeito se você já sabe para qual país quer ir',
        features: [
          'Blueprint completo de 1 país',
          'Vistos, custos, bancos e empregos',
          'Protocolo de chegada passo a passo',
          'Acesso vitalício',
          'Atualizações incluídas',
        ],
        cta: 'Comprar Blueprint',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
      {
        name: 'Acesso Total',
        price: '€39,99',
        description: 'Acesso a todos os blueprints e destinos',
        features: [
          'Todos os blueprints — 9+ países',
          'Work and Study, WHV, Nômade Digital',
          'Au Pair, Pet Sitting, Voluntariado',
          'Acesso vitalício',
          'Todas as atualizações futuras',
        ],
        cta: 'Obter Acesso Total',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1',
        color: '#e8572a',
        popular: true,
      },
      {
        name: 'Consultoria 1 a 1',
        price: '€59,99',
        description: 'Plano migratório personalizado com Jimmy',
        features: [
          '60 minutos com Jimmy ao vivo',
          'Plano migratório conforme seu perfil',
          'Dicas exclusivas de quem viveu isso',
          'Resposta em 24 horas',
          'Gravação da chamada incluída',
        ],
        cta: 'Agendar Chamada',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
    ],
    discount_title: '🎉 Desconto de Lançamento',
    discount_desc: 'Use o código',
    discount_code: 'LAUNCH50',
    discount_end: 'para obter 50% de desconto — válido por tempo limitado',
    faq_title: 'Perguntas Frequentes',
    faqs: [
      ['O acesso é vitalício?', 'Sim — você paga uma vez e tem acesso para sempre incluindo atualizações futuras.'],
      ['Em quais idiomas está disponível?', 'A plataforma está disponível em Espanhol, Português e Inglês.'],
      ['Como acesso após a compra?', 'Você recebe um email com o link de acesso. Cria sua conta em lifestylentravel.com e pronto.'],
      ['Posso pagar com cartão?', 'Sim — aceitamos todos os cartões de crédito e débito internacionais.'],
    ],
    back: '← Voltar',
  },
  en: {
    title: 'Plans & Pricing',
    subtitle: 'Choose the plan that best fits your situation',
    badge_popular: '⭐ Most Popular',
    badge_best: '🔥 Best Value',
    plans: [
      {
        name: 'Individual Blueprint',
        price: '€14.99',
        description: 'Perfect if you already know which country you want',
        features: [
          'Complete blueprint for 1 country',
          'Visas, costs, banking and jobs',
          'Step-by-step landing protocol',
          'Lifetime access',
          'Updates included',
        ],
        cta: 'Buy Blueprint',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
      {
        name: 'Full Access',
        price: '€39.99',
        description: 'Access to all blueprints and destinations',
        features: [
          'All blueprints — 9+ countries',
          'Work and Study, WHV, Digital Nomad',
          'Au Pair, Pet Sitting, Volunteering',
          'Lifetime access',
          'All future updates',
        ],
        cta: 'Get Full Access',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1',
        color: '#e8572a',
        popular: true,
      },
      {
        name: '1-on-1 Consultation',
        price: '€59.99',
        description: 'Personalized migration plan with Jimmy',
        features: [
          '60 minutes with Jimmy live',
          'Migration plan based on your profile',
          'Exclusive tips from someone who lived it',
          'Response within 24 hours',
          'Call recording included',
        ],
        cta: 'Schedule Call',
        link: 'https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1',
        color: '#1a1a2e',
        popular: false,
      },
    ],
    discount_title: '🎉 Launch Discount',
    discount_desc: 'Use code',
    discount_code: 'LAUNCH50',
    discount_end: 'to get 50% off — valid for a limited time',
    faq_title: 'Frequently Asked Questions',
    faqs: [
      ['Is access lifetime?', 'Yes — you pay once and have access forever including future updates.'],
      ['What languages is it available in?', 'The platform is available in Spanish, Portuguese and English.'],
      ['How do I access after purchase?', 'You receive an email with the access link. Create your account at lifestylentravel.com and you\'re set.'],
      ['Can I pay by card?', 'Yes — we accept all international credit and debit cards.'],
    ],
    back: '← Back',
  },
}

export default function PricingPage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{ backgroundColor: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        <LanguageSwitcher />
      </div>

      <div style={{ padding: '32px 20px 60px', maxWidth: '600px', margin: '0 auto' }}>

        {/* TITLE */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '8px' }}>{t.title}</h1>
          <p style={{ color: '#555555', fontSize: '15px' }}>{t.subtitle}</p>
        </div>

        {/* DISCOUNT BANNER */}
        <div style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '12px', padding: '16px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 6px' }}>{t.discount_title}</p>
          <p style={{ fontSize: '14px', color: '#1a1a2e', margin: 0 }}>
            {t.discount_desc} <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '6px', padding: '2px 10px', fontWeight: 'bold', fontSize: '14px' }}>{t.discount_code}</span> {t.discount_end}
          </p>
        </div>

        {/* PLANS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          {t.plans.map((plan, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: plan.popular ? '0 4px 20px rgba(232,87,42,0.15)' : '0 2px 8px rgba(0,0,0,0.07)',
              border: plan.popular ? '2px solid #e8572a' : '2px solid #f0f0f0',
              position: 'relative' as const,
            }}>
              {plan.popular && (
                <div style={{ position: 'absolute' as const, top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#e8572a', color: 'white', borderRadius: '20px', padding: '4px 16px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' as const }}>
                  {t.badge_popular}
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a2e', margin: '0 0 4px' }}>{plan.name}</h2>
                  <p style={{ fontSize: '13px', color: '#555555', margin: 0 }}>{plan.description}</p>
                </div>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: plan.color, flexShrink: 0, marginLeft: '12px' }}>{plan.price}</span>
              </div>
              <div style={{ marginBottom: '16px' }}>
                {plan.features.map((feature, j) => (
                  <p key={j} style={{ fontSize: '13px', color: '#1a1a2e', margin: '6px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {feature}
                  </p>
                ))}
              </div>
              <a
                href={plan.link}
                className="lemonsqueezy-button"
                style={{
                  display: 'block',
                  textAlign: 'center' as const,
                  backgroundColor: plan.popular ? '#e8572a' : '#1a1a2e',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '16px' }}>{t.faq_title}</h3>
          {t.faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < t.faqs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', color: '#1a1a2e', margin: '0 0 6px' }}>{faq[0]}</p>
              <p style={{ fontSize: '13px', color: '#555555', margin: 0, lineHeight: '1.6' }}>{faq[1]}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}