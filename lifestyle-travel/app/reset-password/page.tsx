'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
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
    <AuthLayout title="Nueva contraseña" subtitle="Elige tu nueva contraseña">
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>Nueva contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>Confirmar contraseña</label>
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
            {loading ? 'Guardando...' : 'Guardar nueva contraseña'}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
