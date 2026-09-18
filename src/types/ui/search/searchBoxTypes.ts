import type { ComponentChildren, RefObject } from 'preact'

export type SearchItem = {
  id: string
  data: SearchItemData | SearchRenderData
}

export type SearchItemType = 'client' | 'operation'

export interface NoResult { type: 'no-result' }

export type SearchItemData = {
  id: string
  type: 'item'
  label: string
  itemType?: SearchItemType
  isMain?: boolean
} & (SearchItemLink | SearchItemCalc)

export interface SearchRenderData {
  id: string
  type: 'render'
  render: () => ComponentChildren
}

export interface SearchItemLink {
  action: 'navigate'
  href: string
}

export interface SearchItemCalc {
  action: 'calc'
  result: string
}

export interface SearchBoxProps {
  id: string
  inputRef?: RefObject<HTMLInputElement>
  keybind?: ComponentChildren
  placeholder?: string
  initialResults?: SearchItem[]
  localFetcher?: (params: SearchFetchParams) => Promise<SearchItem[]>
  apiFetcher?: (params: SearchFetchParams) => Promise<SearchItem[]>
  searchMethod?: SearchMethod
  showLoadingState?: boolean
  debounceMs?: number
  class?: string
}

export interface SearchFetchParams {
  query: string
  signal: AbortSignal
}

export interface SearchParams {
  query: string
  dataFetcher?: (params: SearchFetchParams) => Promise<SearchItem[]>
}

export type SearchMethod = 'local' | 'api' | 'both'
