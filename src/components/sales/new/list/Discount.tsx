import { useNewSaleStore } from '@/stores/newSaleStore'
import type { TargetedInputEvent } from 'preact'
import type { ListedItem } from '../ListView'
import { limit } from '@/lib/utils'
import { useState } from 'preact/hooks'

export function Discount ({ id }: ListedItem) {
  const setListedItemPrice = useNewSaleStore((state) => state.updateListedItem)
  const [discount, setDiscount] = useState<number | undefined>(undefined)

  function updateDiscount (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    const discountValue = value ? limit(0, Number(value), 100) : undefined

    setDiscount(discountValue)
    setListedItemPrice(id, { discount: discountValue ?? 0 })
  }
  
  return (
    <input
      type='number'
      class='input input-xs w-16 text-base-content'
      min='0'
      max='100'
      placeholder='0%'
      value={discount}
      onInput={updateDiscount}
    />
  )
}
