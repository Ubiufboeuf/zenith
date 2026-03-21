import { Icon } from '../ui/Icon'
import { IconChart2 } from '../ui/Icons'

export function StockStatus () {
  return (
    <button class='relative h-10 w-fit flex items-center justify-center gap-2 text-sm px-3 rounded-lg cursor-pointer border border-border text-light shr:bg-border'>
      <Icon class='size-5'>
        <IconChart2 />
      </Icon>
      <strong>Stock bajo</strong>
    </button>
  )
}
