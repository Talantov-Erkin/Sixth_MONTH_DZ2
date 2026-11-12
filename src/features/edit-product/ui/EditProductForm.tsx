import { App, Button, Card, Form, Input, InputNumber } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { Product } from '@/entities/product'
import { OWNER_MARK, ROUTES } from '@/shared/config'
import { useUpdateProduct } from '../api/useUpdateProduct'
import styles from './EditProductForm.module.scss'

interface EditProductFormProps {
  product: Product
}

interface EditProductFormValues {
  title: string
  price: number
}

export const EditProductForm = ({ product }: EditProductFormProps) => {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const updateMutation = useUpdateProduct()

  const handleFinish = (values: EditProductFormValues) => {
    if (!values.title.includes(OWNER_MARK)) {
      message.error(`Нужна фамилия ${OWNER_MARK}!`)
      return
    }

    updateMutation.mutate(
      { id: product.id, data: { ...product, ...values } },
      {
        onSuccess: () => {
          message.success('Обновлено!')
          navigate(ROUTES.products)
        },
      },
    )
  }

  return (
    <Card title="Редактирование" className={styles.card}>
      <Form<EditProductFormValues>
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ title: product.title, price: product.price }}
      >
        <Form.Item name="title" label="Название" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Цена" rules={[{ required: true }]}>
          <InputNumber className={styles.fullWidth} />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={updateMutation.isPending}>
          Сохранить
        </Button>
      </Form>
    </Card>
  )
}
