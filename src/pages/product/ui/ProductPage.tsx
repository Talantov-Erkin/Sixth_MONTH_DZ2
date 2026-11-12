import { useParams, useSearchParams } from 'react-router-dom'
import { Empty } from 'antd'
import { ProductDetails, useProduct } from '@/entities/product'
import { EditProductForm } from '@/features/edit-product'
import { BackButton, PageLoader } from '@/shared/ui'

export const ProductPage = () => {
  const { id = '' } = useParams()
  const [searchParams] = useSearchParams()
  const isEditMode = searchParams.get('edit') === 'true'

  const { data: product, isLoading, isError } = useProduct(id)

  const renderContent = () => {
    if (isLoading) return <PageLoader />
    if (isError || !product) return <Empty description="Товар не найден" />
    return isEditMode ? <EditProductForm product={product} /> : <ProductDetails product={product} />
  }

  return (
    <div>
      <BackButton to={-1} />
      {renderContent()}
    </div>
  )
}
