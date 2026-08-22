import { useEffect } from 'preact/hooks'
import { SearchSection } from '../ui/search/toolbar/SearchSection'
import type { ProductWithCodes } from '@/types/products/productTypes'
import { searchLake } from '@/lib/search/lake'

// Interfaz temporal para pasar por parámetros hasta que haga una store
interface Props {
  products: ProductWithCodes[]
  query: string
  setResults: (results: ProductWithCodes[] | null) => void
  onSearch: (newQuery: string) => void
}

export function SearchProducts ({ products, query, setResults, onSearch }: Props) {
  async function handleSearch (query: string, setResults: (results: ProductWithCodes[] | null) => void) {
    console.log('handleSearch()', { query, products })

    if (!query || !query.trim()) {
      setResults(null)
      return
    }

    const results = searchLake(products, query)
    setResults(results)
  }
  
  useEffect(() => {
    handleSearch(query, setResults)
  }, [query])
  
  return (
    <SearchSection
      id='search-products'
      placeholder='Busca por título, categoría, código...'
      onSearch={onSearch}
    />
  )
}
