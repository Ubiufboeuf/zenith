import { useProductsStore } from '@/stores/useProductsStore'
import type { Product } from '@/database/types/productTypes'

export async function getProducts (): Promise<Product[] | undefined> {
  const isServer = typeof window === 'undefined'
  
  if (isServer) {
    const { db } = await import('@/database/provider')
    return db.getProducts()
  }

  let res
  try {
    res = await fetch('/api/products')
  } catch {
    console.error('Error pidiendo los productos al servidor')
  }

  if (!res) return

  let products
  try {
    products = await res.json()
  } catch {
    console.error('Error leyendo los productos pedidos al servidor')
  }

  return products
}

export async function loadProducts () {
  const loadedProducts = await getProducts()
  if (!loadedProducts) return

  useProductsStore.setState({ products: loadedProducts })
  return loadedProducts
}

export async function getProductById (id: string): Promise<Product | undefined> {
  const products = await loadProducts()

  if (!products || !products.length) return

  const product = products.find((p) => p.id === id)
  return product
}

export async function getProductByScanner (result: string): Promise<Product | undefined> {
  const products = useProductsStore.getState().products ?? await loadProducts()

  if (!products || !products.length) return

  const product = products.find((p) => p.barcode === result || p.qrcode === result)
  return product
}
