import type { Product } from '@/types/dbTypes'
import { MobileResult } from './MobileResult'
import { DesktopResult } from './DesktopResult'

export function Result ({ result: product, xs }: { result: Product, xs: boolean }) {
  return xs
    ? <DesktopResult {...product} />
    : <MobileResult {...product} />
}
