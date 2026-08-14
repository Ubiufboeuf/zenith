import type { TableColumn } from '@/types/ui/tableTypes'
import { Table } from '../ui/table/Table'
import { formatCurrency } from '@/utils/currencies'
import type { Product } from '@/types/products/productTypes'
import { useEffect, useState } from 'preact/hooks'

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

// Interfaz temporal hasta implementar una store en vez de pasar por parámetros
interface Props {
  products: Product[]
  query: string
  results: Product[] | null
}

// query puede servir para un highlight en los resultados
export function ProductsTable ({ products, results }: Props) {
  const [data, setData] = useState(products)
  
  function handleResults (results: Product[] | null) {
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
    handleResults(results)
  }, [results])
  
  return (
    <Table
      id='products-table'
      columns={columns}
      data={data}
      class='text-sm rounded-lg border border-base-content/10 bg-base-100 overflow-y-auto [&_.bodyRow]:w-fit [&_.bodyRow]:max-w-60'
    />
  )
}
