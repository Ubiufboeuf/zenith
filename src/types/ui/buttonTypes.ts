import type { TargetedMouseEvent } from 'preact'
import type { UIElementTypes, UIProps, UISizes } from '../uiTypes'

export interface ButtonProps extends UIProps {
  label?: string
  
  variant?: UIElementTypes
  size?: UISizes
  soft?: boolean
  outline?: boolean

  onClick?: (event: TargetedMouseEvent<HTMLButtonElement>) => void
}
