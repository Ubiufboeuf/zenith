import { useNewSaleStore } from '@/stores/newSaleStore'
import type { ListedItem } from '../ListView'
import { calculateLineNet } from '@/lib/sales/newSaleUtils'
import { formatCurrency } from '@/utils/currencies'

export function LineTotal ({ id }: ListedItem) {
  const listedItem = useNewSaleStore.getState().getListedItem(id)
  if (!listedItem) return <strong class='text-base-content'>0</strong>
  
  const total = calculateLineNet(listedItem)

  return <strong class='text-base-content max-w-60 overflow-x-auto scrollbar-thin'>{formatCurrency(total)}</strong>
}
