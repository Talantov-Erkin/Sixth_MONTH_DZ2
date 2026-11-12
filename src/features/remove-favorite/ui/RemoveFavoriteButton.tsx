import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useFavoritesStore } from '@/entities/favorite'
import type { Product } from '@/entities/product'

interface RemoveFavoriteButtonProps {
  product: Product
}

export const RemoveFavoriteButton = ({ product }: RemoveFavoriteButtonProps) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)

  return (
    <Button
      type="text"
      danger
      icon={<DeleteOutlined />}
      onClick={() => toggleFavorite(product)}
    />
  )
}
