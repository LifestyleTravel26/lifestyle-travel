'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

// Si el enlace del correo de "olvidé mi contraseña" aterriza en cualquier página
// (por ejemplo porque Supabase no aceptó la redirección), llevamos a la persona
// al formulario de nueva contraseña en lugar de dejarla dentro de la app.
export default function RecoveryRedirect() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY' && window.location.pathname !== '/reset-password') {
        router.push('/reset-password')
      }
    })
    return () => data.subscription.unsubscribe()
  }, [router])

  return null
}
