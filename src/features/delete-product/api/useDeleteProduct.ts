import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productApi, productKeys } from '@/entities/product'

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: productApi.deleteProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.all }),
  })
}
