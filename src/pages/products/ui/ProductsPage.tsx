import { Typography } from 'antd'
import { CreateProductButton, CreateProductModal } from '@/features/create-product'
import { ProductFilters } from '@/features/filter-products'
import { ProductsPagination } from '@/features/products-pagination'
import { ProductList } from '@/widgets/product-list'
import styles from './ProductsPage.module.scss'

const { Title } = Typography

export const ProductsPage = () => (
  <div>
    <CreateProductModal />

    <div className={styles.header}>
      <Title level={2}>Каталог</Title>
      <CreateProductButton />
    </div>

    <ProductFilters />
    <ProductList />
    <ProductsPagination />
  </div>
)
