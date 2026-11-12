import { Spin } from 'antd'
import styles from './PageLoader.module.scss'

export const PageLoader = () => (
  <div className={styles.center}>
    <Spin size="large" />
  </div>
)
