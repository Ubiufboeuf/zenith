import type { ReactNode } from 'preact/compat'
import { Icon } from '../../ui/Icon'

interface Props {
  title: string
  href: string
  icon: () => ReactNode
}

export function SidebarLinkMini ({ title, href, icon: LinkIcon }: Props) {
  return (
    <a
      href={href}
      title={title}
      class='group size-10 flex items-center justify-center gap-3 rounded-lg transition-colors text-neutral-400 hover:text-light hover:bg-accent'
    >
      <Icon class='size-5 stroke-2'>
        <LinkIcon />
      </Icon>
    </a>
  )
}
