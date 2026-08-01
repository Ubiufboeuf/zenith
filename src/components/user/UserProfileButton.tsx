import { Icon } from '../ui/Icon'

export function UserProfileButton ({ onClick }: { onClick: () => void }) {
  return (
    <button
      title='[Nombre de usuario]'
      class='size-8 flex items-center justify-center cursor-pointer rounded-full'
      onClick={onClick}
    >
      <Icon class='size-8 rounded-full overflow-hidden'>
        <img src='/profile.webp' />
      </Icon>
    </button>
  )
}
