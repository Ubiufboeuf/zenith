import type { ReactNode } from 'preact/compat'
import { IconMath, IconUsers } from '@/components/ui/Icons'
import type { SearchItemType } from '@/types/ui/search/searchBoxTypes'

export const icons: Partial<Record<SearchItemType, () => ReactNode>> = {
  client: IconUsers,
  operation: IconMath
}
