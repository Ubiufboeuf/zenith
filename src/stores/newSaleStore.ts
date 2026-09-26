import type { ListedItem } from '@/components/sales/new/ListView'
import type { ProductWithCodes } from '@/types/products/productTypes'
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
}

export const useNewSaleStore = create<NewSaleStore>((set, get) => ({
  products: [],
  getProduct: (id) => get().products.find((p) => p.id === id),
  setProducts: (products) => set({ products }),

  listedItems: [],
  getListedItem: (id) => get().listedItems.find((li) => li.id === id),
  setListedItems: (listedItems) => set({ listedItems }),
  updateListedItem: (id, data) => set(({ listedItems }) => {
    let listedItem = listedItems.find((li) => li.id === id)
    if (!listedItem) return {}

    const filteredListedItems = listedItems.filter((li) => li.id !== id)
    if (filteredListedItems.length === listedItems.length) return {}
    
    listedItem = {...listedItem, ...data}

    return {
      listedItems: [...filteredListedItems, listedItem]
    }
  }),
  deleteListedItem: (id) => set(({ listedItems }) => ({ listedItems: listedItems.filter((li) => li.id !== id) }))
}))
