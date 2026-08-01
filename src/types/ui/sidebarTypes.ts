/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'preact/compat'

export interface SidebarSection {
  name: string
  links: SidebarLink[]
}

export interface SidebarLink {
  name: string
  path: string
  icon?: (...props: any) => ReactNode
}
