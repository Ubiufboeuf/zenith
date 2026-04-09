import type { Product } from '@/types/dbTypes'

export type Vault = object | {
  products: Product[] | undefined
}
