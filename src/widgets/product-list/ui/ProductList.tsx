import { Col, Empty, Row } from 'antd'
import { ProductCard, useProducts, useProductsSearchParams } from '@/entities/product'
import { DeleteProductButton } from '@/features/delete-product'
import { EditProductButton } from '@/features/edit-product'
import { ToggleFavoriteButton } from '@/features/toggle-favorite'
import { getErrorMessage } from '@/shared/lib'
import { PageLoader } from '@/shared/ui'

export const ProductList = () => {
  const { query } = useProductsSearchParams()
  const { data: products = [], isLoading, isError, error } = useProducts(query)

  if (isLoading) return <PageLoader />

  if (isError) {
    return <Empty description={`Не удалось загрузить товары: ${getErrorMessage(error)}`} />
  }

  if (products.length === 0) return <Empty description="Товаров нет" />

  return (
    <Row gutter={[24, 24]}>
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard
            product={product}
            actions={[
              <ToggleFavoriteButton key="fav" product={product} />,
              <EditProductButton key="edit" productId={product.id} />,
              <DeleteProductButton key="del" product={product} />,
            ]}
          />
        </Col>
      ))}
    </Row>
  )
}
