import { getProductById } from '@/services/productsService'
import type { Product } from '@/types/dbTypes'
import { useEffect, useState } from 'preact/hooks'

export function ProductInfo ({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | undefined>()

  async function loadProduct () {
    const product = await getProductById(id)
    if (!product) return

    setProduct(product)
  }
  
  useEffect(() => {
    loadProduct()
  }, [])
  
  return (
    <article>
      <h1>{product?.name}</h1>
    </article>
  )
}
