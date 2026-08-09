import type { ReactNode } from 'preact/compat'
import type { TrendBadgeProps } from './badgeTypes'

export interface KpiItem {
  id: string
  title: string
  value: string
  subtext?: string 
  trend?: TrendBadgeProps
  color?: string
  icon: () => ReactNode
}
