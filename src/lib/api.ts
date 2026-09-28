import { API_URL } from '@/constants/envConstants'
import type { SalePayload } from '@/types/sales/saleTypes'

export async function createSale (payload: SalePayload) {
  const res = await fetch(`${API_URL}/sales`, {
    method: 'POST',
    body: JSON.stringify(payload)      
  })

  const data = await res.json()
  console.log('Response:', res.status, data)
}
