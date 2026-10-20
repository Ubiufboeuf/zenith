import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconDots, IconPrinter } from '@/components/ui/Icons'

export function SalePrimary () {
  return (
    <div class='flex flex-col gap-2'>
      <div class='w-full h-fit flex items-center justify-between'>
        <span class='font-semibold text-xs text-[10px] text-base-content/60 uppercase tracking-widest'>Venta seleccionada</span>
        <span class='badge badge-success badge-soft text-xs font-semibold'>Completada</span>
      </div>
      <h1 class='text-lg'>Venta #A-3041</h1>
      <span class='text-xs text-base-content/60'>17 oct 2026 · 14:32</span>
      <div class='w-full h-fit flex justify-between items-center gap-2'>
        <Button fill='outline' class='group not-shr:border-base-content/20 text-base-content/60 shr:text-base-content focus-visible:text-base-content flex-1 font-normal'>
          <Icon class='size-5 text-base-content opacity-60 group-shr:opacity-100 group-focus-visible:opacity-100 transition-opacity'>
            <IconPrinter />
          </Icon>
          Imprimir
        </Button>
        <Button fill='outline' shape='square' class='group not-shr:border-base-content/20 text-base-content/60 shr:text-base-content focus-visible:text-base-content'>
          <Icon class='size-5 text-base-content opacity-60 group-shr:opacity-100 group-focus-visible:opacity-100 transition-opacity'>
            <IconDots />
          </Icon>
        </Button>
      </div>
    </div>
  )
}
