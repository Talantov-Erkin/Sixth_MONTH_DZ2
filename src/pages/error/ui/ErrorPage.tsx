import { Link, useRouteError } from 'react-router-dom'
import { Button, Result } from 'antd'
import { ROUTES } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <Result
      status="error"
      title="Ошибка"
      subTitle={getErrorMessage(error, 'Что-то пошло не так') || 'Что-то пошло не так'}
      extra={
        <Link to={ROUTES.products}>
          <Button type="primary">На главную</Button>
        </Link>
      }
    />
  )
}
