import { Select } from '@/components/ui/Select'

const currencies = ['UYU', 'USD', 'EUR']

export function PriceFilter () {
  return (
    <div class='flex gap-1 items-center'>
      <label class='flex flex-col gap-1'>
        <span class='text-xs font-semibold text-base-content/50'>Precio mínimo</span>
        <input
          placeholder='0'
          type='number'
          class='input input-sm w-24'
        />
        <output class='text-xs font-semibold text-base-content/50'>$ 0</output>
      </label>
      <label class='flex flex-col gap-1'>
        <span class='text-xs font-semibold text-base-content/50'>Precio máximo</span>
        <input
          placeholder='100'
          type='number'
          class='input input-sm w-24'
        />
        <output class='text-xs font-semibold text-base-content/50'>$ 100</output>
      </label>
      <Select options={currencies} class='select-sm' />
    </div>
  )
}
