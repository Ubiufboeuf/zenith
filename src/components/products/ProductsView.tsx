import { useEffect, useState } from 'preact/hooks'
import { ProductsTable } from './ProductsTable'
import { SearchProducts } from './SearchProducts'
import type { ProductWithCodes } from '@/types/products/productTypes'
import { FilterProductsModal } from './FilterProductsModal'
import { API_URL } from '@/constants/envConstants'
import { structureProductByApiProduct } from '@/lib/api'

async function getProducts (): Promise<ProductWithCodes[] | undefined> {
  let data
  try {
    const res = await fetch(`${API_URL}/products?limit=100&include=codes`)
    data = await res.json()
  } catch (err) {
    console.error('Error recuperando los productos:', err)
  }

  if (!data || data.success !== true) {
    return []
  }
  
  const products: ProductWithCodes[] = []

  for (const apiProduct of data.products) {
    const product = structureProductByApiProduct(apiProduct)
    if (!product) continue
    products.push(product)
  }

  console.log(products)

  if (products.length === 0) return []

  const sortedProducts = products.sort((a, b) => {
    const codeA = a.codes.find((c) => c?.isMain)?.code
    const codeB = b.codes.find((c) => c?.isMain)?.code

    if (!codeA || !codeB) return 0
    if (codeA > codeB) return 1
    if (codeA < codeB) return -1
    return 0
  })

  
  return sortedProducts
}

export function ProductsView () {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<ProductWithCodes[] | null>(null)
  
  const [products, setProducts] = useState<ProductWithCodes[]>([])

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
