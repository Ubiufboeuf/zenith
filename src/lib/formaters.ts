export function formatDate (timestamp: number, locales: Intl.LocalesArgument, options: Intl.DateTimeFormatOptions): string {
  return new Intl
    .DateTimeFormat(locales, options)
    .format(timestamp || 0)
}
