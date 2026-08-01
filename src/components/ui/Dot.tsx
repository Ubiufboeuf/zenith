export function Dot ({ class: className = '' }: { class?: string }) {
  return (
    <div class={`${className} bg-current rounded-full aspect-square`}></div>
  )
}
