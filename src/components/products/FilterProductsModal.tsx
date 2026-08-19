import { Icon } from '../ui/Icon'
import { IconFilter, IconX } from '../ui/Icons'
import { CloseModal } from '../ui/modal/CloseModal'
import { Modal } from '../ui/modal/Modal'
import { ClasificationSection } from './modal/ClasificationSection'
import { PricesSection } from './modal/PricesSection'
import { CodesSection } from './modal/CodesSection'
import { EventsSection } from './modal/EventsSection'
import { useRef, useState } from 'preact/hooks'
import { ApplyFilters } from './modal/ApplyFilters'
import { sleep } from '@/utils/time'
import { StockSection } from './modal/StockSection'
import { ClearFilters } from './modal/ClearFilters'

export type ProcessState = 'none' | 'loading' | 'success'
export type ActiveAction =
  { type: 'none' }
| { type: 'clearing' | 'applying', state: ProcessState }

const modalName = 'filter-products'

export function FilterProductsModal () {
  // para toasts o dejar esto en segundo plano, simplemente hay que mover este state a zustand
  const [activeAction, setActiveAction] = useState<ActiveAction>({ type: 'none' })
  const isExecutingRef = useRef(false)

  async function clearFilters () {
    if (isExecutingRef.current) return
    isExecutingRef.current = true
    
    try {
      setActiveAction({ type: 'clearing', state: 'loading' })
      await sleep(1500)
      setActiveAction({ type: 'clearing', state: 'success' })
      await sleep(2000)
      setActiveAction({ type: 'none' })
    } finally {
      isExecutingRef.current = false
    }
  }

  async function applyFilters () {
    if (isExecutingRef.current) return
    isExecutingRef.current = true
    
    try {
      setActiveAction({ type: 'applying', state: 'loading' })
      await sleep(1500)
      setActiveAction({ type: 'applying', state: 'success' })
      await sleep(2000)
      setActiveAction({ type: 'none' })
    } finally { 
      isExecutingRef.current = false
    }
  }

  return (
    <Modal modal={modalName}>
      <div class='relative h-full w-full max-h-120 max-w-160 rounded-lg bg-base-100 overflow-y-auto'> {/* p-5 px-6 */}
        <div class='relative h-full w-full min-h-fit min-w-fit flex flex-col'>
          <header class='sticky top-0 w-full h-fit flex items-center gap-2 p-4 px-6 border-b border-base-content/20 bg-base-100 z-1'>
            <Icon class='size-6'>
              <IconFilter />
            </Icon>
            <h1 class='flex items-center justify-center text-lg font-semibold'>
              Filtrar productos
            </h1>
            <CloseModal modal={modalName} class='ml-auto' shape='circle' fill='ghost'>
              <Icon class='size-6'>
                <IconX />
              </Icon>
            </CloseModal>
          </header>
          <main class='w-full flex-1 flex'>
            <div class='h-fit w-full flex flex-col gap-6 p-5 px-6'>
              <ClasificationSection />
              <hr class='text-base-content/20'></hr>
              <PricesSection />
              <hr class='text-base-content/20'></hr>
              <StockSection />
              <hr class='text-base-content/20'></hr>
              <CodesSection />
              <hr class='text-base-content/20'></hr>
              <EventsSection />
            </div>
          </main>
          <footer class='sticky bottom-0 h-fit w-full flex justify-between gap-2 p-4 px-6 border-t border-base-content/20 bg-base-100 z-1'>
            <ClearFilters activeAction={activeAction} clearer={clearFilters} />
            <ApplyFilters activeAction={activeAction} applier={applyFilters} />
          </footer>
        </div>
      </div>
    </Modal>
  )
}
