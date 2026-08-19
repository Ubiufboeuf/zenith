export function StockFilter () {
  return (
    <div class='flex gap-1'>
      <label class='flex flex-col gap-1'>
        <span class='text-xs font-semibold text-base-content/50'>Stock mínimo</span>
        <input
          placeholder='0'
          type='number'
          class='input input-sm w-24'
        />
      </label>
      <label class='flex flex-col gap-1'>
        <span class='text-xs font-semibold text-base-content/50'>Stock máximo</span>
        <input
          placeholder='100'
          type='number'
          class='input input-sm w-24'
        />
      </label>
    </div>
  )
}
