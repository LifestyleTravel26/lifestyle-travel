import dict from './phrases.json'

type Locale = 'es' | 'pt' | 'en'
const D = dict as Record<string, { pt: string; en: string }>

// Traduce un texto en español usando el diccionario compartido.
// Si no hay traducción (nombres propios, URLs, etc.) devuelve el original.
export function tx(s: string, locale: Locale): string {
  if (locale === 'es') return s
  return D[s]?.[locale] ?? s
}

// Aplica tx a cada celda de texto de una tabla de filas.
// usdCols: columnas en USD (paginas con moneda local sin etiqueta); sin el, todo $ es USD.
export function trRows<T extends readonly unknown[]>(rows: T[], locale: Locale, usdCols?: number[]): T[] {
  if (locale === 'es') return rows
  return rows.map(r => r.map((c, i) => (typeof c === 'string' ? (locale === 'pt' ? usdToBrl(tx(c, locale), usdCols ? !usdCols.includes(i) : false) : tx(c, locale)) : c)) as unknown as T)
}

// ── Conversión USD → BRL (solo versión en portugués) ──────────────────────
// Los montos en moneda local con etiqueta (CAD, AUD, NZ$, A$, GEL, AED) no se tocan.
// strict = páginas donde "$" sin etiqueta puede ser moneda local (CAD/AUD/NZD):
// solo se convierte lo marcado como USD o precedido de "≈".
export const BRL_RATE = 5.4

function parseNum(raw: string): number {
  if (/^\d{1,3}(,\d{3})+$/.test(raw)) return parseFloat(raw.replace(/,/g, ''))
  if (/^\d{1,3}(\.\d{3})+$/.test(raw)) return parseFloat(raw.replace(/\./g, ''))
  if (/^\d+,\d{1,2}$/.test(raw)) return parseFloat(raw.replace(',', '.'))
  return parseFloat(raw)
}
function fmtBrl(usd: number): string {
  let v = usd * BRL_RATE
  v = v < 100 ? Math.round(v) : v < 1000 ? Math.round(v / 5) * 5 : Math.round(v / 10) * 10
  return v.toLocaleString('pt-BR')
}
const NUM = String.raw`\d[\d.,]*\d|\d`
const AMT = String.raw`\$\s?(?:${NUM})(?:k)?(?:\+)?`
const RANGE = new RegExp(String.raw`(?<![A-Za-z$])(${AMT}(?:\s?[–-]\s?(?:\$\s?)?(?:${NUM})(?:k)?\+?)*)(\s?USD)?(?!\d)`, 'g')

export function usdToBrl(s: string, strict = false): string {
  return s.replace(RANGE, (m: string, body: string, usd: string | undefined, off: number, all: string) => {
    const after = all.slice(off + m.length)
    const before = all.slice(Math.max(0, off - 14), off)
    if (!usd && /^\s?\/?\s?(CAD|AUD|NZD|GEL|AED|EUR)/.test(after)) return m
    if (/(CAD|AUD|NZD|GEL|AED)\s?$/.test(before)) return m
    if (/[A-Za-z]\$[\d.,]+\s?[–-]\s?$/.test(before)) return m
    if (strict && !usd && !/≈\s?~?$/.test(before)) return m
    return body.replace(new RegExp(String.raw`(\$\s?)?(${NUM})(k)?`, 'g'), (_x: string, _d: string | undefined, n: string, k: string | undefined) => {
      let v = parseNum(n)
      if (k) v *= 1000
      return 'R$ ' + fmtBrl(v)
    })
  })
}

export function pm<T>(obj: T, locale: Locale, strict = false): T {
  if (locale !== 'pt') return obj
  const walk = (x: unknown): unknown => {
    if (typeof x === 'string') {
      const r = usdToBrl(x, strict).replace(/≈ USD/g, '≈ R$')
      return r.length < 45 && !/\d/.test(r) ? r.replace(/\bUSD\b/g, 'R$') : r
    }
    if (Array.isArray(x)) return x.map(walk)
    if (x && typeof x === 'object') return Object.fromEntries(Object.entries(x as Record<string, unknown>).map(([k, v]) => [k, walk(v)]))
    return x
  }
  return walk(obj) as T
}
