import type { ButtonProps, State } from '@/types/ui/buttonTypes'
import { Button } from './Button'
import { Icon } from './Icon'
import { LoadingSpinner } from './LoadingSpinner'
import { IconCheck, IconX } from './Icons'
import type { ComponentChildren } from 'preact'

interface Props extends Omit<ButtonProps, 'onClick'> {
  state: State
  applier: () => void
  icon?: () => ComponentChildren
}

export function ButtonWithStates ({ state, applier, icon: ButtonIcon, color, disabled, class: className = '', children }: Props) {
  return <>
    { state === 'idle' && (
      <Button color={color} onClick={applier} disabled={disabled} class={className}>
        { ButtonIcon && <Icon class='size-5'>
          <ButtonIcon />
        </Icon> }
        {children}
      </Button>
    ) }
    { state === 'loading' && (
      <Button color={color} fill='soft' focusable={false} class={className}>
        <Icon class='size-5'>
          <LoadingSpinner />
        </Icon>
        {children}
      </Button>
    ) }
    { state === 'success' && (
      <Button color={color} fill='soft' focusable={false} class={className}>
        <Icon class='size-5'>
          <IconCheck />
        </Icon>
        {children}
      </Button>
    ) }
    { state === 'failure' && (
      <Button color='error' fill='soft' focusable={false} class={className}>
        <Icon class='size-5'>
          <IconX />
        </Icon>
        {children}
      </Button>
    ) }
  </>
}
