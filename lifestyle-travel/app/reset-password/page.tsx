'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { AuthLayout } from '@/components/auth/auth-layout';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: {
    title: 'Nueva contraseña',
    subtitle: 'Elige tu nueva contraseña',
    new_label: 'Nueva contraseña',
    confirm_label: 'Confirmar contraseña',
    mismatch: 'Las contraseñas no coinciden',
    saving: 'Guardando...',
    submit: 'Guardar nueva contraseña',
    show: 'Mostrar contraseña',
    hide: 'Ocultar contraseña',
    expired: 'Este enlace ya no es válido o expiró. Solicita uno nuevo.',
    request_new: 'Solicitar nuevo enlace',
  },
  pt: {
    title: 'Nova senha',
    subtitle: 'Escolha sua nova senha',
    new_label: 'Nova senha',
    confirm_label: 'Confirmar senha',
    mismatch: 'As senhas não coincidem',
    saving: 'Salvando...',
    submit: 'Salvar nova senha',
    show: 'Mostrar senha',
    hide: 'Ocultar senha',
    expired: 'Este link não é mais válido ou expirou. Solicite um novo.',
    request_new: 'Solicitar novo link',
  },
  en: {
    title: 'New password',
    subtitle: 'Choose your new password',
    new_label: 'New password',
    confirm_label: 'Confirm password',
    mismatch: 'Passwords do not match',
    saving: 'Saving...',
    submit: 'Save new password',
    show: 'Show password',
    hide: 'Hide password',
    expired: 'This link is no longer valid or has expired. Request a new one.',
    request_new: 'Request a new link',
  },
}

function EyeButton({ show, onToggle, label }: { show: boolean; onToggle: () => void; label: string }) {
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

export default function ResetPasswordPage() {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = translations[locale];
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expired, setExpired] = useState(false);
  const [show, setShow] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError(t.mismatch);
      return;
    }
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      // Solo avisamos de enlace caducado si de verdad no hay sesión al guardar.
      if (/session/i.test(error.message)) setExpired(true);
      else setError(error.message);
      setLoading(false);
      return;
    }
    router.push('/');
  }

  return (
    <AuthLayout title={t.title} subtitle={t.subtitle}>
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>{t.new_label}</label>
          <div style={{ position: 'relative' }}>
          <input
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 44px 12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <EyeButton show={show} onToggle={() => setShow((v) => !v)} label={show ? t.hide : t.show} />
          </div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>{t.confirm_label}</label>
          <div style={{ position: 'relative' }}>
          <input
            type={show ? 'text' : 'password'}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 44px 12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <EyeButton show={show} onToggle={() => setShow((v) => !v)} label={show ? t.hide : t.show} />
          </div>
          {error && <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>}
          {expired && (
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              <span style={{ color: '#ef4444' }}>{t.expired}</span>{' '}
              <Link href="/forgot-password" style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}>
                {t.request_new}
              </Link>
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', backgroundColor: '#e8572a', color: 'white', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {loading ? t.saving : t.submit}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
