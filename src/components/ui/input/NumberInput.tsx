import type { UISizes } from '@/types/uiTypes'
import type { TargetedInputEvent } from 'preact'

interface InputProps {
  label?: string
  placeholder?: string
  step?: string | number
  min?: string | number
  max?: string | number
  size?: UISizes
  class?: string
  onInput?: (event: TargetedInputEvent<HTMLInputElement>) => void
}

export const INPUT_SIZES: Record<UISizes, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl'
}

export const TEXT_SIZES: Record<UISizes, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl'
}

export function NumberInput ({ label, min, max, placeholder, step, size, class: className = '', onInput }: InputProps) {
  const inputSize = size ? INPUT_SIZES[size] : ''
  const textSize = size ? TEXT_SIZES[size] : ''

  return (
    <label class={`${className}`}>
      { label && <span class={`${textSize} text-current font-semibold`}>{label}</span> }
      <input
        type='number'
        step={step}
        min={min}
        max={max}
        placeholder={placeholder}
        class={`input ${inputSize}`}
        onInput={onInput}
      />
    </label>
  )
}
