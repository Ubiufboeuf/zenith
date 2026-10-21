import { API_URL } from '@/constants/envConstants'
import { useEffect, useState } from 'preact/hooks'
import { ProductsTable } from './ProductsTable'
import type { SaleDetail } from '@/types/sales/saleTypes'

interface Props {
  id: string
}

export async function getSaleDetails (id: string): Promise<SaleDetail[] | undefined> {
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
  const details: SaleDetail[] = []

  for (const apiProduct of sale.details) {
    details.push(apiProduct)
  }

  if (details.length === 0) return []

  const sortedProducts = details.sort((a, b) => {
    const codeA = a.snapshot.codes.find((c) => c?.isMain)?.code
    const codeB = b.snapshot.codes.find((c) => c?.isMain)?.code

    if (!codeA || !codeB) return 0
    if (codeA > codeB) return 1
    if (codeA < codeB) return -1
    return 0
  })

  
  return sortedProducts
}

export function SaleView ({ id }: Props) {
  const [saleDetails, setSaleDetails] = useState<SaleDetail[]>([])

  async function loadSaleDetails () {
    const products = await getSaleDetails(id)
    if (!products || products.length === 0) return

    console.log('products:', products)
    setSaleDetails(products)
  }
  
  useEffect(() => {
    loadSaleDetails()
  }, [])

  return (
    <section class='h-full w-full flex flex-col gap-2 flex-1 p-4'>
      <ProductsTable saleDetails={saleDetails} />
    </section>
  )
}
