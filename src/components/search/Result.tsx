import type { Product } from '@/types/dbTypes'
import { capitalize } from '@/lib/capitalize'
import { Icon } from '../ui/Icon'
import { IconBox } from '../ui/Icons'

export function Result ({ name, code, category, prices, priceId, stock }: Product) {
  const price = prices[priceId as keyof typeof prices]
  const enoughStock = stock.current >= stock.min

  return (
    <article
      class={`${enoughStock ? 's' : 'ns'} group h-20 w-full grid grid-cols-[auto_auto_auto_1fr_auto_auto] grid-rows-2 items-center p-4 px-4 gap-x-4 gap-y-2 rounded-xl border [.ns]:border-l-2 transition-colors border-border [.ns]:border-l-destructive bg-card shr:border-primary/40`}
    >
      <div class='row-span-full size-11 flex items-center justify-center rounded-lg bg-border/70 group-[.ns]:bg-destructive/15'>
        <Icon class='size-5s flex items-center justify-center stroke-2 text-neutral-500 group-[.ns]:text-destructive'>
          <IconBox />
        </Icon>
      </div>
      <h1 title={name} class='col-[2/5] line-clamp-1 text-start font-medium text-light'>{capitalize(capitalize(name, '('), ' ')}</h1>
      <span class='row-2 col-2 text-sm text-neutral-500'>{code}</span>
      <span class='row-2 col-3 w-fit text-xs font-medium rounded p-0.25 px-1 border border-border text-light bg-dark'>{category}</span>
      <strong class='row-span-full col-5 text-xl text-primary'>{price.currency} {price.value}</strong>
      <div class='row-span-full col-6 flex flex-col items-end'>
        <span class='font-semibold group-[.ns]:text-destructive'>{stock.current}</span>
        <span class='uppercase text-xs text-neutral-500'>{ enoughStock ? 'En stock' : `Min: ${stock.min}`}</span>
      </div>
    </article>
  )
}
