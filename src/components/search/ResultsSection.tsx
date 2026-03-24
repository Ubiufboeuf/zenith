import { capitalize } from '@/lib/capitalize'
import { Icon } from '../ui/Icon'
import { IconBox } from '../ui/Icons'
import { useProductsStore } from '@/stores/useProductsStore'

const sortOptions = [
  { id: 'name', label: 'Nombre', selected: true },
  { id: 'price', label: 'Precio', selected: false },
  { id: 'stock', label: 'Stock', selected: false }
]
export function ResultsSection () {
  const results = useProductsStore((state) => state.results)
  const query = useProductsStore((state) => state.search)
  const thereAreResults = useProductsStore((state) => state.thereAreResults)

  return (
    <section class='flex flex-col gap-3'>
      <span class='text-sm text-neutral-500'>18 produtos encontrados</span>
      <div class='flex items-center gap-1'>
        <span class='text-sm text-neutral-500'>Ordenar por:</span>
        { sortOptions.map(({ id, label, selected }) => (
          <button
            key={`sort-option:${id}`}
            class={`${selected ? 'selected' : ''} p-1 px-2 rounded text-xs font-semibold not-[.selected]:cursor-pointer transition-colors text-neutral-500 shr:bg-neutral-800 shr:text-light [.selected]:text-primary [.selected]:bg-primary/10`}
            data-selected={selected}
          >
            {label}
          </button>
        )) }
      </div>
      <div class='grid gap-2'>
        { (thereAreResults === false) ? (
          <h1>No se encontraron resulados para la búsqueda{query ? `: "${query}"` : ''}</h1>
        ) : (
          results?.map(({ id, name, code, category, prices, priceId, stock }) => {
            const price = prices[priceId as keyof typeof prices]
            const enoughStock = stock.current >= stock.min

            return (
              <article
                key={`search-result:${id}`}
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
          } )
        ) }
      </div>
    </section>
  )
}
