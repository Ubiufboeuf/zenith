import type { Product } from '@/types/products/productTypes'
import { create } from 'zustand'

interface ProductsStore {
  products: Product[]
  setProducts: (products: Product[]) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products })
}))
