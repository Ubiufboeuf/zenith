/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from '@/constants/envConstants'
import type { Sale, SalePayload } from '@/types/sales/saleTypes'

export async function createSale (payload: SalePayload) {
  const res = await fetch(`${API_URL}/sales`, {
    method: 'POST',
    body: JSON.stringify(payload)      
  })

  const data = await res.json()
  console.log('Response:', res.status, data)
}

export function structureSaleByApiSale (apiSale: any): Sale | undefined {
  return {
    id: apiSale.id,
    clientId: apiSale.client_id,
    createdAt: apiSale.created_at,
    currency: apiSale.currency,
    documentNumber: apiSale.document_number,
    documentSerie: apiSale.document_serie,
    documentType: apiSale.document_type,
    generalDiscount: apiSale.general_discount,
    lastModified: apiSale.last_modified,
    paymentStatus: apiSale.payment_status,
    saleType: apiSale.sale_type,
    status: apiSale.status,
    subtotal: apiSale.subtotal,
    total: apiSale.total,
    totalDiscount: apiSale.total_discount,
    userId: apiSale.user_id
  }
}
