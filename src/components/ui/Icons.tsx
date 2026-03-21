import type { SVGAttributes } from 'preact'
import type { ReactNode } from 'preact/compat'

interface SVGProps {
  children: ReactNode
  viewBox?: string
  class?: string
  width?: string
  height?: string
  fill?: string
  stroke?: string
  strokeWidth?: string
  strokeLinecap?: SVGAttributes<SVGSVGElement>['strokeLinecap']
  strokeLinejoin?: SVGAttributes<SVGSVGElement>['strokeLinejoin']
  hidden?: boolean
}

const Svg = ({ children, viewBox = '0 0 24 24', class: className, width = '24', height = '24', fill = 'transparent', stroke = 'currentColor', strokeWidth, strokeLinecap, strokeLinejoin, hidden }: SVGProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinejoin={strokeLinejoin}
    strokeLinecap={strokeLinecap}
    hidden={hidden}
    class={`${className} h-full w-full pointer-events-none`}
  >
    {children}
  </svg>
)

export const IconCart = ({ active }: { active?: boolean } = { active: false }) => (
  <Svg>
    { active ? <>
      <circle cx='8' cy='21' r='2' fill='currentColor' />
      <circle cx='19' cy='21' r='2' fill='currentColor' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' strokeWidth='2' />
      <path d='M6.71 14.47a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' fill='currentColor' />
    </> : <>
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </> }
  </Svg>
)

export const IconCollection = ({ active }: { active?: boolean }) => (
  <Svg fill={active ? 'currentColor' : ''}>
    <rect width='7' height='9' x='3' y='3' rx='1' />
    <rect width='7' height='5' x='14' y='3' rx='1' />
    <rect width='7' height='9' x='14' y='12' rx='1' />
    <rect width='7' height='5' x='3' y='16' rx='1' />
  </Svg>
)

export const IconHistory = ({ active }: { active?: boolean }) => (
  <Svg class={active ? 'stroke-2' : ''}>
    <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
    <path d='M3 3v5h5' />
    <path d='M12 7v5l4 2' />
  </Svg>
)

export const IconSearch = ({ active }: { active?: boolean }) => (
  <Svg class={active ? 'stroke-2' : ''}>
    <path d='m21 21-4.34-4.34' />
    <circle cx='11' cy='11' r='8' />
  </Svg>
)

export const IconBox = () => (
  <Svg>
    <path d='M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z' />
    <path d='M12 22V12' />
    <polyline points='3.29 7 12 12 20.71 7' />
    <path d='m7.5 4.27 9 5.15' />
  </Svg>
)

export const IconUsers = ({ active }: { active?: boolean }) => (
  <Svg>
    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' fill={active ? 'currentColor' : ''} />
    <path d='M16 3.128a4 4 0 0 1 0 7.744' strokeWidth={active ? '2' : ''} />
    <path d='M22 21v-2a4 4 0 0 0-3-3.87' strokeWidth={active ? '2' : ''} />
    <circle cx='9' cy='7' r='4' fill={active ? 'currentColor' : ''} />
  </Svg>
)

export const IconSettings = () => (
  <Svg>
    <path d='M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915' />
    <circle cx='12' cy='12' r='3' />
  </Svg>
)

export const IconExit = () => (
  <Svg>
    <path d='m16 17 5-5-5-5' />
    <path d='M21 12H9' />
    <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
  </Svg>
)

export const IconTicket = () => (
  <Svg>
    <path d='M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' />
    <path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' />
    <path d='M12 17.5v-11' />
  </Svg>
)

export const IconMenu = () => (
  <Svg>
    <path d='M4 6l16 0' />
    <path d='M4 12l16 0' />
    <path d='M4 18l16 0' />
  </Svg>
)

export const IconDots = ({ active }: { active?: boolean }) => (
  <Svg class={active ? 'stroke-1' : 'stroke-0'} fill='currentColor'>
    <path d='M7 12a2 2 0 1 1 -4 0q 0 -.053 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2' />
    <path d='M14 12a2 2 0 1 1 -4 0q 0 -.053 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2' />
    <path d='M21 12a2 2 0 1 1 -4 0q 0 -.053 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2' />
  </Svg>
)

export const IconDollar = () => (
  <Svg>
    <line x1='12' x2='12' y1='2' y2='22' />
    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </Svg>
)

export const IconChart = () => (
  <Svg>
    <path d='M16 7h6v6' />
    <path d='m22 7-8.5 8.5-5-5L2 17' />
  </Svg>
)

export const IconDebit = () => (
  <Svg>
    <rect width='20' height='14' x='2' y='5' rx='2' />
    <line x1='2' x2='22' y1='10' y2='10' />
  </Svg>
)

export const IconArrow1 = () => (
  <Svg>
    <path d='m7 7 10 10' />
    <path d='M17 7v10H7' />
  </Svg>
)

export const IconArrow = () => (
  <Svg strokeLinecap='round'>
    <path d='M5 12l14 0' />
    <path d='M13 18l6 -6' />
    <path d='M13 6l6 6' />
  </Svg>
)

export const IconList = () => (
  <Svg strokeLinecap='round'>
    <path d='M3 5h.01' />
    <path d='M3 12h.01' />
    <path d='M3 19h.01' />
    <path d='M8 5h13' />
    <path d='M8 12h13' />
    <path d='M8 19h13' />
  </Svg>
)

export const IconGrid = () => (
  <Svg>
    <path d='M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' />
    <path d='M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' />
    <path d='M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' />
    <path d='M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' />
  </Svg>
)

export const IconChart2 = () => (
  <Svg>
    <path d='M3 3v16a2 2 0 0 0 2 2h16' />
    <path d='M18 17V9' />
    <path d='M13 17V5' />
    <path d='M8 17v-3' />
  </Svg>
)
