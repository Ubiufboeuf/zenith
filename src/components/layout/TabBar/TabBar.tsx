import { useState } from 'preact/hooks'
import { TabBarButton } from './TabBarButton'
import { TabBarLink } from './TabBarLink'
import { barItems, type BarButtonId } from '@/lib/barItems'

export function TabBar ({ pathname }: { pathname: string }) {
  const [buttonActive, setButtonActive] = useState<BarButtonId>()

  function handleClickSearch () {
    const id = 'search'
    if (buttonActive === id) setButtonActive(undefined)
    else setButtonActive(id)
  }

  function handleClickMore () {
    const id = 'more'
    const isActive = buttonActive === id
    setButtonActive(isActive ? undefined : id)

    const checkbox = document.querySelector('#checkbox-sidebar-state')
    if (checkbox instanceof HTMLInputElement) checkbox.checked = true
  }

  const buttonFunctions: Record<BarButtonId, () => void> = {
    search: handleClickSearch,
    more: handleClickMore
  }

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
            active={pathname === item.href && !buttonActive}
          />
        )

        if (type === 'button') return (
          <TabBarButton
            id={id}
            type={type}
            key={`tab-bar-button:${title}`}
            title={title}
            icon={ItemIcon}
            onClick={buttonFunctions?.[item.id]}
            active={buttonActive === item.id}
          />
        )
      }) }
    </nav>
  )
}
