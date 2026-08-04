import { Select } from '../ui/Select'

const branches = [
  { id: 'branch-1', label: 'Colonia del Sacramento y más texto largo para probar desbordamientos' },
  { id: 'branch-2', label: 'Ruta 21' },
  { id: 'branch-3', label: 'Montevideo' }
]

export function BranchesSelector () {  
  if (branches?.length === 0) {
    return (
      <strong class='my-auto mx-auto text-sm font-bold tracking-wide text-primary uppercase'>Zenith</strong>
    )
  }
  
  return (
    <Select
      class='h-full w-full appearance-none border-neutral-700 shadow-none'
      options={branches}
    />
  )
}
