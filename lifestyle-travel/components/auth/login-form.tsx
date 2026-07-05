'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: {
    email_label: 'Email',
    password_label: 'Contraseña',
    placeholder_email: 'tu@email.com',
    loading: 'Iniciando sesión...',
    submit: 'Iniciar sesión',
    forgot: '¿Olvidaste tu contraseña?',
    no_account: '¿No tienes cuenta?',
    signup: 'Regístrate',
  },
  pt: {
    email_label: 'Email',
    password_label: 'Senha',
    placeholder_email: 'seu@email.com',
    loading: 'Entrando...',
    submit: 'Entrar',
    forgot: 'Esqueceu sua senha?',
    no_account: 'Não tem conta?',
    signup: 'Cadastre-se',
  },
  en: {
    email_label: 'Email',
    password_label: 'Password',
    placeholder_email: 'you@email.com',
    loading: 'Signing in...',
    submit: 'Sign in',
    forgot: 'Forgot your password?',
    no_account: "Don't have an account?",
    signup: 'Sign up',
  },
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '15px',
  marginBottom: '12px',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  color: '#1a1a2e',
  borderColor: '#e5e7eb',
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

  const { locale } = useLanguage();
  const t = translations[locale];

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

    router.push('/');
    router.refresh();
  }

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px', color: '#1a1a2e' }}>
          {t.email_label}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={inputStyle}
          placeholder={t.placeholder_email}
        />

        <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px', color: '#1a1a2e' }}>
          {t.password_label}
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

        <button type="submit" disabled={loading} style={{ ...buttonStyle, marginBottom: '0px' }}>
          {loading ? t.loading : t.submit}
        </button>
      </form>

      <Link
        href="/forgot-password"
        style={{ display: 'block', textAlign: 'center', color: '#e8572a', fontSize: '13px', textDecoration: 'none', marginTop: '16px', marginBottom: '8px' }}
      >
        {t.forgot}
      </Link>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#1a1a2e', fontSize: '14px' }}>
        {t.no_account}{' '}
        <Link
          href={redirectTo !== '/' ? `/signup?redirectTo=${encodeURIComponent(redirectTo)}` : '/signup'}
          style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}
        >
          {t.signup}
        </Link>
      </p>
    </div>
  );
}
