import { Icon } from '@/components/ui/Icon'
import { IconDollar } from '@/components/ui/Icons'
import { NumberInput } from '@/components/ui/input/NumberInput'
import { Select } from '@/components/ui/Select'

const CURRENCIES = ['UYU', 'USD', 'EUR']

export function PricesSection () {
  return (
    <section class='flex flex-col gap-4'>
      <span class='flex items-center justify-center gap-2 w-fit h-fit text-sm text-base-content/70 font-semibold'>
        <Icon class='size-4'>
          <IconDollar />
        </Icon>
        Precios
      </span>
      <div class='flex flex-col gap-2'>
        <strong class='text-xs font-semibold tracking-wide text-primary-content/40 uppercase'>Venta</strong>
        <div class='flex flex-wrap justify-between gap-2'>
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
          <label class='flex flex-col gap-1 w-18'>
            <span class='text-xs text-base-content/50 font-semibold'>Moneda</span>
            <Select
              class='select-sm w-full'
              options={CURRENCIES}
            />
          </label>
        </div>
      </div>
      <div class='flex flex-col gap-2'>
        <strong class='text-xs font-semibold tracking-wide text-primary-content/40 uppercase'>Compra</strong>
        <div class='flex flex-wrap justify-between gap-2'>
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
          <label class='flex flex-col gap-1 w-18'>
            <span class='text-xs text-base-content/50 font-semibold'>Moneda</span>
            <Select
              class='select-sm w-full'
              options={CURRENCIES}
            />
          </label>
        </div>
      </div>
    </section>
  )
}
