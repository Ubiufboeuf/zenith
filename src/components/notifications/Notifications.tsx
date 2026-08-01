import { useState } from 'preact/hooks'
import { NotificationsButton } from './NotificationsButton'
import { NotificationsMenu } from './NotificationsMenu'

export function Notifications () {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  
  return (
    <div class='relative'>
      <NotificationsButton onClick={toggleMenu} />
      <NotificationsMenu class={`${isOpen ? 'open' : ''} transition-opacity invisible [.open]:visible opacity-0 [.open]:opacity-100`} />
    </div>
  )
}
