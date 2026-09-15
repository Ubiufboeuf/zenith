import { PAYMENT_STATUS, DOCUMENT_TYPE, SALE_STATUS, SALE_TYPE } from '@/constants/saleConstants'
import type { DocumentType, PaymentStatus, SaleStatus, SaleType } from '@/types/sales/saleTypes'

export function getSaleDocumentLabel (documentType: DocumentType, saleType: SaleType) {
  if (documentType === DOCUMENT_TYPE.INVOICE && saleType === SALE_TYPE.CREDIT) return 'Factura Crédito'
  if (documentType === DOCUMENT_TYPE.INVOICE && saleType === SALE_TYPE.IMMEDIATE) return 'Factura Contado'
  if (documentType === DOCUMENT_TYPE.RECEIPT && saleType === SALE_TYPE.IMMEDIATE) return 'Ticket Crédito'
  if (documentType === DOCUMENT_TYPE.RECEIPT && saleType === SALE_TYPE.IMMEDIATE) return 'Factura Contado'
}

export function getSaleStatusLabel (status: SaleStatus) {
  if (status === SALE_STATUS.COMPLETED) return 'Completado'
  if (status === SALE_STATUS.PENDING) return 'Pendiente'
  if (status === SALE_STATUS.CANCELLED) return 'Cancelado'
}

export function getPaymentStatusLabel (paymentStatus: PaymentStatus) {
  if (paymentStatus === PAYMENT_STATUS.PAID) return 'Pagado'
  if (paymentStatus === PAYMENT_STATUS.PARTIALLY_PAID) return 'Pago parcial'
  if (paymentStatus === PAYMENT_STATUS.UNPAID) return 'Impago'
}
