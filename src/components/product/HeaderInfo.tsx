import { useProductStore } from '@/stores/useProductStore'
import { Icon } from '../ui/Icon'
import { IconPackages, IconTag } from '../ui/Icons'

export function HeaderInfo () {
  const product = useProductStore((state) => state.product)
  if (!product) return

  const { name, code, category, stock } = product
  const enoughStock = stock.current > stock.min
  
  return (
    <>
      <h1 title={name} class='col-2 text-lg font-semibold line-clamp-1 text-light not-roomy-lg:hidden'>{name}</h1>
      <div class='col-2 w-full flex items-center gap-2 text-neutral-400 not-roomy-lg:row-span-full not-roomy-ml:hidden'>
        <span class='text-sm'>{code}</span>
        ·
        <span class='w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border bg-dark'>{category}</span>
        <div hidden={enoughStock} title='Stock bajo' class='flex items-center gap-1 text-xs'>
          ·
          <Icon class='size-5 text-orange-400'>
            <IconPackages />
          </Icon>
          <span class='not-roomy-xl:hidden text-orange-400'>Stock bajo</span>
        </div>
        
        <div title='Etiqueta desactualizada' class='flex items-center gap-1 text-xs'>
          ·
          <Icon class='size-5 text-orange-400'>
            <IconTag />
          </Icon>
          <span class='not-roomy-xl:hidden text-orange-400'>Etiqueta desactualizada</span>
        </div>
      </div>
    </>
  )
}
