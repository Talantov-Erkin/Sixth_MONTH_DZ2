export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  images: string[]
}

export type ProductDraft = Omit<Product, 'id'>

export type ProductSort = 'price_asc' | 'price_desc'

export interface ProductsQuery {
  page: number
  limit: number
  category: string
  sort: ProductSort | ''
}
