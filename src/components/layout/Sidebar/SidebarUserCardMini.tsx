export function SidebarUserCardMini () {
  return (
    <footer class='h-full w-full flex items-center justify-center border-t z-1 border-border'>
      <button
        title='Stelle (Trailblazer)'
        class='h-fit p-1 aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-colors hover:bg-accent'
      >
        <div class='size-10 flex items-center justify-center overflow-hidden rounded-full border-2 border-border'>
          <img src='/assets/profile.webp' />
        </div>
      </button>
    </footer>
  )
}
