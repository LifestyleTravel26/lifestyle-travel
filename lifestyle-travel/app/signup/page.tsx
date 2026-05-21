import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SignupForm } from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Empieza tu camino para trabajar en el extranjero"
    >
      <Suspense fallback={<p style={{ textAlign: 'center', color: '#666' }}>Cargando...</p>}>
        <SignupForm />
      </Suspense>
    </AuthLayout>
  );
}
