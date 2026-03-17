export function CloseSidebar () {
  return (
    <label
      htmlFor='checkbox-sidebar-state'
      role='button'
      class='not-sidebar-open:hidden ml:hidden fixed z-1 top-0 left-0 h-screen w-screen cursor-pointer not-sm:[transition:all_250ms_ease_allow-discrete] bg-black/80 not-sm:not-sidebar-open:bg-transparent'
    />
  )
}
