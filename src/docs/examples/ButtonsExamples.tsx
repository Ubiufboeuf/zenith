import { Button } from '@/components/ui/Button'
import type { Example } from '@/types/docs/demoTypes'

export const Basic: Example = {
  title: 'Uso básico',
  code: '<Button />',
  Component: <Button />
}

export const Content: Example = {
  title: 'Contenido',
  description: '`label` es igual que `children` pero con el contenido envuelto en un <<span>>.',
  code: `<Button label='Contenido por la prop [label]' />
  <Button>
    Contenido por [children]
  </Button>`,
  Component: <>
    <Button label='Contenido por la prop [label]' />
    <Button>
      Contenido por [children]
    </Button>
  </>
}

export const Sizes: Example = {
  title: 'Tamaños',
  code: `<Button label='Extreme Small' size={'xs'} />
  <Button label='Small' size={'sm'} />
  <Button label='Medium' size={'md'} />
  <Button label='Large' size={'lg'} />
  <Button label='Extreme Large' size={'xl'} />`,
  Component: <>
  <Button label='Extreme Small' size={'xs'} />
  <Button label='Small' size={'sm'} />
  <Button label='Medium' size={'md'} />
  <Button label='Large' size={'lg'} />
  <Button label='Extreme Large' size={'xl'} />
  </>
}
