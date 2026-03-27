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
