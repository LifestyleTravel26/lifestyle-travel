import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SignupForm } from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <div style={{ backgroundColor: '#f8f7f4', minHeight: '100vh' }}>
      <AuthLayout
        title="Crear cuenta"
        subtitle="Accede a tus blueprints premium de visa"
      >
        <Suspense fallback={<p style={{ textAlign: 'center', color: '#1a1a2e' }}>Cargando...</p>}>
          <SignupForm />
        </Suspense>
      </AuthLayout>
    </div>
  );
}