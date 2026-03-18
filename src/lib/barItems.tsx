import { IconCart, IconCollection, IconDots, IconHistory, IconSearch } from '@/components/ui/Icons'
import type { TargetedMouseEvent } from 'preact'
import type { ReactNode } from 'preact/compat'

export interface TabBarLink {
  id: string
  type: 'link'
  title: string
  active?: boolean
  href: string
  icon: ({ active }: { active?: boolean }) => ReactNode,
  onClick?: (event: TargetedMouseEvent<HTMLAnchorElement>) => void
}

export interface TabBarButton {
  id: string
  type: 'button'
  title: string
  active?: boolean
  onClick?: (event: TargetedMouseEvent<HTMLButtonElement>) => void
  icon: ({ active }: { active?: boolean }) => ReactNode
}

export type TabBarItem = TabBarLink | TabBarButton
export type BarButtonId = TabBarButton['id']

export const barItems: TabBarItem[] = [
  { id: 'home', type: 'link', title: 'Inicio', href: '/', icon: ({ active }: { active?: boolean }) => <IconCollection active={active} /> },
  { id: 'new_sale', type: 'link', title: 'Venta', href: '/new_sale', icon: ({ active }: { active?: boolean }) => <IconCart active={active} /> },
  { id: 'search', type: 'link', title: 'Buscar', href: '/search', icon: ({ active }: { active?: boolean }) => <IconSearch active={active} /> },
  { id: 'history', type: 'link', title: 'Historial', href: '/history', icon: ({ active }: { active?: boolean }) => <IconHistory active={active} /> },
  { id: 'more', type: 'button', title: 'Más', icon: ({ active }: { active?: boolean }) => <IconDots active={active} /> }
]
