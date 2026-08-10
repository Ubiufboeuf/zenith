interface ProgressProps {
  class: string
  progress: `${number}%`
}

export function Progress ({ class: className = '', progress }: ProgressProps) {
  return (
    <div class={`${className} overflow-hidden`}>
      <div class='h-full rounded-full bg-current' style={{ width: progress }} />
    </div>
  )
}
