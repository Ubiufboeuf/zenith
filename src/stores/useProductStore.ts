import type { Product } from '@/types/productTypes'
import { create } from 'zustand'

interface ProductStore {
  product: Product | undefined
  setProduct: (product: Product | undefined) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  product: undefined,
  setProduct: (product) => set({ product })
}))
