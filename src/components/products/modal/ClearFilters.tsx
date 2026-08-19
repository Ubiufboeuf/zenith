import type { ActiveAction, ProcessState } from '../FilterProductsModal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { IconCheck, IconReload } from '@/components/ui/Icons'

interface Props {
  activeAction: ActiveAction
  clearer: () => void
}

export function ClearFilters ({ activeAction, clearer }: Props) {
  const state: ProcessState = activeAction.type === 'clearing' ? activeAction.state : 'none'
  const disabled = activeAction.type === 'applying' && activeAction.state !== 'none'

  console.log('clearFilters', { activeAction })
  
  return <>
    { state === 'none' && (
      <Button fill='ghost' onClick={clearer} disabled={disabled}>
        <Icon class='size-5'>
          <IconReload />
        </Icon>
        Limpiar
      </Button>
    ) }
    { state === 'loading' && (
      <Button fill='soft' focusable={false}>
        <Icon class='size-5'>
          <LoadingSpinner />
        </Icon>
        Limpiando filtros
      </Button>
    ) }
    { state === 'success' && (
      <Button fill='soft' focusable={false}>
        <Icon class='size-5'>
          <IconCheck />
        </Icon>
        Filtros limpiados
      </Button>
    ) }
  </>
}
