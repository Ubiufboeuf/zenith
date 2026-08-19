import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconHistory } from '@/components/ui/Icons'
import { Select, type SelectOption } from '@/components/ui/Select'
import { useEffect, useRef, useState } from 'preact/hooks'
import { Temporal } from 'temporal-polyfill'

const eventTypes: SelectOption[] = [
{ id: 'no-filter', label: 'No filtrar', default: true },
  { id: 'creation', label: 'Creación' },
  { id: 'price-change', label: 'Cambio de precio' },
  { id: 'currency-change', label: 'Cambio de moneda' },
  { id: 'name-change', label: 'Cambio de nombre' },
  { id: 'stock-change', label: 'Cambio de stock' }
]

function getDatePresets (today: Temporal.PlainDate) {
  let count = 0
  const getId = () => `dp-${count++}`
  
  const lastWeek = today.subtract({ weeks: 1 })
  const lastMonth = today.subtract({ months: 1 })
  const thisWeek = today.subtract({ days: today.dayOfWeek - 1 })
  const thisMonth = today.with({ day: 1 })

  return [
    { id: getId(), label: 'Hoy', since: today, until: today },
    { id: getId(), label: 'Última semana', since: lastWeek, until: today },
    { id: getId(), label: 'Último mes', since: lastMonth, until: today },
    { id: getId(), label: 'Esta semana', since: thisWeek, until: today },
    { id: getId(), label: 'Este mes', since: thisMonth, until: today }
  ]
}

export function EventsSection () {
  const sinceRef = useRef<HTMLInputElement>(null)
  const untilRef = useRef<HTMLInputElement>(null)
  
  const [today] = useState(Temporal.Now.plainDateISO())
  const datePresets = getDatePresets(today)
  const [currentPreset, setCurrentPreset] = useState<string | undefined>(datePresets[0].id)

  const [dateError, setDateError] = useState<string | undefined>()
  
  function checkDateInconsistensy () {
    const since = sinceRef.current?.value
    const until = untilRef.current?.value

    const undefinedDates = !since && !until ?
      'Desde y Hasta indefinidos'
      : !since ? 'Desde indefinido'
      : !until ? 'Hasta indefinido' : undefined
    
    if (!since || !until) {
      setDateError(`Rango de fechas inválido: ${undefinedDates}`)
      return
    }

    const sinceInstant = Temporal.Instant.from(Temporal.PlainDate.from(since).toZonedDateTime('UTC'))
    const untilInstant = Temporal.Instant.from(Temporal.PlainDate.from(until).toZonedDateTime('UTC'))

    let dateError = undefined
    if (sinceInstant.epochMilliseconds > untilInstant.epochMilliseconds) {
      dateError = 'Rango de fechas inválido: Desde > Hasta'
    }
    
    setDateError(dateError)
  }

  function handleChange () {
    const since = sinceRef.current?.value
    const until = untilRef.current?.value

    console.log({ since, until })
    
    checkDateInconsistensy()
    
    for (const dp of datePresets) {
      if (dp.since.toString() !== since || dp.until.toString() !== until) continue
      setCurrentPreset(dp.id)
      return
    }
    
    setCurrentPreset(undefined)
  }
  
  function changePreset (currentPreset: string | undefined) {
    const since = sinceRef.current
    const until = untilRef.current

    if (!since || !until) return
    
    const preset = datePresets.find((dp) => dp.id === currentPreset)
    if (!preset) return

    since.value = preset.since.toString()
    until.value = preset.until.toString()

    checkDateInconsistensy()
  }
  
  useEffect(() => {
    changePreset(currentPreset)
  }, [currentPreset])
  
  return (
    <section class='flex flex-col gap-4'>
      <div class='flex gap-2 flex-wrap'>
        <span class='flex-1 flex items-center justify-start gap-2 w-fit h-fit text-sm text-base-content/70 font-semibold'>
          <Icon class='size-4'>
            <IconHistory />
          </Icon>
          Eventos
        </span>
        { dateError && <span class='flex-1 flex items-center justify-center gap-2 min-w-fit h-fit text-sm font-semibold text-error/90'>
          {dateError}
        </span> }
        <div class='flex-1' />
      </div>
      <div class='flex flex-col gap-3'>
        <div class='flex justify-between gap-3'>
          <label class='flex flex-col gap-1 w-full'>
            <span class='text-xs text-base-content/50 font-semibold'>Tipo de evento</span>
            <Select options={eventTypes} class='select-sm' />
          </label>
          <label class='flex flex-col gap-1 w-full'>
            <span class='text-xs text-base-content/50 font-semibold'>Desde</span>
            <input ref={sinceRef} type='date' class='input input-sm' onChange={handleChange} />
          </label>
          <label class='flex flex-col gap-1 w-full'>
            <span class='text-xs text-base-content/50 font-semibold'>Hasta</span>
            <input ref={untilRef} type='date' class='input input-sm' onChange={handleChange} />
          </label>
        </div>
        <div class='flex flex-wrap justify-center max-w-md mx-auto gap-3'>
          { datePresets.map(({ id, label }) => (
            <Button
              key={id}
              size='xs'
              label={label}
              class={`${currentPreset === id ? 'selected' : ''} not-[.selected]:btn-soft [.selected]:btn-primary`}
              onClick={() => setCurrentPreset(id)}
            />
          )) }
        </div>
      </div>
    </section>
  )
}
