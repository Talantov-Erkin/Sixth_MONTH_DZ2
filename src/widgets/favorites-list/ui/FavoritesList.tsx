import { Col, Empty, Row } from 'antd'
import { useFavoritesStore } from '@/entities/favorite'
import { ProductCard } from '@/entities/product'
import { RemoveFavoriteButton } from '@/features/remove-favorite'

export const FavoritesList = () => {
  const favorites = useFavoritesStore((state) => state.favorites)

  if (favorites.length === 0) return <Empty description="Пусто" />

  return (
    <Row gutter={[24, 24]}>
      {favorites.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard
            product={product}
            actions={[<RemoveFavoriteButton key="del" product={product} />]}
          />
        </Col>
      ))}
    </Row>
  )
}
