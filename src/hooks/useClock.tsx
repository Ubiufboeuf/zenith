import { getTime } from '@/lib/clock'
import { DEFAULT_INTERVAL } from '@/lib/constants'
import { useEffect, useRef, useState } from 'preact/hooks'

export function useClock (interval: number = DEFAULT_INTERVAL) {
  const [clock, setClock] = useState<string>(() => getTime())
  const intervalIdRef = useRef<number>()

  function initInterval () {
    intervalIdRef.current = setInterval(() => {
      const time = getTime()
      setClock(time)
    }, interval)
  }
  
  function resetInterval () {
    const id = intervalIdRef.current
    if (!id) return

    clearInterval(id)
  }
  
  useEffect(() => {
    initInterval()

    return () => resetInterval()
  }, [])
  
  return clock
}
