import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { Header } from '@/widgets/header'
import styles from './MainLayout.module.scss'

export const MainLayout = () => (
  <Layout className={styles.layout}>
    <Header />
    <Layout.Content className={styles.content}>
      <Outlet />
    </Layout.Content>
  </Layout>
)
