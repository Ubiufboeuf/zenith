import { Icon } from '../../ui/Icon'
import { IconBox } from '../../ui/Icons'
import type { Product } from '@/types/dbTypes'

export function MobileResult ({ name, code, category, prices, priceId, stock }: Product) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min
  const minStockMsg = (`${stock.current}`.length + `${stock.min}`.length) >= 8 ? `/ ${stock.min}` : `min: ${stock.min}`

  return (
    <article class={`${enoughStock ? 's' : 'ns'} group w-full h-fit grid grid-cols-[auto_1fr] grid-rows-[max-content_1fr_auto] items-center gap-3 p-4 grow-0 overflow-hidden rounded-xl border [.ns]:border-l-2 transition-colors border-border [.ns]:border-l-destructive text-light bg-card shr:border-primary/40`}>
      <div class='size-10 flex items-center justify-center rounded-lg bg-border group-[.ns]:bg-destructive/20'>
        <Icon class='size-6 stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>

      <div class='flex items-center justify-between'>
        <div class='self-center flex items-center flex-wrap'>
          <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>&nbsp;
          <span class='uppercase text-xs text-neutral-400'>{ enoughStock ? 'En stock' : minStockMsg }</span>
        </div>
        <strong class='text-lg text-end text-primary'>{price.currency} {price.value}</strong>
      </div>
      
      <h1 class='col-span-full line-clamp-2 font-semibold'>{name}</h1>
      
      <div class='col-span-full flex items-center justify-between flex-wrap gap-1'>
        <span class='text-sm font-semibold text-neutral-400'>{code}</span>
        <span class='w-fit text-xs font-medium p-0.25 px-1 rounded-sm border border-border text-neutral-400 bg-dark'>{category}</span>
      </div>
    </article>
  )
}
