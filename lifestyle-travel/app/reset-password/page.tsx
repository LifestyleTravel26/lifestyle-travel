'use client';

import { useEffect, useState } from 'react';
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
    expired: 'This link is no longer valid or has expired. Request a new one.',
    request_new: 'Request a new link',
  },
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

  // El enlace del correo crea una sesión temporal. Si no llega ninguna, el enlace
  // ya se usó o caducó: lo avisamos en lugar de dejar un formulario que falla.
  useEffect(() => {
    const supabase = createClient();
    let ready = false;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) ready = true;
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) ready = true;
    });
    const timer = setTimeout(() => {
      if (!ready) setExpired(true);
    }, 4000);
    return () => {
      clearTimeout(timer);
      data.subscription.unsubscribe();
    };
  }, []);

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
      setError(error.message);
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>{t.confirm_label}</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
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
