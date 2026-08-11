import type { KpiItem } from '@/types/ui/kpiTypes'
import { KPI } from '../ui/kpi/KPI'
import { IconCart, IconDollar, IconPackage, IconUsers } from '../ui/Icons'

export const kpis: KpiItem[] = [
  {
    id: 'today-sales',
    title: 'Ventas de hoy',
    value: 'U$S 2.100,00',
    trend: { label: '+12.5%', sentiment: 'positive' },
    color: 'accent',
    icon: IconDollar
  },
  {
    id: 'transactions',
    title: 'Transacciones',
    value: '3',
    trend: { label: '2 menos que ayer', sentiment: 'negative' },
    color: 'primary',
    icon: IconCart
  },
  {
    id: 'active-products',
    title: 'Productos activos',
    value: '12',
    subtext: '/ 30',
    trend: { label: '3 bajo stock', sentiment: 'warning' },
    color: 'secondary',
    icon: IconPackage
  },
  {
    id: 'clients',
    title: 'Clientes',
    value: '6',
    trend: { label: '+0 esta semana', sentiment: 'neutral' },
    color: 'info',
    icon: IconUsers
  }
]

export function KPIs () {
  return (
    <div class='h-fit flex flex-wrap items-center gap-4'>
      { kpis.map((kpi) => <KPI key={kpi.id} {...kpi} />) }
    </div>
  )
}
