import type { StatusBadgeProps } from '@/types/ui/badgeTypes'
import { Dot } from './Dot'
import type { UIStatus } from '@/types/uiTypes'

const BADGE_STATUS: Record<UIStatus, string> = {
  success: 'badge-success',
  error: 'badge-error',
  info: 'badge-info',
  warning: 'badge-warning'
}

export function StatusBadge ({ status, children }: StatusBadgeProps) {
  const badgeStatus = BADGE_STATUS[status]

  return (
    <div class={`badge badge-soft ${badgeStatus}`}>
      <Dot class='size-2' />
      {children}
    </div>
  )
}
