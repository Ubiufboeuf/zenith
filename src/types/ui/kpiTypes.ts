import type { ReactNode } from 'preact/compat'
import type { TrendBadgeProps } from './badgeTypes'

export interface KpiItem {
  id: string
  title: string
  value: string | (() => string)
  subtext?: string 
  trend?: TrendBadgeProps | (() => TrendBadgeProps)
  color?: string
  icon: () => ReactNode
  class?: string
}
