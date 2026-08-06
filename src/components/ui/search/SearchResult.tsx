import type { NoResult, SearchItemData, SearchItemType } from '@/types/ui/searchTypes'
import { Icon } from '../Icon'
import { icons } from '@/constants/ui/searchConstants'

function getSearchItemIcon (itemType: SearchItemType | undefined) {
  if (!itemType || !(itemType in icons)) return
  const icon = icons[itemType]
  return icon
}

export function SearchResult (data: SearchItemData | NoResult) {
  if (data.type === 'no-result') {
    return (
      <span class='flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-base-content/50'>
        Sin resultados
      </span>
    )
  }
  const { label, action, itemType } = data

  if (action === 'navigate') {
    const { href } = data
    const ItemIcon = getSearchItemIcon(itemType)
    
    return (
      <a href={href} class='flex items-center gap-2 px-3 py-1.5 text-sm rounded transition-colors shr:bg-base-content/10'>
        { ItemIcon && (
          <Icon class='size-4 stroke-2 text-base-content/50'>
            <ItemIcon />
          </Icon>
        ) }
        <span>{label}</span>
      </a>
    )
  }

  if (action === 'calc') {
    const { result } = data
    const ItemIcon = getSearchItemIcon(itemType)
    
    return (
      <div class='flex items-center gap-2 px-3 py-1.5 text-sm rounded transition-colors shr:bg-base-content/10'>
        { ItemIcon && (
          <Icon class='size-4 stroke-2 text-base-content/50'>
            <ItemIcon />
          </Icon>
        ) }
        <span>{label} = {result}</span>
      </div>
    )
  }
}
