import { Icon } from '@/components/ui/Icon'
import type { QuickAction as DrawerQuickAction } from '@/lib/drawerItems'

export function QuickAction ({ title, color, icon: LinkIcon, onClick }: DrawerQuickAction) {
  return (
    <button
      class='group h-fit w-full py-3 flex flex-col items-center gap-2 font-medium rounded-xl transition-colors text-(--color)'
      style={{'--color': color}}
      onClick={onClick}
    >
      <div class='h-fit w-fit bg-card rounded-xl'>
        <div class='size-12 flex items-center justify-center rounded-xl bg-(--color)/8 group-shr:bg-(--color)/25'>
          <Icon class='size-6 stroke-2'>
            <LinkIcon />
          </Icon>
        </div>
      </div>
      <span class='text-xs text-light'>{title}</span>
    </button>
  )
}
