import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconCash, IconSend, IconTrash } from '@/components/ui/Icons'
import { Select, type SelectOption } from '@/components/ui/Select'
import { CURRENCIES, DEFAULT_CURRENCY } from '@/constants/currencyConstants'
import { convertToCurrency } from '@/lib/currencies'
import { useNewSaleStore } from '@/stores/newSaleStore'
import type { Currency } from '@/types/currencyTypes'
import type { Payment } from '@/types/sales/saleTypes'
import type { TargetedInputEvent } from 'preact'
import { useRef, useState } from 'preact/hooks'

const paymentOptions: SelectOption[] = [
  { id: 'CASH', label: 'Efectivo', default: true },
  { id: 'DEBIT', label: 'Débito' },
  { id: 'CREDIT', label: 'Crédito' },
  { id: 'BANK_TRANSFER', label: 'Transferencia' }
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
  const [amount, setAmount] = useState<string>()
  const [needsAPos, setNeedsAPos] = useState(false)
  const currencyRef = useRef<HTMLSelectElement>(null)
  const amountRef = useRef<HTMLInputElement>(null)

  function handleFillRest () {
    if (rest >= 0) return

    const currency = currencyRef.current!.value as Currency
    const currentAmount = Number(amount ?? 0)

    const missingAmount = convertToCurrency(-rest, DEFAULT_CURRENCY, currency)

    const newAmount = Math.ceil(
      (currentAmount + missingAmount) * 100 - 1e-9
    ) / 100

    setAmount(String(newAmount))
    updatePayment(id, { amountPaid: newAmount })
  }

  function removePayment () {
    deletePayment(id)
  }
  
  function handleInput (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    setAmount(value)

    const currency = currencyRef.current!.value as Currency
    updatePayment(id, { amountPaid: Number(value), currency })
  }

  function handleChangeMethod (option: SelectOption) {
    setNeedsAPos(option.id === 'DEBIT' || option.id === 'CREDIT')
  }

  function handleChangeCurrency (option: SelectOption) {
    if (!amountRef.current) return

    const { value } = amountRef.current
    const currency = option.id as Currency
    updatePayment(id, { amountPaid: Number(value), currency })
  }
  
  return (
    <div class='card w-full h-fit flex flex-col gap-3 p-4 bg-base-200'>
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
          selectRef={currencyRef}
          options={CURRENCIES as unknown as string[]}
          class='select-sm w-32 text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
          onChange={handleChangeCurrency}
        />
        <label class='input input-sm text-end text-base-content'>
          <input
            ref={amountRef}
            type='number'
            step={0.01}
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
