import type { RefObject, TargetedFocusEvent } from 'preact'
import { Icon } from '../../Icon'
import { IconSearch } from '../../Icons'

interface Props {
  searchRef?: RefObject<HTMLInputElement>
  placeholder?: string
  class?: string
  onBlur?: (event: TargetedFocusEvent<HTMLInputElement>) => void
}

export function SearchBar ({ searchRef, placeholder, class: className = '', onBlur }: Props) {
  return (
    <div class={`${className} input`}>
      <Icon class='size-4 opacity-50'>
        <IconSearch />
      </Icon>
      <input
        ref={searchRef}
        placeholder={placeholder}
        class='h-full w-full text-sm line-clamp-1 text-ellipsis'
        onBlur={onBlur}
      />
    </div>
  )
}
