import type { ProductsQuery } from '../model/types'

export const productKeys = {
  all: ['products'] as const,
  list: (query: ProductsQuery) => ['products', 'list', query] as const,
  detail: (id: string) => ['products', 'detail', id] as const,
}
