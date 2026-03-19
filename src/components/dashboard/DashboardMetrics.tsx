import type { MetricCardProps } from '@/types/metricTypes'
import { IconDollar, IconArrow, IconCart, IconChart, IconDebit } from '../ui/Icons'
import { Icon } from '../ui/Icon'

const dashboardMetrics: MetricCardProps[] = [
  { label: 'Facturado hoy', value: '$23412', trend: 1.1, icon: () => <IconDollar />, color: '#11ad32' },
  { label: 'Ventas del día', value: '12', trend: 1.1, icon: () => <IconCart />, color: '#0097a2' },
  { label: 'Ticket promedio', value: '$381.71', trend: 1.1, icon: () => <IconChart />, color: '#e67e40' },
  { label: 'Métodos de pago', value: '8 - 4', trend: 1.1, icon: () => <IconDebit />, color: '#eeeeee' }
]
export function DashboardMetrics () {
  
  return (
    <section class='h-fit w-full my-4 grid ml:grid-cols-2 lg:grid-cols-4 gap-2 ml:gap-4'>
      { dashboardMetrics.map(({ label, value, trend, icon: MetricIcon, color }) => (
        <article
          key={`metric-card-${label.toLowerCase().replaceAll(' ', '-')}`}
          class='group grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] lg:grid-rows-[repeat(3,auto)] items-center justify-center gap-x-4 lg:gap-y-4 p-4 rounded-lg sm:rounded-xl border transition-colors bg-card border-border'
          style={{ '--color': color }}
        >
          <div class='row-span-full lg:row-1 size-10 flex items-center justify-center text-(--color) bg-(--color)/8 rounded-lg'>
            <Icon class='size-6 stroke-2'>
              <MetricIcon />
            </Icon>
          </div>
          <h1 class='row-1 lg:row-2 lg:col-span-full ml:not-lg:sidebar-open:col-[2/4] text-xs text-neutral-400'>{label}</h1>
          <strong class='lg:row-3 font-bold'>{value}</strong>
          <div class='row-span-full lg:row-1 lg:-col-1 ml:not-lg:sidebar-open:row-2 ml:sidebar-open:col-3 flex justify-end gap-2 text-destructive'>
            <Icon class='size-5 stroke-2'>
              <IconArrow />
            </Icon>
            <span class='text-sm'>{Math.floor(trend * 100) - 100}%</span>
          </div>
        </article>
      ))}
    </section>
  )
}
