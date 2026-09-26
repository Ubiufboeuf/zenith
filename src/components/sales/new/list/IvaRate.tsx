import { Select, type SelectOption } from '@/components/ui/Select'
import { useNewSaleStore } from '@/stores/newSaleStore'
import type { ListedItem } from '../ListView'

const ivaOptions: SelectOption[] = [
  { id: '0', label: '0%' },
  { id: '10', label: '10%' },
  { id: '22', label: '22%', default: true }
]

export function IvaRate ({ id }: ListedItem) {
  const setListedItemPrice = useNewSaleStore((state) => state.updateListedItem)

  function changeIvaRate (option: SelectOption) {
    const ivaRate = Number(option.id)
    setListedItemPrice(id, { ivaRate })
  }
  
  return (
    <Select
      options={ivaOptions}
      class='select-xs w-16 text-base-content'
      onChange={changeIvaRate}
    />
  )
}
