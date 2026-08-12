/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableProps } from '@/types/ui/tableTypes'

export function Table<T> ({ id: tableId, data, columns, getRowKey, class: className = '' }: TableProps<T>) {
  const cols = columns.map((c) => c.width || 'auto').join(' ')

  return (
    <div id={tableId} class={`${className} grid overflow-x-auto *:not-[.lastRow]:border-b *:border-b-base-content/10`} style={{ gridTemplateColumns: cols }}>

      {/* Cabecera */}
      { columns.map(({ key, header, align }) => (
        <div
          key={key}
          class='cell headerRow p-4 py-3'
          style={{ textAlign: align ? 'end' : undefined }}
        >
          <strong class='text-base-content/60'>{header}</strong>
        </div>
      )) }

      {/* Celdas */}
      { data.map((item, rowIndex, arr) => {
        const rowKey = getRowKey ? getRowKey(item, rowIndex) : (item as any).id ?? rowIndex
        const lastRow = rowIndex === arr.length - 1
        
        return columns.map(({ key: k, render, align, class: className = '' }) => {
          const key = k.toString()
          const fallbackToRender = (item as Record<string, any>)[key] 

          return (
            <div
              key={`${rowKey}-${key}`}
              class={`${className} ${lastRow ? 'lastRow' : ''} cell bodyRow overflow-hidden p-4 flex flex-col justify-center text-base-content/70`}
              style={{ placeItems: align ? 'end' : undefined, justifySelf: align ? 'end' : undefined }}
            >
              { render
                ? render(item, rowIndex)
                : <span class='line-clamp-2'>{fallbackToRender}</span>
              }
            </div>
          )
        })
      }) }
      
    </div>
  )
}
