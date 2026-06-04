'use client';

import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { LoginForm } from '@/components/auth/login-form';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: { title: 'Iniciar sesión', subtitle: 'Accede a tus blueprints premium de visa' },
  pt: { title: 'Entrar', subtitle: 'Acesse seus blueprints premium de visto' },
  en: { title: 'Sign in', subtitle: 'Access your premium visa blueprints' },
}

export default function LoginPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <AuthLayout title={t.title} subtitle={t.subtitle}>
      <Suspense fallback={<p style={{ textAlign: 'center', color: '#1a1a2e' }}>Cargando...</p>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
