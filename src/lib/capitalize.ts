export function capitalize (text: string, splitter: string) {
  const splitted = text.split(splitter)
  const capitalized = splitted.map((part) => upFirst(part))
  return capitalized.join(splitter)
}

function upFirst (str: string): string {
  const first = str[0].toUpperCase()
  const rest = str.substring(1, str.length)
  return `${first}${rest}`
}
