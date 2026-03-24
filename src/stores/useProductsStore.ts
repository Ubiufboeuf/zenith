import type { Product } from '@/db/dbTypes'
import type { FuseResult } from 'fuse.js'
import { create } from 'zustand'

type Result = Product

interface ProductsStore {
  products: Product[] | undefined
  setProducts: (products: Product[] | undefined) => void

  results: FuseResult<Result>[] | undefined
  setResults: (results: FuseResult<Result>[] | undefined) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: undefined,
  setProducts: (products) => set({ products }),

  results: undefined,
  setResults: (results) => set({ results })
}))
