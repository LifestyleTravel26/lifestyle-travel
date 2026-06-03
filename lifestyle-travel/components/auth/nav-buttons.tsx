'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export function NavButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
      setLoading(false);
    });
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  if (loading) return null;

  if (isLoggedIn) {
    return (
      <button
        onClick={handleSignOut}
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: '2px solid white',
          borderRadius: '8px',
          padding: '8px 16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Cerrar sesión
      </button>
    );
  }

  return (
    <Link
      href="/signup"
      style={{
        backgroundColor: '#e8572a',
        color: 'white',
        borderRadius: '8px',
        padding: '8px 16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      Comenzar
    </Link>
  );
}