import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography } from 'antd'
import { PLACEHOLDER_IMAGE, ROUTES } from '@/shared/config'
import type { Product } from '../../model/types'
import styles from './ProductCard.module.scss'

const { Text } = Typography

interface ProductCardProps {
  product: Product
  actions?: ReactNode[]
}

export const ProductCard = ({ product, actions }: ProductCardProps) => (
  <Card
    hoverable
    cover={
      <img
        alt={product.title}
        src={product.images?.[0] || PLACEHOLDER_IMAGE}
        className={styles.cardImage}
      />
    }
    actions={actions}
  >
    <Card.Meta
      title={<Link to={ROUTES.product(product.id)}>{product.title}</Link>}
      description={<Text strong>${product.price}</Text>}
    />
  </Card>
)
