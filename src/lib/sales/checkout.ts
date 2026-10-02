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
      paymentMethod: p.paymentMethod,
      currency: p.currency,
      amountPaid: Number(p.amountPaid)
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
    
    subtotal: Number(subtotal),
    totalDiscount,
    generalDiscount,
    total: Number(total),
    
    details: listedItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      unitPriceAtMoment: item.unitPriceAtMoment,
      ivaRate: item.ivaRate,
      discount: item.discount,
      // currency: item.currency
      currency: 'UYU' // <- este es temporal
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
