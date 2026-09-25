import { _low_stock_mocked_products, getMargin, getShortCategory, getStockSeverity } from '@/components/dashboard/LowStock'
import { Icon } from '../Icon'
import { IconAlert, IconCritical, IconPackage } from '../Icons'


const products = _low_stock_mocked_products
  .filter((p) => p.stock <= p.warningStock)
  .toSorted((a, b) => {
    const severityA = getStockSeverity(a)
    const severityB = getStockSeverity(b)

    if (severityA !== severityB) {
      return severityA - severityB
    }

    const marginA = getMargin(a)
    const marginB = getMargin(b)
    if (marginA !== marginB) {
      return marginA - marginB
    }

    return a.stock - b.stock
  })

let critic = 0
let warning = 0

for (const prod of products) {
  if (prod.stock <= prod.criticalStock) {critic++; continue}
  if (prod.stock <= prod.warningStock) warning++
}

const state =
  critic ? 'critic' :
  warning ? 'warning' :
  'normal'

export function MobileLowStock () {
  return (
    <article class={`${state} group card flex flex-col gap-2 h-full max-h-full w-full min-w-full p-4 border [.critic]:border-error/50 [.warning]:border-warning/50 border-base-content/20 bg-base-100`}>
      <div class='flex items-center justify-between gap-2 flex-wrap'>
        <div class='flex items-center gap-1'>
          <Icon class='size-6 group-[.critic]:text-error group-[.warning]:text-warning text-neutral-500'>
            { state === 'critic' && <IconCritical /> }
            { state === 'warning' && <IconAlert /> }
            { state === 'normal' && <IconPackage /> }
          </Icon>
          <span class='px-2 text-md font-bold text-base-content group-[.critic]:text-error group-[.warning]:text-warning'>Inventario</span>
        </div>
        <div class='flex items-center gap-2 flex-wrap'>
          { warning ? <span class='badge badge-soft badge-warning font-medium text-xs'>Bajo · {warning}</span> : '' }
          { critic ? <span class='badge badge-soft badge-error font-medium text-xs'>Crítico · {critic}</span> : '' }
        </div>
      </div>
      <div class='h-full w-full flex overflow-y-scroll scrollbar-thin'>
        <ul class='list h-fit min-h-fit w-full'>
          { products.map(({ id, title, category, stock, criticalStock, warningStock }) => {
            const state =
              stock <= criticalStock ? 'critic' :
              stock <= warningStock ? 'warning' :
              'normal'

            const shortCategory = getShortCategory(category)
              
            return (
              <li key={`low-stock-${id}`} class='list-row items-center'>
                <div class='flex flex-col items-center'>
                  <span class={`${state} badge badge-sm [.critic]:badge-error [.warning]:badge-warning [.normal]:badge-soft`}>{stock}</span>
                  <span class='text-base-content/50 list-col-grow'>({shortCategory})</span>
                </div>
                <a href={`/products/${id}`} class='link link-hover list-col-grow font-semibold line-clamp-2'>
                  {title}
                </a>
              </li>
            )
          }) }
        </ul>
      </div>
    </article>
  )
}
