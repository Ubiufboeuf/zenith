import type { ReactNode } from 'preact/compat'

export interface UIProps {
  children?: ReactNode
  id?: string
  name?: string
  className?: string
  disabled?: boolean
}

export type UIColors = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
export type UISizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type UIFillMode = 'soft' | 'outline' | 'dash' | 'ghost' | 'link'
export type UIShapes = 'square' | 'circle'
export type UIWidths = 'wide' | 'block'
