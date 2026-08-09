import type { ReactNode } from 'preact/compat'
import type { UIStatus } from '../uiTypes'

export interface StatusBadgeProps {
  status: UIStatus
  children?: ReactNode
}

export type TrendSentiment = 'positive' | 'negative' | 'warning' | 'neutral'

export interface TrendBadgeProps {
  label: string
  sentiment: TrendSentiment
  class?: string
}
