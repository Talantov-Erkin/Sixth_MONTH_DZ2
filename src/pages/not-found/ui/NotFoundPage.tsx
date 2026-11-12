import { Link } from 'react-router-dom'
import { Button, Result } from 'antd'
import { ROUTES } from '@/shared/config'

export const NotFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Страница не найдена"
    extra={
      <Link to={ROUTES.products}>
        <Button type="primary">На главную</Button>
      </Link>
    }
  />
)
