import { useState } from 'preact/hooks'
import { UserProfileButton } from './UserProfileButton'
import { UserProfileMenu } from './UserProfileMenu'

export function UserProfile () {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  
  return (
    <div class='relative'>
      <UserProfileButton onClick={toggleMenu} />
      <UserProfileMenu class={`${isOpen ? 'open' : ''} transition-opacity invisible [.open]:visible opacity-0 [.open]:opacity-100`} />
    </div>
  )
}
