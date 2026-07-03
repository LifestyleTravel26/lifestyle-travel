import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are a migration assistant for Lifestyle & Travel (lifestylentravel.com), a platform that helps Latin Americans emigrate and work legally abroad.

You have expert knowledge about:
- Work and Study visas: Ireland, Malta, Dubai, Spain, Portugal, Georgia, Canada, New Zealand, Australia
- Work and Holidays visas: Argentina, Chile, Mexico, Uruguay, Brazil, Peru, Colombia, Costa Rica
- Digital Nomad visas: Georgia, Hungary, Croatia, Dubai, Spain, Portugal
- Au Pair visas: Ireland, Germany, France, Spain, Austria, Switzerland, USA
- Pet Sitting: TrustedHousesitters, Nomador, Schengen zone
- International Volunteering: Worldpackers, WWOOF, UN Volunteers

Key facts:
- Ireland Work and Study: Stamp 2, 20h/week during classes, 40h during holidays, €6,665 solvency for English, €10,000 for university
- Minimum wage Ireland: €13.50/hour
- Georgia Digital Nomad: from $2,000/month, 365 days visa-free
- Spain Digital Nomad: €2,762/month minimum
- Portugal Digital Nomad (D8): €3,480/month minimum
- Australia Working Holiday: $635 AUD, 18-35 years
- New Zealand Working Holiday: $455 NZD, 18-30 years

Always respond in the same language the user writes in (Spanish, Portuguese, or English).
Be concise, practical and actionable. Maximum 3-4 paragraphs per response.
Always recommend checking official immigration portals for the latest requirements.
If asked about pricing, mention the platform plans: Blueprint Individual €14.99, Full Access €39.99, Orientation Call €59.99.`

function normalizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return []

  return messages
    .filter(
      (m): m is ChatMessage =>
        typeof m === 'object' &&
        m !== null &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0
    )
    .map(m => ({ role: m.role, content: m.content.trim() }))
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: 'AI service not configured' }, { status: 503 })
    }

    const { messages } = await request.json()
    const firstUserIndex = normalizeMessages(messages).findIndex(m => m.role === 'user')

    if (firstUserIndex === -1) {
      return NextResponse.json({ error: 'No user message provided' }, { status: 400 })
    }

    const apiMessages = normalizeMessages(messages).slice(firstUserIndex)

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: apiMessages,
    })

    const text = response.content[0]?.type === 'text' ? response.content[0].text : ''

    if (!text) {
      return NextResponse.json({ error: 'Empty response from AI' }, { status: 502 })
    }

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error('AI Chat error:', error)
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 })
  }
}
