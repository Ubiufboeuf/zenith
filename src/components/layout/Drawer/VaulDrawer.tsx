import { useDrawerStore } from '@/stores/useDrawerStore'
import { Drawer } from 'vaul'
import { DrawerUserCard } from './DrawerUserCard'
import { DrawerTitle } from './DrawerTitle'
import { useUIStore } from '@/stores/useUIStore'

export function VaulDrawer () {
  const isDrawerOpen = useDrawerStore((state) => state.isDrawerOpen)
  const setIsDrawerOpen = useDrawerStore((state) => state.setIsDrawerOpen)
  const isMobile = useUIStore((state) => state.deviceType === 'mobile')
  
  return isMobile && (
    <Drawer.Root open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='h-fit fixed bottom-0 left-0 right-0 outline-none'>
          <Drawer.Title><DrawerTitle /></Drawer.Title>
          <div className='h-fit w-full p-4 bg-card rounded-t-xl'>
            <DrawerUserCard />
            <div class='w-full h-4 flex items-center justify-center px-1'>
              <div class='w-full h-px bg-border' />
            </div>
            <section>
              aaaa
            </section>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
