import type { Product } from '@/database/types/productTypes'
import { MobileResult } from './MobileResult'
import { DesktopResult } from './DesktopResult'

export function Result ({ result: product, xs }: { result: Product, xs: boolean }) {
  return xs
    ? <DesktopResult {...product} />
    : <MobileResult {...product} />
}
