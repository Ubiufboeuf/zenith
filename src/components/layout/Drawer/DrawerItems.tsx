import { DrawerGridLink } from '@/components/layout/Drawer/DrawerGridLink'
import { DrawerListLink } from '@/components/layout/Drawer/DrawerListLink'
import { drawerGridLinks, drawerListLinks, quickActions } from '@/lib/drawerItems'
import { QuickAction } from './QuickAction'

export function DrawerItems () {
  return (
    <section class='flex flex-col gap-2 pb-2'>
      <div class='grid grid-cols-4 gap-2 px-4'>
        { quickActions.map((link) => <QuickAction key={link.id} {...link} /> )}
      </div>
      <div class='grid grid-cols-2 gap-2 px-4'>
        { drawerGridLinks.map((link) => <DrawerGridLink key={link.id} {...link} /> )}
      </div>
      <div class='flex flex-col py-1'>
        { drawerListLinks.map((link) => <DrawerListLink key={link.id} {...link} /> )}
      </div>
    </section>
  )
}
