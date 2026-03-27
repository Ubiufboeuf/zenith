import type { Product } from '@/types/dbTypes'
import { capitalize } from '@/lib/capitalize'
import { Icon } from '../ui/Icon'
import { IconBox } from '../ui/Icons'

export function Result ({ name, code, category, prices, priceId, stock }: Product) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min

  return (
    <article
      class={`${enoughStock ? 's' : 'ns'} group h-fit xs:h-20 w-full grid grid-cols-[auto_2fr_auto] grid-rows-[44px_auto_44px] xs:grid-cols-[auto_auto_auto_1fr_auto_auto] xs:grid-rows-2 items-center p-4 px-4 gap-x-1 xs:gap-x-4 gap-y-2 rounded-xl border xs:[.ns]:border-l-2 transition-colors border-border xs:[.ns]:border-l-destructive bg-card shr:border-primary/40`}
    >
      <div class='not-xs:col-1 not-xs:row-1 xs:row-span-full size-9 xs:size-11 flex items-center justify-center rounded-lg bg-border/70 group-[.ns]:bg-destructive/15'>
        <Icon class='size-5 xs:size-6 flex items-center justify-center stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>
      <h1 title={name} class='col-span-full xs:col-[2/5] row-2 xs:row-1 line-clamp-2 text-start font-medium text-light'>{capitalize(capitalize(name, '('), ' ')}</h1>
      <span class='row-1 xs:row-2 col-2 xs:col-2 text-sm not-xs:text-center text-neutral-400'>{code}</span>
      <span class='row-1 xs:row-2 xs:col-3 w-fit text-xs not-xs:justify-self-end font-medium rounded p-0.25 px-1 border border-border text-light bg-dark'>{category}</span>
      <strong class='row-3 xs:row-span-full col-3 xs:col-5 text-xl not-xs:justify-self-end text-primary'>{price.currency} {price.value}</strong>
      <div class='row-3 xs:row-span-full col-span-2 xs:col-6 flex xs:flex-col items-center xs:items-end gap-x-2'>
        <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>
        <span class='uppercase text-xs text-neutral-400'>{ enoughStock ? 'En stock' : `Min: ${stock.min}`}</span>
      </div>
    </article>
  )
}
