'use client'
import Link from 'next/link'
import HeaderMenu from './HeaderMenu'
import { useLanguage } from '../context/LanguageContext'

export type LegalSection = { h: string; p: string[] }
export type LegalContent = { title: string; updated: string; back: string; sections: LegalSection[] }

export default function LegalLayout({ content }: { content: { es: LegalContent; pt: LegalContent; en: LegalContent } }) {
  const { locale } = useLanguage()
  const t = content[locale]
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', colorScheme: 'light', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          {t.back}
        </Link>
        <HeaderMenu />
      </div>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 20px 64px' }}>
        <h1 style={{ fontSize: '28px', color: '#1a1a2e', margin: '0 0 6px' }}>{t.title}</h1>
        <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 28px' }}>{t.updated}</p>
        {t.sections.map((s, i) => (
          <section key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', marginBottom: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '17px', color: '#1a1a2e', margin: '0 0 10px' }}>{s.h}</h2>
            {s.p.map((line, j) => (
              <p key={j} style={{ fontSize: '14px', lineHeight: '1.7', color: '#333333', margin: '0 0 8px' }}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
