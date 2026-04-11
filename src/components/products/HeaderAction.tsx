import type { ReactNode } from 'preact/compat'

interface Props {
  title?: string
  class?: string
  children?: ReactNode
}

export function HeaderAction ({ title, class: className, children }: Props) {
  return (
    <button
      title={title}
      class={`${className} flex items-center justify-center rounded-lg cursor-pointer transition-colors text-neutral-400 shr:text-light shr:bg-neutral-700/70`}
    >
      {children}
    </button>
  )
}
