import { create } from 'zustand'

interface SidebarStore {
  isSidebarOpen: boolean | undefined
  setIsSidebarOpen: (isOpen: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: undefined,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen })
}))
