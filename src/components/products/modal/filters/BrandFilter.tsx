import { Select, type SelectOption } from '@/components/ui/Select'

const categories: SelectOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'amd', label: 'AMD' },
  { id: 'nvidia', label: 'NVIDIA' }
]

export function BrandFilter () {
  return (
    <label class='flex flex-col gap-1 w-60'>
      <span class='text-xs font-semibold text-base-content/50'>Marca</span>
      <Select
        options={categories}
        class='select-sm'
      />
    </label>
  )
}
