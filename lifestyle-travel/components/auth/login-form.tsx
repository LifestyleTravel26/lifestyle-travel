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
    show: 'Mostrar contraseña',
    hide: 'Ocultar contraseña',
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
    show: 'Mostrar senha',
    hide: 'Ocultar senha',
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
    show: 'Show password',
    hide: 'Hide password',
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
  const [showPassword, setShowPassword] = useState(false);
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

    // Sin compra registrada -> directo a precios; con compra -> a donde venía
    let hasPurchase = false;
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        const { data } = await supabase
          .from('purchases')
          .select('id')
          .eq('email', user.email.toLowerCase())
          .limit(1);
        hasPurchase = !!data && data.length > 0;
      }
    } catch {
      hasPurchase = true; // ante un error, no bloquear: llevar al destino normal
    }

    router.push(hasPurchase ? redirectTo : '/pricing');
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
        <div style={{ position: 'relative' }}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            style={{ ...inputStyle, paddingRight: '44px' }}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? t.hide : t.show}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 0,
              padding: '4px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

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
