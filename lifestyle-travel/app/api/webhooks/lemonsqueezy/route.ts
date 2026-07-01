import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import crypto from 'crypto'

const WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || 'lsq_webhook_secret_lifestyle2026'

function verifySignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET)
  const digest = hmac.update(payload).digest('hex')
  return digest === signature
}

export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('x-signature') || ''

  if (!verifySignature(payload, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const data = JSON.parse(payload)
  const eventName = data.meta?.event_name

  if (eventName === 'order_created') {
    const order = data.data?.attributes
    const email = order?.user_email
    const productId = order?.first_order_item?.product_id
    const variantId = order?.first_order_item?.variant_id

    // Determine access level based on product
    // Full Access product ID
    const FULL_ACCESS_VARIANT = process.env.LEMONSQUEEZY_FULL_ACCESS_VARIANT || ''
    const accessLevel = 'full' // default to full for now

    if (email) {
      const supabase = await createClient()
      
      // Insert purchase record
      const { error } = await supabase
        .from('purchases')
        .upsert({
          email: email.toLowerCase(),
          product_id: String(productId),
          variant_id: String(variantId),
          access_level: accessLevel,
          created_at: new Date().toISOString(),
        }, {
          onConflict: 'email'
        })

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
    }
  }

  if (eventName === 'order_refunded') {
    const order = data.data?.attributes
    const email = order?.user_email

    if (email) {
      const supabase = await createClient()
      await supabase
        .from('purchases')
        .delete()
        .eq('email', email.toLowerCase())
    }
  }

  return NextResponse.json({ success: true })
}