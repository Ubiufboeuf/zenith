import type { ReactNode } from 'preact/compat'

export interface Metric {
  label: string
  value: string
  trend: number
}

export interface MetricCardProps extends Metric {
  icon: () => ReactNode
  color: string
}
