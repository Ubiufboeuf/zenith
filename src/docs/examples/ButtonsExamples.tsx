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

export const Colors: Example = {
  title: 'Colores',
  code: `<Button color='neutral'>Neutral</Button>
  <Button color='primary'>Primario</Button>
  <Button color='secondary'>Secundario</Button>
  <Button color='accent'>Acento</Button>
  <Button color='info'>Info</Button>
  <Button color='success'>Éxito</Button>
  <Button color='warning'>Advertencia</Button>
  <Button color='error'>Error</Button>`,
  Component: <>
  <Button color='neutral'>Neutral</Button>
  <Button color='primary'>Primario</Button>
  <Button color='secondary'>Secundario</Button>
  <Button color='accent'>Acento</Button>
  <Button color='info'>Info</Button>
  <Button color='success'>Éxito</Button>
  <Button color='warning'>Advertencia</Button>
  <Button color='error'>Error</Button>
  </>
}

export const FillModes: Example = {
  title: 'Rellenos',
  tabs: [
    {
      tab: 'Suaves',
      code: `<Button fill='soft' color='neutral'>Neutral</Button>
  <Button fill='soft' color='primary'>Primario</Button>
  <Button fill='soft' color='secondary'>Secundario</Button>
  <Button fill='soft' color='accent'>Acento</Button>
  <Button fill='soft' color='info'>Info</Button>
  <Button fill='soft' color='success'>Éxito</Button>
  <Button fill='soft' color='warning'>Advertencia</Button>
  <Button fill='soft' color='error'>Error</Button>`,
      Component: <>
        <Button fill='soft' color='neutral'>Neutral</Button>
        <Button fill='soft' color='primary'>Primario</Button>
        <Button fill='soft' color='secondary'>Secundario</Button>
        <Button fill='soft' color='accent'>Acento</Button>
        <Button fill='soft' color='info'>Info</Button>
        <Button fill='soft' color='success'>Éxito</Button>
        <Button fill='soft' color='warning'>Advertencia</Button>
        <Button fill='soft' color='error'>Error</Button>
      </>
    },
    {
      tab: 'Contornos',
      code: `<Button fill='outline' color='neutral'>Neutral</Button>
  <Button fill='outline' color='primary'>Primario</Button>
  <Button fill='outline' color='secondary'>Secundario</Button>
  <Button fill='outline' color='accent'>Acento</Button>
  <Button fill='outline' color='info'>Info</Button>
  <Button fill='outline' color='success'>Éxito</Button>
  <Button fill='outline' color='warning'>Advertencia</Button>
  <Button fill='outline' color='error'>Error</Button>`,
      Component: <>
        <Button fill='outline' color='neutral'>Neutral</Button>
        <Button fill='outline' color='primary'>Primario</Button>
        <Button fill='outline' color='secondary'>Secundario</Button>
        <Button fill='outline' color='accent'>Acento</Button>
        <Button fill='outline' color='info'>Info</Button>
        <Button fill='outline' color='success'>Éxito</Button>
        <Button fill='outline' color='warning'>Advertencia</Button>
        <Button fill='outline' color='error'>Error</Button>
      </>
    },
    {
      tab: 'Punteados',
      code: `<Button fill='dash' color='neutral'>Neutral</Button>
  <Button fill='dash' color='primary'>Primario</Button>
  <Button fill='dash' color='secondary'>Secundario</Button>
  <Button fill='dash' color='accent'>Acento</Button>
  <Button fill='dash' color='info'>Info</Button>
  <Button fill='dash' color='success'>Éxito</Button>
  <Button fill='dash' color='warning'>Advertencia</Button>
  <Button fill='dash' color='error'>Error</Button>`,
      Component: <>
        <Button fill='dash' color='neutral'>Neutral</Button>
        <Button fill='dash' color='primary'>Primario</Button>
        <Button fill='dash' color='secondary'>Secundario</Button>
        <Button fill='dash' color='accent'>Acento</Button>
        <Button fill='dash' color='info'>Info</Button>
        <Button fill='dash' color='success'>Éxito</Button>
        <Button fill='dash' color='warning'>Advertencia</Button>
        <Button fill='dash' color='error'>Error</Button>
      </>
    },
    {
      tab: 'Enlace',
      code: `<Button fill='link' color='neutral'>Neutral</Button>
  <Button fill='link' color='primary'>Primario</Button>
  <Button fill='link' color='secondary'>Secundario</Button>
  <Button fill='link' color='accent'>Acento</Button>
  <Button fill='link' color='info'>Info</Button>
  <Button fill='link' color='success'>Éxito</Button>
  <Button fill='link' color='warning'>Advertencia</Button>
  <Button fill='link' color='error'>Error</Button>`,
      Component: <>
        <Button fill='link' color='neutral'>Neutral</Button>
        <Button fill='link' color='primary'>Primario</Button>
        <Button fill='link' color='secondary'>Secundario</Button>
        <Button fill='link' color='accent'>Acento</Button>
        <Button fill='link' color='info'>Info</Button>
        <Button fill='link' color='success'>Éxito</Button>
        <Button fill='link' color='warning'>Advertencia</Button>
        <Button fill='link' color='error'>Error</Button>
      </>
    },
    {
      tab: 'Fantasma',
      code: `<Button fill='ghost' color='neutral'>Neutral</Button>
  <Button fill='ghost' color='primary'>Primario</Button>
  <Button fill='ghost' color='secondary'>Secundario</Button>
  <Button fill='ghost' color='accent'>Acento</Button>
  <Button fill='ghost' color='info'>Info</Button>
  <Button fill='ghost' color='success'>Éxito</Button>
  <Button fill='ghost' color='warning'>Advertencia</Button>
  <Button fill='ghost' color='error'>Error</Button>`,
      Component: <>
        <Button fill='ghost' color='neutral'>Neutral</Button>
        <Button fill='ghost' color='primary'>Primario</Button>
        <Button fill='ghost' color='secondary'>Secundario</Button>
        <Button fill='ghost' color='accent'>Acento</Button>
        <Button fill='ghost' color='info'>Info</Button>
        <Button fill='ghost' color='success'>Éxito</Button>
        <Button fill='ghost' color='warning'>Advertencia</Button>
        <Button fill='ghost' color='error'>Error</Button>
      </>
    }
  ]
}

export const Shapes: Example = {
  title: 'Formas',
  code: `<Button shape='circle' className='px-4'>Redondo</Button>
  <Button shape='square' className='px-4'>Cuadrado</Button>`,
  Component: <>
    <Button shape='circle' className='px-4'>Redondo</Button>
    <Button shape='square' className='px-4'>Cuadrado</Button>
  </>
}

export const States: Example = {
  title: 'Estados',
  code: `<Button selected>Seleccionado</Button>
  <Button selected color='primary'>Seleccionado</Button>
  <Button disabled>Desactivado</Button>`,
  Component: <>
    <Button selected>Seleccionado</Button>
    <Button selected color='primary'>Seleccionado</Button>
    <Button disabled>Desactivado</Button>
  </>
}
