import { useClock } from '@/hooks/useClock'

export function Clock () {
  const time = useClock()

  return (
    <span class='text-xl sm:text-3xl font-bold tracking-widest text-nowrap'>{time}</span>
  )
}
