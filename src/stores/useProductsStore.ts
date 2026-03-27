import type { Product } from '@/types/dbTypes'
import { create } from 'zustand'

type Result = Product

interface ProductsStore {
  products: Product[] | undefined
  setProducts: (products: Product[] | undefined) => void

  results: Result[] | undefined
  setResults: (results: Result[] | undefined) => void

  search: string | undefined
  setSearch: (query: string | undefined) => void

  thereAreResults: boolean | undefined
  setThereAreResults: (thereAreResults: boolean | undefined) => void

  lowStockVisible: boolean
  setLowStockVisible: (lowStockVisible: boolean) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: undefined,
  setProducts: (products) => set({ products }),

  results: undefined,
  setResults: (results) => set({ results }),

  search: undefined,
  setSearch: (search) => set({ search }),

  thereAreResults: undefined,
  setThereAreResults: (thereAreResults) => set({ thereAreResults }),

  lowStockVisible: false,
  setLowStockVisible: (lowStockVisible) => set({ lowStockVisible })
}))
