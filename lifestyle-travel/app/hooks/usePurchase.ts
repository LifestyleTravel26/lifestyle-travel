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

        const { data } = await supabase
          .from('purchases')
          .select('id')
          .eq('email', user.email.toLowerCase())
          .single()

        setHasAccess(!!data)
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