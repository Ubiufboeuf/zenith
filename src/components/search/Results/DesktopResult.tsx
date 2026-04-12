import { Icon } from '../../ui/Icon'
import { IconBox } from '../../ui/Icons'
import type { Product } from '@/database/types/productTypes'

export function DesktopResult ({ id, name, code, category, prices, priceId, stock }: Product) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min
  const minStockMsg = (`${stock.current}`.length + `${stock.min}`.length) >= 8 ? `/ ${stock.min}` : `min: ${stock.min}`

  return (
    <a href={`/product/${id}`} class={`${enoughStock ? 's' : 'ns'} group w-full h-fit grid grid-cols-[auto_1fr_auto_62px] grid-rows-[1fr_auto] items-center gap-x-3 gap-y-2 p-4 grow-0 overflow-hidden rounded-xl border [.ns]:border-l-2 transition-colors border-border [.ns]:border-l-destructive text-light bg-card shr:border-primary/40`}>
      <div class='row-span-full size-10 flex items-center justify-center rounded-lg bg-border group-[.ns]:bg-destructive/20'>
        <Icon class='size-5 stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>

      <h1 class='col-[2/3] line-clamp-2 font-semibold'>{name}</h1>

      <div class='col-2 row-2 flex items-center gap-3'>
        <span class='text-sm font-semibold text-neutral-400'>{code}</span>
        <span class='w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border text-neutral-400 bg-dark'>{category}</span>
      </div>

      <strong class='row-span-full text-lg text-end text-primary'>{price.currency} {price.value}</strong>

      <div class='row-span-full flex flex-col items-end'>
        <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>
        <span class='uppercase text-xs text-neutral-400'>{ enoughStock ? 'En stock' : minStockMsg }</span>
      </div>
    </a>
  )
}
