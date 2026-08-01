import type { MenuProps } from '@/types/ui/menuTypes'
import { Dropdown } from '../ui/Dropdown'
import { Icon } from '../ui/Icon'
import { IconBell } from '../ui/Icons'

export function NotificationsMenu ({ class: className = '', isOpen = true, hideWith }: MenuProps) {  
  return (
    <Dropdown class={`${className} right-0 top-10 w-40 h-40 flex items-center justify-center`} isOpen={isOpen} hideWith={hideWith}>
      <Icon class='size-6 stroke-2 text-gray-400'>
        <IconBell />
      </Icon>
    </Dropdown>
  )
}
