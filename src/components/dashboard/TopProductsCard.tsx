import type { TopProductItem } from '@/types/dashboard/salesTypes'
import { HorizontalBarChart } from '../ui/chart/HorizontalBarChart'
import { Select } from '../ui/Select'
import { formatCurrency } from '@/utils/currencies'

const products: TopProductItem[] = [
  {
    id: 'prod-a',
    name: 'Ryzen 5600G',
    currency: 'UYU',
    totalRevenue: 17000,
    unitsSold: 4,
    category: 'CPU',
    stock: 8
  },
  {
    id: 'prod-c',
    name: 'Ryzen 5600G',
    currency: 'UYU',
    totalRevenue: 17000,
    unitsSold: 4,
    category: 'CPU',
    stock: 8
  },
  {
    id: 'prod-d',
    name: 'Ryzen 5600G',
    currency: 'UYU',
    totalRevenue: 17400,
    unitsSold: 4,
    category: 'CPU',
    stock: 8
  },
  {
    id: 'prod-e',
    name: 'Ryzen 5600G',
    currency: 'UYU',
    totalRevenue: 17400,
    unitsSold: 4,
    category: 'CPU',
    stock: 8
  },
  {
    id: 'prod-b',
    name: 'i7 12700F',
    currency: 'UYU',
    totalRevenue: 21000,
    unitsSold: 5,
    category: 'CPU',
    stock: 8
  }
]

export function TopProductsCard () {
  const sortedProducts = products.sort((a, b) => b.totalRevenue - a.totalRevenue)
  const items = sortedProducts.map((p) => ({
    id: p.id,
    label: p.name,
    value: p.totalRevenue,
    subText: `(${p.unitsSold} un)`,
    barColorClass: 'red',
    formattedValue: formatCurrency(p.totalRevenue)
  }))
  
  return (
    <div class='card h-full w-full flex flex-col gap-4 p-6 border border-neutral-700 bg-base-100'>
      <div class='flex items-center justify-between gap-2 flex-wrap'>
        <span class='px-2 text-md font-bold text-base-content'>Productos más vendidos</span>
        <Select options={[{ id: 'last-week', label: 'Últimos 7 días' }]} class='select-sm w-40' />
      </div>
      <HorizontalBarChart
        items={items}
      />
    </div>
  )
}
