import type { SearchFetchParams, SearchItem } from '@/types/ui/search/searchBoxTypes'
import { SearchBox } from '../search/box/SearchBox'
import { Keybinds } from '../Keybinds'
import { useRef } from 'preact/hooks'

const initialResults: SearchItem[] = [
  {
    id: 'result-abc',
    data: {
      type: 'item',
      id: 'pepe-123',
      label: 'Pepito Gutierrez',
      action: 'navigate',
      href: '/clients/pepe-123',
      itemType: 'client'
    }
  },
  {
    id: 'result-xyz',
    data: {
      type: 'item',
      id: 'calc',
      label: '4+6',
      result: '10',
      action: 'calc',
      itemType: 'operation',
      isMain: true
    }
  }
]

async function localFetcher ({ query }: SearchFetchParams): Promise<SearchItem[]> {
  console.log('localFetcher:', { query })
  return []
}

async function apiFetcher ({ query }: SearchFetchParams): Promise<SearchItem[]> {
  console.log('apiFetcher:', { query })
  return []
}

export function GlobalSearch () {
  const inputRef = useRef<HTMLInputElement>(null)
  
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
  
  return <>
    <SearchBox
      id='global-search'
      inputRef={inputRef}
      placeholder='Buscar usuarios, pedidos, configuraciones...'
      initialResults={initialResults}
      localFetcher={localFetcher}
      apiFetcher={apiFetcher}
      debounceMs={300}
      class='h-8 w-80'
      keybind={
        <Keybinds
          keys='/'
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
