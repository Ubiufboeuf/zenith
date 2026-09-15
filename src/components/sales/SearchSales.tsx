import type { Sale } from '@/types/sales/saleTypes'
import { SearchSection } from '../ui/search/toolbar/SearchSection'
import { useEffect } from 'preact/hooks'
import { lakeSearch } from '@/lib/search/lake/sales'

// Interfaz temporal para pasar por parámetros hasta que haga una store
interface Props {
  sales: Sale[]
  query: string
  setResults: (results: Sale[] | null) => void
  onSearch: (newQuery: string) => void
}

export function SearchSales ({ sales, query, setResults, onSearch }: Props) {
  async function handleSearch (query: string, setResults: (results: Sale[] | null) => void) {
    console.log('handleSearch()', { query, sales })

    if (!query || !query.trim()) {
      setResults(null)
      return
    }

    const results = lakeSearch(sales, query)
    setResults(results)
  }
  
  useEffect(() => {
    handleSearch(query, setResults)
  }, [query])
  
  return (
    <SearchSection
      id='search-sales'
      placeholder='Busca por comprobante, tipo de venta, cliente...'
      onSearch={onSearch}
    />
  )
}
