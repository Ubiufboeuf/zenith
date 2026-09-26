import type { ListedItem } from '@/components/sales/new/ListView'

export function calculateLineTotal (item: ListedItem, applyDiscount?: boolean): number {
  const { unitPriceAtMoment, discount, quantity } = item

  const rawTotal = unitPriceAtMoment * quantity

  if (!applyDiscount) return rawTotal
  return rawTotal * (1 - discount / 100)
}

export function calculateLineIva (item: ListedItem, applyDiscount?: boolean): number {
  const total = calculateLineTotal(item, applyDiscount)
  const { ivaRate } = item

  const net = total / (1 + ivaRate / 100)

  return total - net
}

export function calculateLineNet (item: ListedItem, applyDiscount?: boolean): number {
  const total = calculateLineTotal(item, applyDiscount)
  const { ivaRate } = item

  return total / (1 + ivaRate / 100)
}
