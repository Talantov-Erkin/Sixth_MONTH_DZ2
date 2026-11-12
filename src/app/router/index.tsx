import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '@/pages/error'
import { FavoritesPage } from '@/pages/favorites'
import { NotFoundPage } from '@/pages/not-found'
import { ProductPage } from '@/pages/product'
import { ProductsPage } from '@/pages/products'
import { ROUTES, ROUTE_PATTERNS } from '@/shared/config'
import { MainLayout } from '../layouts/MainLayout/MainLayout'

export const router = createBrowserRouter([
  {
    path: ROUTES.products,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: ROUTE_PATTERNS.product, element: <ProductPage /> },
      { path: ROUTE_PATTERNS.favorites, element: <FavoritesPage /> },
      { path: ROUTE_PATTERNS.notFound, element: <NotFoundPage /> },
    ],
  },
])
