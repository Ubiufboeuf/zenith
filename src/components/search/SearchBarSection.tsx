import { LayoutSwitcher } from './LayoutSwitcher'
import { SearchBar } from './SearchBar'
import { StockStatus } from './StockStatus'

export function SearchBarSection () {
  return (
    <section class='w-full h-fit grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-2 p-4 rounded-xl border border-border bg-card'>
      <SearchBar />
      <LayoutSwitcher />
      <StockStatus />
    </section>
  )
}
