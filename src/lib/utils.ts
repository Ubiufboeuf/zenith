export function limit (min: number | undefined, number: number, max: number | undefined = Number.MAX_SAFE_INTEGER) {
  if (!min) return Math.min(number, max)
  return Math.max(min, Math.min(number, max))
}
