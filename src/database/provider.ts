import type { Product } from '@/database/types/productTypes'
import { vault } from './vault'
import products from '@/../public/mocks/products.json'

// getProducts: ({ limit = L }: { limit?: number }) => Promise<Product[] | undefined>
async function getProducts (): Promise<Product[] | undefined> {
  if (vault.products) {
    return vault.products
  }
  
  vault.products = [...(products as Product[])]
  return [...vault.products]
}

async function getProductById (id: string): Promise<Product | undefined> {
  const products = await getProducts()
  const product = products?.find((p) => p.id === id)
  return product
}

export const db = {
  getProducts,
  getProductById
}
