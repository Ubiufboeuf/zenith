import type { TargetedEvent } from 'preact'
import { useId } from 'preact/hooks'

export interface SelectOption {
  id: string
  label: string | number
  default?: boolean
  selectable?: boolean
}

interface SelectProps {
  options: (SelectOption | string)[]
  class?: string
  onChange?: (option: SelectOption) => void
}

export function Select ({ options, onChange, class: className = '' }: SelectProps) {
  const selectId = useId()

  function handleChange (event: TargetedEvent<HTMLSelectElement>) {
    const select = event.currentTarget
    const optionElement = select.selectedOptions[0]

    const value = optionElement.value
    let op

    for (const option of options) {
      if (typeof option === 'string' && option === value) {
        op = { id: option, label: option }
      }

      if (typeof option !== 'string' && option.id === value) {
        op = option
      }
    }
    
    if (!op) return
    
    onChange?.(op)
  }

  return (
    <select class={`${className} select cursor-pointer`} onChange={handleChange}>
      { options.map((option) => {
        if (typeof option === 'string') {
          return (
            <option key={`select-${selectId}-optionstr-${option}`} value={option}>
              {option}
            </option>
          )
        }

        const { id, label, default: defaultOpt, selectable = true } = option
        return (
          <option key={id} value={id} selected={defaultOpt} disabled={!selectable}>
            {label}
          </option>
        )
      }) }
    </select>
  )
}
