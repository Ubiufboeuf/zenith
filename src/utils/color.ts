import { DOCUMENT_TYPE, PAYMENT_STATUS, SALE_STATUS, SALE_TYPE } from '@/constants/saleConstants'
import { BADGE_COLORS } from '@/constants/ui/badgeConstants'
import type { DocumentType, PaymentStatus, SaleStatus, SaleType } from '@/types/sales/saleTypes'

export function getSaleDocumentColor (documentType: DocumentType, saleType: SaleType) {
  if (documentType === DOCUMENT_TYPE.INVOICE && saleType === SALE_TYPE.CREDIT) return BADGE_COLORS.accent
  if (documentType === DOCUMENT_TYPE.INVOICE && saleType === SALE_TYPE.IMMEDIATE) return BADGE_COLORS.primary
  if (documentType === DOCUMENT_TYPE.RECEIPT && saleType === SALE_TYPE.IMMEDIATE) return BADGE_COLORS.secondary
  if (documentType === DOCUMENT_TYPE.RECEIPT && saleType === SALE_TYPE.IMMEDIATE) return BADGE_COLORS.info
}

export function getSaleStatusColor (status: SaleStatus) {
  if (status === SALE_STATUS.COMPLETED) return BADGE_COLORS.accent
  if (status === SALE_STATUS.PENDING) return BADGE_COLORS.warning
  if (status === SALE_STATUS.CANCELLED) return BADGE_COLORS.error
}

export function getPaymentStatusColor (paymentStatus: PaymentStatus) {
  if (paymentStatus === PAYMENT_STATUS.PAID) return BADGE_COLORS.accent
  if (paymentStatus === PAYMENT_STATUS.PARTIALLY_PAID) return BADGE_COLORS.warning
  if (paymentStatus === PAYMENT_STATUS.UNPAID) return BADGE_COLORS.error
}
