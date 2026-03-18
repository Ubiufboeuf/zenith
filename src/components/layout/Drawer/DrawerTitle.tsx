const links = [
  { title: 'a' }
]

export function DrawerTitle () {
  return (
    <h1 class='invisible'>
      Menú para celulares. Panel información de usuario y los enlaces:
      {links.map((l) => l.title).join(', ')}
    </h1>
  )
}
