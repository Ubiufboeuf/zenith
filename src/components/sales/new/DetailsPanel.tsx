import { useNewSaleStore } from '@/stores/newSaleStore'
import { Checkout } from './panel/Checkout'
import { ClientAndSeller } from './panel/ClientAndSeller'
import { SaleInfo } from './panel/SaleInfo'
import { SaleSummary } from './panel/SaleSummary'

export function DetailsPanel () {
  const isModalOpen = useNewSaleStore((state) => state.isCheckoutModalOpen)
  
  return (
    <section class='relative w-76 min-w-76 h-full overflow-auto scrollbar-gutter-stable border-l border-base-content/20 bg-base-100' style={isModalOpen ? { overflow: 'hidden' } : {}}>
      <div class='w-full h-full min-h-fit flex flex-col gap-6 p-4 pb-2'>
        <SaleInfo />
        <ClientAndSeller />
        <SaleSummary />
      </div>
      <Checkout />
    </section>
  )
}
