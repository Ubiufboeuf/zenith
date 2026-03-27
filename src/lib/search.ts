import type { Product } from '@/types/dbTypes'
import { useProductsStore } from '@/stores/useProductsStore'
import Fuse, { type IFuseOptions } from 'fuse.js'

const _options: IFuseOptions<Product> = {
  keys: ['id'],
  threshold: 0.3
}

export function search (query: string, options?: IFuseOptions<Product>): Product[] | undefined {
  const { products } = useProductsStore.getState()
  if (!products?.length) return

  const fuseOptions = {
    ..._options,
    ...options
  }

  const fuse = new Fuse(products, fuseOptions)
  const fuseResults = fuse.search(query)

  const sorted = fuseResults.sort((a, b) => {
    if ((a.score ?? 0) > (b.score ?? 0)) return 1
    if ((a.score ?? 0) < (b.score ?? 0)) return -1
    return 0
  })

  const results = sorted.map((r) => r.item)
  console.log('fuse results:', fuseResults)
  return results
}
