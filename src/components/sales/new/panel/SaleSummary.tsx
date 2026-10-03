import { Select } from '@/components/ui/Select'
import { useNewSaleStore } from '@/stores/newSaleStore'
import { useEffect, useState } from 'preact/hooks'
import type { ListedItem } from '../ListView'
import { calculateLineIva, calculateLineNet, calculateLineTotal } from '@/lib/sales/newSaleUtils'
import { formatCurrency } from '@/utils/currencies'

export function SaleSummary () {
  const listedItems = useNewSaleStore((state) => state.listedItems)
  const subtotal = useNewSaleStore((state) => state.subtotal)
  const setSubtotal = useNewSaleStore((state) => state.setSubtotal)
  const [totalDiscount, setTotalDiscount] = useState<string | number>('0')
  const [taxableNet, setTaxableNet] = useState<string | number>('0')
  const [ivaAmount, setIvaAmount] = useState<string | number>('0')
  const total = useNewSaleStore((state) => state.total)
  const setTotal = useNewSaleStore((state) => state.setTotal)

  function updateSummary (listedItems: ListedItem[]) {
    let subtotal = 0
    let taxableNet = 0
    let ivaAmount = 0
    let total = 0

    for (const listedItem of listedItems) {
      if (!listedItem.enabled || !listedItem.unitPriceAtMoment) continue
      
      subtotal += calculateLineTotal(listedItem, false)
      taxableNet += calculateLineNet(listedItem, true)
      ivaAmount += calculateLineIva(listedItem, true)
      total += calculateLineTotal(listedItem, true)
    }
    
    const totalDiscount = Math.abs(total - subtotal)

    setSubtotal(subtotal.toFixed(2))
    setTotalDiscount(totalDiscount.toFixed(2))
    setTaxableNet(taxableNet.toFixed(2))
    setIvaAmount(ivaAmount.toFixed(2))
    setTotal(total.toFixed(2))
  }

  useEffect(() => {
    updateSummary(listedItems)
  }, [listedItems])
  
  return (
    <div class='flex flex-col gap-2'>
      {/* Title */}
      <div class='flex items-center gap-2'>
        <div class='w-4 h-px bg-base-content/20'></div>
        <strong class='w-fit text-sm font-semibold text-base-content/60'>Resumen</strong>
        <div class='flex-1 h-px bg-base-content/20'></div>
      </div>

      {/* Content */}
      <div class='flex flex-col gap-2'>
        <div class='flex justify-between items-center gap-2 pb-2 text-sm text-base-content/70'>
          <input type='number' class='input input-sm' placeholder='Descuento general' />
          <Select
            options={['%', '$']}
            class='select-sm w-16 font-semibold'
          />
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Subtotal</span>
          <span class='text-base-content font-semibold'>{formatCurrency(Number(subtotal) / 100)}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Descuentos</span>
          <span class='text-secondary'>- {formatCurrency(Number(totalDiscount) / 100)}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Neto gravado</span>
          <span>{formatCurrency(Number(taxableNet) / 100)}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>IVA</span>
          <span>{formatCurrency(Number(ivaAmount) / 100)}</span>
        </div>
      </div>
      <div>
        <div class='flex justify-between items-center text-sm h-fit text-base-content/70'>
          <strong class='flex h-full items-center pt-1'>Total</strong>
          <span class='text-xl text-primary font-semibold border-t border-base-content/40 pt-1'>{formatCurrency(Number(total) / 100)}</span>
        </div>
      </div>
    </div>
  )
}
