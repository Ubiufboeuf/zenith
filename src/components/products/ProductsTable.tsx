import type { TableColumn } from '@/types/ui/tableTypes'
import { Table } from '../ui/table/Table'
import { formatCurrency } from '@/utils/currencies'

interface Product {
  id: string
  title: string
  subtitle: string
  status: 'active' | 'inactive'
  price: number
}

const columns: TableColumn<Product>[] = [
  {
    key: 'product',
    header: 'Producto',
    width: 'auto',
    render: ({ id, title, subtitle }) => {
      return (
        <div class='flex flex-col items-start overflow-hidden'>
          <a href={`/products/${id}`} class='link link-hover font-semibold line-clamp-2 wrap-anywhere text-base-content'>{title}</a>
          <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
        </div>
      )
    }
  },
  {
    key: 'category',
    header: 'Categoría'
  },
  {
    key: 'brand',
    header: 'Marca'
  },
  {
    key: 'code',
    header: 'Códigos'
  },
  {
    key: 'stock',
    header: 'Stock'
  },
  {
    key: 'price',
    header: 'Precio',
    align: 'end',
    render ({ price }) {
      return (
        <span class='w-fit font-semibold text-base-content'>{formatCurrency(price)}</span>
      )
    }
  }
]

const data: Product[] = [
  {
    id: 'prod-a',
    title: 'AMD Ryzen 7 7800X3D',
    subtitle: '8-Core, 16-Thread Desktop Processor',
    price: 320,
    status: 'active'
  }
]

export function ProductsTable () {
  return (
    <Table
      id='products-table'
      columns={columns}
      data={data}
      class='text-sm rounded-lg border border-base-content/10 bg-base-100 overflow-y-auto [&_.bodyRow]:w-fit [&_.bodyRow]:max-w-60'
    />
  )
}
