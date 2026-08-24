import { LineChart } from '../ui/chart/LineChart'
import { Select } from '../ui/Select'

const chartSize = [632, 208]
const columns = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const rows = ['', '', '', '']

export function WeeklySalesChart () {  
  const points = columns.map((_, idx) => (
    [chartSize[0] / (columns.length - 1) * idx, Math.random() * chartSize[1]]
  ))

  return (
    <article class='p-4 h-full flex flex-col'>
      <div class='flex items-center justify-between'>
        <span class='px-2 text-md font-bold text-base-content'>Ventas de la semana</span>
        <Select class='w-48 not-shr:select-ghost not-shr:text-base-content/50 transition-all' options={[{ id: 'last-week', label: 'Últimos 7 días' }]} />
      </div>
      <LineChart
        size={chartSize}
        columns={columns}
        rows={rows}
        points={points}
        pointSize='4'
        pointStrokeWidth='2'
      />
    </article>
  )
}
