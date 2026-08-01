import { useState } from 'preact/hooks'
import { NotificationsButton } from './NotificationsButton'
import { NotificationsMenu } from './NotificationsMenu'

export function Notifications () {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  const closeMenu = () => setIsOpen(false)
  
  return (
    <div class='relative'>
      <NotificationsButton onClick={toggleMenu} />
      <NotificationsMenu isOpen={isOpen} hideWith={closeMenu} />
    </div>
  )
}
