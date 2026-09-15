import type { Sale } from '@/types/sales/saleTypes'

export const mockedSales: Sale[] = [
  {
    id: '0c5939af-d036-4906-a7fe-ef39f5c746e4',
    createdAt: '2026-09-14T19:58:50.130Z',
    lastModified: '2026-09-14T19:58:50.130Z',
    subtotal: 10048,
    total: 11304,
    totalDiscount: 1256,
    generalDiscount: 10,
    currency: 'UYU',
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    documentType: 'RECEIPT',
    saleType: 'IMMEDIATE',
    documentSerie: 'B',
    documentNumber: '0000142',
    clientId: null,
    userId: null
  },
  {
    id: '39a47b13-65f1-48bb-8caf-f7448db66b60',
    createdAt: '2026-09-14T19:58:50.130Z',
    lastModified: '2026-09-14T19:58:50.130Z',
    subtotal: 1080,
    total: 1080,
    totalDiscount: 0,
    generalDiscount: 0,
    currency: 'EUR',
    status: 'PENDING',
    paymentStatus: 'PARTIALLY_PAID',
    documentType: 'INVOICE',
    saleType: 'CREDIT',
    documentSerie: 'A',
    documentNumber: '0000002',
    clientId: null,
    userId: null
  },
  {
    id: '4a5141db-c1dc-4c97-98c5-f3f492f6f045',
    createdAt: '2026-09-14T19:58:50.130Z',
    lastModified: '2026-09-14T19:58:50.130Z',
    subtotal: 2100,
    total: 2100,
    totalDiscount: 0,
    generalDiscount: 0,
    currency: 'USD',
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    documentType: 'INVOICE',
    saleType: 'IMMEDIATE',
    documentSerie: 'A',
    documentNumber: '0000001',
    clientId: null,
    userId: null
  }
]
