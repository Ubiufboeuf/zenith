/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MODALS } from '@/stores/modalStore'

type ModalName = typeof MODALS[keyof typeof MODALS]
type ModalAction = 'open' | 'close'

type ModalEvents = {
  [K in `${ModalAction}-modal:${'${modalName}' | `${ModalName}`}` | (string & {})]: any
}

export type ZenithEvents = {
  'open-modal': string
  'close-modal': string
} & ModalEvents
