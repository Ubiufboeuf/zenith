import { Icon } from '@/components/ui/Icon'
import { IconScan } from '@/components/ui/Icons'

interface CodeType {
  id: string
  label: string
  defaultChecked?: boolean
}

const codeTypes: CodeType[] = [
  {
    id: 'internal_barcode',
    label: 'Barras interno',
    defaultChecked: true
  },
  {
    id: 'provider_barcode',
    label: 'Barras proveedor',
    defaultChecked: true
  },
  {
    id: 'internal_qr',
    label: 'QR interno',
    defaultChecked: true
  }
]

export function CodesSection () {
  return (
    <section class='flex flex-col gap-4'>
      <span class='flex items-center justify-center gap-2 w-fit h-fit text-sm text-base-content/70 font-semibold'>
        <Icon class='size-4'>
          <IconScan />
        </Icon>
        Códigos
      </span>
      <div class='flex flex-col'>
        { codeTypes.map(({ id, label, defaultChecked }) => (
          <label key={id} class='flex gap-2 w-full cursor-pointer p-2 rounded-lg transition-colors shr:bg-base-content/5'>
            <input type='checkbox' class='checkbox checkbox-sm checked:checkbox-primary' defaultChecked={defaultChecked} />
            <span class='text-sm'>{label}</span>
          </label>
        )) }
      </div>
    </section>
  )
}
