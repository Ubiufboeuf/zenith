import { useDrawerStore } from '@/stores/useDrawerStore'

export interface DrawerAction {
  id: string
  action: () => void
}

const { toggleScannerVisibility } = useDrawerStore.getState()

export const drawerActions: DrawerAction[] = [
  { id: 'scan', action: toggleScannerVisibility }
]

