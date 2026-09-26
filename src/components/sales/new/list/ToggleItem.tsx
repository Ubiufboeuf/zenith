import { useState } from 'preact/hooks'

export function ToggleItem () {
  const [checked] = useState(true)

  return (
    <input
      type='checkbox'
      checked={checked}
      class='checkbox checkbox-accent checkbox-sm'
    />
  )
}
