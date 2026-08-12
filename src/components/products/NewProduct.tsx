import { Icon } from '../ui/Icon'
import { IconPlus } from '../ui/Icons'
import { LinkButton } from '../ui/LinkButton'

export function NewProduct () {
  return (
    <LinkButton href='/products/new' color='primary'>
      <Icon class='size-4'>
        <IconPlus />
      </Icon>
      Nuevo producto
    </LinkButton>
  )
}
