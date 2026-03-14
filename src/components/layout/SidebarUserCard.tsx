import { Icon } from '../ui/Icon'
import { IconExit } from '../ui/Icons'

export function SidebarUserCard () {
  return (
    <footer class='h-full w-full grid grid-cols-[1fr_36px] items-center gap-2 p-4 border-t border-border'>
      <button class='h-10 w-full flex items-center justify-start gap-3 *:text-start rounded-lg transition-colors hover:bg-accent'>
        <div class='size-10 flex items-center justify-center overflow-hidden rounded-full border-2 border-border'>
          <img src='/assets/profile.webp' />
        </div>
        <div class='flex flex-col'>
          <strong class='text-sm text-light font-medium'>Juan Diaz</strong>
          <span class='text-xs text-neutral-400'>Zenith</span>
        </div>
      </button>
      <button class='group size-9 flex items-center justify-center rounded-lg ml-auto cursor-pointer transition-colors hover:bg-accent'>
        <Icon class='size-4 text-light group-hover:text-light'>
          <IconExit />
        </Icon>
      </button>
    </footer>
  )
}
