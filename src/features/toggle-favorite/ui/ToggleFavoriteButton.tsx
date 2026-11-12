import { Button } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { useFavoritesStore } from '@/entities/favorite'
import type { Product } from '@/entities/product'

interface ToggleFavoriteButtonProps {
  product: Product
}

export const ToggleFavoriteButton = ({ product }: ToggleFavoriteButtonProps) => {
  const isFavorite = useFavoritesStore((state) =>
    state.favorites.some((item) => item.id === product.id),
  )
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)

  return (
    <Button type="text" onClick={() => toggleFavorite(product)}>
      {isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
    </Button>
  )
}
