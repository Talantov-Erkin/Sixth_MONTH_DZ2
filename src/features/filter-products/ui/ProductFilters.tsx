import { Select, Space } from 'antd'
import { useCategories } from '@/entities/category'
import { useProductsSearchParams } from '@/entities/product'
import styles from './ProductFilters.module.scss'

const SORT_OPTIONS = [
  { label: 'Цена (по возрастанию)', value: 'price_asc' },
  { label: 'Цена (по убыванию)', value: 'price_desc' },
]

export const ProductFilters = () => {
  const { query, setParam } = useProductsSearchParams()
  const { data: categories = [] } = useCategories()

  return (
    <Space wrap className={styles.filters}>
      <Select
        placeholder="Категория"
        allowClear
        className={styles.select}
        value={query.category || undefined}
        onChange={(value?: string) => setParam('category', value)}
        options={categories.map((category) => ({
          label: category.name,
          value: category.name,
        }))}
      />
      <Select
        placeholder="Сортировка"
        allowClear
        className={styles.select}
        value={query.sort || undefined}
        onChange={(value?: string) => setParam('sort', value)}
        options={SORT_OPTIONS}
      />
    </Space>
  )
}
