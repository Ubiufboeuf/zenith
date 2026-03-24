import { useEffect } from 'preact/hooks'
import { getProducts } from '@/services/productsServices'
import { useProductsStore } from '@/stores/useProductsStore'

export function LoadProducts () {
  const products = useProductsStore((state) => state.products)
  const setProducts = useProductsStore((state) => state.setProducts)
  
  async function loadProducts () {
    const products = await getProducts()
    if (!products) return

    setProducts(products)
  }
  
  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    console.log('products:', products)
  }, [products])
}
