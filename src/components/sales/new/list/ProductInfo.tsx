import type { ListedItem } from '../ListView'

export function ProductInfo ({ product: { title, subtitle, codes } }: ListedItem) {
  const mainCode = codes.find((c) => c?.isMain)?.code
  
  return (
    <div class='flex flex-col items-start'>
      <strong class='font-semibold line-clamp-2 wrap-anywhere text-base-content'>{mainCode} · {title}</strong>
      <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
    </div>
  )
}
