'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: {
    sent_title: '¡Email enviado!',
    sent_text: 'Revisa tu bandeja de entrada y haz click en el link para restablecer tu contraseña.',
    back: '← Volver al inicio de sesión',
    email_label: 'Email',
    placeholder_email: 'tu@email.com',
    sending: 'Enviando...',
    submit: 'Enviar link de recuperación',
  },
  pt: {
    sent_title: 'Email enviado!',
    sent_text: 'Verifique sua caixa de entrada e clique no link para redefinir sua senha.',
    back: '← Voltar ao login',
    email_label: 'Email',
    placeholder_email: 'seu@email.com',
    sending: 'Enviando...',
    submit: 'Enviar link de recuperação',
  },
  en: {
    sent_title: 'Email sent!',
    sent_text: 'Check your inbox and click the link to reset your password.',
    back: '← Back to sign in',
    email_label: 'Email',
    placeholder_email: 'you@email.com',
    sending: 'Sending...',
    submit: 'Send recovery link',
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

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { locale } = useLanguage();
  const t = translations[locale];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{t.sent_title}</h2>
        <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '20px' }}>{t.sent_text}</p>
        <Link href="/login" style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>
          {t.back}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>
          {t.email_label}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t.placeholder_email}
          style={inputStyle}
        />
        {error && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', backgroundColor: '#e8572a', color: 'white', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? t.sending : t.submit}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px' }}>
        <Link href="/login" style={{ color: '#e8572a', textDecoration: 'none' }}>
          {t.back}
        </Link>
      </p>
    </div>
  );
}
