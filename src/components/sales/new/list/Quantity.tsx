import { useNewSaleStore } from '@/stores/newSaleStore'
import type { ListedItem } from '../ListView'
import type { TargetedInputEvent } from 'preact'
import { useState } from 'preact/hooks'
import { limit } from '@/lib/utils'

export function Quantity ({ id, quantity: initialQuantity }: ListedItem) {
  const setListedItemPrice = useNewSaleStore((state) => state.updateListedItem)
  const [quantity, setQuantity] = useState<number>(initialQuantity)
  
  function updateQuantity (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    const quantityValue = limit(0, Number(value))

    setQuantity(quantityValue)
    setListedItemPrice(id, { quantity: quantityValue ?? 0 })
  }
  
  return (
    <input
      type='number'
      class='input input-xs w-full'
      value={quantity}
      min='0'
      onInput={updateQuantity}
    />
  )
}
