import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Llamada periódica (Vercel Cron) para que Supabase vea actividad y no pause el proyecto.
// Hace una consulta mínima y no devuelve datos.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: 'Missing Supabase env' }, { status: 500 })
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const { error } = await supabase.from('purchases').select('id', { count: 'exact', head: true })

  return NextResponse.json({ ok: !error, at: new Date().toISOString() }, { status: error ? 500 : 200 })
}
