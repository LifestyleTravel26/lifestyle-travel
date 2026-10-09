'use client';

import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SignupForm } from '@/components/auth/signup-form';
import { useLanguage } from '@/app/context/LanguageContext';

const translations = {
  es: { title: 'Crear cuenta', subtitle: 'Accede a tus blueprints premium de visa', loading: 'Cargando...' },
  pt: { title: 'Criar conta', subtitle: 'Acesse seus blueprints premium de visto', loading: 'Carregando...' },
  en: { title: 'Create account', subtitle: 'Access your premium visa blueprints', loading: 'Loading...' },
}

export default function SignupPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div style={{ backgroundColor: '#f8f7f4', minHeight: '100vh' }}>
      <AuthLayout title={t.title} subtitle={t.subtitle}>
        <Suspense fallback={<p style={{ textAlign: 'center', color: '#1a1a2e' }}>{t.loading}</p>}>
          <SignupForm />
        </Suspense>
      </AuthLayout>
    </div>
  );
}
