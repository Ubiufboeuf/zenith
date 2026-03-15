import { useClock } from '@/hooks/useClock'

export function Clock () {
  const time = useClock()

  return (
    <span class='text-3xl font-bold tracking-widest'>{time}</span>
  )
}
