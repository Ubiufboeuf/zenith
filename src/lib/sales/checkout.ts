import type { SalePayload } from '@/types/sales/saleTypes'
import { createSale } from '../api'
import { useNewSaleStore } from '@/stores/newSaleStore'

export async function checkout () {
  const {
    documentType, saleType, currency,
    subtotal, totalDiscount, generalDiscount, total,
    listedItems, payments
  } = useNewSaleStore.getState()
  
  const payload: SalePayload = {
    documentType,
    saleType, 
    currency,
    
    // userId: user?.id || null,
    userId: null,
    // cashierId: user?.id || 'default_cashier', 
    cashierId: 'default_cashier', 
    clientId: null,
    
    subtotal, 
    totalDiscount: 0,
    generalDiscount: 0,
    total: Number(total),
    
    details: listedItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      unitPriceAtMoment: item.unitPriceAtMoment,
      ivaRate: item.ivaRate,
      discount: item.discount,
      // currency: item.currency
      currency: 'UYU'
    })),
    
    payments: payments
      .filter((p) => Number(p.amountPaid) > 0)
      .map((p) => ({
        paymentMethod: p.paymentMethod,
        currency: p.currency,
        amountPaid: Number(p.amountPaid)
      }))
  }

  try {
    await createSale(payload)
    // reiniciar la store, por ejemplo (aunque si solo guardas y no sales no debería)
  } catch (err) {
    console.error('Error al guardar:', err)
  }
}
