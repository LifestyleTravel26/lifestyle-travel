import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Te enviamos un link a tu email"
    >
      <Suspense fallback={<p style={{ textAlign: 'center', color: '#666' }}>Cargando...</p>}>
        <ForgotPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
