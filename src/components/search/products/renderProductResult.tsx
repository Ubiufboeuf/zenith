import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconPlus } from '@/components/ui/Icons'
import type { Product } from '@/types/products/productTypes'
import { formatCurrency } from '@/utils/currencies'
import type { ComponentChildren } from 'preact'

export function renderProductResult ({ title, subtitle, brand, stock, salePrice, saleCurrency }: Product): ComponentChildren {
  return (
    <Button fill='ghost' class='h-fit flex items-center justify-start gap-2 px-3 py-2 text-sm rounded transition-colors shr:bg-base-content/10'>
      <div class='flex flex-col items-start'>
        <strong class='font-semibold text-base-content/90'>{title}</strong>
        <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{brand} · {subtitle} · stock {stock}</span>
      </div>
      <div class='ml-auto'>
        <strong class='font-semibold text-primary text-base'>{formatCurrency(salePrice, saleCurrency)}</strong>
      </div>
      <Icon class='size-5 ml-2'>
        <IconPlus />
      </Icon>
    </Button>
  )
}
