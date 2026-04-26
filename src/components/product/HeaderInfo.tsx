import { useProductStore } from '@/stores/useProductStore'
import { Icon } from '../ui/Icon'
import { IconPackages, IconTag } from '../ui/Icons'

export function HeaderInfo () {
  const product = useProductStore((state) => state.product)
  if (!product) return

  const { name, code, category } = product
  
  return (
    <>
      <h1 class='col-2 text-lg font-semibold not-md:hidden not-lg:sidebar-open:hidden text-light'>{name}</h1>
      <div class='not-xs:hidden not-sm:sidebar-open:hidden col-2 not-md:row-span-full not-lg:sidebar-open:row-span-full w-full flex items-center gap-2 text-neutral-400'>
        <span class='text-sm'>{code}</span>
        ·
        <span class='w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border bg-dark'>{category}</span>
        ·
        <div class='flex items-center gap-1 text-xs text-orange-400'>
          <Icon class='size-5'>
            <IconPackages />
          </Icon>
          <span class='not-lg:hidden not-xl:sidebar-open:hidden'>Stock bajo</span>
        </div>
        ·
        <div class='flex items-center gap-1 text-xs text-orange-400'>
          <Icon class='size-5'>
            <IconTag />
          </Icon>
          <span class='not-lg:hidden not-xl:sidebar-open:hidden'>Etiqueta desactualizada</span>
        </div>
      </div>
    </>
  )
}
