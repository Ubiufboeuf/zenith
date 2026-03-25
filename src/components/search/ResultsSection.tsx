import { useProductsStore } from '@/stores/useProductsStore'
import { Result } from './Result'

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
          results?.map((result) => <Result key={`search-result:${result.id}`} {...result} /> )
        ) }
      </div>
    </section>
  )
}
