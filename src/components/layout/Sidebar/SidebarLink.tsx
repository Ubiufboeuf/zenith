import type { ReactNode } from 'preact/compat'
import { Icon } from '../../ui/Icon'

interface Props {
  title: string
  href: string
  icon: () => ReactNode
}

export function SidebarLink ({ title, href, icon: LinkIcon }: Props) {
  return (
    <a href={href} class='group h-10 w-full flex items-center gap-3 px-2.5 rounded-lg transition-colors text-neutral-400 hover:text-light hover:bg-accent'>
      <Icon class='size-5 stroke-2'>
        <LinkIcon />
      </Icon>
      <span class='text-sm'>{title}</span>
    </a>
  )
}
