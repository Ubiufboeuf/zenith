/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from '@/components/ui/table/Table'
import { mockedProducts } from '@/mocks/products'
import type { ProductWithCodes } from '@/types/products/productTypes'
import type { TableColumn } from '@/types/ui/tableTypes'
import { formatCurrency } from '@/utils/currencies'
import { useEffect, useState } from 'preact/hooks'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconList, IconPlus, IconSearch } from '@/components/ui/Icons'
import { SearchBar } from '@/components/ui/search/simple/SearchBar'
import { Keybinds } from '@/components/ui/Keybinds'
import { Pagination } from '@/components/products/Pagination'
import type { SaleDetail } from '@/types/sales/saleTypes'
import { v4 } from 'uuid'
import { useNewSaleStore } from '@/stores/newSaleStore'
import { UnitPrice } from './list/UnitPrice'
import { IvaRate } from './list/IvaRate'
import { Discount } from './list/Discount'
import { LineTotal } from './list/LineTotal'
import { ToggleItem } from './list/ToggleItem'
import { Quantity } from './list/Quantity'
import { ProductInfo } from './list/ProductInfo'
import { DeleteProduct } from './list/DeleteProduct'

export interface ListedItem extends Omit<SaleDetail, 'saleId' | 'currency'> {
  product: ProductWithCodes
  enabled: boolean
}

const columns: TableColumn<ListedItem>[] = [
  { key: 'delete', header: '', width: '64px', align: 'center', class: 'p-0!', render: DeleteProduct },
  { key: 'product', header: 'Producto', width: 'minmax(240px, 1fr)', class: 'pl-0!', headerClass: 'pl-0!', render: ProductInfo },
  { key: 'count', header: 'Cantidad', width: 'min-content', render: Quantity},
  { key: 'salePrice', header: 'Precio unitario', width: 'max-content', render: UnitPrice },
  { key: 'iva', header: 'IVA', width: 'min-content', render: IvaRate },
  { key: 'discount', header: 'Descuento', width: 'min-content', render: Discount },
  { key: 'price', header: 'Importe', width: 'minmax(240px, 1fr)', render: LineTotal },
  { key: 'checkbox', header: '', width: '64px', align: 'center', class: 'p-0!', render: ToggleItem }
]

export function ListView () {
  const products = useNewSaleStore((state) => state.products)
  const setProducts = useNewSaleStore((state) => state.setProducts)
  const listedItems = useNewSaleStore((state) => state.listedItems)
  const setListedItems = useNewSaleStore((state) => state.setListedItems)

  const [page, setPage] = useState(1)
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

  function handleAddProduct (id: string) {
    const product = products.find((p) => p.id === id)
    if (!product) return
    
    const listedItemIndex = listedItems.findIndex((li) => li.product.id === id)
    if (listedItemIndex !== -1) listedItems[listedItemIndex].quantity++
    else listedItems.push({
      id: v4(),
      discount: 0,
      ivaRate: 0.22,
      product,
      quantity: 1,
      unitPriceAtMoment: product.salePrice,
      enabled: true
    })
    
    setListedItems(listedItems)
    setPage(1)
  }

  useEffect(() => {
    setProducts(mockedProducts)
  }, [])
  
  return <>
    <Keybinds keys='Escape' onBind={() => (document.activeElement as any)?.blur()} hidden />
    <section class='h-full w-full flex flex-col gap-2 flex-1 p-4'>
      <div class='relative h-full' hidden={page !== 1}>
        { !listedItems.length && <div class='absolute z-4 left-1/2 top-1/2 -translate-1/2 flex flex-col gap-2 text-center text-base-content/60 font-semibold'>
          <span>Nada cargado todavía.</span>
          <span>Pulsa <kbd class='kbd'>2</kbd> para buscar un artículo.</span>
        </div> }
        <Table
          id='loaded-products-in-new-sale'
          data={listedItems}
          columns={columns}
          class='h-full w-full text-sm rounded-lg [&_.cell]:p-2 overflow-hidden border border-base-content/20 bg-base-100 [&_.group:hover_.body-row]:bg-base-200 [&_.body-row]:transition-colors'
          stickyHeader
        />
      </div>
      <div class='h-[calc(100%-48px)] flex flex-col gap-2' hidden={page !== 2}>
        <div class='flex items-center justify-between gap-2'>
          <SearchBar placeholder='Busca por nombre, proveedor, marca...' class='flex-1' />
          <SearchBar placeholder='Busca por código' />
        </div>
        <div class='flex-1 w-full overflow-y-auto rounded-lg border border-base-content/20 bg-base-100'>
          { products.map(({ id, title, subtitle, salePrice, codes, provider, stock }) => {
            const mainCode = codes.find((c) => c?.isMain)?.code
            const unit = Math.random() > 0.5 ? 'un' : 'mts'
            return (
              <Button
                key={`list-item-${id}`}
                class='w-full h-fit justify-start gap-4 p-3 px-4 focus-visible:border-base-content focus-visible:outline-0'
                onClick={() => handleAddProduct(id)}
              >
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
        <Button fill={page !== 1 ? 'ghost' : 'outline'} class={`${page !== 1 ? '' : 'current'} gap-3 [.current]:border-base-content/20 [.current]:bg-base-100`} onClick={() => setPage(1)}>
          <Icon class='size-5'>
            <IconList />
          </Icon>
          <strong class='font-semibold'>Listado de productos</strong>
          <Keybinds keys='1' onBind={() => setPage(1)} when={whenToFocus} />
        </Button>

        <Button fill={page !== 2 ? 'ghost' : 'outline'} class={`${page !== 2 ? '' : 'current'} gap-3 [.current]:border-base-content/20 [.current]:bg-base-100`} onClick={() => setPage(2)}>
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
          resultsInfo={{ found: 65, total: products.length }}

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
