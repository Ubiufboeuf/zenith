import { SEGMENT_COLORS } from '@/constants/ui/chartConstants'
import type { SegmentBarChartProps } from '@/types/ui/chartTypes'

export function SegmentedBarChart ({ segments }: SegmentBarChartProps) {
  const fullValue = segments.reduce((acc, v) => acc + v.percentage, 0)
  
  return (
    <div class='w-full h-full flex items-center rounded-full overflow-hidden bg-transparent'>
      { segments.map(({ id, label, percentage, color }) => {
        const segmentColor = (color ? SEGMENT_COLORS[color] : '') || color
        const fraction = percentage * 100 / fullValue
        const width = `${fraction}%`

        return (
          <div 
            key={`dashboard-segment-${id}`}
            title={`${label} (${fraction.toFixed(2)}%)`}
            class={`${segmentColor} flex h-full`}
            style={{ width }}
          />
        )
      }) }
    </div>
  )
}
