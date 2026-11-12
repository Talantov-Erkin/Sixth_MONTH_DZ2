import { Typography } from 'antd'
import { ROUTES } from '@/shared/config'
import { BackButton } from '@/shared/ui'
import { FavoritesList } from '@/widgets/favorites-list'

const { Title } = Typography

export const FavoritesPage = () => (
  <div>
    <BackButton to={ROUTES.products} />
    <Title level={2}>Избранное</Title>
    <FavoritesList />
  </div>
)
