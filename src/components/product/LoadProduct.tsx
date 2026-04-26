import { getProductById } from '@/services/productsService'
import { useProductStore } from '@/stores/useProductStore'
import { useEffect } from 'preact/hooks'

export function LoadProduct ({ id }: { id: string }) {
  const setProduct = useProductStore((state) => state.setProduct)

  useEffect(() => {
    getProductById(id)
      .then((product) => setProduct(product))
  }, [])
}
