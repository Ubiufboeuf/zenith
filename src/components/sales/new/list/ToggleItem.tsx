import { useState } from 'preact/hooks'

export function ToggleItem () {
  const [checked] = useState(true)

  return (
    <div class='w-full aspect-square p-2'>
      <label class='flex items-center justify-center h-full w-full'>
        <input
          type='checkbox'
          checked={checked}
          class='checkbox checkbox-accent'
        />
      </label>
    </div>
  )
}
