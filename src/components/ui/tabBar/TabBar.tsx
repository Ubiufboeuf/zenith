import { useUIStore } from '@/stores/uiStore'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconCart, IconDashboard, IconDots, IconPackage, IconSearch } from '../Icons'
import { LinkButton } from '../LinkButton'

const tabBarActions = [
  { id: 'dashboard', icon: IconDashboard, href: '/' },
  { id: 'sales', icon: IconCart, href: '/sales' },
  { id: 'search', icon: IconSearch, action: () => useUIStore.getState().toggleSearch() },
  { id: 'products', icon: IconPackage, href: '/products' },
  { id: 'other', icon: IconDots, action: () => {} }
]

export function TabBar ({ currentPath }: { currentPath: string }) {
  return (
    <footer class='desktop:hidden z-2 fixed bottom-0 left-0 right-0 w-full h-16 bg-base-200 border-t border-base-content/20'>
      <nav class='flex justify-around items-center gap-2 w-full h-full py-2'>
        { tabBarActions.map((tab) => {
          const { id, icon: TbaIcon } = tab
          
          if (tab.action) {
            return (
              <Button key={`tab-bar-action-${id}`} shape='circle' fill='ghost' class='h-full w-auto aspect-square' onClick={tab.action}>
                <Icon class='size-5'>
                  <TbaIcon />
                </Icon>
              </Button>
            )
          }

          const isCurrentTab = currentPath === tab.href

          return (
            <LinkButton
              key={`tab-bar-link-${id}`}
              href={tab.href}
              shape='circle'
              fill={isCurrentTab ? 'soft' : 'ghost'}
              color={isCurrentTab ? 'primary' : undefined}
              class='h-full w-auto aspect-square'
            >
              <Icon class='size-5'>
                <TbaIcon />
              </Icon>
            </LinkButton>
          )
        }) }
      </nav>
    </footer>
  )
}
