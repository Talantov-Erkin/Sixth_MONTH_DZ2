import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useCreateProductModalStore } from '../model/store'

export const CreateProductButton = () => {
  const open = useCreateProductModalStore((state) => state.open)

  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={open}>
      Создать
    </Button>
  )
}
