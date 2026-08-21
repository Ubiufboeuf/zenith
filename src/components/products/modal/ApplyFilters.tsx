import type { ActiveAction, ProcessState } from '../FilterProductsModal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { IconCheck } from '@/components/ui/Icons'

interface Props {
  activeAction: ActiveAction
  applier: () => void
}

export function ApplyFilters ({ activeAction, applier }: Props) {
  const state: ProcessState = activeAction.type === 'applying' ? activeAction.state : 'none'
  const disabled = activeAction.type === 'clearing' && activeAction.state !== 'none'
  
  return <>
    { state === 'none' && (
      <Button color='primary' onClick={applier} disabled={disabled}>
        Aplicar filtros
      </Button>
    ) }
    { state === 'loading' && (
      <Button color='primary' fill='soft' focusable={false}>
        <Icon class='size-5'>
          <LoadingSpinner />
        </Icon>
        Aplicando filtros
      </Button>
    ) }
    { state === 'success' && (
      <Button color='primary' fill='soft' focusable={false}>
        <Icon class='size-5'>
          <IconCheck />
        </Icon>
        Filtros aplicados
      </Button>
    ) }
  </>
}
