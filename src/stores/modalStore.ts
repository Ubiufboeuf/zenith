import { waterfall } from '@/events/emitter'

export const MODALS = {
  FILTER_PRODUCTS: 'filter-products'
} as const

const modals = new Map<string, HTMLDialogElement>()

export function closeAllModals () {
  for (const [, modal] of modals) {
    modal.close()
  }
}

function getModal (name: string) {
  if (typeof document === 'undefined') return

  const modal = document.querySelector(`#${name}-modal`)
  if (!(modal instanceof HTMLDialogElement)) return
  
  modals.set(name, modal)
  return modal
}

export function openModal (name: string) {
  const modal = modals.get(name) ?? getModal(name)
  modal?.showModal()
  waterfall.emit('open-modal', name)
  waterfall.emit(`open-modal:${name}`)
}

export function closeModal (name: string) {
  const modal = modals.get(name) ?? getModal(name)
  modal?.close()
  waterfall.emit('close-modal', name)
  waterfall.emit(`close-modal:${name}`)
}
