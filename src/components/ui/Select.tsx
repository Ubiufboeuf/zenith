interface SelectOption {
  id: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  class?: string
}

export function Select ({ options, class: className = '' }: SelectProps) {
  return (
    <select class={`${className} select cursor-pointer`}>
      { options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      )) }
    </select>
  )
}
