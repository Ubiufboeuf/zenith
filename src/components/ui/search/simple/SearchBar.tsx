import { Icon } from '../../Icon'
import { IconSearch } from '../../Icons'

interface Props {
  placeholder?: string
  class?: string
}

export function SearchBar ({ placeholder, class: className = '' }: Props) {
  return (
    <div class={`${className} input`}>
      <Icon class='size-4 opacity-50'>
        <IconSearch />
      </Icon>
      <input
        placeholder={placeholder}
        class='h-full w-full text-sm line-clamp-1 text-ellipsis'
      />
    </div>
  )
}
