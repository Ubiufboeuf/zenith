import type { Currency } from '../currencyTypes'

export interface Product {
  id: string
  title: string
  subtitle: string
  provider: string
  brand: string
  category: string
  costPrice: number
  costCurrency: Currency
  salePrice: number
  saleCurrency: Currency
  stock: number
  // status: 'active' | 'inactive'
}

export interface ProductCode {
  id: string
  productId: string
  code: string
  type: string
  isMain: boolean
}

export interface ProductEvent {
  id: string
  productId: string
  eventType: string
  previousValue: string
  newValue: string
  createdAt: string
}

export interface ProductWithCodes extends Product {
  codes: (ProductCode | undefined)[]
}

export interface ProductWithEvents extends Product {
  events: ProductEvent[]
}

export interface ProductFull extends Product {
  codes: ProductCode[]
  events: ProductEvent[]
}
