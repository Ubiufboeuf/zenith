import type { ReactElement, ReactNode } from 'preact/compat'
import { Icon } from '../ui/Icon'

interface DashboardLinkProps {
  to: string
  main?: boolean
  icon?: () => ReactElement
  class?: string
  children?: ReactNode
}

export function DashboardLink ({ to, main, icon: LinkIcon, class: className, children }: DashboardLinkProps) {
  return (
    <a href={to} class={`${main ? 'main' : ''} ${className} group flex flex-col items-center justify-center gap-3 rounded-xl border transition-colors bg-card [.main]:bg-primary border-border [.main]:border-primary hover:border-primary/50`}>
      <div class='size-12 flex items-center justify-center rounded-lg bg-border/70 group-[.main]:bg-dark/20'>
        { LinkIcon && <Icon class='size-6 stroke-2 text-light group-[.main]:text-dark'>
          <LinkIcon />
        </Icon> }
      </div>
      <span class='text-lg font-medium text-light group-[.main]:text-dark'>{children}</span>
    </a>
  )
}
