import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productApi, productKeys } from '@/entities/product'

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: productApi.updateProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.all }),
  })
}
