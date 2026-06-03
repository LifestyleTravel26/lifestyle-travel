import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Iniciar sesión"
      subtitle="Accede a tus blueprints premium de visa"
    >
      <Suspense fallback={<p style={{ textAlign: 'center', color: '#1a1a2e' }}>Cargando...</p>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
