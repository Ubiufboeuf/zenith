import { salesByCurrency } from '@/components/dashboard/TodaySalesCard'
import { TrendBadge } from '../badges/TrendBadge'
import { SegmentedBarChart } from '../chart/SegmentedBarChart'
import { Dot } from '../Dot'
import { SEGMENT_COLORS } from '@/constants/ui/chartConstants'

export function MobileTodaySalesCard () {
  return (
    <article class='card flex flex-col gap-2 h-full w-full min-w-full p-4'>
      <div class='w-full flex justify-between items-center'>
        <span class='text-sm font-semibold text-base-content'>Ventas por divisa</span>
        <TrendBadge label='20.4%' sentiment='positive' class='border-none bg-transparent p-0' />
      </div>
      <div class='h-6 w-full'>
        <SegmentedBarChart segments={salesByCurrency} />
      </div>
      <div class='h-full w-full grid grid-cols-2 grid-rows-2 gap-x-4'>
        { salesByCurrency.map(({ id, color, currency, symbol, value }) => {
          const currencyColor = SEGMENT_COLORS[color]
          return (
            <div key={`mobile-today-sales-${id}`} class='flex items-center h-full w-full'>
              <span class='badge badge-soft'>
                <Dot class={`${currencyColor} size-3`} />
                <span class='text-xs'>{currency}</span>
              </span>
              <strong class='text-xs text-end w-full'>{symbol} {value}</strong>
            </div>
          )
        }) }
      </div>
    </article>
  )
}
