import { Icon } from '@/components/ui/Icon'
import type { TabBarLink } from '@/lib/barItems'

export function TabBarLink ({ href, title, active = false, icon: LinkIcon }: TabBarLink) {
  return (
    <a
      href={href}
      title={title}
      class={`${active ? 'active' : ''} group flex flex-col items-center justify-center gap-1 h-full w-13 mtb:w-17.75`}
    >
      <div class='flex items-center justify-center h-fit w-fit p-1 px-2 mtb:px-4 rounded-full transition-colors text-neutral-300 group-[.active]:text-light group-[.active]:bg-neutral-700 group-shr:bg-neutral-800'>
        <Icon class='size-6'>
          <LinkIcon active={active} />
        </Icon>
      </div>
      <span class='text-xs group-[.active]:font-semibold text-neutral-300 group-[.active]:text-white'>{title}</span>
    </a>
  )
}
