import { Link, useLocation } from 'react-router-dom'
import { Badge, Layout, Menu } from 'antd'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useFavoritesStore } from '@/entities/favorite'
import { ROUTES } from '@/shared/config'
import styles from './Header.module.scss'

export const Header = () => {
  const favoritesCount = useFavoritesStore((state) => state.favorites.length)
  const { pathname } = useLocation()

  const menuItems = [
    {
      key: ROUTES.products,
      icon: <ShoppingOutlined />,
      label: <Link to={ROUTES.products}>Каталог</Link>,
    },
    {
      key: ROUTES.favorites,
      icon: <HeartOutlined />,
      label: (
        <Link to={ROUTES.favorites}>
          Избранное <Badge count={favoritesCount} size="small" />
        </Link>
      ),
    },
  ]

  return (
    <Layout.Header className={styles.header}>
      <Link to={ROUTES.products} className={styles.logo}>
        Mini Market
      </Link>
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]}
        items={menuItems}
        className={styles.menu}
      />
    </Layout.Header>
  )
}
