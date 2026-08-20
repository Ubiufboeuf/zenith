import type { Currency } from '@/types/currencyTypes'

export const SYMBOL_MAP: Record<string, string> = {
  EUR: '€',
  'US$': 'U$S'
}

export function formatCurrency (amount: number, currency: Currency = 'UYU', locale: string = 'es-UY'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
    .format(amount)
    .replace(/EUR|US\$/g, (match) => SYMBOL_MAP[match] ?? match)
}
