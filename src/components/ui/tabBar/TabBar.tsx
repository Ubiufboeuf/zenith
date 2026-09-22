import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconCart, IconDashboard, IconDots, IconPackage, IconSearch } from '../Icons'
import { LinkButton } from '../LinkButton'

const tabBarActions = [
  { id: 'dashboard', icon: IconDashboard },
  { id: 'new_sale', icon: IconCart },
  { id: 'search', icon: IconSearch, action: () => {} },
  { id: 'products', icon: IconPackage },
  { id: 'other', icon: IconDots }
]

export function TabBar () {
  return (
    <footer class='desktop:hidden fixed bottom-0 left-0 right-0 w-full h-16 bg-base-200 border-t border-base-content/20'>
      <nav class='flex justify-around items-center gap-2 w-full h-full py-2'>
        { tabBarActions.map((tba) => {
          const { id, icon: TbaIcon } = tba
          
          if (tba.action) {
            return (
              <Button key={`tab-bar-action-${id}`} shape='circle' fill='ghost' class='h-full w-auto aspect-square'>
                <Icon class='size-5'>
                  <TbaIcon />
                </Icon>
              </Button>
            )
          }

          return (
            <LinkButton key={`tab-bar-link-${id}`} shape='circle' fill='ghost' class='h-full w-auto aspect-square'>
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
