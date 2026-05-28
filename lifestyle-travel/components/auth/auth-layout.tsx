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
      <div
        style={{
          backgroundColor: '#1a1a2e',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          }}
        >
          ← ✈️ <span style={{ fontWeight: 'bold' }}>Lifestyle & Travel</span>
        </Link>
      </div>

      <div
        style={{
          position: 'relative',
          height: '55vh',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop")',
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
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo.png"
            alt="Lifestyle & Travel"
            style={{ height: '90px', objectFit: 'contain' }}
          />
        </div>
        <h1
          style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '12px',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: '#eee',
            fontSize: '15px',
            maxWidth: '400px',
            margin: '0 auto',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, #f8f7f4)',
            pointerEvents: 'none',
          }}
        />
      </div>

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
