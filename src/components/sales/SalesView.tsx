import { useEffect, useState } from 'preact/hooks'
import { SalesTable } from './SalesTable'
import type { Sale } from '@/types/sales/saleTypes'
import { mockedSales } from '@/mocks/sales'
import { SearchSales } from './SearchSales'

async function getSales (): Promise<Sale[]> {
  const sales: Sale[] = []

  for (const sale of mockedSales) {
    sales.push(sale)
  }

  return sales
}

export function SalesView () {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Sale[] | null>(null)
  
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
      <SearchSales
        sales={sales}
        query={searchQuery}
        setResults={setResults}
        onSearch={setSearchQuery}
      />
      <SalesTable
        sales={sales}
        query={searchQuery}
        results={results}
      />
    </>
  )
}
