import { useState } from 'preact/hooks'
import { UserProfileButton } from './UserProfileButton'
import { UserProfileMenu } from './UserProfileMenu'

export function UserProfile () {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  const closeMenu = () => setIsOpen(false )
  
  return (
    <div class='relative'>
      <UserProfileButton onClick={toggleMenu} />
      <UserProfileMenu isOpen={isOpen} hideWith={closeMenu} />
    </div>
  )
}
