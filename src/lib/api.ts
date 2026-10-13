/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from '@/constants/envConstants'
import type { ProductWithCodes } from '@/types/products/productTypes'
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
    clientId: apiSale.clientId,
    createdAt: apiSale.createdAt,
    currency: apiSale.currency,
    documentNumber: apiSale.documentNumber,
    documentSerie: apiSale.documentSerie,
    documentType: apiSale.documentType,
    generalDiscount: apiSale.generalDiscount,
    lastModified: apiSale.lastModified,
    paymentStatus: apiSale.paymentStatus,
    saleType: apiSale.saleType,
    status: apiSale.status,
    subtotal: apiSale.subtotal,
    total: apiSale.total,
    totalDiscount: apiSale.totalDiscount,
    userId: apiSale.userId
  }
}

export function structureProductByApiProduct (apiProduct: any): ProductWithCodes | undefined {
  return {
    id: apiProduct.id,
    brand: apiProduct.brand,
    category: apiProduct.category,
    codes: apiProduct.codes ?? [],
    costCurrency: apiProduct.costCurrency,
    costPrice: apiProduct.costPrice,
    provider: apiProduct.provider,
    saleCurrency: apiProduct.saleCurrency,
    salePrice: apiProduct.salePrice,
    stock: apiProduct.stock,
    subtitle: apiProduct.subtitle,
    title: apiProduct.title
  }
}
