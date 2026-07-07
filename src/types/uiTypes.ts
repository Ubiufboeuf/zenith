import type { ReactNode } from 'preact/compat'

export interface UIProps {
  children?: ReactNode
  id?: string
  name?: string
  className?: string
  disabled?: boolean
}

export type UIElementTypes = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
export type UISizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
