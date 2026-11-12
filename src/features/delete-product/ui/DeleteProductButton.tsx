import { App, Button, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import type { Product } from '@/entities/product'
import { OWNER_MARK } from '@/shared/config'
import { useDeleteProduct } from '../api/useDeleteProduct'

interface DeleteProductButtonProps {
  product: Product
}

export const DeleteProductButton = ({ product }: DeleteProductButtonProps) => {
  const { message } = App.useApp()
  const deleteMutation = useDeleteProduct()

  const handleConfirm = () => {
    if (!product.title.includes(OWNER_MARK)) {
      message.error('Удалять можно только свои товары!')
      return
    }

    deleteMutation.mutate(product.id, {
      onSuccess: () => message.success('Удалено'),
    })
  }

  return (
    <Popconfirm
      title="Удалить товар?"
      okText="Да"
      cancelText="Нет"
      onConfirm={handleConfirm}
    >
      <Button type="text" danger icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}
