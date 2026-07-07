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

export const Types: Example = {
  title: 'Tipos de botones',
  description: '`outline` tiene prioridad sobre `soft`. Si se usan ambos, `soft` se ignora.',
  code: [
    {
      tab: 'Rellenos',
      code: `<Button label='Default' />
  <Button label='Neutral' variant={'neutral'} />
  <Button label='Primary' variant={'primary'} />
  <Button label='Secondary' variant={'secondary'} />
  <Button label='Accent' variant={'accent'} />
  <Button label='Info' variant={'info'} />
  <Button label='Success' variant={'success'} />
  <Button label='Warning' variant={'warning'} />
  <Button label='Error' variant={'error'} />`,
      Component: <>
  <Button label='Default' />
  <Button label='Neutral' variant={'neutral'} />
  <Button label='Primary' variant={'primary'} />
  <Button label='Secondary' variant={'secondary'} />
  <Button label='Accent' variant={'accent'} />
  <Button label='Info' variant={'info'} />
  <Button label='Success' variant={'success'} />
  <Button label='Warning' variant={'warning'} />
  <Button label='Error' variant={'error'} />
      </>
    },
    {
      tab: 'Suaves',
      code: `<Button label='Default' soft />
  <Button label='Neutral' soft variant={'neutral'} />
  <Button label='Primary' soft variant={'primary'} />
  <Button label='Secondary' soft variant={'secondary'} />
  <Button label='Accent' soft variant={'accent'} />
  <Button label='Info' soft variant={'info'} />
  <Button label='Success' soft variant={'success'} />
  <Button label='Warning' soft variant={'warning'} />
  <Button label='Error' soft variant={'error'} />`,
      Component: <>
  <Button label='Default' soft />
  <Button label='Neutral' soft variant={'neutral'} />
  <Button label='Primary' soft variant={'primary'} />
  <Button label='Secondary' soft variant={'secondary'} />
  <Button label='Accent' soft variant={'accent'} />
  <Button label='Info' soft variant={'info'} />
  <Button label='Success' soft variant={'success'} />
  <Button label='Warning' soft variant={'warning'} />
  <Button label='Error' soft variant={'error'} />
      </>
    },
    {
      tab: 'Bordes',
      code: `<Button label='Default' outline />
  <Button label='Neutral' outline variant={'neutral'} />
  <Button label='Primary' outline variant={'primary'} />
  <Button label='Secondary' outline variant={'secondary'} />
  <Button label='Accent' outline variant={'accent'} />
  <Button label='Info' outline variant={'info'} />
  <Button label='Success' outline variant={'success'} />
  <Button label='Warning' outline variant={'warning'} />
  <Button label='Error' outline variant={'error'} />`,
      Component: <>
  <Button label='Default' outline />
  <Button label='Neutral' outline variant={'neutral'} />
  <Button label='Primary' outline variant={'primary'} />
  <Button label='Secondary' outline variant={'secondary'} />
  <Button label='Accent' outline variant={'accent'} />
  <Button label='Info' outline variant={'info'} />
  <Button label='Success' outline variant={'success'} />
  <Button label='Warning' outline variant={'warning'} />
  <Button label='Error' outline variant={'error'} />
      </>
    }
  ]
}
