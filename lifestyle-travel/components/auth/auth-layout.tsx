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
          backgroundColor: '#1a1a2e',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>✈️</div>
        <h1
          style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '12px',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: '#ccc',
            fontSize: '15px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
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
