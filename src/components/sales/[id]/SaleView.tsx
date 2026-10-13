import { ProductsTable } from '@/components/products/ProductsTable'
import { API_URL } from '@/constants/envConstants'
import { structureProductSnapshot } from '@/lib/api'
import type { ProductWithCodes } from '@/types/products/productTypes'
import { useEffect, useState } from 'preact/hooks'

interface Props {
  id: string
}

export async function getProductsOfSale (id: string): Promise<ProductWithCodes[] | undefined> {
  let data
  try {
    const res = await fetch(`${API_URL}/sales/${id}?include=all`)
    data = await res.json()
  } catch (err) {
    console.error('Error recuperando los productos de la venta:', err)
  }

  if (!data || data.success !== true) {
    return []
  }

  const sale = data.sale
  const products: ProductWithCodes[] = []

  for (const apiProduct of sale.details) {
    console.log('api product:', apiProduct)
    const snapshot = structureProductSnapshot(apiProduct)
    if (!snapshot) continue
    products.push(snapshot)
  }

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

export function SaleView ({ id }: Props) {
  const [products, setProducts] = useState<ProductWithCodes[]>([])

  async function loadProducts () {
    const products = await getProductsOfSale(id)
    if (!products || products.length === 0) return

    console.log('products:', products)
    setProducts(products)
  }
  
  useEffect(() => {
    loadProducts()
  }, [])

  return <ProductsTable products={products} query='' results={null} />
}
