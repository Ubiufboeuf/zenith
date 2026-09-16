import type { UISizes } from '@/types/uiTypes'
import { useEffect } from 'preact/compat'

interface KeybindsProps {
  keys: string
  size?: 'sm' | 'md' | 'lg'
  onBind?: (event: KeyboardEvent) => void
  onRelease?: (event: KeyboardEvent) => void
  when?: boolean | (() => boolean)
  relax?: 'any-special'
  class?: string
  hidden?: boolean
}

const KEYBIND_SIZES: Record<UISizes, string> = {
  xs: 'kbd-xs',
  sm: 'kbd-sm',
  md: 'kbd-md',
  lg: 'kbd-lg',
  xl: 'kbd-xl'
}

export function Keybinds ({ keys, size = 'sm', onBind, onRelease, when = true, relax, class: className = '', hidden }: KeybindsProps) {
  const kbdSize = size ? KEYBIND_SIZES[size] : ''
  
  function handleKey (event: KeyboardEvent, type: 'bind' | 'release') {
    const isAllowed = typeof when === 'function' ? when() : when
    if (!isAllowed) return
    
    const keyArray = keys.toLowerCase().split(/[\s]+/)

    const requiresCtrl = keyArray.includes('ctrl') || keyArray.includes('control')
    const requiresShift = keyArray.includes('shift')
    const requiresAlt = keyArray.includes('alt')
    const requiresMeta = keyArray.includes('cmd') || keyArray.includes('meta') || keyArray.includes('command')
    
    let mainKeys = [...keyArray]

    if (relax !== 'any-special') {
      if (event.ctrlKey !== requiresCtrl) return
      if (event.shiftKey !== requiresShift) return
      if (event.altKey !== requiresAlt) return
      if (event.metaKey !== requiresMeta) return
      
      const modifierNames = ['ctrl', 'control', 'shift', 'alt', 'cmd', 'meta', 'command']
      mainKeys = keyArray.filter(k => !modifierNames.includes(k))
    }

    if (mainKeys.includes(event.key.toLowerCase())) {
      event.preventDefault()
      if (type === 'bind') onBind?.(event)
      if (type === 'release') onRelease?.(event)
    }
  }
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleKey(event, 'bind')
    const handleKeyUp = (event: KeyboardEvent) => handleKey(event, 'release')

    if (onBind) window.addEventListener('keydown', handleKeyDown)
    if (onRelease) window.addEventListener('keyup', handleKeyUp)
    return () => {
      if (onBind) window.removeEventListener('keydown', handleKeyDown)
      if (onRelease) window.removeEventListener('keyup', handleKeyUp)
    }
  }, [keys, onBind, onRelease, when])

  const displayKeys = keys.split(/[\s+]+/)

  return (
    <span class={`${className} flex items-center gap-1 pointer-events-none select-none pointer-coarse:hidden`} hidden={hidden}>
      { displayKeys.map((k, i) => <kbd key={`${k}-${i}`} class={`kbd ${kbdSize}`}>{k}</kbd>) }
    </span>
  )
}
