import type { ReactNode } from 'preact/compat'
import type { UIStatus } from '../uiTypes'

export interface StatusBadgeProps {
  status: UIStatus
  children?: ReactNode
}

export interface TrendBadgeProps {
  value: string | number
  class?: string
}
