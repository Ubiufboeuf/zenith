import { drawerActions, type DrawerAction } from '@/lib/drawerActions'
import { useEffect, useState } from 'preact/hooks'

export function useDrawerAction (id: string) {
  const [action, setAction] = useState<DrawerAction | undefined>()

  useEffect(() => {
    const action = drawerActions.find((a) => a.id === id)
    setAction(action)
  }, [])

  return action
}
