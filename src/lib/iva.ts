import type { Currency } from '@/types/currencyTypes'

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
