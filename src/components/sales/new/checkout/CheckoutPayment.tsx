import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconCash, IconSend, IconTrash } from '@/components/ui/Icons'
import { Select, type SelectOption } from '@/components/ui/Select'
import { CURRENCIES } from '@/constants/currencyConstants'
import { useNewSaleStore } from '@/stores/newSaleStore'
import type { Payment } from '@/types/sales/saleTypes'
import type { TargetedInputEvent } from 'preact'
import { useState } from 'preact/hooks'

const paymentOptions: SelectOption[] = [
  { id: 'cash', label: 'Efectivo', default: true },
  { id: 'debit', label: 'Débito' },
  { id: 'credit', label: 'Crédito' },
  { id: 'transfer', label: 'Transferencia' }
]

interface Props {
  payment: Payment
  idx: number
}

const terminals: string[] = [
  'Terminal A - OCA'
]

export function CheckoutPayment ({ idx, payment: { id } }: Props) {
  const updatePayment = useNewSaleStore((state) => state.updatePayment)
  const deletePayment = useNewSaleStore((state) => state.deletePayment)
  const rest = useNewSaleStore((state) => state.rest)
  const [amount, setAmount] = useState<number>()
  const [needsAPos, setNeedsAPos] = useState(false)

  function handleFillRest () {
    if (rest >= 0) return

    const value = Number(amount ?? 0)
    const newAmount = (rest * -1) + value
    
    setAmount(newAmount)
    updatePayment(id, { amount: newAmount })
  }

  function removePayment () {
    deletePayment(id)
  }
  
  function handleInput (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    setAmount(Number(value))
    updatePayment(id, { amount: Number(value) })
  }

  function handleChangeMethod (option: SelectOption) {
    setNeedsAPos(option.id === 'debit' || option.id === 'credit')
  }
  
  return (
    <div class='card w-full h-fit flex flex-col gap-3 p-3 px-5 bg-base-200'>
      <div class='h-fit w-full flex items-center gap-2'>
        <span class='text-sm text-base-content/50 font-semibold uppercase mr-auto'>Pago {idx + 1}</span>
        <Button fill='ghost' color='accent' size='sm' onClick={handleFillRest} disabled={rest >= 0}>
          <Icon class='size-4'>
            <IconCash />
          </Icon>
          <span>Resto</span>
        </Button>
        <Button fill='ghost' color='error' size='sm' onClick={removePayment}>
          <Icon class='size-4'>
            <IconTrash />
          </Icon>
          <span>Eliminar pago</span>
        </Button>
      </div>
      <div class='flex items-center gap-2'>
        <Select
          options={paymentOptions}
          class='select-sm w-60 text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
          onChange={handleChangeMethod}
        />
        <Select
          options={CURRENCIES as unknown as string[]}
          class='select-sm w-32 text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
        />
        <label class='input input-sm text-end text-base-content'>
          $
          <input
            type='number'
            placeholder='Cantidad'
            min='0'
            value={amount}
            onInput={handleInput}
          />
        </label>
      </div>
      <div class='flex items-center gap-2' hidden={!needsAPos}>
        <span class='text-xs text-base-content/50 font-semibold mr-auto'>Terminal POS</span>
        <Select
          options={terminals}
          class='select-sm text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
        />
        <Button size='sm' color='primary' class=''>
          <Icon class='size-4'>
            <IconSend />
          </Icon>
          <span>Enviar al POS</span>
        </Button>
      </div>
    </div>
  )
}
