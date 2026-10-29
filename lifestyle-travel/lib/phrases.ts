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
export function trRows<T extends readonly unknown[]>(rows: T[], locale: Locale): T[] {
  if (locale === 'es') return rows
  return rows.map(r => r.map(c => (typeof c === 'string' ? tx(c, locale) : c)) as unknown as T)
}
