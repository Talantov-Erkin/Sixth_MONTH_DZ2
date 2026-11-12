import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

interface EditProductButtonProps {
  productId: string
}

export const EditProductButton = ({ productId }: EditProductButtonProps) => {
  const navigate = useNavigate()

  return (
    <Button
      type="text"
      icon={<EditOutlined />}
      onClick={() => navigate(ROUTES.productEdit(productId))}
    />
  )
}
