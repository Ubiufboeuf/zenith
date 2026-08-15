import type { CSSProperties } from 'preact'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconX } from '../Icons'
import { closeModal } from '@/stores/modalStore'

type x = 'left' | 'center' | 'right'
type y = 'top' | 'middle' | 'bottom'

interface CloseModalProps {
  modal: string
  position?: `${x} ${y}`
  class?: string
}

function getButtonPosition (closeButton: `${x} ${y}`): CSSProperties {
  const [x, y] = closeButton.split(' ')
  const pos: CSSProperties = {}
  const transform: string[] = []

  if (x !== 'center') pos[x] = 0
  else {
    pos.left = '50%'
    transform.push('translateX(-50%)')
  }

  if (y !== 'center') pos[y] = 0
  else {
    pos.top = '50%'
    transform.push('translateY(-50%)')
  }

  if (transform.length) {
    pos.transform = transform.join(', ')
  }
  
  return pos
}

export function CloseModal ({ modal, position = 'right top', class: className = '' }: CloseModalProps) {
  const closeButtonPosition = getButtonPosition(position)
  function hideModal () {
    closeModal(modal)
  }
  
  return (
    <Button className={className} shape='circle' fill='ghost' style={closeButtonPosition} onClick={hideModal}>
      <Icon class='size-6'>
        <IconX />
      </Icon>
    </Button>
  )
}
