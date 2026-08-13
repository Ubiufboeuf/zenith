import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { IconFilter } from '../../Icons'

export function Filters () {
  return (
    <Button fill='outline' className='not-hover:border-base-content/20'>
      <Icon class='size-4'>
        <IconFilter />
      </Icon>
      Filtrar
    </Button>
  )
}
