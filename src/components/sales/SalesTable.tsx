import { useEffect, useState } from 'preact/hooks'
import { Icon } from '../ui/Icon'
import { IconTable } from '../ui/Icons'
import { Table } from '../ui/table/Table'
import type { Sale } from '@/types/sales/saleTypes'
import type { TableColumn } from '@/types/ui/tableTypes'
import { formatDate } from '@/utils/time'
import { formatCurrency } from '@/utils/currencies'
import { getPaymentStatusColor, getSaleDocumentColor, getSaleStatusColor } from '@/utils/color'
import { getPaymentStatusLabel, getSaleDocumentLabel, getSaleStatusLabel } from '@/utils/labels'

interface Props {
  sales: Sale[]
  query: string
  results: Sale[] | null
}

const columns: TableColumn<Sale>[] = [
  {
    key: 'id',
    header: 'Comprobante',
    width: '1fr',
    render: ({ id, documentNumber }) => (
      <div class='flex items-center gap-1'>
        #
        <a
          href={`/sales/${id}`}
          class='link link-hover font-semibold line-clamp-2 wrap-anywhere text-base-content'
        >
          {documentNumber}
        </a>
      </div>
    )
  },
  {
    key: 'documentType',
    header: 'Tipo',
    width: '1fr',
    class: 'w-fit flex justify-center',
    render: ({ documentType, saleType }) => {
      const label = getSaleDocumentLabel(documentType, saleType)
      const color = getSaleDocumentColor(documentType, saleType)
      return <span class={`${color} badge badge-soft h-fit w-full text-center`}>{label}</span>
    }
  },
  {
    key: 'createdAt',
    header: 'Fecha',
    width: '1fr',
    render: ({ createdAt }) => formatDate(createdAt)
  },
  {
    key: 'clientId',
    header: 'Cliente',
    width: '1fr',
    render: ({ clientId }) => {
      if (!clientId) return <div class='h-0.5 w-full bg-base-content/20 rounded-full'></div>

      const [clientName, setClientName] = useState<string | undefined>()

      async function getClient (clientId: string | null) {
        if (!clientId) return
        return { name: 'Pepito Martínez' }
      }
      
      async function loadClientName () {
        const client = await getClient(clientId)
        setClientName(client?.name)
      }
      
      useEffect(() => {
        loadClientName()
      }, [])
      
      return <strong class='font-semibold text-base-content'>{clientName}</strong>
    }
  },
  {
    key: 'status',
    header: 'Estado',
    width: '1fr',
    align: 'center',
    render: ({ status }) => {
      const label = getSaleStatusLabel(status)
      const color = getSaleStatusColor(status)
      return <span class={`${color} badge badge-soft h-fit w-full text-center`}>{label}</span>
    }
  },
  {
    key: 'paymentStatus',
    header: 'Pago',
    width: '1fr',
    align: 'center',
    render: ({ paymentStatus }) => {
      const color = getPaymentStatusColor(paymentStatus)
      const label = getPaymentStatusLabel(paymentStatus)
      return <span class={`${color} badge badge-soft h-fit w-full text-center`}>{label}</span>
    }
  },
  {
    key: 'total',
    header: 'Total',
    width: '1fr',
    align: 'end',
    render: ({ subtotal, currency }) => (
      <strong class='font-semibold text-base-content'>{formatCurrency(subtotal, currency)}</strong>
    )
  }
]

export function SalesTable ({ sales, results }: Props) {
  const [isLoadingSales, setIsLoadingSales] = useState(true)
  const [data, setData] = useState(sales)

  async function loadSales (sales: Sale[]) {
    setIsLoadingSales(false)
    setData(sales)
  }

  function handleResults (results: Sale[] | null) {
    const resultsDefined = results
    console.log({ resultsDefined })
    
    if (!resultsDefined) {
      setData(sales)
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
    if (!sales.length) return

    loadSales(sales)
  }, [sales])

  useEffect(() => {
    handleResults(results)
  }, [results])
  
  return (
    <div class='relative w-full flex-1 overflow-hidden'>
      <div
        class={`${isLoadingSales ? '' : 'hide'} absolute z-10 h-full w-full flex items-center justify-center flex-1 rounded-lg border border-base-content/10 bg-base-300 transition-all duration-300 transition-discrete opacity-100 [.hide]:opacity-0`}
        hidden={!isLoadingSales}
      >
        <Icon class='size-12 text-gray-400 animate-pulse'>
          <IconTable />
        </Icon>
      </div>
      <Table
        id='sales-table'
        columns={columns}
        data={data}
        class='h-full w-full text-sm rounded-lg border border-base-content/10 bg-base-100 [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors'
        stickyHeader
      />
    </div>
  )
}
