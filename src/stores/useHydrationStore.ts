import { create } from 'zustand'

interface HydrationStore {
  isMenuOpen: boolean | undefined
  setIsMenuOpen: (isMenuOpen: boolean) => void
  currentPathname: string | undefined
  setCurrentPathname: (pathname: string) => void
}

export const useHydrationStore = create<HydrationStore>((set) => ({
  isMenuOpen: undefined,
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  currentPathname: undefined,
  setCurrentPathname: (currentPathname) => set({ currentPathname })
}))
