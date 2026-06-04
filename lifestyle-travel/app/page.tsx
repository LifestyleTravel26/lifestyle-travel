'use client'
import Link from 'next/link';
import { NavButtons } from '@/components/nav-buttons';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';

const translations = {
  es: {
    hero_title: 'Tu Camino Para Trabajar en el Extranjero',
    hero_sub: 'Blueprints paso a paso para emigrar y empezar a ganar dinero rápidamente.',
    hero_btn: '¿No sabes por dónde comenzar? →',
    section_title: 'Tipos de Visa',
    section_sub: 'Cada uno con su blueprint completo',
    visas: [
      { title: 'Visa Work and Study' },
      { title: 'Visa Work and Holidays' },
      { title: 'Nómada Digital' },
      { title: 'Visa Au Pair' },
      { title: 'Pet Sitting' },
      { title: 'Voluntariado Internacional' },
    ],
  },
  pt: {
    hero_title: 'Seu Caminho Para Trabalhar no Exterior',
    hero_sub: 'Blueprints passo a passo para emigrar e começar a ganhar dinheiro rapidamente.',
    hero_btn: 'Não sabe por onde começar? →',
    section_title: 'Tipos de Visto',
    section_sub: 'Cada um com seu blueprint completo',
    visas: [
      { title: 'Visto Work and Study' },
      { title: 'Visto Work and Holidays' },
      { title: 'Nômade Digital' },
      { title: 'Visto Au Pair' },
      { title: 'Pet Sitting' },
      { title: 'Voluntariado Internacional' },
    ],
  },
  en: {
    hero_title: 'Your Path to Working Abroad',
    hero_sub: 'Step-by-step blueprints to emigrate and start earning money fast.',
    hero_btn: "Don't know where to start? →",
    section_title: 'Visa Types',
    section_sub: 'Each one with its complete blueprint',
    visas: [
      { title: 'Work and Study Visa' },
      { title: 'Work and Holidays Visa' },
      { title: 'Digital Nomad' },
      { title: 'Au Pair Visa' },
      { title: 'Pet Sitting' },
      { title: 'International Volunteering' },
    ],
  },
}

const visaData = [
  { emoji: '🎓', href: '/work-and-study', img: 'https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=1200&auto=format&fit=crop' },
  { emoji: '🌴', href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop' },
  { emoji: '💻', href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop' },
  { emoji: '👨‍👩‍👧', href: '/au-pair', img: 'https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=1200&auto=format&fit=crop' },
  { emoji: '🐾', href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1200&auto=format&fit=crop' },
  { emoji: '🌍', href: '/voluntariado', img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1200&auto=format&fit=crop' },
]

export default function Home() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>✈️</span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Lifestyle & Travel</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <NavButtons />
            <LanguageSwitcher />
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px 24px' }}>
          <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.3' }}>{t.hero_title}</h1>
          <p style={{ color: '#ddd', fontSize: '14px', marginBottom: '20px', maxWidth: '400px' }}>{t.hero_sub}</p>
          <Link href="/quiz" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 28px', fontSize: '15px', fontWeight: 'bold', width: '100%', maxWidth: '360px', textDecoration: 'none', display: 'block', textAlign: 'center' }}>{t.hero_btn}</Link>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>
      <div style={{ padding: '16px 16px 32px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a2e' }}>{t.section_title}</h2>
        <p style={{ color: '#333333', marginBottom: '14px', fontSize: '13px' }}>{t.section_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {visaData.map((visa, index) => (
            <Link key={visa.href} href={visa.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%), url("${visa.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', cursor: 'pointer', overflow: 'hidden', boxSizing: 'border-box', padding: '10px 12px' }}>
                <span style={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }}>{visa.emoji}</span>
                <span style={{ fontWeight: 'bold', fontSize: '13px', color: 'white', lineHeight: '1.3', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{t.visas[index].title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}