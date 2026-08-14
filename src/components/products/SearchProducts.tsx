import { useEffect } from 'preact/hooks'
import { SearchSection } from '../ui/search/toolbar/SearchSection'
import type { Product } from '@/types/products/productTypes'
import { formatCurrency } from '@/utils/currencies'

// Interfaz temporal para pasar por parámetros hasta que haga una store
interface Props {
  products: Product[]
  query: string
  setResults: (results: Product[] | null) => void
  onSearch: (newQuery: string) => void
}

export function SearchProducts ({ products, query, setResults, onSearch }: Props) {
  async function handleSearch (query: string, setResults: (results: Product[] | null) => void) {
    console.log('handleSearch()', { query, products })

    if (!query || !query.trim()) {
      setResults(null)
      return
    }

    const search = query.trim().toLowerCase()
    const results: Product[] = []

    for (const product of products) {
      const p = {
        title: product.title.toLowerCase(),
        subtitle: product.subtitle.toLowerCase(),
        price: formatCurrency(product.price)
      }

      const isResult = Object.values(p).some((value) => value.includes(search))

      if (isResult) results.push(product)
    }

    console.log(results)
    
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
