import { useNewSaleStore } from '@/stores/newSaleStore'
import type { ListedItem } from '../ListView'
import type { TargetedInputEvent } from 'preact'
import { limit } from '@/lib/utils'

export function UnitPrice ({ id, product: { salePrice }, unitPriceAtMoment }: ListedItem) {
  const updateListedItem = useNewSaleStore((state) => state.updateListedItem)
  const absolutePrice = unitPriceAtMoment ?? salePrice
  const displayPrice = absolutePrice / 100

  function updateUnitPrice (event: TargetedInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget

    if (!value) {
      updateListedItem(id, { unitPriceAtMoment: 0 })
      return  
    }
    
    const parsedValue = Number(value)
    const absoluteValue = limit(0, parsedValue * 100)

    updateListedItem(id, { unitPriceAtMoment: absoluteValue })
  }

  return (
    <label class='input input-xs w-24 text-end text-base-content'>
      $
      <input
        type='number'
        value={displayPrice}
        placeholder={String(salePrice)}
        min='0'
        step={0.01}
        onInput={updateUnitPrice}
      />
    </label>
  )
}
