import { Button } from '../ui/Button'
import { Dot } from '../ui/Dot'
import { Icon } from '../ui/Icon'
import { IconBell } from '../ui/Icons'

export function NotificationsButton ({ onClick }: { onClick: () => void }) {
  return (
    <Button shape='circle' size='sm' className='relative' fill='ghost' onClick={onClick}>
      <Icon class='size-5 stroke-2 rounded-full overflow-hidden'>
        <IconBell />
      </Icon>
      <Dot class='absolute size-2 right-0 top-0 text-primary' />
    </Button>
  )
}
