import { useState } from 'preact/hooks'
import { ProductsTable } from './ProductsTable'
import { SearchProducts } from './SearchProducts'
import type { Product } from '@/types/products/productTypes'
import { FilterProductsModal } from './FilterProductsModal'

const products: Product[] = [
  {
    id: 'prod-a',
    title: 'AMD Ryzen 7 7800X3D',
    subtitle: '8-Core, 16-Thread Desktop Processor',
    price: 320,
    status: 'active'
  }
]

export function ProductsView () {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Product[] | null>(null)

  return (
    <>
      <SearchProducts
        products={products}
        query={searchQuery}
        setResults={setResults}
        onSearch={setSearchQuery}
      />
      <ProductsTable
        products={products}
        query={searchQuery}
        results={results}
      />
      <FilterProductsModal />
    </>
  )
}
