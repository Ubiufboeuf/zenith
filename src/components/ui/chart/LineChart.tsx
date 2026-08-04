/* eslint-disable react/no-unknown-property */
import type { LineChartProps } from '@/types/ui/chartTypes'
import { useId } from 'preact/hooks'

export function LineChart ({ size, columns, rows, points, pointSize, pointStrokeWidth }: LineChartProps) {
  const id = useId()
  const gradientId = `gradient-${id}`

  const pathD = points.reduce((acc, [x, y], idx) => (
    `${acc ? `${acc} ` : ''}${idx === 0 ? 'M' : 'L'} ${x} ${y}`
  ), '')

  const firstPoint = points[0]
  const lastPoint = points[points.length - 1]

  const areaD = `${pathD} L ${lastPoint[0]} ${size[1]} L ${firstPoint[0]} ${size[1]} Z`

  return (
    <article class='h-full w-full flex flex-col items-center p-8'>
      <svg viewBox={`0 0 ${size.join(' ')}`} class='h-full w-[calc(100%-20px)] border-neutral-700 overflow-visible'>
        <defs>
          <linearGradient id={gradientId} x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stop-color='#6366f1' stop-opacity='0.35' />
            <stop offset='100%' stop-color='#6366f1' stop-opacity='0' />
          </linearGradient>
        </defs>
        
        {/* Guías horizontales */}
        { rows.map((r, idx, arr) => (
          <line
            key={`chart-${id}-line-${r || idx}`}
            x1='0'
            x2={size[0]}
            y1={Math.round(size[1] / arr.length) * (idx) + 0.5}
            y2={Math.round(size[1] / arr.length) * (idx) + 0.5}
            stroke-dasharray='4 4'
            class='stroke-base-content/10'
          />
        )) }

        {/* Sombra */}
        <path d={areaD} fill={`url(#${gradientId})`} />

        {/* Línea principal */}
        <path
          d={pathD}
          fill='none'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='stroke-primary'
        />

        {/* Puntos y columnas */}
        { points.map(([x,y], idx) => <g key={`chart-${id}-point-${x}_${y}`}>
          <circle
            cx={x} cy={y} r={pointSize}
            stroke-width={pointStrokeWidth}
            class='fill-primary stroke-base-100'
          />
          <text x={x} y={size[1] + 16} text-anchor='middle' class='text-xs fill-base-content/50'>{columns[idx]}</text>
        </g>) }
      </svg>
    </article>
  )
}
