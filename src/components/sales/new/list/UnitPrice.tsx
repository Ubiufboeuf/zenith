import { useNewSaleStore } from '@/stores/newSaleStore'
import type { ListedItem } from '../ListView'
import type { TargetedInputEvent } from 'preact'
import { useState } from 'preact/hooks'
import { limit } from '@/lib/utils'

export function UnitPrice ({ id, product: { salePrice } }: ListedItem) {
  const setListedItemPrice = useNewSaleStore((state) => state.updateListedItem)
  const [unitPrice, setUnitPrice] = useState<number | undefined>(salePrice)

  function updateUnitPrice (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    const unitPriceValue = value ? limit(0, Number(value)) : undefined

    setUnitPrice(unitPriceValue)
    setListedItemPrice(id, { unitPriceAtMoment: unitPriceValue ?? 0 })
  }

  return (
    <label class='input input-xs w-24 text-end text-base-content'>
      $
      <input
        type='number'
        value={unitPrice}
        placeholder={String(salePrice)}
        min='0'
        onInput={updateUnitPrice}
      />
    </label>
  )
}
