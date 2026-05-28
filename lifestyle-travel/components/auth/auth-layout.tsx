import Link from 'next/link';
import type { ReactNode } from 'react';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f7f4',
        fontFamily: 'sans-serif',
      }}
    >
      {/* TOP NAV */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 'bold',
          }}
        >
          ← ✈️ <span>Lifestyle & Travel</span>
        </Link>
      </div>

      {/* HERO */}
      <div
        style={{
          position: 'relative',
          height: '55vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url("https://images.unsplash.com/photo-1663427929917-333d88949f7a?q=80&w=1332&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <img
          src="/logo.png"
          alt="Lifestyle & Travel"
          style={{ height: '70px', maxWidth: '160px', objectFit: 'contain', marginBottom: '16px' }}
        />
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', margin: '0 0 10px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          {title}
        </h1>
        <p style={{ color: '#ddd', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
          {subtitle}
        </p>
        {/* BOTTOM FADE */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* FORM */}
      <div
        style={{
          padding: '32px 24px',
          maxWidth: '420px',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </main>
  );
}