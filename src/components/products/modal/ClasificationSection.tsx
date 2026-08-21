import { Icon } from '@/components/ui/Icon'
import { IconTag } from '@/components/ui/Icons'
import { Select, type SelectOption } from '@/components/ui/Select'

interface Clasification {
  id: string
  label: string
  options: SelectOption[]
}

const clasifications: Clasification[] = [
  {
    id: 'category',
    label: 'Categoría',
    options: [
      { id: 'any', label: 'Cualquiera', default: true },
      { id: 'gpu', label: 'Gráficas' },
      { id: 'cpu', label: 'Procesadores' },
      { id: 'ram', label: 'Memorias RAM' },
      { id: 'storage', label: 'Almacenamiento' },
      { id: 'motherboard', label: 'Placas madre' },
      { id: 'peripherals', label: 'Periféricos' }
    ]
  },
  {
    id: 'brand',
    label: 'Marca',
    options: [
      { id: 'any', label: 'Cualquiera', default: true },
      { id: 'amd', label: 'AMD' },
      { id: 'intel', label: 'Intel' },
      { id: 'nvidia', label: 'NVIDIA' },
      { id: 'asus', label: 'ASUS' },
      { id: 'msi', label: 'MSI' },
      { id: 'gigabyte', label: 'Gigabyte' },
      { id: 'corsair', label: 'Corsair' }
    ]
  },
  {
    id: 'provider',
    label: 'Proveedor',
    options: [
      { id: 'any', label: 'Cualquiera', default: true },
      { id: 'techstore', label: 'TechStore' },
      { id: 'hardpc', label: 'HardPC' },
      { id: 'computodo', label: 'Computodo' },
      { id: 'mercadopc', label: 'Mercado PC' },
      { id: 'digitalworld', label: 'Digital World' }
    ]
  }
]

export function ClasificationSection () {
  return (
    <section class='flex flex-col gap-4'>
      <span class='flex items-center justify-center gap-2 w-fit h-fit text-sm text-base-content/70 font-semibold'>
        <Icon class='size-4'>
          <IconTag />
        </Icon>
        Clasificación
      </span>
      <div class='flex flex-wrap justify-between gap-2'>
        { clasifications.map(({ id, label, options }, idx) => (
          <label key={id} class='flex flex-col gap-1 w-46' data-first-filter={idx === 0 ? 'firstFilterContainer:1' : undefined}>
            <span class='text-xs text-base-content/50 font-semibold'>{label}</span>
            <Select options={options} class='select-sm' />
          </label>
        )) }
      </div>
    </section>
  )
}
