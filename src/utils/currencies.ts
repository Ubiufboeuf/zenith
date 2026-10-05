import type { Currency } from '@/types/currencyTypes'

export const SYMBOL_MAP: Record<string, string> = {
  EUR: '€',
  'US$': 'U$S'
}

export function formatCurrency (amount: number, currency: Currency = 'UYU', locale: string = 'es-UY'): string {
  const formattedNumber = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  }).format(amount)

  return `${currency} ${formattedNumber}`
}
