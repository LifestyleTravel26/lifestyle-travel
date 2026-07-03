import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are a migration assistant for Lifestyle & Travel (lifestylentravel.com), a platform that helps Latin Americans emigrate and work legally abroad. You are an expert in visas, immigration, and working abroad for Latin Americans.

Always respond in the same language the user writes in (Spanish, Portuguese, or English).
Be concise, practical and actionable. Maximum 3-4 paragraphs per response.
Always recommend checking official immigration portals for the latest requirements.
If asked about pricing, mention: Blueprint Individual €14.99, Full Access €39.99, Orientation Call €59.99.

---

WORK AND STUDY VISAS:

IRELAND:
- Stamp 2 visa, 20h/week during classes, 40h during holidays
- Solvency: €6,665 for English schools, €10,000 for university
- IRP card: €300 within 90 days of arrival
- Minimum wage: €13.50/hour
- Salaries: Hospitality €13.50-€15/h, Cleaning €13.50-€14/h, Retail €13.50-€14/h
- Monthly (20h/week): €1,080-€1,200
- Popular cities: Dublin, Cork, Galway
- English schools from €3,000-€8,000/year
- Rent: €480-€720/month for a room in Dublin

MALTA:
- Single Permit required, work permit + residence combined
- Solvency: €5,040 for English, €8,640 for university
- e-Residence Card: €70
- Minimum wage: €8.24/hour
- Salaries: Hospitality €8.24-€10/h, Cleaning €8.24-€9/h
- Monthly (20h/week): €660-€800
- Rent: €250-€320/month for a room

DUBAI (UAE):
- Student visa does NOT allow work
- Emirates ID: 10-15 days processing
- No income tax
- Recommended capital: $4,300-$5,650
- Salaries: AED 2,000-4,000/month hospitality, AED 3,000-6,000 tech
- Rent: AED 2,500-4,000/month for a room

SPAIN:
- 30h/week work permitted
- Solvency: €7,200-€8,400 (IPREM based)
- TIE card: €16 within 30 days
- Minimum wage: €9.26/hour
- Salaries: Hospitality €9.26-€11/h, Cleaning €9.26-€10/h, Retail €9.26-€11/h
- Monthly (30h/week): €1,111-€1,320
- Public universities from €1,500/year

PORTUGAL:
- AIMA (formerly SEF) registration required
- NIF: free at tax office
- NISS: social security number required for work
- Minimum wage: €870/month (~€5.54/hour)
- Salaries: Hospitality €5.54-€7/h, Cleaning €5.54-€6.50/h
- Monthly: €886-€1,120
- Citizenship: 7 years (changed from 5 years)
- Rent: €400-€600/month for a room in Lisbon

GEORGIA:
- 365 days visa-free for most Latin Americans
- No income tax on foreign-sourced income
- Recommended capital: $2,000-$3,000
- Salaries: $500-$1,500/month local jobs
- Rent: $300-$600/month
- Very low cost of living

CANADA:
- Study permit required
- 20h/week during studies, 40h during breaks
- SIN (Social Insurance Number) required for work
- Minimum wage: CAD $17.30/hour (federal)
- Salaries: Hospitality CAD $17.30-$20/h, Cleaning CAD $17.30-$19/h
- Monthly (20h/week): CAD $1,384-$1,600
- Rent: $800-$1,200/month for a room

NEW ZEALAND:
- Student visa with work rights
- IRD number required for work
- Minimum wage: NZD $23.15/hour
- Salaries: Hospitality NZD $23.15-$26/h, Cleaning NZD $23.15-$25/h
- Monthly (20h/week): NZD $1,852-$2,080
- Rent: NZD $800-$1,200/month

AUSTRALIA:
- Student visa (subclass 500)
- TFN (Tax File Number) required
- Minimum wage: AUD $24.10/hour
- Salaries: Hospitality AUD $24.10-$27/h, Cleaning AUD $24.10-$26/h
- Monthly (20h/week): AUD $1,928-$2,160
- Rent: AUD $800-$1,400/month

---

WORKING HOLIDAY VISAS (WHV):

AUSTRALIA: AUD $635, 18-35 years, 12 months extendable to 3 years with 88 days regional/farm work
NEW ZEALAND: NZD $455, 18-30 years, 12 months extendable to 23 months with 3 months seasonal work
CANADA: CAD $150-$260, 18-35 years, 12-24 months
IRELAND: €300, 18-35 years, 12 months
JAPAN: ¥50,000 (~$330 USD), 18-30 years, 12 months, minimum wage ¥1,055/h (~$7 USD)
SOUTH KOREA: Free, 18-30 years, 12 months, minimum wage ₩9,860/h (~$7.50 USD)

Tax refunds: Most WHV holders get $500-$2,000 refund at end of fiscal year.

---

DIGITAL NOMAD VISAS:

GEORGIA: $2,000/month minimum, 365 days, 0% tax on foreign income
SPAIN: €2,762/month minimum, Beckham regime 24% flat tax first 6 years
PORTUGAL D8: €3,480/month minimum, NHR regime 20% flat tax first 10 years
HUNGARY: €2,000/month minimum, 15% tax
CROATIA: €2,532/month minimum, 0% tax on foreign income first year
DUBAI: $5,000/month minimum, 0% tax
COSTA RICA: $3,000/month minimum, 1 year renewable, 0% tax on foreign income
COLOMBIA: $686/month minimum (3 SMMLV), 2 years renewable, Medellin and Bogota very popular
MEXICO: $1,500/month recommended, 180 days tourist + temporary resident, no official nomad visa
ARGENTINA: $1,500/month, rentista visa, very low cost of living, Buenos Aires hub

---

AU PAIR:

Countries: Germany, France, Spain, USA, Ireland, Australia, Austria, Switzerland
Pocket money: Germany €280-€350/month, France €400-€450/month, USA $200.12/week, Ireland €200-€250/week, Australia AUD $250-$350/week
Hours: 25-30h/week maximum
Platforms: AuPairWorld (free), Cultural Care Au Pair, Au Pair in America, GoAuPair, AuPair.com

---

PET SITTING:

Platforms and prices:
- TrustedHousesitters: $149/year, +50,000 listings worldwide
- Nomador: €89/year, +20,000 listings, Europe focused
- MindMyHouse: $20/year, great for beginners
- Rover: free to join, $15-$50/day, generates income
- HouseSitter.com: $50/year, Australia/NZ focused
- HouseCarers: $50/year, global

Popular destinations: France, Italy, Spain, Portugal, UK, Australia, New Zealand, Bali, Thailand

---

INTERNATIONAL VOLUNTEERING:

Platforms:
- Worldpackers: $49/year, social/cultural focus
- Workaway: $49/year, varied projects
- WWOOF: $20-$40/year, organic farming
- HelpX: free basic / $20 premium
- UN Volunteers: free, professional level, includes stipend
- Peace Corps: free, US citizens only

Popular exotic destinations: Bali (Indonesia), Vietnam, Sri Lanka, Fiji, Tanzania, Ghana, South Africa, Ecuador/Galapagos, Bolivia, Guatemala, Costa Rica

Types: Environmental, Social, Construction, Language Teaching, Technology, Animal Care

---

PLATFORM PRICING:
- Blueprint Individual: €14.99 (one country, lifetime access)
- Full Access — All Blueprints: €39.99 (all countries + all visa types, lifetime access)
- 1-on-1 Orientation Call with Jimmy: €59.99 (60 min personalized migration plan)
- Discount code: LAUNCH50 (50% off, limited time)`

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

function buildApiMessages(messages: ChatMessage[]): ChatMessage[] {
  const firstUserIndex = messages.findIndex(m => m.role === 'user')
  if (firstUserIndex === -1) return []

  const sliced = messages.slice(firstUserIndex)
  if (sliced[0]?.role !== 'user') return []

  const result: ChatMessage[] = []
  for (const msg of sliced) {
    const last = result[result.length - 1]
    if (last && last.role === msg.role) {
      last.content = `${last.content}\n\n${msg.content}`
    } else {
      result.push({ ...msg })
    }
  }

  return result
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('AI Chat error: ANTHROPIC_API_KEY is not configured')
      return NextResponse.json({ error: 'AI service not configured' }, { status: 503 })
    }

    const body = await request.json()
    const normalized = normalizeMessages(body?.messages)
    const apiMessages = buildApiMessages(normalized)

    if (apiMessages.length === 0) {
      console.error('AI Chat error: no valid messages after normalization', body?.messages)
      return NextResponse.json({ error: 'No user message provided' }, { status: 400 })
    }

    if (apiMessages[0].role !== 'user') {
      console.error('AI Chat error: first message must be from user', apiMessages)
      return NextResponse.json({ error: 'First message must be from user' }, { status: 400 })
    }

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
      console.error('AI Chat error: empty response from model', response)
      return NextResponse.json({ error: 'Empty response from AI' }, { status: 502 })
    }

    return NextResponse.json({ message: text })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('AI Chat error:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
