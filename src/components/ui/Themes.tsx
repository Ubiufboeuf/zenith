import { useState } from 'preact/hooks'
import { Dropdown } from './Dropdown'
import { Button } from './Button'
import { capitalize } from '@/utils/capitalize'
import type { TargetedInputEvent } from 'preact'

export const themes = [
  'light',
  'dark',
  'cupcake',
  'luxury',
  'dracula',
  'autumn',
  'business',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'silk'
]

export function Themes ({ initialTheme }: { initialTheme?: string }) {
  const [isThemesOpen, setIsThemesOpen] = useState(false)
  
  function changeTheme (event: TargetedInputEvent<HTMLInputElement>) {
    const value = event?.currentTarget.value
    if (!value) return

    cookieStore.set('_znt-thm', value)
  }
  
  return <>
    <Button onClick={() => setIsThemesOpen((state) => !state)}>
      Temas
    </Button>
    <Dropdown hideWith={() => setIsThemesOpen(false)} isOpen={isThemesOpen} class='left-4 bottom-15 w-64 h-64 flex flex-col overflow-auto'>
      <div class='menu w-full'>
        { themes.map((theme) => (
          <label key={theme}>
            <input
              type='radio'
              name='theme'
              value={theme}
              class='theme-controller btn btn-block btn-sm btn-ghost justify-start'
              aria-label={capitalize(theme)}
              onInput={changeTheme}
              defaultChecked={initialTheme === theme}
            />
          </label>
        )) }
      </div>
    </Dropdown>
  </>
}
