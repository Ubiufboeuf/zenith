import { Icon } from '../ui/Icon'
import { IconSearch } from '../ui/Icons'

export function SearchBar () {
  return (
    <label class='mobile:not-xs:col-span-full h-10 w-full flex items-center rounded-md line-clamp-1 border border-border'>
      <div class='h-full aspect-square flex items-center justify-center'>
        <Icon class='size-4 stroke-2 text-neutral-500'>
          <IconSearch />
        </Icon>
      </div>
      <input
        id='search-bar'
        placeholder='Bebidas, 9123139, Caja de leche 1L ...'
        class='h-full w-full text-sm outline-0'
      />
    </label>
  )
}
