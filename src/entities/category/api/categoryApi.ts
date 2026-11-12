import { apiInstance } from '@/shared/api'
import type { Category } from '../model/types'

export const categoryApi = {
  getCategories: async (): Promise<Category[]> => {
    const { data } = await apiInstance.get<Category[]>('/categories')
    return data
  },
}
