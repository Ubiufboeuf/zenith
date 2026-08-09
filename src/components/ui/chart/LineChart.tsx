/* eslint-disable react/no-unknown-property */
import type { LineChartProps } from '@/types/ui/chartTypes'
import { useId } from 'preact/hooks'

const paddingX = 24
const paddingY = 24
const textSpace = 24

export function LineChart ({ size, columns, rows, points, pointSize, pointStrokeWidth }: LineChartProps) {
  const id = useId()
  const gradientId = `gradient-${id}`

  const pathD = points.reduce((acc, [x, y], idx) => (
    `${acc ? `${acc} ` : ''}${idx === 0 ? 'M' : 'L'} ${x} ${y}`
  ), '')

  const firstPoint = points[0]
  const lastPoint = points[points.length - 1]

  const [X, Y] = size

  const viewBox = [
    -paddingX,
    -paddingY,
    X + (paddingX * 2),
    Y + paddingY + textSpace
  ].join(' ')

  const areaD = `${pathD} L ${lastPoint[0]} ${Y} L ${firstPoint[0]} ${Y} Z`

  return (
    <article class='h-full w-full flex flex-col items-center overflow-hidden'>
      <svg viewBox={viewBox} class='h-full w-full border-neutral-700 overflow-hidden'>
        <defs>
          <linearGradient id={gradientId} x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stop-color='#6366f1' stop-opacity='0.35' />
            <stop offset='100%' stop-color='#6366f1' stop-opacity='0' />
          </linearGradient>
        </defs>
        
        {/* Guías horizontales */}
        { rows.map((_, idx, arr) => (
          <line
            key={`chart-${id}-line-${idx}`}
            x1='0'
            x2={X}
            y1={Math.round(Y / arr.length) * idx}
            y2={Math.round(Y / arr.length) * idx}
            stroke-dasharray='4'
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

        { points.map(([x, y], idx) => (
          <g key={`chart-${id}-group-${idx}`}>
            <circle
              cx={x} cy={y} r={pointSize}
              stroke-width={pointStrokeWidth}
              class='fill-primary stroke-base-100'
            />
            <text
              x={x}
              y={Y + 16}
              text-anchor='middle'
              class='text-xs fill-base-content/50'
            >
              {columns[idx]}
            </text>
          </g>
        )) }
      </svg>
    </article>
  )
}
