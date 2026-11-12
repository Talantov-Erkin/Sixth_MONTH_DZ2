import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productApi, productKeys } from '@/entities/product'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: productApi.createProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.all }),
  })
}
