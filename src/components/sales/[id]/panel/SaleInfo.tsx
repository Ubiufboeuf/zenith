export function SaleInfo () {
  return (
    <div class='flex flex-col gap-2'>
      <div class='flex items-center gap-2'>
        <div class='w-4 h-px bg-base-content/20'></div>
        <strong class='w-fit text-sm font-semibold text-base-content/60'>Información</strong>
        <div class='flex-1 h-px bg-base-content/20'></div>
      </div>
      <div class='flex items-center justify-between gap-2'>
        <span class='text-base-content/60 text-xs'>Cliente</span>
        <span class='text-base-content text-xs font-semibold'>Consumidor final</span>
      </div>
      <div class='flex items-center justify-between gap-2'>
        <span class='text-base-content/60 text-xs'>Cajero</span>
        <span class='text-base-content text-xs font-semibold'>Ana López</span>
      </div>
      <div class='flex items-center justify-between gap-2'>
        <span class='text-base-content/60 text-xs'>Vendedor</span>
        <span class='text-base-content text-xs font-semibold'>Ana López</span>
      </div>
      <div class='flex items-center justify-between gap-2'>
        <span class='text-base-content/60 text-xs'>Comprobante</span>
        <span class='text-base-content text-xs font-semibold'>Ticket Contado</span>
      </div>
      <div class='flex items-center justify-between gap-2'>
        <span class='text-base-content/60 text-xs'>Moneda</span>
        <span class='text-base-content text-xs font-semibold'>UYU</span>
      </div>
    </div>
  )
}
