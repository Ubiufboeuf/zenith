import type { ReactNode } from 'preact/compat'
import { Icon } from '../../ui/Icon'

interface Props {
  pathname?: string
  title: string
  href: string
  icon: () => ReactNode
}

export function SidebarLink ({ pathname, title, href, icon: LinkIcon }: Props) {
  return (
    <a href={href} class={`${pathname === href ? 'active' : ''} group h-10 w-full flex items-center gap-3 px-2.5 rounded-lg transition-colors text-neutral-400 shr:text-light shr:bg-accent [.active]:text-primary [.active]:bg-primary/10 [.active]:shr:bg-primary/30`}>
      <Icon class='size-5 stroke-2'>
        <LinkIcon />
      </Icon>
      <span class='text-sm group-[.active]:font-semibold'>{title}</span>
    </a>
  )
}
