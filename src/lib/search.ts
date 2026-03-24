import type { Product } from '@/db/dbTypes'
import { useProductsStore } from '@/stores/useProductsStore'
import Fuse, { type IFuseOptions } from 'fuse.js'

const _options: IFuseOptions<Product> = {
  keys: ['id'],
  threshold: 0.3
}

export function search (query: string, options?: IFuseOptions<Product>) {
  const { products } = useProductsStore.getState()
  if (!products?.length) return

  const fuseOptions = {
    ..._options,
    ...options
  }

  const fuse = new Fuse(products, fuseOptions)
  const results = fuse.search(query)

  return results
}
