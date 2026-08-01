import type { MenuProps } from '@/types/ui/menuTypes'
import type { ReactNode } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'

interface DropdownProps extends MenuProps {
  children?: ReactNode
}

export function Dropdown ({ class: className, isOpen, hideWith, children }: DropdownProps) {
  const menuRef = useRef<HTMLElement>(null)
  
  function handleClickWindow (event: PointerEvent) {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    
    const closestMenu = target.closest('.dropdown')
    const menu = menuRef.current
    
    if (menu === closestMenu) return
    
    hideWith()
  }
  
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickWindow)
    }

    return () => window.removeEventListener('click', handleClickWindow)
  }, [isOpen])
  
  return (
    <section ref={menuRef} class={`${className} ${isOpen ? 'open' : ''} dropdown absolute rounded-lg border border-neutral-700 bg-base-300 transition-[opacity,visibility] invisible [.open]:visible opacity-0 [.open]:opacity-100`}>
      {children}
    </section>
  )
}
