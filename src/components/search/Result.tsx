import { Icon } from '@/components/ui/Icon'
import { IconBox } from '@/components/ui/Icons'
import type { Product } from '@/database/types/productTypes'

export function Result ({ result: { id, name, code, category, prices, priceId, stock } }: { result: Product }) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min
  const minStockMsg = (`${stock.current}`.length + `${stock.min}`.length) >= 8 ? `/ ${stock.min}` : `min: ${stock.min}`

  return (
    <a href={`/product/${id}`} class={`${enoughStock ? 's' : 'ns'} group w-full h-fit grid grid-cols-[40px_1fr_auto] xs:grid-cols-[40px_auto_auto_1fr_62px] grid-rows-[max-content_1fr_auto] xs:grid-rows-[1fr_auto] items-center gap-3 xs:gap-y-2 p-4 grow-0 overflow-hidden rounded-xl border [.ns]:border-l-2 transition-colors border-border [.ns]:border-l-destructive text-light bg-card shr:border-primary/40`}>
      {/* icono */}
      <div class='xs:row-span-full size-10 flex items-center justify-center rounded-lg bg-border group-[.ns]:bg-destructive/20'>
        <Icon class='size-6 xs:size-5 stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>

      {/* nombre / descripción */}
      <h1 class='col-span-full xs:col-[2/5] row-2 xs:row-1 line-clamp-2 font-semibold'>{name}</h1>

      {/* código */}
      <strong class='col-span-full row-3 xs:col-2 xs:row-2 text-sm font-semibold text-neutral-400'>{code}</strong>

      {/* categoría */}
      <span class='col-3 row-3 xs:row-2 not-sm:justify-self-end w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border text-neutral-400 bg-dark'>{category}</span>

      {/* precio */}
      <strong class='col-3 xs:col-4 xs:row-span-full text-lg text-end text-primary'>{price.currency} {price.value}</strong>
      
      {/* stock */}
      <div class='col-2 row-1 xs:col-5 xs:row-span-full flex xs:flex-col items-center xs:items-end'>
        <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>
        <span class='xs:hidden'>&nbsp;</span>
        <span class='uppercase text-xs text-neutral-400'>{enoughStock ? 'En stock' : minStockMsg}</span>
      </div>
    </a>
  )
}
