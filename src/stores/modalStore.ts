export const MODALS = {
  FILTER_PRODUCTS: 'filter-products'
}

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
}

export function closeModal (name: string) {
  const modal = modals.get(name) ?? getModal(name)
  modal?.close()
}
