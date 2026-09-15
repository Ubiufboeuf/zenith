import type { DocumentType, SaleType } from '@/types/sales/saleTypes'

export const SALE_STATUS = {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED'
} as const

export const PAYMENT_STATUS = {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID'
} as const

export const DOCUMENT_TYPE = {
  RECEIPT: 'RECEIPT',
  INVOICE: 'INVOICE'
} as const

export const SALE_TYPE = {
  IMMEDIATE: 'IMMEDIATE',
  CREDIT: 'CREDIT'
} as const

export const DEFAULT_IVA_RATE = 22

export const DOCUMENT_TYPE_LABELS: Record<DocumentType, string> = {
  INVOICE: 'Factura',
  RECEIPT: 'Ticket'
}

export const SALE_TYPE_LABELS: Record<SaleType, string> = {
  CREDIT: 'Crédito',
  IMMEDIATE: 'Contado'
}

export const SALE_COLORS: Record<DocumentType, Record<SaleType, string>> = {
  INVOICE: {
    CREDIT: 'badge-primary',
    IMMEDIATE: 'badge-secondary'
  },
  RECEIPT: {
    CREDIT: 'badge-accent',
    IMMEDIATE: 'badge-info'
  }
}
