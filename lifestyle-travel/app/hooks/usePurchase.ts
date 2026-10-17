'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export function usePurchase() {
  const [hasAccess, setHasAccess] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAccess() {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user?.email) {
          setHasAccess(false)
          setLoading(false)
          return
        }

        // ilike (sin distinguir mayúsculas) y limit(1): no falla si hay filas duplicadas
        const safeEmail = user.email.trim().replace(/[\\%_]/g, '\\$&')
        const { data } = await supabase
          .from('purchases')
          .select('id')
          .ilike('email', safeEmail)
          .limit(1)

        setHasAccess(!!data && data.length > 0)
      } catch {
        setHasAccess(false)
      } finally {
        setLoading(false)
      }
    }

    checkAccess()
  }, [])

  return { hasAccess, loading }
}