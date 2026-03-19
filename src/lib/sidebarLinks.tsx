import { IconBox, IconCart, IconCollection, IconHistory, IconSearch, IconSettings, IconUsers } from '@/components/ui/Icons'
import type { ReactNode } from 'preact/compat'

interface SidebarLink {
  title: string
  href: string
  icon: () => ReactNode
}

export const sidebarLinks: Record<string, SidebarLink[]> = {
  principal: [
    { title: 'Inicio', href: '/', icon: () => <IconCollection /> },
    { title: 'Nueva Venta', href: '/new_sale', icon: () => <IconCart /> },
    { title: 'Buscar Productos', href: '/search', icon: () => <IconSearch /> },
    { title: 'Historial de Ventas', href: '/history', icon: () => <IconHistory /> },
    { title: 'Inventario', href: '/inventory', icon: () => <IconBox /> },
    { title: 'Clientes', href: '/customers', icon: () => <IconUsers /> }
  ],
  system: [
    { title: 'Configuración', href: '/settings', icon: () => <IconSettings /> }
  ]
}
