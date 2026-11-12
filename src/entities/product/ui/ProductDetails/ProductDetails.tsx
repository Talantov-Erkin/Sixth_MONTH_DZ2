import { Card, Descriptions, Typography } from 'antd'
import { PLACEHOLDER_IMAGE } from '@/shared/config'
import type { Product } from '../../model/types'
import styles from './ProductDetails.module.scss'

const { Title } = Typography

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => (
  <Card className={styles.card}>
    <div className={styles.productView}>
      <img
        src={product.images?.[0] || PLACEHOLDER_IMAGE}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <Title level={3}>{product.title}</Title>
        <Title level={4} type="success">
          ${product.price}
        </Title>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label="Категория">{product.category}</Descriptions.Item>
          <Descriptions.Item label="Описание">{product.description}</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  </Card>
)
