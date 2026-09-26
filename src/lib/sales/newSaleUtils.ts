import type { ListedItem } from '@/components/sales/new/ListView'

export function calculateLineTotal (item: ListedItem): number {
  const { unitPriceAtMoment, discount, quantity } = item

  const rawTotal = unitPriceAtMoment * quantity

  return rawTotal * (1 - discount / 100)
}

export function calculateLineIva (item: ListedItem): number {
  const total = calculateLineTotal(item)
  const { ivaRate } = item

  const net = total / (1 + ivaRate / 100)

  return total - net
}

export function calculateLineNet (item: ListedItem): number {
  const total = calculateLineTotal(item)
  const { ivaRate } = item

  return total / (1 + ivaRate / 100)
}
