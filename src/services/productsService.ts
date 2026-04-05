import { useProductsStore } from '@/stores/useProductsStore'
import type { Product } from '@/types/dbTypes'

export async function getProducts (): Promise<Product[] | undefined> {
  let res
  try {
    res = await fetch(`${origin}/mocks/products.json`)
  } catch {
    console.error('Error consiguiendo los productos')
  }

  if (!res) return

  let json
  try {
    json = await res.json()
  } catch {
    console.error('Error convirtiendo los productos a un formato manejable')
  }

  if (!json) return

  return json
}

export async function loadProducts () {
  const loadedProducts = await getProducts()
  if (!loadedProducts) return

  useProductsStore.setState({ products: loadedProducts })
  return loadedProducts
}

export async function getProductById (id: string): Promise<Product | undefined> {
  const products = useProductsStore.getState().products ?? await loadProducts()

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
