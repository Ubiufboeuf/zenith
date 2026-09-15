import { useEffect, useState } from 'preact/hooks'
import { SalesTable } from './SalesTable'
import type { Sale } from '@/types/sales/saleTypes'
import { mockedSales } from '@/mocks/sales'

async function getSales (): Promise<Sale[]> {
  const sales: Sale[] = []

  for (const sale of mockedSales) {
    sales.push(sale)
  }

  return sales
}

export function SalesView () {
  const [sales, setSales] = useState<Sale[]>([])

  async function loadSales () {
    const sales = await getSales()
    if (!sales || sales.length === 0) return

    setSales(sales)
  }
  
  useEffect(() => {
    loadSales()
  }, [])
  
  return (
    <>
      <SalesTable
        sales={sales}
      />
    </>
  )
}
