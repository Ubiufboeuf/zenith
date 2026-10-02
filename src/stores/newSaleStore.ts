import type { ListedItem } from '@/components/sales/new/ListView'
import { CURRENCIES } from '@/constants/currencyConstants'
import { DOCUMENT_TYPE, SALE_TYPE } from '@/constants/saleConstants'
import type { Currency } from '@/types/currencyTypes'
import type { ProductWithCodes } from '@/types/products/productTypes'
import type { DocumentType, Payment, SaleType } from '@/types/sales/saleTypes'
import { create } from 'zustand'

interface NewSaleStore {
  products: ProductWithCodes[]
  getProduct: (productId: string) => ProductWithCodes | undefined
  setProducts: (products: ProductWithCodes[]) => void

  listedItems: ListedItem[]
  getListedItem: (listedItemId: string) => ListedItem | undefined
  setListedItems: (listedItems: ListedItem[]) => void
  updateListedItem: (listedItemId: string, data: Partial<ListedItem>) => void
  deleteListedItem: (listedItemId: string) => void

  isCheckoutModalOpen: boolean
  openCheckoutModal: () => void
  closeCheckoutModal: () => void

  total: string | number
  setTotal: (total: string | number) => void

  payments: Payment[]
  setPayments: (payments: Payment[]) => void
  addPayment: (payment: Payment) => void
  deletePayment: (id: string) => void
  updatePayment: (paymentId: string, data: Partial<Payment>) => void

  rest: number
  setRest: (rest: number) => void

  documentType?: DocumentType
  setDocumentType: (documentType?: DocumentType) => void
  saleType?: SaleType
  setSaleType: (saleType?: SaleType) => void
  currency?: Currency
  setCurrency: (currency?: Currency) => void
  subtotal?: string | number
  setSubtotal: (subtotal?: string | number) => void
  totalDiscount?: number
  setTotalDiscount: (totalDiscount?: number) => void
  generalDiscount?: number
  setGeneralDiscount: (generalDiscount?: number) => void
}

export const useNewSaleStore = create<NewSaleStore>((set, get) => ({
  products: [],
  getProduct: (id) => get().products.find((p) => p.id === id),
  setProducts: (products) => set({ products }),

  listedItems: [],
  getListedItem: (id) => get().listedItems.find((li) => li.id === id),
  setListedItems: (listedItems) => set({ listedItems }),
  updateListedItem: (id, data) => set(({ listedItems }) => {
    const idx = listedItems.findIndex((li) => li.id === id)
    if (idx === -1) return {}

    listedItems[idx] = {...listedItems[idx], ...data}

    return {
      listedItems: [...listedItems]
    }
  }),
  deleteListedItem: (id) => set(({ listedItems }) => ({ listedItems: listedItems.filter((li) => li.id !== id) })),

  isCheckoutModalOpen: false,
  openCheckoutModal: () => set({ isCheckoutModalOpen: true }),
  closeCheckoutModal: () => set({ isCheckoutModalOpen: false }),

  total: 0,
  setTotal: (total) => set({ total }),

  payments: [{ id: 'initial', paymentMethod: 'cash', amountPaid: 0, currency: 'UYU' }],
  setPayments: (payments) => set({ payments }),
  addPayment: (payment) => set(({ payments }) => ({ payments: [...payments, payment] })),
  deletePayment: (id) => set(({ payments }) => ({ payments: payments.filter((p) => p.id !== id) })),
  updatePayment: (id, data) => set(({ payments }) => {
    const idx = payments.findIndex((p) => p.id === id)
    if (idx === -1) return {}

    const newPayments = [...payments]
    newPayments[idx] = {...payments[idx], ...data}

    return {
      payments: newPayments
    }
  }),

  rest: 0,
  setRest: (rest) => set({ rest }),

  documentType: DOCUMENT_TYPE.RECEIPT,
  setDocumentType: (documentType) => set({ documentType }),
  saleType: SALE_TYPE.IMMEDIATE,
  setSaleType: (saleType) => set({ saleType }),
  currency: CURRENCIES[0],
  setCurrency: (currency) => set({ currency }),
  subtotal: '0',
  setSubtotal: (subtotal) => set({ subtotal }),
  totalDiscount: undefined,
  setTotalDiscount: (totalDiscount) => set({ totalDiscount }),
  generalDiscount: undefined,
  setGeneralDiscount: (generalDiscount) => set({ generalDiscount })
}))
