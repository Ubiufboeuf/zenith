import { useProductStore } from '@/stores/useProductStore'
import { Icon } from '../ui/Icon'
import { IconPackages, IconTag } from '../ui/Icons'

export function ProductInfo () {
  const product  = useProductStore((state) => state.product)
  if (!product) return

  const { name, code, category, stock } = product
  const enoughStock = stock.current > stock.min
  
  return (
    <div class='flex flex-col items-center gap-2 p-3 px-8 rounded-xl text-neutral-400 bg-card'>
      <h1 class='text-lg font-semibold text-center text-pretty text-light'>{name}</h1>
      <div class='flex items-center justify-center gap-2'>
        <span class='text-sm'>{code}</span>
        <span class='w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border bg-dark'>{category}</span>
        <div hidden={enoughStock} title='Stock bajo' class='flex items-center gap-1 text-xs text-orange-500/70'>
          <Icon class='stroke-2 size-5'>
            <IconPackages />
          </Icon>
        </div>
        <div title='Etiqueta desactualizada' class='flex items-center gap-1 text-xs text-orange-500/70'>
          <Icon class='stroke-2 size-5'>
            <IconTag />
          </Icon>
        </div>
      </div>
    </div>
  )
}
