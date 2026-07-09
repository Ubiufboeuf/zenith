import type { ButtonProps } from '@/types/ui/buttonTypes'
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/constants/ui/buttonConstants'

export function Button ({ children, label, variant, size, soft, outline }: ButtonProps) {
  if (outline && soft) soft = false

  const btnVariant = variant ? BUTTON_VARIANTS[variant] : ''
  const btnSize = size ? BUTTON_SIZES[size] : ''

  return (
    <button class={`btn ${btnVariant} ${btnSize} ${soft && 'btn-soft'} ${outline && 'btn-outline'}`}>
      { children || <span>
        {label}
      </span> }
    </button>
  )
}
