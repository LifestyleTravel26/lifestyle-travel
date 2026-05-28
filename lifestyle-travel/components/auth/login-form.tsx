'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '15px',
  marginBottom: '16px',
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#e8572a',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '14px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirect = searchParams.get('redirectTo');
  const redirectTo =
    rawRedirect?.startsWith('/') && !rawRedirect.startsWith('//')
      ? rawRedirect
      : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={inputStyle}
          placeholder="tu@email.com"
        />

        <label
          htmlFor="password"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          style={inputStyle}
          placeholder="••••••••"
        />

        {error && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
        )}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>
      </form>

      <Link
        href="/forgot-password"
        style={{
          display: 'block',
          textAlign: 'right',
          color: '#e8572a',
          fontSize: '13px',
          textDecoration: 'none',
          marginTop: '-10px',
          marginBottom: '16px',
        }}
      >
        ¿Olvidaste tu contraseña?
      </Link>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
        ¿No tienes cuenta?{' '}
        <Link
          href={redirectTo !== '/' ? `/signup?redirectTo=${encodeURIComponent(redirectTo)}` : '/signup'}
          style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}
        >
          Regístrate
        </Link>
      </p>
    </div>
  );
}
