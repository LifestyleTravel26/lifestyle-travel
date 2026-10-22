'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { AuthLayout } from '@/components/auth/auth-layout';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: {
    title: 'Restablecer contraseña',
    subtitle: 'Un último paso para elegir tu nueva contraseña',
    cta: 'Continuar',
    working: 'Verificando...',
    invalid: 'Este enlace ya no es válido o expiró.',
    request_new: 'Solicitar un enlace nuevo',
  },
  pt: {
    title: 'Redefinir senha',
    subtitle: 'Mais um passo para escolher sua nova senha',
    cta: 'Continuar',
    working: 'Verificando...',
    invalid: 'Este link não é mais válido ou expirou.',
    request_new: 'Solicitar um novo link',
  },
  en: {
    title: 'Reset password',
    subtitle: 'One last step to choose your new password',
    cta: 'Continue',
    working: 'Verifying...',
    invalid: 'This link is no longer valid or has expired.',
    request_new: 'Request a new link',
  },
};

// El enlace del correo apunta aquí en vez de consumirse al abrirlo: muchos
// servicios de correo (Hotmail, Gmail) visitan los enlaces por adelantado y
// los gastan. Solo se valida cuando la persona pulsa el botón.
export default function ConfirmPage() {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = translations[locale];
  const [tokenHash, setTokenHash] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hash = params.get('token_hash');
    if (!hash || params.get('type') !== 'recovery') setFailed(true);
    else setTokenHash(hash);
  }, []);

  async function handleContinue() {
    if (!tokenHash) return;
    setLoading(true);
    setFailed(false);
    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({ type: 'recovery', token_hash: tokenHash });
    if (error) {
      setFailed(true);
      setLoading(false);
      return;
    }
    router.push('/reset-password');
  }

  return (
    <AuthLayout title={t.title} subtitle={t.subtitle}>
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {failed ? (
          <p style={{ fontSize: '14px', margin: 0 }}>
            <span style={{ color: '#ef4444' }}>{t.invalid}</span>{' '}
            <Link href="/forgot-password" style={{ color: '#e8572a', fontWeight: 'bold', textDecoration: 'none' }}>
              {t.request_new}
            </Link>
          </p>
        ) : (
          <button
            type="button"
            onClick={handleContinue}
            disabled={loading || !tokenHash}
            style={{ width: '100%', backgroundColor: '#e8572a', color: 'white', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {loading ? t.working : t.cta}
          </button>
        )}
      </div>
    </AuthLayout>
  );
}
