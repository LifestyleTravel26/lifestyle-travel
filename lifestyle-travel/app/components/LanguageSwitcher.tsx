'use client'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        <button onClick={() => setLocale('es')} style={{ background: locale === 'es' ? '#e8572a' : 'transparent', color: locale === 'es' ? 'white' : 'white', border: '1.5px solid', borderColor: locale === 'es' ? '#e8572a' : 'rgba(255,255,255,0.6)', borderRadius: '20px', padding: '4px 10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>🇪🇸 ES</button>
        <button onClick={() => setLocale('pt')} style={{ background: locale === 'pt' ? '#e8572a' : 'transparent', color: locale === 'pt' ? 'white' : 'white', border: '1.5px solid', borderColor: locale === 'pt' ? '#e8572a' : 'rgba(255,255,255,0.6)', borderRadius: '20px', padding: '4px 10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>🇧🇷 PT</button>
      </div>
      <div>
        <button onClick={() => setLocale('en')} style={{ background: locale === 'en' ? '#e8572a' : 'transparent', color: locale === 'en' ? 'white' : 'white', border: '1.5px solid', borderColor: locale === 'en' ? '#e8572a' : 'rgba(255,255,255,0.6)', borderRadius: '20px', padding: '4px 10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>🇬🇧 EN</button>
      </div>
    </div>
  )
}