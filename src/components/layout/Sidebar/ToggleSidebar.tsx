import { Icon } from '@/components/ui/Icon'
import { IconMenu } from '../../ui/Icons'

export function ToggleSidebar () {
  return (
    <label
      htmlFor='checkbox-sidebar-state'
      role='button'
      class='group flex items-center justify-center size-10 rounded-lg cursor-pointer transition-colors hover:bg-accent'
    >
      <Icon class='size-5 stroke-2 transition-colors text-neutral-400 group-hover:text-light fill-transparent'>
        <IconMenu />
      </Icon>
    </label>
  )
}
