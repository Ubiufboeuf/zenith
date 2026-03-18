import { create } from 'zustand'

interface TabBarStore {
  activeItem: string | undefined
  setActiveItem: (newActiveItem: string | undefined) => void

  isButtonActive: boolean
  setIsButtonActive: (isButtonActive: boolean) => void
}

export const useTabBarStore = create<TabBarStore>((set) => ({
  activeItem: undefined,
  setActiveItem: (activeItem) => set({ activeItem }),

  isButtonActive: false,
  setIsButtonActive: (isButtonActive) => set({ isButtonActive })
}))
