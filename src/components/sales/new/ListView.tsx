import { Select, type SelectOption } from '@/components/ui/Select'
import { Table } from '@/components/ui/table/Table'
import { mockedProducts } from '@/mocks/products'
import type { ProductWithCodes } from '@/types/products/productTypes'
import type { TableColumn } from '@/types/ui/tableTypes'
import { formatCurrency } from '@/utils/currencies'
import { useState } from 'preact/hooks'
import { SearchProducts } from './SearchProducts'

const ivaOptions: SelectOption[] = [
  { id: '0', label: '0%' },
  { id: '10', label: '10%' },
  { id: '22', label: '22%', default: true }
]

const columns: TableColumn<ProductWithCodes>[] = [
  {
    key: 'checkbox',
    header: '',
    width: '64px',
    align: 'center',
    class: 'p-0!',
    render: () => {
      const [checked] = useState(true)

      return (
        <input
          type='checkbox'
          checked={checked}
          class='checkbox checkbox-accent'
        />
      )
    }
  },
  {
    key: 'product',
    header: 'Producto',
    width: 'minmax(240px, 1fr)',
    class: 'pl-0!',
    headerClass: 'pl-0!',
    render: ({ title, subtitle }) => (
      <div class='flex flex-col items-start'>
        <strong class='font-semibold line-clamp-2 wrap-anywhere text-base-content'>{title}</strong>
        <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
      </div>
    )
  },
  {
    key: 'count',
    header: 'Cantidad',
    width: 'min-content',
    render: () => (
      <input
        type='number'
        class='input input-xs w-full'
        defaultValue='1'
        min='0'
      />
    )
  },
  {
    key: 'salePrice',
    header: 'Precio unitario',
    width: 'max-content',
    render: () => (
      <input
        type='number'
        class='input input-xs w-24'
        defaultValue='1'
        min='0'
      />
    )
  },
  {
    key: 'iva',
    header: 'IVA',
    width: 'min-content',
    render: () => (
      <Select
        options={ivaOptions}
        class='select-xs w-16'
      />
    )
  },
  {
    key: 'discount',
    header: 'Descuento',
    width: 'min-content',
    render: () => (
      <input
        type='number'
        class='input input-xs w-16'
        defaultValue='1'
        min='0'
      />
    )
  },
  {
    key: 'price',
    header: 'Importe',
    width: 'min-content',
    render: ({ salePrice }) => {
      const discount = 10
      const price = salePrice - discount

      return <strong class='text-base-content'>{formatCurrency(price)}</strong>
    }
  }
]

export function ListView () {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<ProductWithCodes[] | null>(null)
  
  const [products, setProducts] = useState<ProductWithCodes[]>([])
  
  return (
    <section class='h-full w-full flex flex-col gap-4 flex-1 p-4 overflow-auto'>
      <SearchProducts
        products={products}
        query={searchQuery}
        setResults={setResults}
      />
      <Table
        id='loaded-products-in-new-sale'
        data={mockedProducts}
        columns={columns}
        class='h-full w-full text-sm rounded-lg overflow-hidden border border-base-content/20 bg-base-100 [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors'
        stickyHeader
      />
    </section>
  )
}
