import { useRef } from 'preact/hooks'
import type { PaginationProps } from '@/types/ui/paginationTypes'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { IconChevron } from '../ui/Icons'

export function Pagination ({
  showPerPage, pages: pagesCount, currentPage,
  onClickPage,
  buttons, resultsInfo,
  size, fill, color,
  id, class: className = '', hidden
}: PaginationProps) {
  const pagesRef = useRef<number[] | null>(null)
  if (!pagesRef.current) pagesRef.current = Array(pagesCount).fill('').map((_,i) => i + 1)

  const showPreviousButton =
    buttons === 'always' ||
    (buttons === 'dynamic' && currentPage > 1)
  
  const showNextButton =
    buttons === 'always' ||
    (buttons === 'dynamic' && currentPage < pagesCount)

  const showing = {
    current: currentPage * showPerPage - showPerPage + 1,
    of: currentPage * showPerPage
  }

  function handleClick (currentPage: number, newPage: number) {
    if (newPage < 1 || newPage > pagesCount) return
    onClickPage(currentPage, newPage)
  }

  return (
    <div class={`${className} h-12 flex flex-wrap items-center px-4 gap-2`} hidden={hidden}>
      <span class='flex-1 text-base-content/60'>Mostrando <b>{showing.current}-{showing.of}</b></span>

      <div class='flex-1 join justify-center'>
        {/* PreviousPageButton */}
        { showPreviousButton && (
          <Button
            title='Página anterior'
            size={size}
            fill={buttons === 'always' && currentPage <= 1 ? 'ghost' : fill}
            shape='square'
            disabled={buttons === 'always' && currentPage <= 1}
            onClick={() => handleClick(currentPage, currentPage - 1)}
          >
            <Icon class='size-5'>
              <IconChevron direction='left' />
            </Icon>
          </Button>
        ) }

        { pagesRef.current.map((pageNumber) => {
          const isCurrentPage = currentPage === pageNumber
          return (
            <Button
              key={`${id}-pagination-${pageNumber}`}
              size={size}
              fill={fill}
              color={isCurrentPage ? color : undefined}
              shape='square'
              class='join-item'
              title={isCurrentPage ? `Página actual (${pageNumber})` : ''}
              onClick={() => handleClick(currentPage, pageNumber)}
            >
              {pageNumber}
            </Button>
          )
        }) }

        {/* PreviousPageButton */}
        { showNextButton && (
          <Button
            title='Página siguiente'
            size={size}
            fill={buttons === 'always' && currentPage >= pagesCount ? 'ghost' : fill}
            shape='square'
            disabled={buttons === 'always' && currentPage >= pagesCount}
            onClick={() => handleClick(currentPage, currentPage + 1)}
          >
            <Icon class='size-5'>
              <IconChevron direction='right' />
            </Icon>
          </Button>
        ) }
      </div>

      <span class='flex-1 text-end text-base-content/60'>{resultsInfo.found} resultados de {resultsInfo.total}</span>
    </div>
  )
}
