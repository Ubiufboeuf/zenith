import { closeAllModals, MODALS, openModal } from '@/stores/modalStore'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { IconFilter } from '../../Icons'

export function Filters () {
  function showFiltersModal () {
    closeAllModals()
    openModal(MODALS.FILTERS)
  }

  return (
    <Button fill='outline' className='not-hover:border-base-content/20' onClick={showFiltersModal}>
      <Icon class='size-4'>
        <IconFilter />
      </Icon>
      Filtrar
    </Button>
  )
}
