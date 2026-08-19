import { Icon } from '@/components/ui/Icon'
import { IconBoxes } from '@/components/ui/Icons'
import { NumberInput } from '@/components/ui/input/NumberInput'
import type { UIColors } from '@/types/uiTypes'

interface Level {
  id: string
  label: string
  color?: UIColors
}

const levels: Level[] = [
  { id: 'no-stock', label: 'Sin stock', color: 'primary' },
  { id: 'critic-stock', label: 'Crítico', color: 'error' },
  { id: 'low-stock', label: 'Bajo', color: 'warning' },
  { id: 'safe-stock', label: 'Seguro', color: 'success' }
]

export function StockSection () {
  return (
    <section class='flex flex-col gap-4'>
      <span class='flex items-center justify-center gap-2 w-fit h-fit text-sm text-base-content font-semibold opacity-70'>
        <Icon class='size-4'>
          <IconBoxes />
        </Icon>
        Stock
      </span>
      <div class='flex flex-col gap-4'>
        <div class='flex flex-wrap gap-2'>
          <span class='w-full text-xs text-base-content/50 font-semibold'>Nivel</span>
          { levels.map(({ id, label, color }) => (
            <label key={id} class={`btn not-has-checked:btn-soft btn-${color} flex-1`}>
              <input type='checkbox' hidden />
              {label}
            </label>
          )) }
        </div>
        <div class='flex flex-wrap gap-2'>
          <NumberInput
            class='flex flex-1 flex-col gap-1 w-46 text-base-content/50 *:text-xs'
            label='Mínimo'
            placeholder='0'
            step='1'
            min='0'
            size='sm'
          />
          <NumberInput
            class='flex flex-1 flex-col gap-1 w-46 text-base-content/50 *:text-xs'
            label='Máximo'
            placeholder='Sin límite'
            step='1'
            min='0'
            size='sm'
          />
        </div>
      </div>
    </section>
  )
}
