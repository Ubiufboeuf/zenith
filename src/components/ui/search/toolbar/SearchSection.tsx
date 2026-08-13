import { Icon } from '../../Icon'
import { IconSearch } from '../../Icons'
import { Filters } from './Filters'
import { SearchOptions } from './SearchOptions'
import type { SearchSectionProps } from '@/types/ui/search/searchToolbarTypes'

export function SearchSection ({ id, class: className = '', placeholder }: SearchSectionProps) {
  return (
    <section class={`${className} w-full h-fit flex flex-row items-center gap-2 p-3 card border border-neutral-700 bg-base-100`}>
      <div class='relative h-full w-full input transition-colors'>
        <Icon class='size-4 stroke-2 text-base-content opacity-50'>
          <IconSearch />
        </Icon>
        <input
          id={id}
          placeholder={placeholder}
          class='h-full w-full text-sm line-clamp-1 text-ellipsis'
        />
      </div>
      <Filters />
      <SearchOptions />
    </section>
  )
}
