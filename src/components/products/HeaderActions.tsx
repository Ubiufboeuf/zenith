import { Icon } from '../ui/Icon'
import { IconDownload, IconPrint, IconEdit, IconTrash } from '../ui/Icons'
import { HeaderAction } from './HeaderAction'

export function HeaderActions () {
  return (
    <div class='flex items-center gap-1.5'>
      <HeaderAction title='Imprimir etiqueta' class='size-10'>
        <Icon class='size-5 stroke-2'>
          <IconPrint />
        </Icon>
      </HeaderAction>
      <HeaderAction title='Descargar ficha' class='size-10'>
        <Icon class='size-5 stroke-2'>
          <IconDownload />
        </Icon>
      </HeaderAction>
      <HeaderAction title='Editar etiqueta' class='h-10 min-w-10 w-fit lg:px-3 gap-2 text-sm bg-neutral-800/70'>
        <Icon class='size-5 stroke-2'>
          <IconEdit />
        </Icon>
        <span class='not-lg:hidden'>Editar</span>
      </HeaderAction>
      <HeaderAction title='Eliminar etiqueta' class='group h-10 min-w-10 w-fit lg:px-3 gap-2 text-sm text-destructive/80! group-shr:text-destructive! bg-destructive/20 shr:bg-destructive/40!'>
        <Icon class='size-5 stroke-2'>
          <IconTrash />
        </Icon>
        <span class='not-lg:hidden'>Eliminar</span>
      </HeaderAction>
    </div>
  )
}
