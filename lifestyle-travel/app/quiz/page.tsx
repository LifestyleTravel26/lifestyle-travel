'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  es: {
    nav_brand: '✈️ Lifestyle & Travel',
    progress_label: (current: number, total: number) => `Pregunta ${current} de ${total}`,
    result_title: 'Tu visa ideal es...',
    result_sub: 'Basado en tus respuestas',
    result_label: 'Recomendación principal',
    result_cta: 'Ver Blueprint Completo →',
    alternatives_label: 'También podrían interesarte:',
    restart: '🔄 Repetir el quiz',
    questions: [
      {
        id: 1, emoji: '🎂',
        question: '¿Cuántos años tienes?',
        options: [
          { label: '18 – 25 años', value: 'young' },
          { label: '26 – 30 años', value: 'mid' },
          { label: '31 – 35 años', value: 'senior' },
          { label: 'Más de 35', value: 'mature' },
        ],
      },
      {
        id: 2, emoji: '💼',
        question: '¿Cuál es tu situación laboral?',
        options: [
          { label: 'Trabajo remoto para empresa extranjera', value: 'remote' },
          { label: 'Busco trabajo local en el destino', value: 'local' },
          { label: 'Emprendedor / Freelancer', value: 'entrepreneur' },
          { label: 'Sin trabajo fijo actualmente', value: 'unemployed' },
        ],
      },
      {
        id: 3, emoji: '💰',
        question: '¿Cuánto capital tienes disponible?',
        options: [
          { label: 'Menos de $2,000 USD', value: 'low' },
          { label: '$2,000 – $5,000 USD', value: 'medium' },
          { label: '$5,000 – $15,000 USD', value: 'high' },
          { label: 'Más de $15,000 USD', value: 'vhigh' },
        ],
      },
      {
        id: 4, emoji: '🗓️',
        question: '¿Cuánto tiempo quieres estar fuera?',
        options: [
          { label: '1 – 3 meses', value: 'short' },
          { label: '3 – 6 meses', value: 'mid' },
          { label: '6 – 12 meses', value: 'long' },
          { label: 'Más de 1 año', value: 'vlong' },
        ],
      },
      {
        id: 5, emoji: '🎯',
        question: '¿Qué es lo más importante para ti?',
        options: [
          { label: 'Ahorrar dinero al máximo', value: 'save' },
          { label: 'Ganar experiencia internacional', value: 'experience' },
          { label: 'Vivir en Europa de forma legal', value: 'europe' },
          { label: 'Libertad total para moverme', value: 'freedom' },
        ],
      },
    ],
    recommendations: {
      nomada: {
        visa: 'Visa Nómada Digital', emoji: '💻', href: '/nomada-digital', color: '#3b82f6',
        reason: 'Ya tienes ingresos remotos o eres emprendedor. La Visa Nómada Digital te permite vivir legalmente en otro país (Georgia, España, Portugal) mientras sigues trabajando para tus clientes internacionales.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }],
      },
      voluntariado: {
        visa: 'Voluntariado Internacional', emoji: '🌱', href: '/voluntariado', color: '#22c55e',
        reason: 'Con poco capital disponible, el voluntariado es tu mejor opción. Elimina los dos gastos más grandes (alojamiento y comida) a cambio de unas horas de trabajo. Ideal para empezar sin dinero y ganar experiencia.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
      petsitting: {
        visa: 'Pet & House Sitting', emoji: '🐾', href: '/pet-sitting', color: '#f59e0b',
        reason: 'Quieres libertad total para moverte. El Pet Sitting te da alojamiento gratis a cambio de cuidar mascotas. Sin contratos largos, sin horarios fijos. La ruta más flexible del blueprint.',
        alternatives: [{ name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      aupair: {
        visa: 'Visa Au Pair', emoji: '👶', href: '/au-pair', color: '#ec4899',
        reason: 'Eres joven y buscas experiencia internacional. La Visa Au Pair te da alojamiento, comida y compensación económica a cambio de cuidar niños. Ideal para entrar a Europa sin mucho capital inicial.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }],
      },
      workstudy_europe: {
        visa: 'Visa Work and Study', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'Quieres vivir en Europa de forma legal. La Visa Work and Study es tu camino más claro — estudias inglés o un programa y puedes trabajar hasta 20h/semana mientras te estableces en países como Irlanda, Malta, España o Portugal.',
        alternatives: [{ name: 'Nómada Digital', href: '/nomada-digital', emoji: '💻' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      workholidays: {
        visa: 'Visa Work and Holidays', emoji: '🌴', href: '/work-and-holidays', color: '#22c55e',
        reason: 'Tu perfil encaja perfecto con la Working Holiday. Puedes trabajar legalmente hasta 12 meses en Australia, Nueva Zelanda, Irlanda, Alemania o Canadá con total libertad para cambiar de trabajo y moverte.',
        alternatives: [{ name: 'Work and Study', href: '/work-and-study', emoji: '🎓' }, { name: 'Nómada Digital', href: '/nomada-digital', emoji: '💻' }],
      },
      workstudy_default: {
        visa: 'Visa Work and Study', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'La Visa Work and Study es la ruta más accesible para empezar. Con programas desde €3,000, puedes estudiar y trabajar hasta 20h/semana en países como Irlanda, Malta, España, Portugal, Canadá o Australia.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
    },
  },
  pt: {
    nav_brand: '✈️ Lifestyle & Travel',
    progress_label: (current: number, total: number) => `Pergunta ${current} de ${total}`,
    result_title: 'Seu visto ideal é...',
    result_sub: 'Baseado nas suas respostas',
    result_label: 'Recomendação principal',
    result_cta: 'Ver Blueprint Completo →',
    alternatives_label: 'Também podem te interessar:',
    restart: '🔄 Refazer o quiz',
    questions: [
      {
        id: 1, emoji: '🎂',
        question: 'Quantos anos você tem?',
        options: [
          { label: '18 – 25 anos', value: 'young' },
          { label: '26 – 30 anos', value: 'mid' },
          { label: '31 – 35 anos', value: 'senior' },
          { label: 'Mais de 35', value: 'mature' },
        ],
      },
      {
        id: 2, emoji: '💼',
        question: 'Qual é sua situação de trabalho?',
        options: [
          { label: 'Trabalho remoto para empresa estrangeira', value: 'remote' },
          { label: 'Busco trabalho local no destino', value: 'local' },
          { label: 'Empreendedor / Freelancer', value: 'entrepreneur' },
          { label: 'Sem trabalho fixo atualmente', value: 'unemployed' },
        ],
      },
      {
        id: 3, emoji: '💰',
        question: 'Quanto capital você tem disponível?',
        options: [
          { label: 'Menos de $2.000 USD', value: 'low' },
          { label: '$2.000 – $5.000 USD', value: 'medium' },
          { label: '$5.000 – $15.000 USD', value: 'high' },
          { label: 'Mais de $15.000 USD', value: 'vhigh' },
        ],
      },
      {
        id: 4, emoji: '🗓️',
        question: 'Por quanto tempo você quer ficar fora?',
        options: [
          { label: '1 – 3 meses', value: 'short' },
          { label: '3 – 6 meses', value: 'mid' },
          { label: '6 – 12 meses', value: 'long' },
          { label: 'Mais de 1 ano', value: 'vlong' },
        ],
      },
      {
        id: 5, emoji: '🎯',
        question: 'O que é mais importante para você?',
        options: [
          { label: 'Economizar dinheiro ao máximo', value: 'save' },
          { label: 'Ganhar experiência internacional', value: 'experience' },
          { label: 'Viver na Europa de forma legal', value: 'europe' },
          { label: 'Liberdade total para me mover', value: 'freedom' },
        ],
      },
    ],
    recommendations: {
      nomada: {
        visa: 'Visto Nômade Digital', emoji: '💻', href: '/nomada-digital', color: '#3b82f6',
        reason: 'Você já tem renda remota ou é empreendedor. O Visto Nômade Digital permite que você viva legalmente em outro país (Geórgia, Espanha, Portugal) enquanto continua trabalhando para seus clientes internacionais.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }],
      },
      voluntariado: {
        visa: 'Voluntariado Internacional', emoji: '🌱', href: '/voluntariado', color: '#22c55e',
        reason: 'Com pouco capital disponível, o voluntariado é sua melhor opção. Elimina os dois maiores gastos (alojamento e comida) em troca de algumas horas de trabalho. Ideal para começar sem dinheiro e ganhar experiência.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
      petsitting: {
        visa: 'Pet & House Sitting', emoji: '🐾', href: '/pet-sitting', color: '#f59e0b',
        reason: 'Você quer liberdade total para se mover. O Pet Sitting te dá alojamento grátis em troca de cuidar de animais. Sem contratos longos, sem horários fixos. A rota mais flexível do blueprint.',
        alternatives: [{ name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      aupair: {
        visa: 'Visto Au Pair', emoji: '👶', href: '/au-pair', color: '#ec4899',
        reason: 'Você é jovem e busca experiência internacional. O Visto Au Pair te dá alojamento, comida e compensação financeira em troca de cuidar de crianças. Ideal para entrar na Europa sem muito capital inicial.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Voluntariado', href: '/voluntariado', emoji: '🌱' }],
      },
      workstudy_europe: {
        visa: 'Visto Work and Study', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'Você quer viver na Europa de forma legal. O Visto Work and Study é seu caminho mais claro — você estuda inglês ou um programa e pode trabalhar até 20h/semana enquanto se estabelece em países como Irlanda, Malta, Espanha ou Portugal.',
        alternatives: [{ name: 'Nômade Digital', href: '/nomada-digital', emoji: '💻' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      workholidays: {
        visa: 'Visto Work and Holidays', emoji: '🌴', href: '/work-and-holidays', color: '#22c55e',
        reason: 'Seu perfil se encaixa perfeitamente no Working Holiday. Você pode trabalhar legalmente por até 12 meses na Austrália, Nova Zelândia, Irlanda, Alemanha ou Canadá com total liberdade para mudar de trabalho e se mover.',
        alternatives: [{ name: 'Work and Study', href: '/work-and-study', emoji: '🎓' }, { name: 'Nômade Digital', href: '/nomada-digital', emoji: '💻' }],
      },
      workstudy_default: {
        visa: 'Visto Work and Study', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'O Visto Work and Study é a rota mais acessível para começar. Com programas a partir de €3.000, você pode estudar e trabalhar até 20h/semana em países como Irlanda, Malta, Espanha, Portugal, Canadá ou Austrália.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
    },
  },
  en: {
    nav_brand: '✈️ Lifestyle & Travel',
    progress_label: (current: number, total: number) => `Question ${current} of ${total}`,
    result_title: 'Your ideal visa is...',
    result_sub: 'Based on your answers',
    result_label: 'Main recommendation',
    result_cta: 'View Complete Blueprint →',
    alternatives_label: 'You might also be interested in:',
    restart: '🔄 Retake the quiz',
    questions: [
      {
        id: 1, emoji: '🎂',
        question: 'How old are you?',
        options: [
          { label: '18 – 25 years old', value: 'young' },
          { label: '26 – 30 years old', value: 'mid' },
          { label: '31 – 35 years old', value: 'senior' },
          { label: 'Over 35', value: 'mature' },
        ],
      },
      {
        id: 2, emoji: '💼',
        question: 'What is your work situation?',
        options: [
          { label: 'Remote work for a foreign company', value: 'remote' },
          { label: 'Looking for local work at destination', value: 'local' },
          { label: 'Entrepreneur / Freelancer', value: 'entrepreneur' },
          { label: 'No fixed job currently', value: 'unemployed' },
        ],
      },
      {
        id: 3, emoji: '💰',
        question: 'How much capital do you have available?',
        options: [
          { label: 'Less than $2,000 USD', value: 'low' },
          { label: '$2,000 – $5,000 USD', value: 'medium' },
          { label: '$5,000 – $15,000 USD', value: 'high' },
          { label: 'More than $15,000 USD', value: 'vhigh' },
        ],
      },
      {
        id: 4, emoji: '🗓️',
        question: 'How long do you want to be abroad?',
        options: [
          { label: '1 – 3 months', value: 'short' },
          { label: '3 – 6 months', value: 'mid' },
          { label: '6 – 12 months', value: 'long' },
          { label: 'More than 1 year', value: 'vlong' },
        ],
      },
      {
        id: 5, emoji: '🎯',
        question: 'What is most important to you?',
        options: [
          { label: 'Save as much money as possible', value: 'save' },
          { label: 'Gain international experience', value: 'experience' },
          { label: 'Live in Europe legally', value: 'europe' },
          { label: 'Total freedom to move around', value: 'freedom' },
        ],
      },
    ],
    recommendations: {
      nomada: {
        visa: 'Digital Nomad Visa', emoji: '💻', href: '/nomada-digital', color: '#3b82f6',
        reason: 'You already have remote income or are an entrepreneur. The Digital Nomad Visa lets you live legally in another country (Georgia, Spain, Portugal) while continuing to work for your international clients.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Volunteering', href: '/voluntariado', emoji: '🌱' }],
      },
      voluntariado: {
        visa: 'International Volunteering', emoji: '🌱', href: '/voluntariado', color: '#22c55e',
        reason: 'With little capital available, volunteering is your best option. It eliminates the two biggest expenses (accommodation and food) in exchange for a few hours of work. Ideal for starting without money and gaining experience.',
        alternatives: [{ name: 'Pet Sitting', href: '/pet-sitting', emoji: '🐾' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
      petsitting: {
        visa: 'Pet & House Sitting', emoji: '🐾', href: '/pet-sitting', color: '#f59e0b',
        reason: 'You want total freedom to move around. Pet Sitting gives you free accommodation in exchange for caring for pets. No long contracts, no fixed schedules. The most flexible route in the blueprint.',
        alternatives: [{ name: 'Volunteering', href: '/voluntariado', emoji: '🌱' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      aupair: {
        visa: 'Au Pair Visa', emoji: '👶', href: '/au-pair', color: '#ec4899',
        reason: 'You\'re young and looking for international experience. The Au Pair Visa gives you accommodation, food and financial compensation in exchange for childcare. Ideal for entering Europe without much initial capital.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Volunteering', href: '/voluntariado', emoji: '🌱' }],
      },
      workstudy_europe: {
        visa: 'Work and Study Visa', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'You want to live in Europe legally. The Work and Study Visa is your clearest path — you study English or a program and can work up to 20h/week while settling in countries like Ireland, Malta, Spain or Portugal.',
        alternatives: [{ name: 'Digital Nomad', href: '/nomada-digital', emoji: '💻' }, { name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }],
      },
      workholidays: {
        visa: 'Work and Holidays Visa', emoji: '🌴', href: '/work-and-holidays', color: '#22c55e',
        reason: 'Your profile is a perfect fit for Working Holiday. You can work legally for up to 12 months in Australia, New Zealand, Ireland, Germany or Canada with total freedom to change jobs and move around.',
        alternatives: [{ name: 'Work and Study', href: '/work-and-study', emoji: '🎓' }, { name: 'Digital Nomad', href: '/nomada-digital', emoji: '💻' }],
      },
      workstudy_default: {
        visa: 'Work and Study Visa', emoji: '🎓', href: '/work-and-study', color: '#e8572a',
        reason: 'The Work and Study Visa is the most accessible route to start. With programs from €3,000, you can study and work up to 20h/week in countries like Ireland, Malta, Spain, Portugal, Canada or Australia.',
        alternatives: [{ name: 'Work and Holidays', href: '/work-and-holidays', emoji: '🌴' }, { name: 'Au Pair', href: '/au-pair', emoji: '👶' }],
      },
    },
  },
}

type Answers = Record<number, string>

function getRecommendation(answers: Answers, t: typeof translations['es']) {
  const r = t.recommendations
  const age = answers[1]
  const work = answers[2]
  const capital = answers[3]
  const time = answers[4]
  const goal = answers[5]

  if (work === 'remote' || work === 'entrepreneur') return r.nomada
  if (capital === 'low' && goal === 'save') return r.voluntariado
  if (goal === 'freedom' && (capital === 'low' || capital === 'medium')) return r.petsitting
  if ((age === 'young' || age === 'mid') && goal === 'experience' && work === 'unemployed') return r.aupair
  if (goal === 'europe' && (capital === 'high' || capital === 'vhigh')) return r.workstudy_europe
  if ((age === 'young' || age === 'mid' || age === 'senior') && (capital === 'medium' || capital === 'high') && (time === 'long' || time === 'mid')) return r.workholidays
  return r.workstudy_default
}

export default function VisaQuiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [done, setDone] = useState(false)
  const { locale } = useLanguage()
  const t = translations[locale]
  const questions = t.questions

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

  const recommendation = done ? getRecommendation(answers, t) : null
  const progress = (current / questions.length) * 100

  if (done && recommendation) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{ padding: '16px 24px', backgroundColor: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>{t.nav_brand}</span>
        </div>

        <div style={{ padding: '32px 20px 40px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '60px', marginBottom: '8px' }}>🎯</div>
            <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '6px', color: '#1a1a2e' }}>{t.result_title}</h1>
            <p style={{ color: '#555555', fontSize: '14px' }}>{t.result_sub}</p>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', marginBottom: '16px', borderTop: `4px solid ${recommendation.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '40px' }}>{recommendation.emoji}</span>
              <div>
                <p style={{ fontSize: '11px', color: '#555555', margin: 0, fontWeight: '600', textTransform: 'uppercase' as const }}>{t.result_label}</p>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: recommendation.color }}>{recommendation.visa}</h2>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#1a1a2e', marginBottom: '20px' }}>{recommendation.reason}</p>
            <Link
              href={recommendation.href}
              style={{ backgroundColor: recommendation.color, color: 'white', borderRadius: '12px', padding: '14px 24px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' as const }}
            >
              {t.result_cta}
            </Link>
          </div>

          <p style={{ fontSize: '13px', color: '#333333', marginBottom: '10px', fontWeight: '600' }}>{t.alternatives_label}</p>
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
            {t.restart}
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
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>{t.nav_brand}</span>
      </div>

      <div style={{ backgroundColor: '#e5e7eb', height: '4px' }}>
        <div style={{ backgroundColor: '#e8572a', height: '4px', width: `${progress}%`, transition: 'width 0.3s ease' }} />
      </div>

      <div style={{ padding: '32px 20px 40px', maxWidth: '500px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: '#555555', marginBottom: '8px', fontWeight: '600' }}>
          {t.progress_label(current + 1, questions.length)}
        </p>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>{q.emoji}</div>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.3', color: '#1a1a2e' }}>{q.question}</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.value)}
              style={{ backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '14px', padding: '16px 20px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textAlign: 'left' as const, transition: 'all 0.15s ease', color: '#1a1a2e' }}
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