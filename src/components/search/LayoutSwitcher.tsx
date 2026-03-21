import { IconGrid, IconList } from '../ui/Icons'
import { LayoutSwitch } from './LayoutSwitch'

export function LayoutSwitcher () {
  return (
    <div class='flex h-10'>
      <LayoutSwitch class='rounded-l-lg' icon={IconList} />
      <LayoutSwitch class='rounded-r-lg' icon={IconGrid} />
    </div>
  )
}
