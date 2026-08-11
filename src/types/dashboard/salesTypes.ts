export interface CurrencySalesBreakdown {
  id: string
  label: string
  currency: string
  symbol: string
  value: string
  percentage: number
  color: string
}

export interface TopProductItem {
  id: string
  name: string
  totalRevenue: number
  unitsSold: number
  currency: string
  category?: string
  stock?: number
}
