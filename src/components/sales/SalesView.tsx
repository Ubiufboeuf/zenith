import { useEffect, useState } from 'preact/hooks'
import { SalesTable } from './SalesTable'
import type { Sale } from '@/types/sales/saleTypes'
import { SearchSales } from './SearchSales'
import { API_URL } from '@/constants/envConstants'
import { structureSaleByApiSale } from '@/lib/api'
import { Temporal } from 'temporal-polyfill'

async function getSales (): Promise<Sale[]> {
  let data
  try {
    const res = await fetch(`${API_URL}/sales?limit=100`)
    data = await res.json()
  } catch (err) {
    console.error('Error recuperando las ventas:', err)
  }

  if (!data || data.success !== true) {
    return []
  }

  const sales: Sale[] = []

  for (const apiSale of data.sales) {
    console.log(apiSale)
    const sale = structureSaleByApiSale(apiSale)
    if (!sale) continue
    sales.push(sale)
  }

  if (sales.length === 0) return []

  const sortedSales = sales.sort((a, b) => {
    const epochA = Temporal.Instant.from(a.createdAt).epochMilliseconds
    const epochB = Temporal.Instant.from(b.createdAt).epochMilliseconds

    if (epochA > epochB) return 1
    if (epochA < epochB) return -1
    return 0
  })

  return sortedSales
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
