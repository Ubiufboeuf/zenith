import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconDownload, IconExit, IconPlus, IconPrinter, IconSave, IconX } from '@/components/ui/Icons'
import { useNewSaleStore } from '@/stores/newSaleStore'
import { formatCurrency } from '@/utils/currencies'
import type { TargetedMouseEvent } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { CheckoutPayment } from './checkout/CheckoutPayment'
import { v4 } from 'uuid'
import { checkout } from '@/lib/sales/checkout'
import { getAmountToDisplay } from '@/lib/currencies'

export function CheckoutModal () {
  const modalRef = useRef<HTMLDialogElement>(null)
  
  const isCheckoutModalOpen = useNewSaleStore((state) => state.isCheckoutModalOpen)
  const closeCheckoutModal = useNewSaleStore((state) => state.closeCheckoutModal)
  
  const saleCurrency = useNewSaleStore((state) => state.currency)
  const total = useNewSaleStore((state) => state.total)
  const displayTotal = getAmountToDisplay(total, saleCurrency)

  const payments = useNewSaleStore((state) => state.payments)
  const addPayment = useNewSaleStore((state) => state.addPayment)
  const [paymentsAmount, setPaymentsAmount] = useState(0)
  const displayPaymentsAmount = getAmountToDisplay(paymentsAmount, saleCurrency)

  const rest = useNewSaleStore((state) => state.rest) || paymentsAmount - Number(total)
  const setRest = useNewSaleStore((state) => state.setRest)
  
  function handleExitModal (event: TargetedMouseEvent<HTMLDialogElement>) {
    const modal = event.currentTarget
    if (modal !== event.target) return
    closeCheckoutModal()
  }

  function createPayment () {
    addPayment({
      id: v4(),
      amountPaid: 0,
      currency: 'UYU',
      paymentMethod: 'cash'
    })
  }

  async function checkoutAndExit () {
    await checkout()
    location.href = '/sales'
  }

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    if (isCheckoutModalOpen) modal.showModal()
    else modal.close()

    const sum = payments.reduce((acc, p) => acc + p.amountPaid, 0)
    setPaymentsAmount(sum * 100)

    const rest = sum - Number(total) / 100
    setRest(rest)
  }, [isCheckoutModalOpen])
  
  useEffect(() => {
    const sum = payments.reduce((acc, p) => acc + p.amountPaid, 0)
    setPaymentsAmount(sum * 100)

    const rest = sum - Number(total) / 100
    setRest(rest)
  }, [payments])
  
  return (
    <dialog
      ref={modalRef}
      class='fixed inset-0 m-0 h-screen max-h-none w-screen max-w-none open:flex items-center justify-center bg-black/30 outline-0'
      onClick={handleExitModal}
    >
      <div class='h-full max-h-8/10 w-full max-w-8/10 flex justify-between rounded-xl overflow-hidden'>
        <div class='relative h-full max-h-full w-full px-6 overflow-y-auto outline-0 bg-base-100'>
          <div class='sticky top-0 z-1 h-fit w-full flex items-center gap-4 py-5 bg-base-100'>
            <span class='text-sm text-base-content/50 font-semibold uppercase'>Métodos de pago</span>
            <Button fill='outline' size='sm' class='not-shr:border-base-content/20 ml-auto' onClick={createPayment}>
              <Icon class='size-4'>
                <IconPlus />
              </Icon>
              <span>Agregar pago</span>
            </Button>
          </div>
          <div class='flex flex-col h-fit w-full flex-1 gap-3'>
            { payments.map((payment, idx) => <CheckoutPayment key={`checkout-payment-${payment.id}`} payment={payment} idx={idx} />) }
          </div>
        </div>
        
        <div class='relative flex flex-col w-88 shrink-0 px-6 overflow-y-auto h-full bg-base-200 border-l border-base-content/20'>
          <Button fill='ghost' shape='square' class='absolute right-3 top-3 text-base-content opacity-60 shr:opacity-100' onClick={closeCheckoutModal}>
            <Icon class='size-5'>
              <IconX />
            </Icon>
          </Button>

          <div class='w-full h-fit flex flex-col gap-2 pt-6 pb-4 border-b border-base-content/20'>
            <span class='text-base-content/50 text-sm font-semibold uppercase'>Total a pagar</span>
            <strong class='text-3xl text-primary text-nowrap overflow-x-auto scrollbar-thin'>{displayTotal}</strong>
          </div>
          <div class='w-full h-fit flex flex-col gap-2 py-6'>
            <div class='w-full h-fit flex items-center justify-between gap-2 flex-wrap'>
              <span class='text-base-content/50'>Suma de pagos</span>
              <span class='font-semibold'>{displayPaymentsAmount}</span>
            </div>
            <div class={`${rest >= 0 ? 'ok' : ''} w-full h-fit flex items-center justify-between gap-2 flex-wrap text-error [.ok]:text-accent`}>
              { rest < 0 && <span>Faltan</span> }
              { rest >= 0 && <span>Vuelto</span> }
              <span class='font-semibold'>{formatCurrency(rest)}</span>
            </div>
          </div>
          <div class='w-full h-fit flex flex-col gap-2 py-6 mt-auto border-t border-base-content/20'>
            <div class='w-full flex items-center gap-2'>
              <Button fill='soft' shape='square' title='Imprimir'>
                <Icon class='size-5'>
                  <IconPrinter />
                </Icon>
              </Button>
              <Button fill='soft' shape='square' title='Descargar copia'>
                <Icon class='size-5'>
                  <IconDownload />
                </Icon>
              </Button>
              <Button color='secondary' fill='soft' class='flex-1' onClick={checkout}>
                <Icon class='size-5'>
                  <IconSave />
                </Icon>
                <span>Guardar</span>
              </Button>
            </div>
            <Button color='primary' onClick={checkoutAndExit}>
              <Icon class='size-5'>
                <IconExit />
              </Icon>
              <span>Guardar y salir</span>
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
