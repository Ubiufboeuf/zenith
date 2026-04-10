import type { Product } from '@/types/dbTypes'
import { readFile } from 'node:fs/promises'
import { cwd } from 'node:process'
import { vault } from './vault'

const mocksFile = `${cwd()}/public/mocks/products.json`

// getProducts: ({ limit = L }: { limit?: number }) => Promise<Product[] | undefined>
async function getProducts (): Promise<Product[] | undefined> {
  if (vault.products) {
    return vault.products
  }
  
  // mocks
  const res = await readFile(mocksFile, 'utf8')
  if (!res) {
    throw new Error('No se encontraron los mocks de los productos')
  }

  const data = JSON.parse(res)
  if (!data) {
    throw new Error('Hubo un error manejando los productos')
  }

  vault.products = [...data]
  return [...data]
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
