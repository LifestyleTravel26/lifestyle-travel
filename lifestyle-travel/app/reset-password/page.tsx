'use client';

import { useState } from 'react';
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
  },
  pt: {
    title: 'Nova senha',
    subtitle: 'Escolha sua nova senha',
    new_label: 'Nova senha',
    confirm_label: 'Confirmar senha',
    mismatch: 'As senhas não coincidem',
    saving: 'Salvando...',
    submit: 'Salvar nova senha',
  },
  en: {
    title: 'New password',
    subtitle: 'Choose your new password',
    new_label: 'New password',
    confirm_label: 'Confirm password',
    mismatch: 'Passwords do not match',
    saving: 'Saving...',
    submit: 'Save new password',
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
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>{t.confirm_label}</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          {error && <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>}
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
