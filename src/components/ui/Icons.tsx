/* eslint-disable react/no-unknown-property */
import type { SVGProps } from '@/types/ui/iconTypes'

const Svg = ({
  children, id, viewBox = '0 0 24 24',
  class: className, hidden,
  width = '24', height = '24',
  fill = 'transparent', stroke = 'currentColor', strokeWidth, strokeLinecap, strokeLinejoin
}:
  SVGProps
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id={id}
    viewBox={viewBox}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    stroke-width={strokeWidth}
    stroke-linejoin={strokeLinejoin}
    stroke-linecap={strokeLinecap}
    hidden={hidden}
    class={`${className} h-full w-full pointer-events-none`}
  >
    {children}
  </svg>
)

export const IconDashboard = () => (
  <Svg>
    <path d='M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1' />
    <path d='M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1' />
    <path d='M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1' />
    <path d='M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1' />
  </Svg>
)

export const IconCart = () => (
  <Svg>
    <path d='M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
    <path d='M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
    <path d='M17 17h-11v-14h-2' />
    <path d='M6 5l14 1l-1 7h-13' />
  </Svg>
)

export const IconDeliveryNote = () => (
  <Svg>
    <path d='M14 3v4a1 1 0 0 0 1 1h4' />
    <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2' />
    <path d='M9 17h6' />
    <path d='M9 13h6' />
  </Svg>
)

export const IconPackage = () => (
  <Svg>
    <path d='M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' />
    <path d='M12 12l8 -4.5' />
    <path d='M12 12l0 9' />
    <path d='M12 12l-8 -4.5' />
    <path d='M16 5.25l-8 4.5' />
  </Svg>
)

export const IconUsers = () => (
  <Svg>
    <path d='M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
    <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
  </Svg>
)

export const IconMetrics = () => (
  <Svg>
    <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
    <path d='M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2' />
    <path d='M9 17v-5' />
    <path d='M12 17v-1' />
    <path d='M15 17v-3' />
  </Svg>
)

export const IconMail = () => (
  <Svg>
    <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' />
    <path d='M3 7l9 6l9 -6' />
  </Svg>
)

export const IconBell = () => (
  <Svg strokeLinecap='round' strokeLinejoin='round'>
    <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
    <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
  </Svg>
)
