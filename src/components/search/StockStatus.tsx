import { useProductsStore } from '@/stores/useProductsStore'
import { Icon } from '../ui/Icon'
import { IconChart2 } from '../ui/Icons'

export function StockStatus () {
  const lowStockVisible = useProductsStore((state) => state.lowStockVisible)
  const setLowStockVisible = useProductsStore((state) => state.setLowStockVisible)
  
  function toggleLowStockVisibility () {
    setLowStockVisible(!lowStockVisible)
  }
  
  return (
    <button
      class={`${lowStockVisible ? 'low-stock' : ''} relative h-10 w-fit flex items-center justify-center gap-2 text-sm px-3 rounded-lg cursor-pointer border transition-colors border-border text-light [.low-stock]:bg-primary [.low-stock]:text-accent shr:bg-border`}
      onClick={toggleLowStockVisibility}
    >
      <Icon class='size-5 stroke-2'>
        <IconChart2 />
      </Icon>
      <strong>Stock bajo</strong>
    </button>
  )
}
