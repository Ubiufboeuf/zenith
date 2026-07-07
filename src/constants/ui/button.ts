import type { UIElementTypes, UISizes } from '@/types/uiTypes'

export const BUTTON_VARIANTS: Record<UIElementTypes, string> = {
  neutral: 'btn-neutral',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error'
}

export const BUTTON_SIZES: Record<UISizes, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl'
}
