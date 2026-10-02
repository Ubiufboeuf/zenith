import { Select, type SelectOption } from '@/components/ui/Select'
import { CURRENCIES } from '@/constants/currencyConstants'
import { mockedCashiers } from '@/mocks/cashiers'
import { useNewSaleStore } from '@/stores/newSaleStore'
import type { Currency } from '@/types/currencyTypes'
import type { DocumentType, SaleType } from '@/types/sales/saleTypes'
import { useEffect, useState } from 'preact/hooks'
import { Temporal } from 'temporal-polyfill'

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

export function SaleInfo () {
  const [isCredit, setIsCredit] = useState(false)
  const [cashierOptions, setCashierOptions] = useState<SelectOption[]>([{ id: 'default', label: '- Selecciona un cajero -', default: true }])
  const setCurrency = useNewSaleStore((state) => state.setCurrency)
  const setDocumentType = useNewSaleStore((state) => state.setDocumentType)
  const setSaleType = useNewSaleStore((state) => state.setSaleType)
  
  async function loadCashiers () {
    const cashiers = await getCashiers()
    if (!cashiers.length) return

    setCashierOptions(cashiers)
  }

  function handleChangeDocumentType (option: SelectOption) {
    setIsCredit(option.id.includes('credit'))
    const [,saleType, documentType] = option.id.toUpperCase().split(/(immediate|credit)/i)
    console.log({ saleType, documentType })
    setSaleType(saleType as SaleType)
    setDocumentType(documentType as DocumentType)
  }

  useEffect(() => {
    loadCashiers()
  }, [])
  
  return (
    <div class='flex flex-col gap-2'>
      <Select options={cashierOptions} class='select-sm text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold' />
      <div class='flex gap-2'>
        <Select
          options={documentOptions}
          class='text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
          onChange={handleChangeDocumentType}
        />
        <Select
          options={currencyOptions}
          class='w-32 text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold'
          onChange={(option) => setCurrency(option.id as Currency)}
        />
      </div>
      <div class='flex justify-between gap-2'>
        <label class='flex-1'>
          <span class='text-xs font-semibold text-base-content/60'>Creación</span>
          <input type='date' defaultValue={Temporal.Now.plainDateISO().toString()} class='input input-sm' />
        </label>
        <label class='flex-1' hidden={!isCredit}>
          <span class='text-xs font-semibold text-base-content/60'>Vencimiento</span>
          <input type='date' defaultValue={Temporal.Now.plainDateISO().add({ months: 1 }).toString()} class='input input-sm' />
        </label>
      </div>
    </div>
  )
}
