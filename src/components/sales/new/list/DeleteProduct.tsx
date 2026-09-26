import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconX } from '@/components/ui/Icons'
import type { ListedItem } from '../ListView'
import { useNewSaleStore } from '@/stores/newSaleStore'

export function DeleteProduct ({ id }: ListedItem) {
  const deleteListedItem = useNewSaleStore((state) => state.deleteListedItem)
  
  function handleClick () {
    deleteListedItem(id)
  }
  
  return (
    <Button size='sm' shape='square' fill='soft' color='error' tabIndex={-1} onClick={handleClick}>
      <Icon class='size-4'>
        <IconX />
      </Icon>
    </Button>
  )
}
