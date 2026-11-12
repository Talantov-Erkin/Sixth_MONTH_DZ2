import { App, Form, Input, InputNumber, Modal, Select } from 'antd'
import { useCategories } from '@/entities/category'
import { OWNER_MARK, PLACEHOLDER_IMAGE } from '@/shared/config'
import { useCreateProduct } from '../api/useCreateProduct'
import { useCreateProductModalStore } from '../model/store'

interface CreateProductFormValues {
  title: string
  price: number
  category: string
  description?: string
  image?: string
}

export const CreateProductModal = () => {
  const [form] = Form.useForm<CreateProductFormValues>()
  const { message } = App.useApp()

  const isOpen = useCreateProductModalStore((state) => state.isOpen)
  const close = useCreateProductModalStore((state) => state.close)

  const { data: categories = [] } = useCategories()
  const createMutation = useCreateProduct()

  const handleClose = () => {
    close()
    form.resetFields()
  }

  const handleFinish = (values: CreateProductFormValues) => {
    createMutation.mutate(
      {
        title: values.title,
        price: values.price,
        category: values.category,
        description: values.description || '',
        images: [values.image || PLACEHOLDER_IMAGE],
      },
      {
        onSuccess: () => {
          message.success('Товар создан!')
          handleClose()
        },
        onError: () => message.error('Не удалось создать товар'),
      },
    )
  }

  return (
    <Modal
      title="Новый товар"
      open={isOpen}
      onCancel={handleClose}
      onOk={() => form.submit()}
      okText="Создать"
      cancelText="Отмена"
      confirmLoading={createMutation.isPending}
      destroyOnHidden
      forceRender
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ title: `${OWNER_MARK} ` }}
      >
        <Form.Item
          name="title"
          label="Название"
          rules={[
            { required: true, message: 'Введите название' },
            {
              validator: (_, value: string | undefined) =>
                !value || value.includes(OWNER_MARK)
                  ? Promise.resolve()
                  : Promise.reject(new Error(`Название должно содержать ${OWNER_MARK}`)),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Цена"
          rules={[{ required: true, message: 'Введите цену' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="category"
          label="Категория"
          rules={[{ required: true, message: 'Выберите категорию' }]}
        >
          <Select
            placeholder="Выберите категорию"
            options={categories.map((category) => ({
              label: category.name,
              value: category.name,
            }))}
          />
        </Form.Item>

        <Form.Item name="description" label="Описание">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item name="image" label="Ссылка на картинку">
          <Input placeholder={PLACEHOLDER_IMAGE} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
