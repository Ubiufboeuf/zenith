import type { TargetedEvent } from 'preact'
import { Icon } from '../ui/Icon'
import { IconSearch } from '../ui/Icons'
import { search } from '@/lib/search'
import { useProductsStore } from '@/stores/useProductsStore'
import type { IFuseOptions } from 'fuse.js'
import type { Product } from '@/db/dbTypes'

const searchOptions: IFuseOptions<Product> = {
  keys: ['code', 'name'],
  threshold: 0.3
}

export function SearchBar () {
  const setResults = useProductsStore((state) => state.setResults)

  function handleInput (ev: TargetedEvent<HTMLInputElement>) {
    const query = ev.currentTarget.value
    console.log('search:', { query })

    if (!query) return

    const results = search(query, searchOptions)
    console.log('results:', results)

    if (!results?.length) return

    setResults(results)
  }
  
  return (
    <label class='mobile:not-xs:col-span-full h-10 w-full flex items-center rounded-md line-clamp-1 border border-border'>
      <div class='h-full aspect-square flex items-center justify-center'>
        <Icon class='size-4 stroke-2 text-neutral-500'>
          <IconSearch />
        </Icon>
      </div>
      <input
        id='search-bar'
        placeholder='Bebidas, 9123139, Caja de leche 1L ...'
        class='h-full w-full text-sm outline-0'
        onInput={handleInput}
      />
    </label>
  )
}
