import type { ReactNode } from 'preact/compat'
import { Icon } from '../ui/Icon'

interface SwitchProps {
  class: string
  icon: () => ReactNode
}

export function LayoutSwitch ({ class: className, icon: SwitchIcon }: SwitchProps) {
  return (
    <button class={`${className} flex items-center justify-center h-full aspect-square cursor-pointer border border-border text-neutral-500 [.active]:text-light bg-card shr:bg-border`}>
      <Icon class='size-5 stroke-2'>
        <SwitchIcon />
      </Icon>
    </button>
  )
}
