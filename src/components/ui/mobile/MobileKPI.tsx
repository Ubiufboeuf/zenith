import type { KpiItem } from '@/types/ui/kpiTypes'
import { Icon } from '../Icon'
import { TrendBadge } from '../badges/TrendBadge'

const COLORS: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info'
}

export function MobileKPI ({ title, value, subtext, trend, color, icon: KpiIcon, class: className = '' }: KpiItem) {
  const iconColor = (color ? COLORS[color] : '') || color

  return (
    <article class={`${className} card h-full w-full flex flex-row justify-start items-center p-3 px-5 gap-5 border border-base-content/20 bg-base-100`}>
      <Icon class={`${iconColor} size-5.5`}>
        <KpiIcon />
      </Icon>
      <div class='flex flex-col'>
        <span class='text-sm text-base-content/50'>{title}</span>
        <div>
          <strong class='text-lg font-bold'>{value}</strong>
          { subtext && <span class='text-sm text-base-content/50'>&nbsp;{subtext}</span> }
        </div>
      </div>
      <div class='h-full py-1 flex items-end ml-auto text-end'>
        { trend && <TrendBadge class='badge-sm px-0 gap-1 border-0' {...trend} /> }
      </div>
    </article>
  )
}
