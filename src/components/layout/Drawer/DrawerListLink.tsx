import { Icon } from '@/components/ui/Icon'
import type { DrawerListLink } from '@/lib/drawerItems'

export function DrawerListLink ({ title, href, details, color, icon: LinkIcon }: DrawerListLink) {
  return (
    <a
      href={href}
      class='w-full h-fit p-2 px-4 flex items-center col-span-2 gap-4 font-medium transition-colors text-light/70 shr:text-light/90 shr:bg-neutral-200/20'
      style={{'--color': color}}
    >
      <div class='size-11 flex items-center justify-center rounded-xl bg-neutral-800/60'>
        <Icon class='size-6 stroke-2'>
          <LinkIcon />
        </Icon>
      </div>
      <div class='flex flex-col'>
        <strong class='text-sm'>{title}</strong>
        <span class='text-xs text-neutral-400'>{details}</span>
      </div>
    </a>
  )
}
