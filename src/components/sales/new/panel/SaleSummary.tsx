import { Select } from '@/components/ui/Select'

export function SaleSummary () {
  return (
    <div class='flex flex-col gap-2'>
      {/* Title */}
      <div class='flex items-center gap-2'>
        <div class='w-4 h-px bg-base-content/20'></div>
        <strong class='w-fit text-sm font-semibold text-base-content/60'>Resumen</strong>
        <div class='flex-1 h-px bg-base-content/20'></div>
      </div>

      {/* Content */}
      <div class='flex flex-col gap-2'>
        <div class='flex justify-between items-center gap-2 pb-2 text-sm text-base-content/70'>
          <input type='number' class='input input-sm' placeholder='Descuento general' />
          <Select
            options={['%', '$']}
            class='select-sm w-16 font-semibold'
          />
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Subtotal</span>
          <span class='text-base-content font-semibold'>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Descuentos</span>
          <span class='text-secondary'>- UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>Neto gravado</span>
          <span>UYU 16.000,20</span>
        </div>
        <div class='flex justify-between text-sm text-base-content/70'>
          <span>IVA</span>
          <span>UYU 16.000,20</span>
        </div>
      </div>
      <div>
        <div class='flex justify-between items-center text-sm h-fit text-base-content/70'>
          <strong class='flex h-full items-center pt-1'>Total</strong>
          <span class='text-xl text-primary font-semibold border-t border-base-content/40 pt-1'>UYU 16.000,20</span>
        </div>
        <div class='flex items-center justify-between text-sm text-base-content/70'>
          <span>Vuelto</span>
          <strong class='text-accent'>UYU 16.000,20</strong>
        </div>
      </div>
    </div>
  )
}
