import { apiInstance } from '@/shared/api'
import type { Product, ProductDraft, ProductsQuery } from '../model/types'

type ServerVersion = 'legacy' | 'v1'

interface PaginatedResponse {
  data: Product[]
}

type ProductsResponse = Product[] | PaginatedResponse

interface ListParams {
  _page: number
  _limit?: number
  _per_page?: number
  _sort?: string
  _order?: string
  category?: string
}

let serverVersionPromise: Promise<ServerVersion> | null = null

const detectServerVersion = (): Promise<ServerVersion> => {
  if (!serverVersionPromise) {
    serverVersionPromise = apiInstance
      .get<ProductsResponse>('/products', { params: { _page: 1 } })
      .then(({ data }): ServerVersion => (Array.isArray(data) ? 'legacy' : 'v1'))
      .catch((error: unknown) => {
        serverVersionPromise = null
        throw error
      })
  }
  return serverVersionPromise
}

const buildListParams = (
  { page, limit, category, sort }: ProductsQuery,
  version: ServerVersion,
): ListParams => {
  const params: ListParams = { _page: page }

  if (category) params.category = category

  if (version === 'legacy') {
    params._limit = limit
    if (sort) {
      const [field, order] = sort.split('_')
      params._sort = field
      params._order = order
    }
  } else {
    params._per_page = limit
    if (sort) {
      const [field, order] = sort.split('_')
      params._sort = order === 'desc' ? `-${field}` : field
    }
  }

  return params
}

export const productApi = {
  getProducts: async (query: ProductsQuery): Promise<Product[]> => {
    const version = await detectServerVersion()
    const params = buildListParams(query, version)
    const { data } = await apiInstance.get<ProductsResponse>('/products', { params })
    return Array.isArray(data) ? data : (data?.data ?? [])
  },

  getProductById: async (id: string): Promise<Product> => {
    const { data } = await apiInstance.get<Product>(`/products/${id}`)
    return data
  },

  createProduct: async (product: ProductDraft): Promise<Product> => {
    const { data } = await apiInstance.post<Product>('/products', product)
    return data
  },

  updateProduct: async ({ id, data: product }: { id: string; data: Product }): Promise<Product> => {
    const { data } = await apiInstance.put<Product>(`/products/${id}`, product)
    return data
  },

  deleteProduct: async (id: string): Promise<void> => {
    await apiInstance.delete(`/products/${id}`)
  },
}
