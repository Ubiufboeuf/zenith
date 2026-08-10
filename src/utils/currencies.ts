export function formatCurrency (amount: number, currency: string = 'UYU', locale: string = 'es-UY'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}
