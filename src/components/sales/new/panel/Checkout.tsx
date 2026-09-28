import { Button } from '@/components/ui/Button'
import { useNewSaleStore } from '@/stores/newSaleStore'

export function Checkout () {
  const listedItems = useNewSaleStore((state) => state.listedItems)
  const openCheckoutModal = useNewSaleStore((state) => state.openCheckoutModal)
  
  return (
    <div class='sticky bottom-0 w-full p-4 bg-base-100 border-t border-base-content/20'>
      <Button
        color='primary'
        width='block'
        tabIndex={0}
        disabled={listedItems.length === 0}
        onClick={openCheckoutModal}
      >
        Cobrar
      </Button>
    </div>
  )
}
