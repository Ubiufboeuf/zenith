import type { ProductCode } from '@/types/products/productTypes'
import { Button } from '../ui/Button'
import { Tooltip } from '../ui/Tooltip'
import { sleep } from '@/utils/time'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { useState } from 'preact/hooks'
import { IconCheck, IconClipboard, IconX } from '../ui/Icons'
import { Icon } from '../ui/Icon'

interface Props {
  codes: (ProductCode | undefined)[]
}

export function ProductCodes ({ codes }: Props) {
  const code = codes.find((c) => c?.isMain || c?.code)?.code
  if (!code) return '—'
  
  return (
    <div class='dropdown relative w-full flex items-center justify-center'>
      <Tooltip tabIndex={0} tooltip={code} tooltip-position='top' class='before:z-4 before:bg-base-300 after:z-4 after:bg-base-300'>
        <Button fill='ghost' class='group/2 relative w-full text-sm text-center font-normal text-base-content/70 bg-transparent'>
          <span class='group-shr/2:opacity-0 line-clamp-2'>{code}</span>
          <span class='absolute left-1/2 top-1/2 -translate-1/2 h-full w-full flex items-center justify-center opacity-0 group-shr/2:opacity-100'>Ver códigos</span>
        </Button>
      </Tooltip>
      <div tabIndex={-1} class='dropdown-content menu absolute z-5 group-[:not(.last-row)]/cell:top-full group-[.last-row]/cell:bottom-full w-max max-w-80 h-fit rounded-lg border border-neutral-700 bg-base-300'>
        { codes.map((c) => {
          if (!c) return
          
          const { id, code } = c
          const [state, setState] = useState<'none' | 'loading' | 'success' | 'failure'>('none')

          return (
            <Button
              key={id}
              fill='ghost'
              class='w-full h-fit items-center font-normal text-start justify-start text-base-content/70 shr:bg-base-content/10 p-2 px-3 rounded-md'
              onClick={async () => {
                if (state !== 'none') return
                
                setState('loading')
                try {
                  await navigator.clipboard.writeText(code)
                  setState('success')
                } catch {
                  setState('failure')
                } finally {
                  await sleep(500)
                  setState('none')
                }
              }}
            >
              <Icon class='size-4 shrink-0'>
                { state === 'none' && <IconClipboard /> }
                { state === 'loading' && <LoadingSpinner /> }
                { state === 'success' && <IconCheck /> }
                { state === 'failure' && <IconX /> }
              </Icon>
              <span class='w-fit h-fit line-clamp-2'>{code}</span>
            </Button>
          )
        }) }
      </div>
    </div>
  )
}
