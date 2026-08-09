import { SEGMENT_COLORS } from '@/constants/ui/chartConstants'
import { TrendBadge } from '../ui/badges/TrendBadge'
import { SegmentedBarChart } from '../ui/chart/SegmentedBarChart'
import { Dot } from '../ui/Dot'
import type { CurrencySalesBreakdown } from '@/types/dashboard/salesTypes'

const salesByCurrency: CurrencySalesBreakdown[] = [
  {
    id: 'ventas-en-pesos-uruguayos',
    label: 'Peso uruguayo',
    currency: 'UYU',
    symbol: '$',
    value: '4001',
    percentage: 4001,
    color: 'primary'
  },
  {
    id: 'ventas-en-dolares',
    label: 'Dólar estadounidense',
    currency: 'USD',
    symbol: 'U$S',
    value: '358',
    percentage: 14367.69,
    color: 'info'
  },
  {
    id: 'ventas-en-euros',
    label: 'Euro',
    currency: 'EUR',
    symbol: '€',
    value: '274',
    percentage: 12713.60,
    color: 'success'
  },
  {
    id: 'ventas-en-pesos-argentinos',
    label: 'Peso argentino',
    currency: 'ARS',
    symbol: '$',
    value: '262775',
    percentage: 7093.43,
    color: 'secondary'
  }
]

export function TodaySalesCard () {
  const fullValue = salesByCurrency.reduce((acc, v) => acc + v.percentage, 0)

  return (
    <article class='py-6 px-3 h-full grid grid-rows-[1fr_2fr_7fr]'>
      <div class='h-full px-4 flex items-center justify-between'>
        <span class='text-sm text-base-content/50'>Ventas por divisa</span>
        <TrendBadge label='20.4%' sentiment='positive' class='badge-soft' />
      </div>
      <div class='h-full flex flex-col px-4 py-3 gap-2.5'>
        <SegmentedBarChart segments={salesByCurrency} />
        <div class='h-px border-b border-base-content/20' />
      </div>
      <div class='h-full flex overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/10'>
        <ul class='list w-full h-fit min-h-full'>
          { salesByCurrency.map(({ id, label, currency, color, percentage, symbol, value }) => {
            const fraction = percentage * 100 / fullValue
            const currencyColor = SEGMENT_COLORS[color]
            return (
              <li key={`today-sales-list-item-${id}`} class='list-row'>
                <span title={`${label} (${fraction.toFixed(2)}%)`} class='badge badge-soft'>
                  <Dot class={`size-3 ${currencyColor}`} /> <span class='text-xs'>{currency}</span>
                </span>
                <div class='flex justify-end items-center'>
                  <strong>{symbol} {value}</strong>
                </div>
              </li>
            )
          }) }
        </ul>
      </div>
    </article>
  )
}
