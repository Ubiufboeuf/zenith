import { quickActions } from '@/lib/drawerItems'
import { QuickAction } from './QuickAction'
import { drawerActions } from '@/lib/drawerActions'

export function QuickActions () {
  return (
    <div class='grid grid-cols-4 gap-2 px-4'>
      { quickActions.map((item) => {
        const action = drawerActions.find((a) => a.id === item.id)?.action ?? item.onClick
        
        return (
          <QuickAction
            key={item.id}
            {...item}
            onClick={action}
          />
        )
      }) }
    </div>
  )
}
