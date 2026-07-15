import type { ButtonProps } from '@/types/ui/buttonTypes'
import { BUTTON_FILL_MODES, BUTTON_SHAPES, BUTTON_SIZES, BUTTON_COLORS, BUTTON_WIDTHS } from '@/constants/ui/buttonConstants'

export function Button ({ children, label, color, size, fill, shape, width, selected, disabled, className = '' }: ButtonProps) {
  const btnColor = color ? BUTTON_COLORS[color] : ''
  const btnSize = size ? BUTTON_SIZES[size] : ''
  const btnFill = fill ? BUTTON_FILL_MODES[fill] : ''
  const btnShape = shape ? BUTTON_SHAPES[shape] : ''
  const btnWidth = width ? BUTTON_WIDTHS[width] : ''
  const btnSelected = selected ? 'btn-active' : ''
  const btnDisabled = disabled ? 'btn-disabled' : ''

  return (
    <button
      class={`btn ${btnColor} ${btnSize} ${btnFill} ${btnShape} ${btnWidth} ${btnSelected} ${btnDisabled} ${className}`}
      disabled={disabled}
    >
      { children || <span>
        {label}
      </span> }
    </button>
  )
}
