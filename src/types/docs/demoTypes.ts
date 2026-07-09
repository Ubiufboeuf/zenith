import type { ReactNode } from 'preact/compat'

export type DemoComponent<T> = (props: T) => ReactNode

export interface DemoProps {
  title: string
  description?: string
  code?: string
  children: ReactNode
}

export type Example = {
  title: string
  description?: string
  code: string
  Component: ReactNode
} | {
  title: string
  description?: string
  tabs: {
    tab: string
    code: string
    Component: ReactNode
  }[]
}

export interface InternalDemoProps {
  id: string
  hasCode: boolean
  defaultChecked?: boolean
}

export interface PanelProps {
  title: string
  code: string
  children: ReactNode
}

export type InternalPanelProps = PanelProps & InternalDemoProps
