import { waterfall } from '@/events/emitter'
import { closeModal } from '@/stores/modalStore'
import type { ComponentChildren, TargetedMouseEvent } from 'preact'
import { useEffect } from 'preact/hooks'

interface ModalProps {
  modal: string
  children?: ComponentChildren
  onOpen?: () => void
}

export function Modal ({ modal: modalName, children, onOpen }: ModalProps) {
  function hideModal (event: TargetedMouseEvent<HTMLDialogElement>) {
    const modal = event.currentTarget
    const target = event.target

    if (modal === target) {
      closeModal(modalName)
    }
  }

  useEffect(() => {
    function open () {
      onOpen?.()
    }
      
    return waterfall.on(`open-modal:${modalName}`, open)
  }, [modalName, onOpen])
  
  return (
    <dialog
      id={`${modalName}-modal`}
      class='relative h-full w-full max-h-none max-w-none open:flex items-center justify-center m-0 p-0 border-0 outline-0 bg-black/50'
      onClick={hideModal}
    >
      {children}
    </dialog>
  )
}
