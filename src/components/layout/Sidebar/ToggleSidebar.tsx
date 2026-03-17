import { Icon } from '@/components/ui/Icon'
import { IconMenu } from '../../ui/Icons'

export function ToggleSidebar ({ class: className }: { class?: string }) {
  return (
    <label
      htmlFor='checkbox-sidebar-state'
      role='button'
      class={`${className} group flex items-center justify-center size-10 rounded-lg cursor-pointer transition-colors shr:bg-accent`}
    >
      <Icon class='size-5 stroke-2 transition-colors text-neutral-400 group-shr:text-light fill-transparent'>
        <IconMenu />
      </Icon>
    </label>
  )
}
