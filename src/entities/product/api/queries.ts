import { useQuery } from '@tanstack/react-query'
import type { ProductsQuery } from '../model/types'
import { productKeys } from './keys'
import { productApi } from './productApi'

export const useProducts = (query: ProductsQuery) =>
  useQuery({
    queryKey: productKeys.list(query),
    queryFn: () => productApi.getProducts(query),
  })

export const useProduct = (id: string) =>
  useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productApi.getProductById(id),
    enabled: Boolean(id),
  })
