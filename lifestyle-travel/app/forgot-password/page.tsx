'use client';

import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: { title: 'Recuperar contraseña', subtitle: 'Te enviamos un link a tu email', loading: 'Cargando...' },
  pt: { title: 'Recuperar senha', subtitle: 'Enviamos um link para o seu email', loading: 'Carregando...' },
  en: { title: 'Reset password', subtitle: "We'll send a link to your email", loading: 'Loading...' },
}

export default function ForgotPasswordPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div style={{ backgroundColor: '#f8f7f4', minHeight: '100vh' }}>
      <AuthLayout title={t.title} subtitle={t.subtitle}>
        <Suspense fallback={<p style={{ textAlign: 'center', color: '#1a1a2e' }}>{t.loading}</p>}>
          <ForgotPasswordForm />
        </Suspense>
      </AuthLayout>
    </div>
  );
}
