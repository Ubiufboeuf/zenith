import { Select } from '@/components/ui/Select'
import { useNewSaleStore } from '@/stores/newSaleStore'
import { useEffect, useState } from 'preact/hooks'
import type { ListedItem } from '../ListView'
import { calculateLineIva, calculateLineNet, calculateLineTotal } from '@/lib/sales/newSaleUtils'
import { getAmountToDisplay } from '@/lib/currencies'
import type { TargetedInputEvent } from 'preact'

export function SaleSummary () {
  const listedItems = useNewSaleStore((state) => state.listedItems)
  const subtotal = useNewSaleStore((state) => state.subtotal)
  const setSubtotal = useNewSaleStore((state) => state.setSubtotal)
  
  const [generalDiscount, setGeneralDiscount] = useState<number>(0)
  const [generalDiscountType, setGeneralDiscountType] = useState<string>('%')
  
  const [totalDiscount, setTotalDiscount] = useState<string | number>('0')
  const [taxableNet, setTaxableNet] = useState<string | number>('0')
  const [ivaAmount, setIvaAmount] = useState<string | number>('0')
  
  const total = useNewSaleStore((state) => state.total)
  const setTotal = useNewSaleStore((state) => state.setTotal)
  const saleCurrency = useNewSaleStore((state) => state.currency)

  const displayTotal = getAmountToDisplay(total, saleCurrency, 2, 2)
  const displaySubtotal = getAmountToDisplay(subtotal, saleCurrency, 2, 2)
  const displayTotalDiscount = getAmountToDisplay(totalDiscount, saleCurrency, 2, 2)
  const displayTaxableNet = getAmountToDisplay(taxableNet, saleCurrency, 2, 2)
  const displayIvaAmount = getAmountToDisplay(ivaAmount, saleCurrency, 2, 2)

  function updateSummary (listedItems: ListedItem[]) {
    let rawSubtotal = 0
    let taxableNetSum = 0
    let ivaAmountSum = 0
    let itemsTotal = 0

    for (const listedItem of listedItems) {
      if (!listedItem.enabled || !listedItem.unitPriceAtMoment) continue
      
      rawSubtotal += calculateLineTotal(listedItem, false)
      taxableNetSum += calculateLineNet(listedItem, true)
      ivaAmountSum += calculateLineIva(listedItem, true)
      itemsTotal += calculateLineTotal(listedItem, true)
    }
    
    const generalDiscountAmount = generalDiscountType === '%'
      ? itemsTotal * (generalDiscount / 100)
      : generalDiscount * 100

    const finalTotal = Math.max(0, itemsTotal - generalDiscountAmount)
    
    const lineDiscounts = rawSubtotal - itemsTotal
    const totalDiscountValue = lineDiscounts + generalDiscountAmount

    setSubtotal(rawSubtotal.toFixed(5))
    setTotalDiscount(totalDiscountValue.toFixed(5))
    setTaxableNet(taxableNetSum.toFixed(5))
    setIvaAmount(ivaAmountSum.toFixed(5))
    setTotal(finalTotal.toFixed(5))
  }

  function handleInput (event: TargetedInputEvent<HTMLInputElement>) {
    const input = event.currentTarget
    if (!input) return
    setGeneralDiscount(Number(input.value) || 0)
  }

  useEffect(() => {
    updateSummary(listedItems)
  }, [listedItems, generalDiscount, generalDiscountType])
  
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
          <input 
            type='number' 
            class='input input-sm' 
            placeholder='Descuento general' 
            onInput={handleInput} 
          />
          <Select
            options={['%', '$']}
            class='select-sm w-16 font-semibold'
            defaultValue='%'
            onChange={(option) => {
              setGeneralDiscountType(option.id)
            }}
          />
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Subtotal</span>
          <span class='text-base-content font-semibold'>{displaySubtotal}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Descuentos</span>
          <span class='text-secondary'>{displayTotalDiscount}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Neto gravado</span>
          <span>{displayTaxableNet}</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>IVA</span>
          <span>{displayIvaAmount}</span>
        </div>
      </div>
      <div>
        <div class='flex justify-between items-center text-sm h-fit text-base-content/70'>
          <strong class='flex h-full items-center pt-1'>Total</strong>
          <span class='text-xl text-primary font-semibold border-t border-base-content/40 pt-1'>{displayTotal}</span>
        </div>
      </div>
    </div>
  )
}
