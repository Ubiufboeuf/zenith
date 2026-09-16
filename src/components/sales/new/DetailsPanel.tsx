import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconX } from '@/components/ui/Icons'
import { Select, type SelectOption } from '@/components/ui/Select'
import { CURRENCIES } from '@/constants/currencyConstants'
import { mockedCashiers } from '@/mocks/cashiers'
import { useEffect, useState } from 'preact/hooks'

const currencyOptions = [...CURRENCIES]
const documentOptions: SelectOption[] = [
  { id: 'immediateReceipt', label: 'Ticket Contado' },
  { id: 'creditReceipt', label: 'Ticket Crédito' },
  { id: 'immediateInvoice', label: 'Factura Contado' },
  { id: 'creditInvoice', label: 'Factura Crédito' }
]

async function getCashiers () {
  const cashiers: SelectOption[] = [{ id: 'cashier-fallback', label: '- Selecciona un cajero -', default: true }, ...mockedCashiers]
  return cashiers
}

export function DetailsPanel () {
  const [cashierOptions, setCashierOptions] = useState<SelectOption[]>([{ id: 'default', label: '- Selecciona un cajero -', default: true }])
  const [isCredit, setIsCredit] = useState(false)

  async function loadCashiers () {
    const cashiers = await getCashiers()
    if (!cashiers.length) return

    setCashierOptions(cashiers)
  }

  function handleChange (option: SelectOption) {
    setIsCredit(option.id.includes('credit'))
  }
  
  useEffect(() => {
    loadCashiers()
  }, [])
  
  return (
    <section class='w-80 h-full flex flex-col gap-2 p-4 border-l border-base-content/20 bg-base-100'>
      <div class='flex flex-col gap-2'>
        <div class='flex gap-2'>
          <Button fill='soft' color='primary' class='flex-1'>Buscar cliente</Button>
          <Button shape='square' color='error' fill='soft' class=''><Icon class='size-6'><IconX /></Icon></Button>
        </div>
        <div class='flex justify-between'>
          <strong title='Pepito Méndez' class='max-w-1/2 line-clamp-1 text-sm text-base-content'>Pepito Méndez</strong>
          <span title='RUT: 184980192839' class='max-w-1/2 line-clamp-1 text-sm text-right text-base-content/70'>RUT: 184980192839</span>
        </div>
      </div>
      <div class='flex flex-col gap-2'>
        <div class='flex gap-2'>
          <Select options={documentOptions} onChange={handleChange} />
          <Select options={currencyOptions} class='w-32' />
        </div>
        <Select options={cashierOptions} class='select-sm text-base-content/80' />
      </div>
      <div class='flex justify-between gap-2'>
        <label class='flex-1'>
          <span class='text-xs font-semibold text-base-content/60'>Creación</span>
          <input type='date' class='input input-sm' />
        </label>
        <label class='flex-1' hidden={!isCredit}>
          <span class='text-xs font-semibold text-base-content/60'>Vencimiento</span>
          <input type='date' class='input input-sm' />
        </label>
      </div>
      <div class='flex items-center flex-1 w-full'>
        <div class='h-px w-full bg-base-content/20' />
      </div>
      <div class='flex flex-col justify-end gap-2 flex-1'>
        <div class='flex justify-between items-center gap-4 pb-2 text-sm text-base-content/70'>
          <span>UYU</span>
          <input type='number' class='input input-sm' placeholder='Descuento general' />
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Subtotal</span>
          <span class='text-base-content font-semibold'>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Descuentos</span>
          <span>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Neto gravado</span>
          <span>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>IVA</span>
          <span>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm h-fit py-1 text-base-content/70'>
          <strong class='flex h-full items-center'>Total</strong>
          <span class='text-xl text-primary font-semibold'>UYU 16.000,20</span>
        </div>
        <Button color='primary' width='block'>Cobrar</Button>
      </div>
    </section>
  )
}
