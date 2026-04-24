import { Icon } from '@/components/ui/Icon'
import { IconBox } from '@/components/ui/Icons'
import type { Product } from '@/database/types/productTypes'

export function Result ({ result: { id, name, code, category, prices, priceId, stock } }: { result: Product }) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min
  const minStockMsg = (`${stock.current}`.length + `${stock.min}`.length) >= 8 ? `/ ${stock.min}` : `min: ${stock.min}`

  return (
    <a href={`/product/${id}`} class={`${enoughStock ? 's' : 'ns'} group w-full h-fit grid grid-cols-[40px_1fr_auto] sm:grid-cols-[40px_auto_auto_1fr_auto_62px] grid-rows-[max-content_1fr_auto] sm:grid-rows-[1fr_auto] items-center gap-3 sm:gap-y-2 p-4 grow-0 overflow-hidden rounded-xl border [.ns]:border-l-2 transition-colors border-border [.ns]:border-l-destructive text-light bg-card shr:border-primary/40`}>
      {/* icono */}
      <div class='sm:row-span-full size-10 flex items-center justify-center rounded-lg bg-border group-[.ns]:bg-destructive/20'>
        <Icon class='size-6 sm:size-5 stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>

      {/* nombre / descripción */}
      <h1 class='col-span-full sm:col-[2/5] row-2 sm:row-1 line-clamp-2 font-semibold'>{name}</h1>

      {/* código */}
      <strong class='col-span-full row-3 sm:col-2 sm:row-2 text-sm font-semibold text-neutral-400'>{code}</strong>

      {/* categoría */}
      <span class='col-3 row-3 sm:row-2 not-sm:justify-self-end w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border text-neutral-400 bg-dark'>{category}</span>

      {/* precio */}
      <strong class='col-3 sm:col-5 sm:row-span-full text-lg text-end text-primary'>{price.currency} {price.value}</strong>
      
      {/* stock */}
      <div class='col-2 row-1 sm:col-6 sm:row-span-full flex sm:flex-col items-center sm:items-end'>
        <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>
        <span class='sm:hidden'>&nbsp;</span>
        <span class='uppercase text-xs text-neutral-400'>{enoughStock ? 'En stock' : minStockMsg}</span>
      </div>
    </a>
  )
}
