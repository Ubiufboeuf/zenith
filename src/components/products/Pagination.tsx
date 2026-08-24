import type { ProductWithCodes } from '@/types/products/productTypes'
import { Button } from '../ui/Button'
import { useEffect, useState } from 'preact/hooks'
import { Icon } from '../ui/Icon'
import { IconChevron } from '../ui/Icons'

interface Page<T> {
  pageNumber: number
  items: T[]
}

interface Pagination<T> {
  pages: Page<T>[]
  currentPageNumber?: number
}

interface PageButton {
  pageNumber: number
}

const pagination: Pagination<ProductWithCodes> = {
  pages: [
    { pageNumber: 1, items: [] },
    { pageNumber: 2, items: [] },
    { pageNumber: 3, items: [] },
    { pageNumber: 4, items: [] },
    { pageNumber: 5, items: [] }
  ]
}

export function Pagination () {
  const { pages, currentPageNumber = pagination.pages[0].pageNumber } = pagination
  const [pagesButtons, setPagesButtons] = useState<PageButton[]>([])
  const [hasPreviousPage, setHasPreviousPage] = useState(currentPageNumber > 1)
  const [hasNextPage, setHasNextPage] = useState(currentPageNumber < pages.length)

  useEffect(() => {
    if (!pages) return

    const btns: PageButton[] = []

    for (let i = currentPageNumber - 2; i <= currentPageNumber + 2; i++) {
      if (i < 0 || i > pages.length) continue
      btns.push({ pageNumber: i })
    }

    setHasPreviousPage(currentPageNumber > 1)
    setHasNextPage(currentPageNumber < pages.length)
    setPagesButtons(btns)
  }, [pages])
  
  return (
    <div class='h-12 flex flex-wrap items-center px-4'>
      <span class='flex-1 text-base-content/60'>Mostrando <b>1-20</b></span>
      <div class='flex-1 join justify-center'>
        { hasPreviousPage && (
          <Button title='Página anterior' size='sm' fill='ghost' shape='square'>
            <Icon class='size-5'>
              <IconChevron direction='left' />
            </Icon>
          </Button>
        ) }
        { pagesButtons.map(({ pageNumber }) => {
          const isCurrentPage = currentPageNumber === pageNumber
          if (!pageNumber) return
          return (
            <Button
              key={`pagination-btn-${pageNumber}`}
              size='sm'
              fill='ghost'
              class='join-item' {...isCurrentPage ? {color: 'primary'} : ''}
              title={isCurrentPage ? `Página actual [${pageNumber}]` : ''}
            >
              { pageNumber }
            </Button>
          )
        }) }
        { hasNextPage && (
          <Button title='Página siguiente' size='sm' fill='ghost' shape='square'>
            <Icon class='size-5'>
              <IconChevron direction='right' />
            </Icon>
          </Button>
        ) }
      </div>
      <span class='flex-1 text-end text-base-content/60'>2240 resultados de 51720</span>
    </div>
  )
}
