import { Icon } from '../../Icon'
import { IconFilter } from '../../Icons'
import { CloseModal } from '../../modal/CloseModal'
import { Modal } from '../../modal/Modal'

const modalName = 'filters'

export function FiltersModal () {
  return (
    <Modal modal={modalName}>
      <div class='relative h-full w-full max-h-135 max-w-240 rounded-lg bg-base-100 p-5'>
        <div class='relative h-full w-full min-h-fit min-w-fit flex flex-col'>
          <div class='w-full flex items-center gap-2'>
            <Icon class='size-6'>
              <IconFilter />
            </Icon>
            <h1 class='flex items-center justify-center text-lg font-semibold'>
              Filtrar productos
            </h1>
            <CloseModal modal={modalName} class='ml-auto' />
          </div>
          <section>
            {/* filtros */}
          </section>
        </div>
      </div>
    </Modal>
  )
}
