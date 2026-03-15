export function getTime () {
  const timestamp = Date.now()
  const time = Intl.DateTimeFormat('es-US', {
    hourCycle: 'h11',
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp)
  return time
}
