import type { HorizontalBarChartProps } from '@/types/ui/chartTypes'
import { useId } from 'preact/hooks'
import { Progress } from '../Progress'

export function HorizontalBarChart ({ items, class: className = '' }: HorizontalBarChartProps) {
  const chartId = useId()
  const maxValue = Math.max(...items.map(({ value }) => value))
  
  return (
    <article class={`${className} h-full w-full flex flex-col gap-3`}>
      { items.map(({ id, label, value, formattedValue, subText }) => {
        const val = formattedValue ?? value
        const progress = value / maxValue * 100
        
        return (
          <div key={`hb_chart-${chartId}-item-${id}`} class='h-fit w-full'>
            <div class='h-fit w-full flex justify-between pb-0.5'>
              <span class='text-sm'>{label}</span>
              <div>
                <span class='text-sm font-semibold'>{val}</span>
                <span class='text-sm font-semibold text-primary-content/50'>{val ? ` ${subText}` : subText}</span>
              </div>
            </div>
            <Progress class='h-2 w-full rounded-full text-primary bg-base-200' progress={`${progress}%`} />
          </div>
        )
      }) }
    </article>
  )
}
