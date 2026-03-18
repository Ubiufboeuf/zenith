import { Icon } from '@/components/ui/Icon'
import { IconExit } from '@/components/ui/Icons'

export function DrawerUserCard () {
  return (
    <article class='h-16 w-full flex justify-between items-center gap-2 px-1'>
      <button class='h-14 w-full flex items-center justify-start gap-3 px-2 *:text-start rounded-lg cursor-pointer transition-colors shr:bg-accent'>
        <div class='size-10 shrink-0 flex items-center justify-center overflow-hidden rounded-full border-2 border-border'>
          <img src='/assets/profile.webp' />
        </div>
        <div class='flex flex-col'>
          <strong class='text-sm line-clamp-1 text-light font-medium'>Federico Artencio Ferri</strong>
          <span class='text-xs text-neutral-400'>Zenith</span>
        </div>
      </button>
      <button class='group size-10 shrink-0 flex items-center justify-center rounded-lg ml-auto cursor-pointer transition-colors shr:bg-accent'>
        <Icon class='size-4 stroke-2 text-neutral-400 group-shr:text-light'>
          <IconExit />
        </Icon>
      </button>
    </article>
  )
}
