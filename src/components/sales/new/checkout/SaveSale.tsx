import { ButtonWithStates } from '@/components/ui/ButtonWithStates'
import { IconSave } from '@/components/ui/Icons'
import { checkout } from '@/lib/sales/checkout'
import type { ButtonProps, State } from '@/types/ui/buttonTypes'
import { sleep } from '@/utils/time'
import type { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'

interface Props extends ButtonProps {
  children: ComponentChildren
  onSave?: () => void
}

export function SaveSale ({ children, onSave, color, fill, class: className = '', disabled }: Props) {
  const [state, setState] = useState<State>('idle')

  async function applier () {
    setState('loading')
    await sleep(1500)

    let success
    try {
      await checkout()
      success = true
      setState('success')
    } catch (err) {
      console.error('Error al guardar:', err)
      setState('failure')
      success = false
    }

    if (success) {
      console.debug('Se guardó la venta correctamente')
      onSave?.()
    }

    await sleep(2000)
    setState('idle')
  }
  
  return (
    <ButtonWithStates
      state={state}
      applier={applier}
      icon={IconSave}
      color={color}
      fill={fill}
      class={className}
      disabled={disabled}
    >
      { state === 'idle' && <span>{children}</span> }
      { state === 'loading' && <span>Guardando...</span> }
      { state === 'success' && <span>¡Guardado!</span> }
      { state === 'failure' && <span>No se pudo guardar</span> }
    </ButtonWithStates>
  )
}
