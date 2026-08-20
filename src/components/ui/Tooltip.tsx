import type { ComponentChildren } from 'preact'

export type TooltipSide = 'top' | 'left' | 'bottom' | 'right'
export type TooltipAlignment = 'start' | 'end'
export type TooltipPosition = TooltipSide | TooltipAlignment | `${TooltipSide} ${TooltipAlignment}`

interface Props {
  tooltip: string
  'tooltip-position'?: TooltipPosition
  tabIndex?: string | number
  class?: string
  children?: ComponentChildren
}


const TOOLTIP_POSITIONS: Record<TooltipSide | TooltipAlignment, string> = {
  top: 'tooltip-top',
  left: 'tooltip-left',
  bottom: 'tooltip-bottom',
  right: 'tooltip-right',

  start: 'tooltip-start',
  end: 'tooltip-end'
}

function getTooltipPosition (tooltipPosition: TooltipPosition): string {
  return tooltipPosition
    .trim()
    .split(/\s+/)
    .map((axis) => TOOLTIP_POSITIONS[axis as TooltipSide | TooltipAlignment])
    .filter(Boolean)
    .join(' ')
}

export function Tooltip ({ tooltip, 'tooltip-position': tp = 'bottom', tabIndex,  class: className = '', children }: Props) {
  const tooltipPosition = getTooltipPosition(tp)
  
  return (
    <div tabIndex={Number(tabIndex)} class={`${className} tooltip ${tooltipPosition}`} data-tip={tooltip}>
      {children}
    </div>
  )
}
