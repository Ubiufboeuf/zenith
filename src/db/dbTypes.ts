export interface Product {
  id:       string
  code:     string
  name:     string
  category: string
  priceId:  PriceID
  prices:   Prices
  stock:    Stock
}

export type PriceID = 'price-1' | 'price-2'

export interface Prices {
  'price-1': Price
  'price-2': Price
}

export interface Price {
  currency:      Currency
  currency_name: CurrencyName
  value:         number
}

export type Currency = '$' | 'U$S'

export type CurrencyName = 'Peso' | 'Dólar'

export interface Stock {
  current: number
  min:     number
}
