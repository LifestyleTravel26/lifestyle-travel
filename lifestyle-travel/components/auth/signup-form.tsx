'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { getPostLoginPath } from '@/lib/supabase/post-login';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: {
    name_label: 'Nombre',
    placeholder_name: 'Tu nombre',
    email_label: 'Email',
    password_label: 'Contraseña',
    confirm_label: 'Confirmar contraseña',
    mismatch: 'Las contraseñas no coinciden',
    placeholder_email: 'tu@email.com',
    placeholder_password: 'Mínimo 6 caracteres',
    show: 'Mostrar contraseña',
    hide: 'Ocultar contraseña',
    success: 'Cuenta creada. Revisa tu email para confirmar, o inicia sesión si ya está activa.',
    loading: 'Creando cuenta...',
    submit: 'Crear cuenta',
    have_account: '¿Ya tienes cuenta?',
    login: 'Inicia sesión',
    exists_wrong: 'Ya tienes una cuenta con este email, pero la contraseña no coincide.',
    not_confirmed: 'Tu cuenta existe pero falta confirmar el email. Revisa tu bandeja de entrada.',
    forgot: '¿Olvidaste tu contraseña?',
  },
  pt: {
    name_label: 'Nome',
    placeholder_name: 'Seu nome',
    email_label: 'Email',
    password_label: 'Senha',
    confirm_label: 'Confirmar senha',
    mismatch: 'As senhas não coincidem',
    placeholder_email: 'seu@email.com',
    placeholder_password: 'Mínimo 6 caracteres',
    show: 'Mostrar senha',
    hide: 'Ocultar senha',
    success: 'Conta criada. Verifique seu email para confirmar, ou entre se já estiver ativa.',
    loading: 'Criando conta...',
    submit: 'Criar conta',
    have_account: 'Já tem conta?',
    login: 'Entrar',
    exists_wrong: 'Você já tem uma conta com este email, mas a senha não coincide.',
    not_confirmed: 'Sua conta existe, mas falta confirmar o email. Verifique sua caixa de entrada.',
    forgot: 'Esqueceu sua senha?',
  },
  en: {
    name_label: 'Name',
    placeholder_name: 'Your name',
    email_label: 'Email',
    password_label: 'Password',
    confirm_label: 'Confirm password',
    mismatch: 'Passwords do not match',
    placeholder_email: 'you@email.com',
    placeholder_password: 'At least 6 characters',
    show: 'Show password',
    hide: 'Hide password',
    success: 'Account created. Check your email to confirm, or sign in if it is already active.',
    loading: 'Creating account...',
    submit: 'Create account',
    have_account: 'Already have an account?',
    login: 'Sign in',
    exists_wrong: "You already have an account with this email, but the password doesn't match.",
    not_confirmed: "Your account exists but the email isn't confirmed yet. Check your inbox.",
    forgot: 'Forgot your password?',
  },
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '15px',
  marginBottom: '16px',
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

function EyeToggle({ show, onToggle, label }: { show: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onToggle}
      aria-label={label}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0, padding: '4px', color: '#6b7280', display: 'flex', alignItems: 'center' }}
    >
      {show ? (
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
  );
}

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirect = searchParams.get('redirectTo');
  const redirectTo =
    rawRedirect?.startsWith('/') && !rawRedirect.startsWith('//')
      ? rawRedirect
      : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showForgot, setShowForgot] = useState(false);
  const [loading, setLoading] = useState(false);

  const { locale } = useLanguage();
  const t = translations[locale];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setShowForgot(false);
    if (password !== confirm) {
      setError(t.mismatch);
      return;
    }
    setLoading(true);

    const supabase = createClient();

    // Primero intentamos iniciar sesión: si el email ya tiene cuenta y la
    // contraseña es correcta, entra directo sin importar lo que responda signUp.
    const { error: firstSignInError } = await supabase.auth.signInWithPassword({ email, password });
    if (!firstSignInError) {
      router.push(await getPostLoginPath(supabase, redirectTo));
      router.refresh();
      return;
    }
    if (/confirm/i.test(firstSignInError.message)) {
      setError(t.not_confirmed);
      setLoading(false);
      return;
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name.trim() },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
      },
    });

    // Email ya registrado: según la configuración de Supabase puede venir como
    // error ("User already registered") o como usuario sin identities.
    const errorSaysExists =
      !!signUpError &&
      ((signUpError as { code?: string }).code === 'user_already_exists' ||
        /already.*registered|already.*exists/i.test(signUpError.message));

    if (signUpError && !errorSaysExists) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    const alreadyExists =
      errorSaysExists ||
      (!!signUpData?.user && (signUpData.user.identities?.length ?? 1) === 0);
    if (alreadyExists) {
      setError(t.exists_wrong);
      setShowForgot(true);
      setLoading(false);
      return;
    }

    setMessage(t.success);
    setLoading(false);

    setTimeout(() => {
      router.push(`/login?redirectTo=${encodeURIComponent(redirectTo)}`);
    }, 2000);
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
          htmlFor="name"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
          {t.name_label}
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
          style={inputStyle}
          placeholder={t.placeholder_name}
        />

        <label
          htmlFor="email"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
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

        <label
          htmlFor="password"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
          {t.password_label}
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            style={{ ...inputStyle, paddingRight: '44px' }}
            placeholder={t.placeholder_password}
          />
          <EyeToggle show={showPassword} onToggle={() => setShowPassword((v) => !v)} label={showPassword ? t.hide : t.show} />
        </div>

        <label
          htmlFor="confirm"
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}
        >
          {t.confirm_label}
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="confirm"
            type={showConfirm ? 'text' : 'password'}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            style={{ ...inputStyle, paddingRight: '44px' }}
            placeholder={t.placeholder_password}
          />
          <EyeToggle show={showConfirm} onToggle={() => setShowConfirm((v) => !v)} label={showConfirm ? t.hide : t.show} />
        </div>

        {error && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
        )}

        {showForgot && (
          <p style={{ marginBottom: '16px', fontSize: '14px' }}>
            <Link href="/forgot-password" style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}>
              {t.forgot}
            </Link>
          </p>
        )}

        {message && (
          <p style={{ color: '#22c55e', fontSize: '14px', marginBottom: '16px' }}>{message}</p>
        )}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? t.loading : t.submit}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#1a1a2e', fontSize: '14px' }}>
        {t.have_account}{' '}
        <Link
          href={redirectTo !== '/' ? `/login?redirectTo=${encodeURIComponent(redirectTo)}` : '/login'}
          style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}
        >
          {t.login}
        </Link>
      </p>
    </div>
  );
}
