import { Pagination } from 'antd'
import { useProducts, useProductsSearchParams } from '@/entities/product'
import styles from './ProductsPagination.module.scss'

export const ProductsPagination = () => {
  const { query, setParam } = useProductsSearchParams()
  const { data: products = [] } = useProducts(query)

  const { page, limit } = query
  const total =
    products.length < limit ? (page - 1) * limit + products.length : page * limit + 1

  return (
    <div className={styles.pagination}>
      <Pagination
        current={page}
        pageSize={limit}
        total={total}
        showSizeChanger={false}
        onChange={(newPage) => setParam('page', newPage)}
      />
    </div>
  )
}
