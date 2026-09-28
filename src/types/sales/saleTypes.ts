import type { DOCUMENT_TYPE, PAYMENT_STATUS, SALE_TYPE, SALE_STATUS } from '@/constants/saleConstants'
import type { Currency } from '../currencyTypes'

export type DocumentType = typeof DOCUMENT_TYPE[keyof typeof DOCUMENT_TYPE]
export type SaleType = typeof SALE_TYPE[keyof typeof SALE_TYPE]
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS]
export type SaleStatus = typeof SALE_STATUS[keyof typeof SALE_STATUS]

export interface Sale {
  id: string
  createdAt: string
  lastModified: string
  total: number
  subtotal: number
  totalDiscount: number
  generalDiscount: number
  currency: Currency
  status: SaleStatus
  paymentStatus: PaymentStatus
  documentType: DocumentType
  saleType: SaleType
  documentSerie: string
  documentNumber: string
  clientId: string | null
  userId: string | null
}

export interface SaleDetail {
  id: string
  saleId: string
  productId: string
  quantity: number
  unitPriceAtMoment: number
  currency: Currency
  discount: number
  ivaRate: number
}

export interface Payment {
  id: string
  amountPaid: number
  currency: Currency
  paymentMethod: string
  exchangeRate?: number
  createdAt?: string
}

export interface SalePayment {
  id: string
  saleId: string
  paymentId: string
}

export interface SaleWithDetails extends Sale {
  details: SaleDetail[]
}

export interface SaleWithPayments extends Sale {
  payments: SalePayment[]
}

export interface SaleFull extends Sale {
  details: SaleDetail[]
  payments: SalePayment[]
}

export interface SalePayload {
  documentType: DocumentType
  saleType: SaleType
  currency: Currency
  exchangeRate?: number
  
  userId: string | null
  cashierId: string
  clientId: string | null
  
  subtotal: number
  totalDiscount: number
  generalDiscount: number
  total: number
  
  details: Omit<SaleDetail, 'id' | 'saleId'>[]
  
  payments: (Omit<Payment, 'id'> & {
    reference?: string // Para guardar el número del voucher
  })[]
  
  notes?: string
}
