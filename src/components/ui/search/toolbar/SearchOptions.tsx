import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { IconDots } from '../../Icons'

export function SearchOptions () {
  return (
    <div class='tooltip tooltip-bottom tooltip-end' data-tip='Opciones de búsqueda'>
      <Button shape='square' fill='ghost'>
        <Icon class='size-4'>
          <IconDots vertical />
        </Icon>
      </Button>
    </div>
  )
}
