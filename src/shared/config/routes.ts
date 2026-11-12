export const ROUTES = {
  products: '/',
  product: (id: string) => `/product/${id}`,
  productEdit: (id: string) => `/product/${id}?edit=true`,
  favorites: '/favorites',
} as const

export const ROUTE_PATTERNS = {
  product: 'product/:id',
  favorites: 'favorites',
  notFound: '*',
} as const
