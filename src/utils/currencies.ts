import type { Currency } from '@/types/currencyTypes'

interface FormatOptions {
  currencyInDisplay: Currency
  locale?: string
  maxDigits?: number
  minDigits?: number
  digits?: number
}

const DEFAULT_OPTIONS: FormatOptions = {
  currencyInDisplay: 'UYU',
  locale: 'es-UY',
  minDigits: 2,
  maxDigits: 5
}

export const SYMBOL_MAP: Record<string, string> = {
  EUR: '€',
  'US$': 'U$S'
}

export function formatCurrency (amount: number, options?: FormatOptions | string): string {
  let { currencyInDisplay, locale, digits, minDigits = digits, maxDigits = digits } = { ...DEFAULT_OPTIONS }
  if (typeof options === 'object') {    
    currencyInDisplay = options.currencyInDisplay || DEFAULT_OPTIONS.currencyInDisplay
    locale = options.locale || DEFAULT_OPTIONS.locale
    digits = options.digits || DEFAULT_OPTIONS.digits
    minDigits = digits || options.minDigits || DEFAULT_OPTIONS.minDigits
    maxDigits = digits || options.maxDigits || DEFAULT_OPTIONS.maxDigits
  }

  const formattedNumber = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits
  }).format(amount)

  return `${currencyInDisplay} ${formattedNumber}`
}
