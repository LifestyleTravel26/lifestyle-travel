import Link from 'next/link';
import { NavButtons } from '@/components/nav-buttons';
import LanguageSwitcher from './components/LanguageSwitcher';

const visaCards = [
  { title: 'Visa Work and Study', emoji: '🎓', href: '/work-and-study', img: 'https://images.unsplash.com/photo-1607114751909-976171f71616?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Visa Work and Holidays', emoji: '🌴', href: '/work-and-holidays', img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Nómada Digital', emoji: '💻', href: '/nomada-digital', img: 'https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Visa Au Pair', emoji: '👨‍👩‍👧', href: '/au-pair', img: 'https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Pet Sitting', emoji: '🐾', href: '/pet-sitting', img: 'https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Voluntariado Internacional', emoji: '🌍', href: '/voluntariado', img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1200&auto=format&fit=crop' },
] as const;

export default function Home() {
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
          <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.3' }}>Tu Camino Para Trabajar en el Extranjero</h1>
          <p style={{ color: '#ddd', fontSize: '14px', marginBottom: '20px', maxWidth: '400px' }}>Blueprints paso a paso para emigrar y empezar a ganar dinero rápidamente.</p>
          <Link href="/quiz" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 28px', fontSize: '15px', fontWeight: 'bold', width: '100%', maxWidth: '360px', textDecoration: 'none', display: 'block', textAlign: 'center' }}>¿No sabes por dónde comenzar? →</Link>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>
      <div style={{ padding: '16px 16px 32px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Tipos de Visa</h2>
        <p style={{ color: '#1a1a2e', marginBottom: '14px', fontSize: '13px' }}>Cada uno con su blueprint completo</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {visaCards.map((visa) => (
            <Link key={visa.href} href={visa.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%), url("${visa.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', cursor: 'pointer', overflow: 'hidden', boxSizing: 'border-box', padding: '10px 12px' }}>
                <span style={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }}>{visa.emoji}</span>
                <span style={{ fontWeight: 'bold', fontSize: '13px', color: 'white', lineHeight: '1.3', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{visa.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
