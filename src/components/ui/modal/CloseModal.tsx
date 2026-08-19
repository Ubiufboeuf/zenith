import { Button } from '../Button'
import { closeModal } from '@/stores/modalStore'
import type { ButtonProps } from '@/types/ui/buttonTypes'

interface CloseModalProps extends Omit<ButtonProps, 'onClick'> {
  modal: string
}

export function CloseModal ({ modal, class: className = '', ...rest }: CloseModalProps) {
  function hideModal () {
    closeModal(modal)
  }
  
  return (
    <Button class={className} onClick={hideModal} {...rest} />
  )
}
