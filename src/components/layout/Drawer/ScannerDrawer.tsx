import { useDrawerStore } from '@/stores/useDrawerStore'
import { Drawer } from 'vaul'
import { Scanner } from './Scanner'

export function ScannerDrawer () {
  const isScannerVisible = useDrawerStore((state) => state.isScannerVisible)
  const setIsScannerVisible = useDrawerStore((state) => state.setIsScannerVisible)

  return (
    <Drawer.Root open={isScannerVisible} onClose={() => setIsScannerVisible(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40 backdrop-blur-xs' />
        <Drawer.Content className='h-[70dvh] fixed bottom-0 left-0 right-0 outline-none'>
          <div className='flex flex-col gap-2 h-full p-5 w-full bg-dark rounded-t-xl'>
            <Scanner />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
