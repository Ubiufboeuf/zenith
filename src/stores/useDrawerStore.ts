import { create } from 'zustand'

interface DrawerStore {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isDrawerOpen: boolean) => void

  isScannerVisible: boolean
  setIsScannerVisible: (isScannerVisible: boolean) => void
  toggleScannerVisibility: () => void
}

export const useDrawerStore = create<DrawerStore>((set, get) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),

  isScannerVisible: false,
  setIsScannerVisible: (isScannerVisible) => set({ isScannerVisible }),
  toggleScannerVisibility () {
    const { isScannerVisible, setIsScannerVisible } = get()
    setIsScannerVisible(!isScannerVisible)
  }
}))
