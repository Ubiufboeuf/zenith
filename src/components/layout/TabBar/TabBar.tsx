import { useEffect } from 'preact/hooks'
import { TabBarButton } from './TabBarButton'
import { TabBarLink } from './TabBarLink'
import { barItems } from '@/lib/barItems'
import { useSidebarStore } from '@/stores/useSidebarStore'
import { useTabBarStore } from '@/stores/useTabBarStore'

export function TabBar ({ pathname }: { pathname: string }) {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const setIsSidebarOpen = useSidebarStore((state) => state.setIsSidebarOpen)
  
  const activeItem = useTabBarStore((state) => state.activeItem)
  const setActiveItem = useTabBarStore((state) => state.setActiveItem)

  const setIsButtonActive = useTabBarStore((state) => state.setIsButtonActive)
  
  function loadInitialActiveItem () {
    const activeItem = barItems.find((i) => i.type === 'link' && i.href === pathname)
    setActiveItem(activeItem?.id)
  }
  
  function clickLink (event: MouseEvent) {
    const { target } = event
    if (!(target instanceof HTMLElement)) return
    
    const { id } = target

    setActiveItem(id)
  }

  function handleClickMore () {
    setIsSidebarOpen(true)
    setIsButtonActive(true)

    const checkbox = document.querySelector('#checkbox-sidebar-state')
    if (checkbox instanceof HTMLInputElement) checkbox.checked = true
  }

  function handleClick (event: MouseEvent) {
    const { target } = event
    if (!(target instanceof HTMLElement)) return

    const item = target.closest('[data-is-tab-bar-item]')

    if (!item) {
      if (activeItem) setActiveItem(undefined)
      return
    }
  }

  useEffect(() => {    
    window.addEventListener('click', handleClick)
    
    return window.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    loadInitialActiveItem()
  }, [pathname])

  useEffect(() => {
    setIsButtonActive(Boolean(isSidebarOpen))
  }, [isSidebarOpen])
  
  return (
    <nav class='fixed bottom-0 h-18 w-full flex border-t border-border desktop:hidden items-center justify-evenly sm:px-4 overflow-x-auto [scrollbar-width:none] bg-base-dark'>
      { barItems.map((item) => {
        const { id, type, title, icon: ItemIcon } = item

        if (type === 'link') return (
          <TabBarLink
            id={id}
            type={type}
            key={`tab-bar-link-to:${item.href}`}
            href={item.href}
            title={title}
            icon={ItemIcon}
            onClick={clickLink}
          />
        )

        if (type === 'button' && id === 'more') return (
          <TabBarButton
            id={id}
            type={type}
            key={`tab-bar-button:${title}`}
            title={title}
            icon={ItemIcon}
            onClick={handleClickMore}
          />
        )
      }) }
    </nav>
  )
}
