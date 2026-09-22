import { useUIStore } from '@/stores/uiStore'
import { SearchBar } from '../search/simple/SearchBar'
import { useEffect, useRef } from 'preact/hooks'

export function MobileSearchBar () {
  const isSearchOpen = useUIStore((state) => state.isSearchOpen)
  const closeSearch = useUIStore((state) => state.closeSearch)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isSearchOpen])
  
  return <>
    <header
      class='fixed z-2 top-0 left-0 right-0 h-16 w-full flex items-center justify-center p-2 bg-base-200 border-b border-base-content/20'
      hidden={!isSearchOpen}
    >
      <SearchBar
        searchRef={inputRef}
        class='w-full h-10'
        placeholder='Buscar usuarios, pedidos, configuraciones...'
        onBlur={closeSearch}
      />
    </header>
    <div
      id='close-mobile-search-bar'
      class='z-1 fixed w-full h-full bg-black/50'
      hidden={!isSearchOpen}
    />
  </>
}
