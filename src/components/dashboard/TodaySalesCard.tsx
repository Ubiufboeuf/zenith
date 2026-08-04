import { TrendBadge } from '../ui/badges/TrendBadge'

const todaySales = [
  {
    id: 'ventas-en-pesos-uruguayos',
    label: 'Peso uruguayo',
    currency: 'UYU',
    flag: '🇺🇾',
    symbol: '$',
    value: '4001'
  },
  {
    id: 'ventas-en-dolares',
    label: 'Dólar estadounidense',
    currency: 'USD',
    flag: '🇺🇸',
    symbol: 'U$S',
    value: '358'
  },
  {
    id: 'ventas-en-euros',
    label: 'Euro',
    currency: 'EUR',
    flag: '🇪🇺',
    symbol: '€',
    value: '274'
  },
  {
    id: 'ventas-en-pesos-argentinos',
    label: 'Peso argentino',
    currency: 'ARS',
    flag: '🇦🇷',
    symbol: '$',
    value: '262775'
  }
]

export function TodaySalesCard () {
  return (
    <article class='py-4 px-2 h-full flex flex-col'>
      <span class='px-2 text-sm text-base-content/50'>Ventas de hoy</span>
      <div class='flex-1 max-h-8/10 overflow-hidden flex items-center overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/10'>
        <ul class='list w-full h-fit max-h-full'>
          { todaySales.map(({ id, label, currency, flag, symbol, value }) => (
            <li key={`today-sales-list-item-${id}`} class='list-row'>
              <span title={label} class='badge badge-soft'>
                {flag} <span class='text-xs'>{currency}</span>
              </span>
              <div class='flex justify-end'>
                <strong>{symbol} {value}</strong>
              </div>
            </li>
          )) }
        </ul>
      </div>
      <TrendBadge value='20.4' class='mx-auto' />
    </article>
  )
}
