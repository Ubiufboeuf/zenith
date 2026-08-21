import type { TableColumn } from '@/types/ui/tableTypes'
import { Table } from '../ui/table/Table'
import type { ProductWithCodes } from '@/types/products/productTypes'
import { useEffect, useState } from 'preact/hooks'
import { Icon } from '../ui/Icon'
import { IconTable } from '../ui/Icons'
import { formatCurrency } from '@/utils/currencies'
import { ProductCodes } from './ProductCodes'

const columns: TableColumn<ProductWithCodes>[] = [
  {
    key: 'product',
    header: 'Producto',
    width: '240px',
    render: ({ id, title, subtitle }) => (
      <div class='flex flex-col items-start'>
        <a href={`/products/${id}`} class='link link-hover font-semibold line-clamp-2 wrap-anywhere text-base-content'>{title}</a>
        <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
      </div>
    )
  },
  {
    key: 'category',
    header: 'Categoría',
    width: 'minmax(auto, 240px)'
  },
  {
    key: 'brand',
    header: 'Marca',
    width: 'minmax(auto, 240px)'
  },
  {
    key: 'code',
    header: 'Códigos',
    align: 'center',
    render: ({ codes }) => <ProductCodes codes={codes} />
  },
  {
    key: 'cost',
    header: 'Costo',
    width: 'minmax(auto, 240px)',
    align: 'end',
    render: ({ costCurrency, costPrice }) => (
      <span>
        {formatCurrency(costPrice, costCurrency)}
      </span>
    )
  },
  {
    key: 'sale',
    header: 'Venta',
    width: 'minmax(auto, 240px)',
    align: 'end',
    render ({ saleCurrency, salePrice }) {
      return (
        <strong>
          {formatCurrency(salePrice, saleCurrency)}
        </strong>
      )
    }
  },
  {
    key: 'stock',
    header: 'Stock',
    width: 'minmax(auto, 240px)',
    align: 'center',
    render: ({ stock }) => <span class='badge badge-soft'>{stock}</span>
  }
]

// Interfaz temporal hasta implementar una store en vez de pasar por parámetros
interface Props {
  products: ProductWithCodes[]
  query: string
  results: ProductWithCodes[] | null
}

// query puede servir para un highlight en los resultados
export function ProductsTable ({ products, results }: Props) {  
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [data, setData] = useState(products)

  async function loadProducts (products: ProductWithCodes[]) {    
    setIsLoadingProducts(false)
    setData(products)
  }

  function handleResults (results: ProductWithCodes[] | null) {
    const resultsDefined = results
    console.log({ resultsDefined })
    
    if (!resultsDefined) {
      setData(products)
      return
    }
    
    const hasResults = results.length > 0
    console.log({ hasResults })

    if (!hasResults) {
      setData([])
      return
    }
    
    setData(results)
  }

  useEffect(() => {
    if (!products.length) return
    
    loadProducts(products)
  }, [products])

  useEffect(() => {
    handleResults(results)
  }, [results])
  
  return <div class='relative w-full flex-1 overflow-hidden'>
    <div
      class={`${isLoadingProducts ? '' : 'hide'} absolute z-10 h-full w-full flex items-center justify-center flex-1 rounded-lg border border-base-content/10 bg-base-300 transition-all duration-300 transition-discrete opacity-100 [.hide]:opacity-0`}
      hidden={!isLoadingProducts}
    >
      <Icon class='size-12 text-gray-400 animate-pulse'>
        <IconTable />
      </Icon>
    </div>
    <Table
      id='products-table'
      columns={columns}
      data={data}
      class='h-fit max-h-full w-full text-sm rounded-lg border border-base-content/10 bg-base-100 overflow-auto [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors [&_.body-row]:w-full'
      stickyHeader
    />
  </div>
}
