import type { KpiItem } from '@/types/ui/kpiTypes'
import { Icon } from '../Icon'
import { TrendBadge } from '../badges/TrendBadge'

const COLORS: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info'
}

export function KPI ({ title, value, subtext, trend, color, icon: KpiIcon }: KpiItem) {
  const iconColor = (color ? COLORS[color] : '') || color

  return (
    <article class='card h-full flex-1 flex flex-col justify-between p-4 px-5 gap-1 border border-neutral-700 bg-base-100'>
      <div class='w-full h-fit flex justify-between items-center'>
        <span class='text-sm text-base-content/50'>{title}</span>
        <Icon class={`${iconColor} size-5`}>
          <KpiIcon />
        </Icon>
      </div>
      <div>
        <strong class='text-2xl font-bold'>{value}</strong>
        { subtext && <span class='text-sm text-base-content/50'>{' '}{subtext}</span> }
      </div>
      { trend && <div>
        <TrendBadge class='badge-sm px-0 gap-1 border-0' {...trend} />
      </div> }
    </article>
  )
}
