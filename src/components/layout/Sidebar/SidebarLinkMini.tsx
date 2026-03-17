import type { ReactNode } from 'preact/compat'
import { Icon } from '../../ui/Icon'

interface Props {
  pathname?: string
  title: string
  href: string
  icon: () => ReactNode
}

export function SidebarLinkMini ({ pathname, title, href, icon: LinkIcon }: Props) {
  return (
    <a
      href={href}
      title={title}
      class={`${pathname === href ? 'active' : ''} group size-10 flex items-center justify-center gap-3 rounded-lg transition-colors text-neutral-400 shr:text-light shr:bg-accent [.active]:text-primary [.active]:bg-primary/10`}
    >
      <Icon class='size-5 stroke-2'>
        <LinkIcon />
      </Icon>
    </a>
  )
}
