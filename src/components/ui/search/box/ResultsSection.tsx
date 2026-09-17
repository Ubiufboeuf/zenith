import type { SearchItem, SearchMethod } from '@/types/ui/search/searchBoxTypes'
import { SearchResult } from './SearchResult'
import type { ReactNode } from 'preact/compat'

export interface AsyncDataResult {
  title?: string
  items?: SearchItem[]
}

interface Props {
  title: string
  searchMethod?: SearchMethod
  items: SearchItem[]
  isLoading?: boolean
  fallback?: ReactNode
  innerFallback?: boolean
  customContent?: ReactNode
  innerCustomContent?: boolean
}

export function SearchSection ({ title, searchMethod, items, isLoading, fallback, innerFallback = true, customContent, innerCustomContent = true }: Props) {
  if (isLoading && fallback) {
    if (!innerFallback) return fallback
    
    return (
      <div class='flex flex-col gap-2 py-2'>
        { searchMethod === 'both' && <span class='px-3 text-xs text-[11px] font-semibold tracking-wide text-primary-content/50 uppercase'>{title}</span> }
        {fallback}
      </div>
    )
  }

  if (!isLoading && customContent) {
    if (!innerCustomContent) return customContent

    return (
      <div class='flex flex-col gap-2 py-2'>
        { searchMethod === 'both' && <span class='px-3 text-xs text-[11px] font-semibold tracking-wide text-primary-content/50 uppercase'>{title}</span> }
        {customContent}
      </div>
    )
  }
  
  return (
    <div class='flex flex-col gap-2 py-2'>
      { searchMethod === 'both' && <span class='px-3 text-xs text-[11px] font-semibold tracking-wide text-primary-content/50 uppercase'>{title}</span> }
      <div class='flex flex-col gap-1'>
        { items.length
          ? items.map(({ id, data }) => <SearchResult key={`local-search-${id}`} {...data} />)
          : <SearchResult type='no-result' />
        }
      </div>
    </div>
  )
}
