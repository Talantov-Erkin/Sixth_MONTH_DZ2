import { useSearchParams } from 'react-router-dom'
import { PRODUCTS_PER_PAGE } from '@/shared/config'
import type { ProductSort, ProductsQuery } from './types'

type ParamKey = 'page' | 'category' | 'sort'

const isProductSort = (value: string | null): value is ProductSort =>
  value === 'price_asc' || value === 'price_desc'

export const useProductsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortParam = searchParams.get('sort')

  const query: ProductsQuery = {
    page: Number(searchParams.get('page')) || 1,
    limit: PRODUCTS_PER_PAGE,
    category: searchParams.get('category') || '',
    sort: isProductSort(sortParam) ? sortParam : '',
  }

  const setParam = (key: ParamKey, value?: string | number | null) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, String(value))
    else next.delete(key)
    if (key !== 'page') next.set('page', '1')
    setSearchParams(next)
  }

  return { query, setParam }
}
