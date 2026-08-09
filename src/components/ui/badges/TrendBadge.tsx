import type { TrendBadgeProps, TrendSentiment } from '@/types/ui/badgeTypes'
import { Icon } from '../Icon'
import { IconTrending, IconAlert } from '../Icons'

const TREND_COLORS: Partial<Record<TrendSentiment, string>> = {
  positive: 'text-success',
  negative: 'text-error',
  warning: 'text-warning',
  neutral: 'text-base-content/70'
}

export function TrendBadge ({ label, sentiment, class: className = '' }: TrendBadgeProps) {
  const trendColors = TREND_COLORS[sentiment]

  return (
    <span class={`${className} ${trendColors} badge`}>
      <Icon class='stroke-2 size-4'>
        { sentiment === 'warning'
          ? <IconAlert />
          : <IconTrending trending={sentiment} />
        }
      </Icon>
      {label}
    </span>
  )
}
