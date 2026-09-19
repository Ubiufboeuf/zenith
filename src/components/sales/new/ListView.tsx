import { Select, type SelectOption } from '@/components/ui/Select'
import { Table } from '@/components/ui/table/Table'
import { mockedProducts } from '@/mocks/products'
import type { ProductWithCodes } from '@/types/products/productTypes'
import type { TableColumn } from '@/types/ui/tableTypes'
import { formatCurrency } from '@/utils/currencies'
import { useState } from 'preact/hooks'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconList, IconPlus, IconSearch, IconX } from '@/components/ui/Icons'
import { SearchBar } from '@/components/ui/search/simple/SearchBar'
import { Keybinds } from '@/components/ui/Keybinds'
import { Pagination } from '@/components/products/Pagination'

const ivaOptions: SelectOption[] = [
  { id: '0', label: '0%' },
  { id: '10', label: '10%' },
  { id: '22', label: '22%', default: true }
]

const columns: TableColumn<ProductWithCodes>[] = [
  {
    key: 'delete',
    header: '',
    width: '64px',
    align: 'center',
    class: 'p-0!',
    render: () => {
      return (
        <Button size='sm' shape='square' fill='soft' color='error' focusable={false}>
          <Icon class='size-4'>
            <IconX />
          </Icon>
        </Button>
      )
    }
  },
  {
    key: 'product',
    header: 'Producto',
    width: 'minmax(240px, 1fr)',
    class: 'pl-0!',
    headerClass: 'pl-0!',
    render: ({ title, subtitle, codes }) => {
      const mainCode = codes.find((c) => c?.isMain)?.code
      
      return (
        <div class='flex flex-col items-start'>
          <strong class='font-semibold line-clamp-2 wrap-anywhere text-base-content'>{mainCode} · {title}</strong>
          <span class='text-xs text-base-content/50 line-clamp-2 wrap-anywhere'>{subtitle}</span>
        </div>
      )
    }
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
    render: ({ salePrice }) => <label class='input input-xs w-24 text-end text-base-content'>
      $  
      <input
        type='number'
        defaultValue={salePrice}
        placeholder={String(salePrice)}
        min='0'
      />
    </label>
  },
  {
    key: 'iva',
    header: 'IVA',
    width: 'min-content',
    render: () => (
      <Select
        options={ivaOptions}
        class='select-xs w-16 text-base-content'
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
        class='input input-xs w-16 text-base-content'
        min='0'
        max='100'
        placeholder='0%'
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
  },
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
          class='checkbox checkbox-accent checkbox-sm'
        />
      )
    }
  }
]

export function ListView () {
  const [page, setPage] = useState(1)

  // const [searchQuery, setSearchQuery] = useState('')
  // const [results, setResults] = useState<ProductWithCodes[] | null>(null)
  // const [products, setProducts] = useState<ProductWithCodes[]>([])
  // const [isSearching, setIsSearching] = useState(false)
  const [searchListPage, setSearchListPage] = useState(1)
  
  function whenToFocus () {
    if (document.activeElement instanceof HTMLInputElement) return false
    if (document.activeElement instanceof HTMLTextAreaElement) return false
    return true
  }

  function changePage (currentPage: number, newPage: number) {
    console.log({ currentPage, newPage })
    setSearchListPage(newPage)
  }
  
  return <>
    <section class='h-full w-full flex flex-col gap-2 flex-1 p-4'>
      <div class='h-full overflow-auto' hidden={page !== 1}>
        <Table
          id='loaded-products-in-new-sale'
          data={mockedProducts}
          columns={columns}
          class='h-full w-full text-sm rounded-lg [&_.cell]:p-2 overflow-hidden border border-base-content/20 bg-base-100 [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors'
          stickyHeader
        />
      </div>
      <div class='h-full overflow-auto flex flex-col gap-2' hidden={page !== 2}>
        <div class='flex items-center justify-between gap-2'>
          <SearchBar placeholder='Busca por nombre, proveedor, marca...' class='flex-1' />
          <SearchBar placeholder='Busca por código' />
        </div>
        <div class='flex-1 w-full overflow-y-auto rounded-lg border border-base-content/20 bg-base-100'>
          { mockedProducts.map(({ id, title, subtitle, salePrice, codes, provider, stock }) => {
            const mainCode = codes.find((c) => c?.isMain)?.code
            const unit = Math.random() > 0.5 ? 'un' : 'mts'
            return (
              <Button key={`list-item-${id}`} class='w-full h-fit justify-start gap-4 p-3 px-4 focus-visible:border-base-content focus-visible:outline-0'>
                <div class='max-w-md flex flex-col items-start flex-1'>
                  <strong class='text-start font-semibold line-clamp-2 wrap-anywhere text-base-content'>
                    {mainCode}
                    &nbsp;·&nbsp;
                    {title}
                  </strong>
                  <span class='text-xs text-start text-base-content/50 line-clamp-2 wrap-anywhere'>
                    ({provider}) {subtitle}
                  </span>
                </div>
                <div class='ml-auto flex items-center gap-4'>
                  <span class='text-base-content/70'>{stock} {unit}</span>
                  <strong class='text-base-content font-semibold'>{formatCurrency(salePrice)}</strong>
                </div>
                <Icon class='size-5 text-base-content opacity-70'>
                  <IconPlus />
                </Icon>
              </Button>
            )
          }) }
        </div>
      </div>
      <div class='flex items-center gap-2'>
        <Button fill={page !== 1 ? 'ghost' : 'soft'} class='gap-3' onClick={() => setPage(1)}>
          <Icon class='size-5'>
            <IconList />
          </Icon>
          <strong class='font-semibold'>Listado de productos</strong>
          <Keybinds keys='1' onBind={() => setPage(1)} when={whenToFocus} />
        </Button>

        <Button fill={page !== 2 ? 'ghost' : 'soft'} class='gap-3' onClick={() => setPage(2)}>
          <Icon class='size-4'>
            <IconSearch />
          </Icon>
          <strong class='font-semibold text-base-content/80'>Buscar</strong>
          <Keybinds keys='2' onBind={() => setPage(2)} when={whenToFocus} />
        </Button>

        <Pagination
          showPerPage={20}
          pages={3}
          currentPage={searchListPage}

          onClickPage={changePage}

          buttons='always'
          resultsInfo={{ found: 65, total: mockedProducts.length }}

          size='sm'
          fill='soft'
          color='primary'
          
          id='list-view'
          class='w-full h-full text-sm'
          hidden={page !== 2}
        />
      </div>
    </section>
  </>
}
