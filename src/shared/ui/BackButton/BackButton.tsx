import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.scss'

interface BackButtonProps {
  to: string | number
}

export const BackButton = ({ to }: BackButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (typeof to === 'number') {
      navigate(to)
      return
    }
    navigate(to)
  }

  return (
    <Button
      className={styles.button}
      icon={<ArrowLeftOutlined />}
      onClick={handleClick}
    >
      Назад
    </Button>
  )
}
