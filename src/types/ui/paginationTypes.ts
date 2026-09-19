import type { UIColors, UIFillMode, UISizes } from '../uiTypes'

export interface PaginationProps {
  showPerPage: number
  pages: number
  currentPage: number
  
  onClickPage: (currentPage: number, newPage: number) => void
  
  buttons: 'never' | 'dynamic' | 'always'
  resultsInfo: { found: number, total: number }
  
  size?: UISizes
  fill?: UIFillMode
  color?: UIColors

  id: string
  class?: string
  hidden?: boolean
}
