import { Checkout } from './panel/Checkout'
import { ClientAndSeller } from './panel/ClientAndSeller'
import { SaleInfo } from './panel/SaleInfo'
import { SaleSummary } from './panel/SaleSummary'

export function DetailsPanel () {
  return (
    <section class='relative w-76 min-w-76 h-full overflow-auto border-l border-base-content/20 bg-base-100'>
      <div class='w-full h-full min-h-fit flex flex-col gap-6 p-4 pb-2'>
        <SaleInfo />
        <ClientAndSeller />
        <SaleSummary />
      </div>
      <Checkout />
    </section>
  )
}
