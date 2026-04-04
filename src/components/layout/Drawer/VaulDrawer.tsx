import { useDrawerStore } from '@/stores/useDrawerStore'
import { Drawer } from 'vaul'
import { DrawerUserCard } from './DrawerUserCard'
import { DrawerTitle } from './DrawerTitle'
import { useUIStore } from '@/stores/useUIStore'
import { DrawerItems } from './DrawerItems'
import { ScannerDrawer } from './ScannerDrawer'

const snapPoints = ['400px', 1]

export function VaulDrawer () {
  const isDrawerOpen = useDrawerStore((state) => state.isDrawerOpen)
  const setIsDrawerOpen = useDrawerStore((state) => state.setIsDrawerOpen)
  const isScannerVisible = useDrawerStore((state) => state.isScannerVisible)
  const isMobile = useUIStore((state) => state.deviceType === 'mobile')
  
  return isMobile && (
    <Drawer.Root snapPoints={snapPoints} fadeFromIndex={0} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40 backdrop-blur-xs' />
        <Drawer.Content className='h-fit fixed bottom-0 left-0 right-0 outline-none'>
          <Drawer.Title><DrawerTitle /></Drawer.Title>
          <div className='flex flex-col gap-2 h-fit w-full bg-dark rounded-t-xl'>
            <DrawerUserCard />
            <div class='w-full h-2 flex items-center justify-center px-4'>
              <div class='w-full h-px bg-border' />
            </div>
            <DrawerItems />
            { isScannerVisible && <ScannerDrawer /> }
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
