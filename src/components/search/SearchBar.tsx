import type { TargetedEvent } from 'preact'
import { Icon } from '../ui/Icon'
import { IconSearch } from '../ui/Icons'
import { search } from '@/lib/search'
import { useProductsStore } from '@/stores/useProductsStore'
import type { IFuseOptions } from 'fuse.js'
import type { Product } from '@/types/dbTypes'
import { useEffect, useRef, useState } from 'preact/hooks'

const searchOptions: IFuseOptions<Product> = {
  keys: [
    { name: 'code', weight: 2 },
    { name: 'name', weight: 1 },
    { name: 'category', weight: 0.5 }
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  findAllMatches: true,
  ignoreLocation: true,
  useExtendedSearch: false, // Al menos hasta codificar carácteres como !, ', o |
  isCaseSensitive: false
}

export function SearchBar () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [handledInput, setHandledInput] = useState(false)
  
  const products = useProductsStore((state) => state.products)
  const setResults = useProductsStore((state) => state.setResults)
  const setGlobalQuery = useProductsStore((state) => state.setSearch)
  const setThereAreResults = useProductsStore((state) => state.setThereAreResults)

  function loadInitialSearch () {
    const query = inputRef.current?.value
    console.log({ query, handledInput, products })
    if (!products || handledInput) return

    if (!query) {
      setResults(products)
      return
    }

    const results = search(query, searchOptions)
    console.log('(initial search) results:', results)

    if (!results?.length) return

    setResults(results)
  }
  
  function handleInput (ev: TargetedEvent<HTMLInputElement>) {
    if (!handledInput) setHandledInput(true)
    
    const query = ev.currentTarget.value
    console.log('search:', { query })

    setGlobalQuery(query)

    if (!query) {
      setThereAreResults(undefined)
      if (!products) return

      setResults(products)
      return
    }

    const results = search(query, searchOptions)
    console.log('results:', results)

    if (!results?.length) {
      console.log('No se encontraron resultados para la query:', { query })
      setThereAreResults(false)
      return
    }

    setThereAreResults(true)
    setResults(results)
  }

  useEffect(() => {
    loadInitialSearch()
  }, [products])
  
  return (
    <label class='mobile:not-xs:col-span-full h-10 w-full flex items-center rounded-md line-clamp-1 border border-border'>
      <div class='h-full aspect-square flex items-center justify-center'>
        <Icon class='size-4 stroke-2 text-neutral-500'>
          <IconSearch />
        </Icon>
      </div>
      <input
        ref={inputRef}
        id='search-bar'
        placeholder='Bebidas, 9123139, Caja de leche 1L ...'
        class='h-full w-full text-sm outline-0'
        autoComplete='false'
        onInput={handleInput}
      />
    </label>
  )
}
