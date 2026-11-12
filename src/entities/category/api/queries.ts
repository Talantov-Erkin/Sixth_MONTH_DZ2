import { useQuery } from '@tanstack/react-query'
import { categoryApi } from './categoryApi'

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getCategories,
  })
