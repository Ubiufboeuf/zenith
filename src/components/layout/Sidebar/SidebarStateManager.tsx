export function SidebarStateManager ({ initialState }: { initialState: boolean }) {
  return (
    <input id='checkbox-sidebar-state' type='checkbox' hidden defaultChecked={initialState} />
  )
}
