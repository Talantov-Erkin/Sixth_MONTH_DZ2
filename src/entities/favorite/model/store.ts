import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/entities/product/@x/favorite'

interface FavoritesState {
  favorites: Product[]
  toggleFavorite: (product: Product) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (product) => {
        const { favorites } = get()
        const isExist = favorites.some((item) => item.id === product.id)
        set({
          favorites: isExist
            ? favorites.filter((item) => item.id !== product.id)
            : [...favorites, product],
        })
      },
    }),
    { name: 'favorites-storage' },
  ),
)
