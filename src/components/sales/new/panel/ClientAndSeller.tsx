import { Button } from '@/components/ui/Button'
import { Select, type SelectOption } from '@/components/ui/Select'
import { mockedCashiers as mockedSellers } from '@/mocks/cashiers'
import { useEffect, useState } from 'preact/hooks'

async function getSellers () {
  const sellers: SelectOption[] = [{ id: 'seller-fallback', label: '- Selecciona un vendedor -', default: true }, ...mockedSellers]
  return sellers
}

export function ClientAndSeller () {
  const [sellerOptions, setSellerOptions] = useState<SelectOption[]>([{ id: 'default', label: '- Selecciona un vendedor -', default: true }])
  const [client] = useState('Poliedro Sánchez')
  
  async function loadSellers () {
    const sellers = await getSellers()
    if (!sellers.length) return

    setSellerOptions(sellers)
  }
  
  useEffect(() => {
    loadSellers()
  }, [])

  return (
    <div class='flex flex-col gap-2'>
      {/* Title */}
      <div class='flex items-center gap-2'>
        <div class='w-4 h-px bg-base-content/20'></div>
        <strong class='w-fit text-sm font-semibold text-base-content/60'>Detalles de la venta</strong>
        <div class='flex-1 h-px bg-base-content/20'></div>
      </div>

      {/* Content */}
      <div class='flex flex-col gap-4'>
        <Select options={sellerOptions} class='select-sm text-base-content [&_option]:text-base-content/70 [&_option]:shr:text-base-content [&_option:checked]:text-base-content [&_option:checked]:font-semibold' />
        <div class='flex flex-col gap-1'>
          <div class='w-full flex items-center justify-between gap-3'>
            <span class='text-sm font-semibold text-base-content/60'>Cliente</span>
            <strong class='text-sm font-semibold line-clamp-2'>{client ?? 'Consumidor final'}</strong>
          </div>
          <Button color='primary' fill='soft'>{client ? 'Cambiar cliente' : 'Buscar cliente'}</Button>
        </div>
        <textarea class='textarea h-fit max-h-52' placeholder='Notas / Observaciones' />
      </div>
    </div>
  )
}
