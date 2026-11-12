import { create } from 'zustand'

interface CreateProductModalState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useCreateProductModalStore = create<CreateProductModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
