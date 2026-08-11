import { StatusBadge } from '../ui/Badge'
import { Icon } from '../ui/Icon'
import { IconAlert, IconCritical, IconPackage } from '../ui/Icons'

const CATEGORIES: Record<string, string> = {
  procesadores: 'CPU',
  'memoria ram': 'RAM',
  'memorias ram': 'RAM',
  perifericos: 'I/O',
  'periféricos': 'I/O'
}

function getShortCategory (cat: string): string {
  return CATEGORIES[cat.toLowerCase()] ?? cat
}

const _products = [
  {
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    title: 'AMD Ryzen 5 5600G',
    subtitle: '6 Cores, 12 Threads, Radeon Graphics',
    provider: 'AMD Direct',
    brand: 'AMD',
    category: 'Procesadores',
    cost_price: 11500,
    cost_currency: 'USD',
    sale_price: 14500,
    sale_currency: 'USD',
    stock: 6,
    warningStock: 5,
    criticalStock: 2
  },
  {
    id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    title: 'Intel Core i5 12400F',
    subtitle: '6 Cores P-Core, 2.5GHz Base, LGA1700',
    provider: 'Intel Distribution',
    brand: 'Intel',
    category: 'Procesadores',
    cost_price: 12000,
    cost_currency: 'USD',
    sale_price: 15500,
    sale_currency: 'USD',
    stock: 5,
    warningStock: 5,
    criticalStock: 3
  },
  {
    id: '239395d5-7679-462e-a640-73191e4b9ab1',
    title: 'Logitech G PRO X Superlight 2',
    subtitle: 'Wireless Gaming Mouse, Hero 2 Sensor',
    provider: 'Logitech',
    brand: 'Logitech G',
    category: 'Periféricos',
    cost_price: 11000,
    cost_currency: 'USD',
    sale_price: 15900,
    sale_currency: 'USD',
    stock: 50,
    warningStock: 10,
    criticalStock: 3
  },
  {
    id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    title: 'Kingston FURY Beast 16GB DDR4',
    subtitle: '3200MHz CL16 Desktop Memory Module',
    provider: 'Kingston Tech',
    brand: 'Kingston',
    category: 'Memorias RAM',
    cost_price: 3200,
    cost_currency: 'USD',
    sale_price: 4800,
    sale_currency: 'USD',
    stock: 2,
    warningStock: 5,
    criticalStock: 3
  },
  {
    id: 'd4e5f6a7-b89c-0d1e-2f3a-4b5c6d7e8f9a',
    title: 'Intel Celeron N4020',
    subtitle: 'Dual Core 1.1GHz, Integrated UHD 600',
    provider: 'Intel Distribution',
    brand: 'Intel',
    category: 'Procesadores',
    cost_price: 2500,
    cost_currency: 'USD',
    sale_price: 3800,
    sale_currency: 'USD',
    stock: 0,
    warningStock: 2,
    criticalStock: 1
  }
]

type Product = typeof _products[number];

function getStockSeverity (p: Product): number {
  if (p.stock === 0) return 0
  if (p.stock <= p.criticalStock) return 1
  if (p.stock <= p.warningStock) return 2
  return 3
}

function getMargin (p: Product): number {
  if (p.stock <= p.criticalStock) return p.stock  
  return p.stock - p.criticalStock
}

const products = _products
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

export function LowStock () {
  return (
    <div class={`${state} group card h-full w-full flex flex-col overflow-hidden gap-4 p-6 border [.critic]:border-error/50 [.warning]:border-warning/50 border-neutral-700 bg-base-100`}>
      <div class='flex items-center justify-between gap-2 flex-wrap'>
        <div class='flex items-center gap-2 flex-wrap'>
          <Icon class='group-[.critic]:text-error group-[.warning]:text-warning text-neutral-500'>
            { state === 'critic' && <IconCritical /> }
            { state === 'warning' && <IconAlert /> }
            { state === 'normal' && <IconPackage /> }
          </Icon>
          <span class='px-2 text-md font-bold text-base-content group-[.critic]:text-error group-[.warning]:text-warning'>Inventario</span>
        </div>
        <div class='flex items-center gap-2 flex-wrap'>
          { warning ? <span class='badge badge-soft badge-warning font-medium text-xs'>Bajo ({warning})</span> : '' }
          { critic ? <span class='badge badge-soft badge-error font-medium text-xs'>Crítico ({critic})</span> : '' }
        </div>
      </div>
      <div class='h-full w-full flex overflow-y-auto scrollbar-thin'>
        <ul class='list h-fit w-full'>
          { products.map(({ id, title, category, stock, criticalStock, warningStock }) => {
            const state =
              stock <= criticalStock ? 'critic' :
              stock <= warningStock ? 'warning' :
              'normal'

            const shortCategory = getShortCategory(category)
              
            return (
              <li key={`low-stock-${id}`} class='list-row'>
                <a href={`/products/${id}`} class='link link-hover list-col-grow font-semibold'>
                  {title}
                </a>
                <span class='text-base-content/50 list-col-grow'>({shortCategory})</span>
                <span class={`${state} badge badge-sm [.critic]:badge-error [.warning]:badge-warning [.normal]:badge-soft`}>{stock}</span>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}
