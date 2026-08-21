import { closeAllModals, MODALS, openModal } from '@/stores/modalStore'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { IconFilter } from '../../Icons'
import { useEffect, useRef } from 'preact/hooks'
import { waterfall } from '@/events/emitter'

export function Filters () {
  const filterButtonRef = useRef<HTMLElement>()
  
  function showFiltersModal () {
    closeAllModals()
    openModal(MODALS.FILTER_PRODUCTS)
  }

  async function focusFilterButton () {
    if (!filterButtonRef.current) {
      const btn = document.querySelector('#filter-button')
      if (btn instanceof HTMLElement) filterButtonRef.current = btn
    }
    
    const filterButton = filterButtonRef.current
    if (!filterButton) return

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    filterButton.focus()
  }

  useEffect(() => {
    return waterfall.on('close-modal:filter-products', focusFilterButton)
  }, [])

  return (
    <Button id='filter-button' fill='outline' class='not-hover:border-base-content/20' onClick={showFiltersModal}>
      <Icon class='size-4'>
        <IconFilter />
      </Icon>
      Filtrar
    </Button>
  )
}
