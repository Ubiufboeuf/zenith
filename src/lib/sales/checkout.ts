import type { SalePayload } from '@/types/sales/saleTypes'
import { createSale } from '../api'
import { useNewSaleStore } from '@/stores/newSaleStore'

export async function checkout () {
  const {
    documentType, saleType, currency,
    subtotal, totalDiscount = 0, generalDiscount = 0, total,
    listedItems, payments
  } = useNewSaleStore.getState()

  const payloadPayments = payments
    .filter((p) => Number(p.amountPaid) > 0)
    .map((p) => ({
      paymentMethod: p.paymentMethod.toUpperCase(),
      currency: p.currency,
      amountPaid: Math.round(Number(p.amountPaid * 100))
    }))
  const totalPayments = payloadPayments.reduce((acc, val) => val.amountPaid + acc, 0)

  if (!documentType || !saleType || !currency || !subtotal || totalPayments < Number(total)) {
    throw new Error('Faltan datos importantes para completar la venta')
  }

  const payload: SalePayload = {
    documentType,
    saleType, 
    currency,
    
    // userId: user?.id || null,
    userId: null,
    // cashierId: user?.id || 'default_cashier', 
    cashierId: 'default_cashier', 
    clientId: null,
    
    subtotal: Math.round(Number(subtotal) * 100),
    totalDiscount: Math.round(Number(totalDiscount) * 100),
    generalDiscount: Math.round(Number(generalDiscount) * 100),
    total: Math.round(Number(total) * 100),
    
    details: listedItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      unitPriceAtMoment: Math.round(Number(item.unitPriceAtMoment * 100)),
      ivaRate: item.ivaRate,
      discount: item.discount,
      currency: item.product.saleCurrency
    })),
    
    payments: payloadPayments
  }
  
  try {
    await createSale(payload)
    // reiniciar la store, por ejemplo (aunque si solo guardas y no quieres salir no debería)
  } catch (err) {
    console.error('Error al guardar:', err)
  }
}
