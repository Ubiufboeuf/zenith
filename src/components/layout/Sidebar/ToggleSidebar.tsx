import { Icon } from '@/components/ui/Icon'
import { IconMenu } from '../../ui/Icons'
import { useSidebarStore } from '@/stores/useSidebarStore'

export function ToggleSidebar ({ class: className }: { class?: string }) {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const setIsSidebarOpen = useSidebarStore((state) => state.setIsSidebarOpen)
  
  function toggleSidebar () {
    const newState = !isSidebarOpen
    setIsSidebarOpen(newState)
    cookieStore.set('_ziso', newState ? '1' : '0')
  }
  
  return (
    <label
      htmlFor='checkbox-sidebar-state'
      role='button'
      class={`${className} group flex items-center justify-center size-10 rounded-lg cursor-pointer transition-colors shr:bg-accent`}
      onClick={toggleSidebar}
    >
      <Icon class='size-5 stroke-2 transition-colors text-neutral-400 group-shr:text-light fill-transparent'>
        <IconMenu />
      </Icon>
    </label>
  )
}
