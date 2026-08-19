import { Select, type SelectOption } from '@/components/ui/Select'

const categories: SelectOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'cpu', label: 'Procesadores' },
  { id: 'gpu', label: 'Gráficas' }
]

export function CategoryFilter () {
  return (
    <label class='flex flex-col gap-1 w-60'>
      <span class='text-xs font-semibold text-base-content/50'>Categoría</span>
      <Select
        options={categories}
        class='select-sm'
      />
    </label>
  )
}
