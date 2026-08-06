export type SearchItem = {
  id: string
  data: SearchItemData
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
  placeholder?: string
  initialResults?: SearchItem[]
  localFetcher?: (params: SearchFetchParams) => Promise<SearchItem[]>
  apiFetcher?: (params: SearchFetchParams) => Promise<SearchItem[]>
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
