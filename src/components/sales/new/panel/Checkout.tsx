import { Button } from '@/components/ui/Button'

export function Checkout () {
  return (
    <div class='sticky bottom-0 w-full p-4 bg-base-100 border-t border-base-content/20'>
      <Button
        color='primary'
        width='block'
        tabIndex={0}
        // onClick={checkout}
      >
        Cobrar
      </Button>
    </div>
  )
}
