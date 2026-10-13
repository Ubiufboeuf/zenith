import type { TableColumn } from '@/types/ui/tableTypes'
import { useEffect, useState } from 'preact/hooks'
import { formatCurrency } from '@/utils/currencies'
import { ProductCodes } from '@/components/products/ProductCodes'
import { Icon } from '@/components/ui/Icon'
import { IconTable } from '@/components/ui/Icons'
import { Table } from '@/components/ui/table/Table'
import type { SaleDetail } from '@/types/sales/saleTypes'

const columns: TableColumn<SaleDetail>[] = [
  {
    key: 'product',
    header: 'Producto',
    width: 'minmax(240px, 1fr)',
    render: ({ snapshot: { id, title, subtitle } }) => (
      <div class='flex flex-col items-start'>
        <a href={`/products/${id}`} class='link link-hover font-semibold line-clamp-2 wrap-anywhere text-base-content'>{title}</a>
        <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
      </div>
    )
  },
  {
    key: 'category',
    header: 'Categoría',
    width: 'minmax(120px, 0.125fr)',
    render: ({ snapshot }) => snapshot.category || '—'
  },
  {
    key: 'brand',
    header: 'Marca',
    width: 'minmax(120px, 0.125fr)',
    render: ({ snapshot }) => snapshot.brand || '—'
  },
  {
    key: 'code',
    header: 'Códigos',
    align: 'center',
    width: 'minmax(170px, 0.177fr)',
    render: ({ snapshot: { codes } }) => <ProductCodes codes={codes} />
  },
  {
    key: 'price',
    header: 'Precio',
    width: 'minmax(144px, 1fr)',
    align: 'end',
    render ({ unitPriceAtMoment, currency }) {
      return (
        <strong>
          {formatCurrency(unitPriceAtMoment / (100 * 100), currency)}
        </strong>
      )
    }
  },
  {
    key: 'amount',
    header: 'Cantidad',
    width: 'minmax(96px, 0.1fr)',
    align: 'center',
    render: ({ quantity }) => <span class='badge badge-soft'>{quantity}</span>
  }
]

// Interfaz temporal hasta implementar una store en vez de pasar por parámetros
interface Props {
  saleDetails: SaleDetail[]
}

export function ProductsTable ({ saleDetails }: Props) {  
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [data, setData] = useState(saleDetails)

  async function loadSaleDetails (details: SaleDetail[]) {    
    setIsLoadingProducts(false)
    setData(details)
  }

  useEffect(() => {
    if (!saleDetails.length) return
    loadSaleDetails(saleDetails)
  }, [saleDetails])
  
  return <div class='relative w-full flex-1 overflow-hidden'>
    <div
      class={`${isLoadingProducts ? '' : 'hide'} absolute z-10 h-full w-full flex items-center justify-center flex-1 rounded-lg border border-base-content/20 bg-base-300 transition-all duration-300 transition-discrete opacity-100 [.hide]:opacity-0`}
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
      // footer={Pagination}
      class='h-full w-full text-sm rounded-lg border border-base-content/20 bg-base-100 [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors'
      stickyHeader
    />
  </div>
}
