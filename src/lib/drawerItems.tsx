import { IconBox, IconCalculator, IconCamera, IconCash, IconDots, IconHelp, IconNews, IconRefresh, IconSettings, IconTheme, IconTicket, IconUsers } from '@/components/ui/Icons'
import type { TargetedEvent } from 'preact'
import type { ReactNode } from 'preact/compat'

export interface QuickAction {
  id: string
  title: string
  color?: string
  onClick?: (event: TargetedEvent<HTMLButtonElement>) => void
  icon: ({ active }: { active?: boolean }) => ReactNode
}

export interface DrawerGridLink {
  id: string
  title: string
  href: string
  color?: string
  icon: ({ active }: { active?: boolean }) => ReactNode
}

export interface DrawerListLink {
  id: string
  title: string
  details: string
  href: string
  color?: string
  icon: ({ active }: { active?: boolean }) => ReactNode
}

export const quickActions: QuickAction[] = [
  { id: 'scan-items', title: 'Escanear', color: '#11ad32', icon: () => <IconCamera /> },
  { id: 'convert', title: 'Convertir', color: '#0097a2', icon: () => <IconCalculator /> },
  { id: 'change-theme', title: 'Tema', color: '#e67e40', icon: () => <IconTheme mode='auto' /> },
  { id: 'sync', title: 'Sincronizar', color: '#e0e0e0', icon: () => <IconRefresh /> }
]

export const drawerGridLinks: DrawerGridLink[] = [
  { id: 'inventory', title: 'Inventario', href: '/inventory', color: '#cccccc', icon: () => <IconBox /> },
  { id: 'customers', title: 'Clientes', href: '/customers', color: '#cccccc', icon: () => <IconUsers /> },
  { id: 'cash-register', title: 'Caja', href: '/cash_register', color: '#cccccc', icon: () => <IconCash /> },
  { id: 'delivery-notes', title: 'Remitos', href: '/delivery_notes', color: '#cccccc', icon: () => <IconTicket /> }
]

export const drawerListLinks: DrawerListLink[] = [
  { id: 'all_links', title: 'Todos los enlaces', details: 'Principales, logísticos, sistema...', href: '/all_links', icon: () => <IconDots /> },
  { id: 'settings', title: 'Configuraciones', details: '', href: '/settings', icon: () => <IconSettings /> },
  { id: 'news', title: 'Anuncios y novedades', details: '"¡No funciona la cafetera!"...', href: '/settings', icon: () => <IconNews /> },
  { id: 'support', title: 'Soporte', details: 'Contacta con Federico', href: '/settings', icon: () => <IconHelp /> }
]
