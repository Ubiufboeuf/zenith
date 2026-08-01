import { IconMetrics, IconCart, IconDashboard, IconDeliveryNote, IconMail, IconPackage, IconUsers } from '@/components/ui/Icons'
import type { SidebarSection } from '@/types/ui/sidebarTypes'

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    name: 'General',
    links: [
      {
        name: 'Dashboard',
        path: '/',
        icon: IconDashboard
      }
    ]
  },
  {
    name: 'Operación',
    links: [
      {
        name: 'Ventas',
        path: '/sales',
        icon: IconCart
      },
      {
        name: 'Remitos',
        path: 'remitos',
        icon: IconDeliveryNote
      }
    ]
  },
  {
    name: 'Catálogo',
    links: [
      {
        name: 'Productos',
        path: '/products',
        icon: IconPackage
      },
      {
        name: 'Clientes',
        path: '/clients',
        icon: IconUsers
      }
    ]
  },
  {
    name: 'Análisis',
    links: [
      {
        name: 'Métricas',
        path: '/metrics',
        icon: IconMetrics
      },
      {
        name: 'Correos',
        path: '/mails',
        icon: IconMail
      }
    ]
  }
]
