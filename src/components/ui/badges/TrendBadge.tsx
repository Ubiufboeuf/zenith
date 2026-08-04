import type { TrendBadgeProps } from '@/types/ui/badgeTypes'
import { Icon } from '../Icon'
import { IconTrending } from '../Icons'

const BADGE_TYPES = {
  up: 'badge-success',
  idle: '',
  down: 'badge-error'
}

export function TrendBadge ({ value, class: className = '' }: TrendBadgeProps) {
  const trending =
    Number(value) > 0 ? 'up' :
    Number(value) < 0 ? 'down' :
    'idle'

  const badgeType = BADGE_TYPES[trending as keyof typeof BADGE_TYPES]
  
  return (
    <span class={`${className} ${badgeType} badge badge-soft text-sm font-bold`}>
      <Icon class='stroke-2 size-5'>
        <IconTrending trending={trending} />
      </Icon>
      {value}%
    </span>
  )
}
