import { useEffect, useState } from 'preact/hooks'
import { ProductsTable } from './ProductsTable'
import { SearchProducts } from './SearchProducts'
import type { Product } from '@/types/products/productTypes'
import { FilterProductsModal } from './FilterProductsModal'
import { mockedProducts } from '@/mocks/products'

async function getProducts (): Promise<Product[] | undefined> {
  const products: Product[] = []

  for (const prod of mockedProducts) {
    products.push({
      ...prod,
      costPrice: prod.costPrice / 100,
      salePrice: prod.salePrice / 100
    })
  }
  
  return products
}

export function ProductsView () {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Product[] | null>(null)
  
  const [products, setProducts] = useState<Product[]>([])

  async function loadProducts () {
    const products = await getProducts()
    if (!products || products.length === 0) return

    setProducts(products)
  }

  useEffect(() => {
    loadProducts()
  }, [])

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
