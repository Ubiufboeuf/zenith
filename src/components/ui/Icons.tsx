/* eslint-disable react/no-unknown-property */
import type { SVGProps } from '@/types/ui/iconTypes'

const Svg = ({
  children, id, viewBox = '0 0 24 24',
  class: className, hidden,
  width = '24', height = '24',
  fill = 'transparent', stroke = 'currentColor', strokeWidth = '2', strokeLinecap = 'round', strokeLinejoin = 'round'
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
  <Svg>
    <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
    <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
  </Svg>
)

export const IconMenu = () => (
  <Svg>
    <path d='M4 6l16 0' />
    <path d='M4 12l16 0' />
    <path d='M4 18l16 0' />
  </Svg>
)

export const IconTrending = ({ trending }: { trending: 'positive' | 'neutral' | 'negative' }) => (
  <Svg>
    { trending === 'positive' && <>
    <path d='M3 17l6 -6l4 4l8 -8' />
    <path d='M14 7l7 0l0 7' />
    </> }
    { trending === 'neutral' && <>
    <path d='M5 12l14 0' />
    <path d='M15 16l4 -4' />
    <path d='M15 8l4 4' />
    </> }
    { trending === 'negative' && <>
    <path d='M3 7l6 6l4 -4l8 8' />
    <path d='M21 10l0 7l-7 0' />
    </> }
  </Svg>
)

export const IconSearch = () => (
  <Svg>
    <path d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
    <path d='M21 21l-6 -6' />
  </Svg>
)

export const IconX = () => (
  <Svg>
    <path d='M18 6l-12 12' />
    <path d='M6 6l12 12' />
  </Svg>
)

export const IconMath = () => (
  <Svg>
    <path d='M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14' />
    <path d='M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1' />
    <path d='M8 14l0 .01' />
    <path d='M12 14l0 .01' />
    <path d='M16 14l0 .01' />
    <path d='M8 17l0 .01' />
    <path d='M12 17l0 .01' />
    <path d='M16 17l0 .01' />
  </Svg>
)

export const IconAlert = () => (
  <Svg>
    <path d='M12 9v4' />
    <path d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0' />
    <path d='M12 16h.01' />
  </Svg>
)

export const IconDollar = () => (
  <Svg>
    <path d='M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2' />
    <path d='M12 3v3m0 12v3' />
  </Svg>
)

export const IconCritical = () => (
  <Svg>
    <path d='M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033' />
    <path d='M12 8v4' />
    <path d='M12 16h.01' />
  </Svg>
)

export const IconPlus = () => (
  <Svg>
    <path d='M12 5l0 14' />
    <path d='M5 12l14 0' />
  </Svg>
)

export const IconFilter = () => (
  <Svg>
    <path d='M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227' />
  </Svg>
)

export const IconDots = ({ vertical = false }: { vertical?: boolean }) => (
  <Svg>
    { vertical && <>
      <path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
    </> }
    { !vertical && <>
      <path d='M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
    </> }
  </Svg>
)

export const IconReload = () => (
  <Svg>
    <path d='M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747' />
    <path d='M20 4v5h-5' />
  </Svg>
)

export const IconCheck = () => (
  <Svg>
    <path d='M5 12l5 5l10 -10' />
  </Svg>
)

export const IconTag = () => (
  <Svg>
    <path d='M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
    <path d='M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3' />
  </Svg>
)

export const IconScan = () => (
  <Svg>
    <path d='M5 12h14' />
    <path d='M3 7v-2a2 2 0 0 1 2 -2h2' />
    <path d='M3 17v2a2 2 0 0 0 2 2h2' />
    <path d='M17 3h2a2 2 0 0 1 2 2v2' />
    <path d='M17 21h2a2 2 0 0 0 2 -2v-2' />
  </Svg>
)

export const IconHistory = () => (
  <Svg>
    <path d='M12 8l0 4l2 2' />
    <path d='M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5' />
  </Svg>
)

export const IconBoxes = () => (
  <Svg>
    <path d='M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5' />
    <path d='M2 13.5v5.5l5 3' />
    <path d='M7 16.545l5 -3.03' />
    <path d='M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5' />
    <path d='M12 19l5 3' />
    <path d='M17 16.5l5 -3' />
    <path d='M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5' />
    <path d='M7 5.03v5.455' />
    <path d='M12 8l5 -3' />
  </Svg>
)

export const IconTable = () => (
  <Svg>
    <path d='M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14' />
    <path d='M3 10h18' />
    <path d='M10 3v18' />
  </Svg>
)

export const IconClipboard = () => (
  <Svg>
    <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
    <path d='M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2' />
  </Svg>
)
