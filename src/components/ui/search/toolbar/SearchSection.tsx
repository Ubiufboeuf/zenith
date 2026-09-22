import type { TargetedEvent } from 'preact'
import { Icon } from '../../Icon'
import { IconSearch } from '../../Icons'
import { Filters } from './Filters'
import { SearchOptions } from './SearchOptions'
import type { SearchSectionProps } from '@/types/ui/search/searchToolbarTypes'
import { Keybinds } from '../../Keybinds'
import { useRef } from 'preact/hooks'

export function SearchSection ({ id, class: className = '', placeholder, onSearch }: SearchSectionProps) {
  const handleInput = (event: TargetedEvent<HTMLInputElement>) => onSearch(event.currentTarget.value)
  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <section class={`${className} w-full h-fit flex flex-row items-center gap-2 p-3 card border border-base-content/20 bg-base-100`}>
      <div class='relative h-full w-full input transition-colors'>
        <Icon class='size-4 stroke-2 text-base-content opacity-50'>
          <IconSearch />
        </Icon>
        <input
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          class='h-full w-full text-sm line-clamp-1 text-ellipsis'
          onInput={handleInput}
        />
        <Keybinds keys='escape' onBind={() => inputRef.current?.blur()} hidden />
      </div>
      <Filters />
      <SearchOptions />
    </section>
  )
}
