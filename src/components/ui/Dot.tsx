export function Dot ({ class: className = '' }: { class?: string }) {
  const hasBg = className.match(/bg-|background/)
  return (
    <div class={`${className} ${hasBg ? '' : 'no-bg'} [.no-bg]:bg-current rounded-full aspect-square`}></div>
  )
}
