import { renderProductResult } from '@/components/search/products/renderProductResult'
import { Keybinds } from '@/components/ui/Keybinds'
import { SearchBox } from '@/components/ui/search/box/SearchBox'
import { lakeSearch } from '@/lib/search/lake/products'
import { thunderSearch } from '@/lib/search/thunder/products'
import { mockedProducts } from '@/mocks/products'
// import { useProductsStore } from '@/stores/productsStore'
import type { ProductWithCodes } from '@/types/products/productTypes'
import type { SearchFetchParams, SearchItem } from '@/types/ui/search/searchBoxTypes'
import { useEffect, useRef } from 'preact/hooks'

interface Props {
  products: ProductWithCodes[]
  query: string
  setResults: (results: ProductWithCodes[] | null) => void
}

const initialResults: SearchItem[] = [
  {
    id: 'result-abc',
    data: {
      id: 'pepe-123',
      type: 'render',
      render: () => 'a'
    }
  }
]

async function localFetcher ({ query }: SearchFetchParams): Promise<SearchItem[]> {
  console.log('localFetcher:', { query })

  if (!query || !query.trim()) {
    return []
  }
  
  // const { products } = useProductsStore.getState()
  const products = [...mockedProducts]

  const results = thunderSearch(products, query)
  const searchItems: SearchItem[] = []

  for (const product of results) {
    const searchItem: SearchItem = {
      id: `result-${product.id}`,
      data: {
        id: product.id,
        type: 'render',
        render: () => renderProductResult(product)
      }
    }

    searchItems.push(searchItem)
  }
  
  return searchItems
}

export function SearchProducts ({ products, query, setResults }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  
  async function handleSearch (query: string, setResults: (results: ProductWithCodes[] | null) => void) {
    console.log('handleSearch()', { query, products })

    if (!query || !query.trim()) {
      setResults(null)
      return
    }

    const results = lakeSearch(products, query)
    setResults(results)
  }
  function focusGlobalSearch () {
    const input = inputRef.current
    if (!input) return

    input.focus()
  }

  function blurGlobalSearch () {
    const input = inputRef.current
    if (!input) return

    input.blur()
  }

  function whenToFocus () {
    if (document.activeElement instanceof HTMLInputElement) return false
    if (document.activeElement instanceof HTMLTextAreaElement) return false
    return true
  }

  useEffect(() => {
    handleSearch(query, setResults)
  }, [query])
  
  return <>
    <SearchBox
      id='global-search'
      inputRef={inputRef}
      placeholder='Buscar usuarios, pedidos, configuraciones...'
      localFetcher={localFetcher}
      initialResults={initialResults}
      debounceMs={300}
      searchMethod='local'
      showLoadingState={false}
      class='h-12 w-full *:w-full'
      keybind={
        <Keybinds
          keys='K'
          relax='any-special'
          onBind={focusGlobalSearch}
          when={whenToFocus}
        />
      }
    />
    <Keybinds
      keys='Escape'
      onBind={blurGlobalSearch}
      hidden
    />
  </>
}
