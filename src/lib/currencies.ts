import { DEFAULT_CURRENCY } from '@/constants/currencyConstants'
import type { Currency } from '@/types/currencyTypes'
import { formatCurrency } from '@/utils/currencies'

const CURRENCY_VALUE_IN_UYU: Record<Currency, number> = {
  UYU: 1,
  USD: 40.46,
  EUR: 45.36
}

export function convertToCurrency (amount: number, from: Currency | undefined, to: Currency | undefined) {
  if (!from || !to || from === to) return amount
  
  const prevRate = CURRENCY_VALUE_IN_UYU[from]
  const newRate = CURRENCY_VALUE_IN_UYU[to]

  return amount * (prevRate / newRate)
}

export function getAmountToDisplay (amount: string | number | undefined, saleCurrency: Currency | undefined, minDigits?: number, maxDigits?: number) {
  if (amount === undefined || saleCurrency === undefined) return amount ? Number(amount) : 0
  const converted = convertToCurrency(Number(amount), DEFAULT_CURRENCY, saleCurrency)
  const toDisplay = converted > 0 ? converted / 100 : converted
  return formatCurrency(toDisplay, { currencyInDisplay: saleCurrency, minDigits, maxDigits })
}
