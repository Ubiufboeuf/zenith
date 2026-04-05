import { useEffect } from 'preact/hooks'
import { loadProducts } from '@/services/productsService'
import { useProductsStore } from '@/stores/useProductsStore'

export function LoadProducts () {
  const setProducts = useProductsStore((state) => state.setProducts)
  
  useEffect(() => {
    loadProducts()
      .then(setProducts)
  }, [])
}
