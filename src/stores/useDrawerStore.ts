import { create } from 'zustand'

interface DrawerStore {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isDrawerOpen: boolean) => void
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen })
}))
