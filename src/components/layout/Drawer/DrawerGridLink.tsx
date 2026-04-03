import { Icon } from '@/components/ui/Icon'
import type { DrawerGridLink } from '@/lib/drawerItems'

export function DrawerGridLink ({ title, href, color, icon: LinkIcon }: DrawerGridLink) {
  return (
    <a
      href={href}
      class='w-full h-fit p-4 py-3.5 flex items-center gap-4 rounded-xl font-medium transition-colors bg-neutral-800/60 shr:bg-neutral-200/20'
      style={{'--color': color}}
    >
      <Icon class='size-6 stroke-2 text-(--color)'>
        <LinkIcon />
      </Icon>
      <span class='text-sm'>{title}</span>
    </a>
  )
}
