import type { SearchBoxProps, SearchFetchParams, SearchItem } from '@/types/ui/search/searchBoxTypes'
import { Icon } from '../../Icon'
import { IconSearch } from '../../Icons'
import type { TargetedInputEvent } from 'preact'
import { debounceAsync, sleep } from '@/utils/time'
import { getErrorDetails } from '@/errors'
import { useMemo, useRef, useState } from 'preact/hooks'
import { SearchSection } from './ResultsSection'
import { Dot } from '../../Dot'

const DEFAULT_DEBOUNCE = 300

export function SearchBox ({
  id, class: className = '',
  placeholder, initialResults = [], debounceMs = DEFAULT_DEBOUNCE,
  localFetcher, apiFetcher
}: SearchBoxProps) {
  const [localResults, setLocalResults] = useState<SearchItem[]>(initialResults)
  const [apiResults, setApiResults] = useState<SearchItem[]>([])
  const [isFetchingLocal, setIsFetchingLocal] = useState(false)
  const [isFetchingApi, setIsFetchingApi] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const abortControllerRef = useRef<AbortController | null>(null)

  // Diferentes debounced para que no se pisen entre sí,
  // y useMemo para que se guarde correctamente el debounce
  const debouncedLocalSearch = useMemo(() => debounceAsync(async (
    fetcher: (params: SearchFetchParams) => Promise<SearchItem[]>,
    params: SearchFetchParams
  ) => {
    return await fetcher(params)
  }, debounceMs), [debounceMs])

  const debouncedApiSearch = useMemo(() => debounceAsync(async (
    fetcher: (params: SearchFetchParams) => Promise<SearchItem[]>,
    params: SearchFetchParams
  ) => {
    return await fetcher(params)
  }, debounceMs), [debounceMs])
  
  async function handleInput (event: TargetedInputEvent<HTMLInputElement>) {
    const input = event.currentTarget
    const query = input.value.trim()

    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    if (!query) {
      // Ocultar sugerencias
      setLocalResults(initialResults)
      setApiResults([])
      setIsFetchingLocal(false)
      setIsFetchingApi(false)
      setIsOpen(initialResults.length > 0)
      return
    }

    setIsOpen(true)

    const controller = new AbortController()
    abortControllerRef.current = controller
    const { signal } = controller

    const runLocalSearch = async () => {
      setIsFetchingLocal(true)
      
      try {
        const local = await debouncedLocalSearch(localFetcher!, { query, signal })
        if (signal.aborted) return

        setLocalResults(local)
      } catch (err) {
        const errorDetails = getErrorDetails(err)
        if (errorDetails.message.startsWith('Debounced:') || errorDetails.name === 'AbortError') return

        console.error('Error en localFetcher:', err)
      } finally {
        if (!signal.aborted) {
          setIsFetchingLocal(false)
        }
      }
    }

    const runApiSearch = async () => {
      setIsFetchingApi(true)
      
      try {
        await sleep(1000)

        const remote = await debouncedApiSearch(apiFetcher!, { query, signal })
        if (signal.aborted) return

        const uniqueRemote = remote.filter(
          remoteItem => !localResults.some(localItem => localItem.id === remoteItem.id)
        )
        
        setApiResults(uniqueRemote)
      } catch (err) {
        const errorDetails = getErrorDetails(err)

        if (errorDetails.message.startsWith('Debounced:') || errorDetails.name === 'AbortError') return

        console.error('Error en apiFetcher:', err)
      } finally {
        if (!signal.aborted) {
          setIsFetchingApi(false)
        }
      }
    }

    if (localFetcher) runLocalSearch()
    if (apiFetcher) runApiSearch()
  }

  const uniqueApiResults = apiResults.filter(
    remoteItem => !localResults.some(localItem => localItem.id === remoteItem.id)
  )
  
  const hasResultsToShow =
    initialResults.length > 0 ||
    localResults.length > 0 || isFetchingLocal ||
    apiResults.length > 0 || isFetchingApi
  
  return (
    <div class={`${className} relative not-[[class*=h-]]:h-full not-[[class*=w-]]:w-full input transition-colors`}
    >
      <Icon class='size-4 stroke-2 text-base-content opacity-50'>
        <IconSearch />
      </Icon>
      <input
        id={id}
        placeholder={placeholder}
        onInput={handleInput}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        class='h-full w-full text-xs line-clamp-1 text-ellipsis'
      />

      { isOpen && hasResultsToShow && (
        <div onMouseDown={(e) => e.preventDefault()} class='absolute z-21 left-0 right-0 top-full mt-2 p-2 pb-0 overflow-hidden rounded-lg border border-neutral-700 bg-base-300'>
          <SearchSection title='Búsqueda local' items={localResults} isLoading={isFetchingLocal} fallback={
            <div class='flex flex-col gap-1'>
              <span class='flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-base-content/50'>
              <Dot class='flex flex-1 animate-pulse bg-base-content/80 size-2 invisible' />
                <span class='flex flex-1'>Buscando...</span>
                <div class='flex flex-1 justify-end'>
                  <Dot class='animate-pulse bg-base-content/80 size-2.5' />
                </div>
              </span>
            </div>
          } />
          <SearchSection title='Búsqueda en el servidor' items={uniqueApiResults} isLoading={isFetchingApi} fallback={
            <div class='flex flex-col gap-1'>
              <span class='flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-base-content/50'>
              <Dot class='flex flex-1 animate-pulse bg-base-content/80 size-2 invisible' />
                <span class='flex flex-1'>Buscando...</span>
                <div class='flex flex-1 justify-end'>
                  <Dot class='animate-pulse bg-base-content/80 size-2.5' />
                </div>
              </span>
            </div>
          } />
        </div>
      ) }
    </div>
  )
}
