'use client'
import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: '¿Cuántos años tienes?',
    emoji: '🎂',
    options: [
      { label: '18 – 25 años', value: 'young' },
      { label: '26 – 30 años', value: 'mid' },
      { label: '31 – 35 años', value: 'senior' },
      { label: 'Más de 35', value: 'mature' },
    ],
  },
  {
    id: 2,
    question: '¿Cuál es tu situación laboral?',
    emoji: '💼',
    options: [
      { label: 'Trabajo remoto para empresa extranjera', value: 'remote' },
      { label: 'Busco trabajo local en el destino', value: 'local' },
      { label: 'Emprendedor / Freelancer', value: 'entrepreneur' },
      { label: 'Sin trabajo fijo actualmente', value: 'unemployed' },
    ],
  },
  {
    id: 3,
    question: '¿Cuánto capital tienes disponible?',
    emoji: '💰',
    options: [
      { label: 'Menos de $2,000 USD', value: 'low' },
      { label: '$2,000 – $5,000 USD', value: 'medium' },
      { label: '$5,000 – $15,000 USD', value: 'high' },
      { label: 'Más de $15,000 USD', value: 'vhigh' },
    ],
  },
  {
    id: 4,
    question: '¿Cuánto tiempo quieres estar fuera?',
    emoji: '🗓️',
    options: [
      { label: '1 – 3 meses', value: 'short' },
      { label: '3 – 6 meses', value: 'mid' },
      { label: '6 – 12 meses', value: 'long' },
      { label: 'Más de 1 año', value: 'vlong' },
    ],
  },
  {
    id: 5,
    question: '¿Qué es lo más importante para ti?',
    emoji: '🎯',
    options: [
      { label: 'Ahorrar dinero al máximo', value: 'save' },
      { label: 'Ganar experiencia internacional', value: 'experience' },
      { label: 'Vivir en Europa de forma legal', value: 'europe' },
      { label: 'Libertad total para moverme', value: 'freedom' },
    ],
  },
]

type Answers = Record<number, string>

function getRecommendation(answers: Answers) {
  const age = answers[1]
  const work = answers[2]
  const capital = answers[3]
  const time = answers[4]
  const goal = answers[5]

  // Nómada Digital
  if (work === 'remote' || work === 'entrepreneur') {
    return {
      visa: 'Visa Nómada Digital',
      emoji: '💻',
      href: '/nomada-digital',
      reason: 'Ya tienes ingresos remotos o eres emprendedor. La Visa Nómada Digital te permite vivir legalmente en otro país (Georgia, España, Portugal) mientras sigues trabajando para tus clientes internacionales.',
      color: '#3b82f6',
      alternatives: [
        { name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' },
        { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' },
      ],
    }
  }

  // Voluntariado — poco capital, quiere ahorrar
  if (capital === 'low' && goal === 'save') {
    return {
      visa: 'Voluntariado Internacional',
      emoji: '🌱',
      href: '/voluntariado',
      reason: 'Con poco capital disponible, el voluntariado es tu mejor opción. Elimina los dos gastos más grandes (alojamiento y comida) a cambio de unas horas de trabajo. Ideal para empezar sin dinero y ganar experiencia.',
      color: '#22c55e',
      alternatives: [
        { name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' },
        { name: 'Au Pair', href: '/au-pair', emoji: '👶' },
      ],
    }
  }

  // Pet Sitting — libertad total
  if (goal === 'freedom' && (capital === 'low' || capital === 'medium')) {
    return {
      visa: 'Pet & House Sitting',
      emoji: '🐾',
      href: '/pet-sitting',
      reason: 'Quieres libertad total para moverte. El Pet Sitting te da alojamiento gratis a cambio de cuidar mascotas. Sin contratos largos, sin horarios fijos. La ruta más flexible del blueprint.',
      color: '#f59e0b',
      alternatives: [
        { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' },
        { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' },
      ],
    }
  }

  // Au Pair — joven, busca experiencia, poco capital
  if ((age === 'young' || age === 'mid') && goal === 'experience' && work === 'unemployed') {
    return {
      visa: 'Visa Au Pair',
      emoji: '👶',
      href: '/au-pair',
      reason: 'Eres joven y buscas experiencia internacional. La Visa Au Pair te da alojamiento, comida y compensación económica a cambio de cuidar niños. Ideal para entrar a Europa sin mucho capital inicial.',
      color: '#ec4899',
      alternatives: [
        { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' },
        { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' },
      ],
    }
  }

  // Work and Study — quiere vivir en Europa, capital medio
  if (goal === 'europe' && (capital === 'high' || capital === 'vhigh')) {
    return {
      visa: 'Visa Work and Study',
      emoji: '🎓',
      href: '/work-and-study',
      reason: 'Quieres vivir en Europa de forma legal. La Visa Work and Study es tu camino más claro — estudias inglés o un programa y puedes trabajar hasta 20h/semana mientras te estableces en países como Irlanda, Malta, España o Portugal.',
      color: '#e8572a',
      alternatives: [
        { name: 'Nómada Digital', href: '/nomada-digital', emoji: '💻' },
        { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' },
      ],
    }
  }

  // Work and Holidays — joven, quiere experiencia, capital medio
  if ((age === 'young' || age === 'mid' || age === 'senior') && (capital === 'medium' || capital === 'high') && (time === 'long' || time === 'mid')) {
    return {
      visa: 'Visa Work and Holidays',
      emoji: '🌴',
      href: '/work-and-holidays',
      reason: 'Tu perfil encaja perfecto con la Working Holiday. Puedes trabajar legalmente hasta 12 meses en Australia, Nueva Zelanda, Irlanda, Alemania o Canadá con total libertad para cambiar de trabajo y moverte.',
      color: '#22c55e',
      alternatives: [
        { name: 'Work and Study', href: '/work-and-study', emoji: '🎓' },
        { name: 'Nómada Digital', href: '/nomada-digital', emoji: '💻' },
      ],
    }
  }

  // Work and Study — default para quien quiere trabajar localmente
  return {
    visa: 'Visa Work and Study',
    emoji: '🎓',
    href: '/work-and-study',
    reason: 'La Visa Work and Study es la ruta más accesible para empezar. Con programas desde €3,000, puedes estudiar y trabajar hasta 20h/semana en países como Irlanda, Malta, España, Portugal, Canadá o Australia.',
    color: '#e8572a',
    alternatives: [
      { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' },
      { name: 'Au Pair', href: '/au-pair', emoji: '👶' },
    ],
  }
}

export default function VisaQuiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [done, setDone] = useState(false)

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [questions[current].id]: value }
    setAnswers(newAnswers)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setDone(true)
    }
  }

  function restart() {
    setAnswers({})
    setCurrent(0)
    setDone(false)
  }

  const recommendation = done ? getRecommendation(answers) : null
  const progress = ((current) / questions.length) * 100

  if (done && recommendation) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{ padding: '16px 24px', backgroundColor: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>

        <div style={{ padding: '32px 20px 40px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '60px', marginBottom: '8px' }}>🎯</div>
            <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '6px' }}>Tu visa ideal es...</h1>
            <p style={{ color: '#1a1a2e', fontSize: '14px' }}>Basado en tus respuestas</p>
          </div>

          {/* MAIN RECOMMENDATION */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', marginBottom: '16px', borderTop: `4px solid ${recommendation.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '40px' }}>{recommendation.emoji}</span>
              <div>
                <p style={{ fontSize: '11px', color: '#555555', margin: 0, fontWeight: '600', textTransform: 'uppercase' as const }}>Recomendación principal</p>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: recommendation.color }}>{recommendation.visa}</h2>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#1a1a2e', marginBottom: '20px' }}>{recommendation.reason}</p>
            <Link
              href={recommendation.href}
              style={{ backgroundColor: recommendation.color, color: 'white', borderRadius: '12px', padding: '14px 24px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' as const }}
            >
              Ver Blueprint Completo →
            </Link>
          </div>

          {/* ALTERNATIVES */}
          <p style={{ fontSize: '13px', color: '#333333', marginBottom: '10px', fontWeight: '600' }}>También podrían interesarte:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            {recommendation.alternatives.map((alt, i) => (
              <Link key={i} href={alt.href} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '2px solid #f0f0f0' }}>
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>{alt.emoji}</div>
                  <p style={{ fontSize: '12px', fontWeight: '700', margin: 0, color: '#1a1a2e' }}>{alt.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={restart}
            style={{ width: '100%', backgroundColor: 'transparent', border: '2px solid #e8572a', color: '#e8572a', borderRadius: '12px', padding: '12px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            🔄 Repetir el quiz
          </button>
        </div>
      </main>
    )
  }

  const q = questions[current]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ padding: '16px 24px', backgroundColor: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
      </div>

      {/* PROGRESS */}
      <div style={{ backgroundColor: '#e5e7eb', height: '4px' }}>
        <div style={{ backgroundColor: '#e8572a', height: '4px', width: `${progress}%`, transition: 'width 0.3s ease' }} />
      </div>

      <div style={{ padding: '32px 20px 40px', maxWidth: '500px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: '#555555', marginBottom: '8px', fontWeight: '600' }}>Pregunta {current + 1} de {questions.length}</p>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>{q.emoji}</div>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.3' }}>{q.question}</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.value)}
              style={{
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '14px',
                padding: '16px 20px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                textAlign: 'left' as const,
                transition: 'all 0.15s ease',
                color: '#1a1a2e',
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.borderColor = '#e8572a'
                ;(e.target as HTMLButtonElement).style.backgroundColor = '#fff5f2'
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.borderColor = '#e5e7eb'
                ;(e.target as HTMLButtonElement).style.backgroundColor = 'white'
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
