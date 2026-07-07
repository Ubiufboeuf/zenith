import { CodeBlock } from '@/components/ui/CodeBlock'
import type { DemoComponent, DemoProps, InternalPanelProps, PanelProps } from '@/types/docs/demoTypes'
import { Children, cloneElement, isValidElement, useId, type ReactNode } from 'preact/compat'
import snarkdown from 'snarkdown'

const clean = (text: string) =>
  text.replaceAll(/(<<|>>)/g, match =>
    match === '<<' ? '&lt;' : '&gt;'
  )

const ChildrenContainer = ({ children }: { children: ReactNode }) => (
  <div class='flex flex-wrap justify-center items-center gap-4 *:w-fit'>
    {children}
  </div>
)

function Demo ({ title, description, code, children }: DemoProps) {
  const elements = Children.toArray(children)
  const id = useId()

  const panels = elements.filter(
    element => isValidElement(element) && element.type === Panel
  )

  const hasPanels = panels.length > 0

  return (
    <div class='relative flex w-full flex-col gap-2.5 py-4 group'>
      <input
        id={`${id}-switch`}
        type='checkbox'
        class='peer'
        hidden
      />

      <h1 class='card-title'>{title}</h1>

      {description && (
        <p
          class='text-sm text-base-content/80 [&_code]:bg-base-200 [&_code]:text-base-content [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-base-300'
          dangerouslySetInnerHTML={{
            __html: clean(snarkdown(description))
          }}
        />
      )}

      <div class='absolute right-0 flex gap-1 rounded-lg border border-base-300 bg-base-200 p-1 text-xs'>
        <label
          htmlFor={`${id}-switch`}
          role='button'
          class='rounded-md px-3 py-1 font-medium transition-colors not-group-[:has(input[id$="-switch"]:checked)]:bg-base-100 not-group-[:has(input[id$="-switch"]:checked)]:text-base-content not-group-[:has(input[id$="-switch"]:checked)]:shadow-sm group-[:has(input[id$="-switch"]:checked)]:text-base-content/60 group-[:has(input[id$="-switch"]:checked)]:hover:text-base-content'
        >
          Renderizado
        </label>

        <label
          htmlFor={`${id}-switch`}
          role='button'
          class='rounded-md px-3 py-1 font-medium transition-colors group-[:has(input[id$="-switch"]:checked)]:bg-base-100 group-[:has(input[id$="-switch"]:checked)]:text-base-content group-[:has(input[id$="-switch"]:checked)]:shadow-sm not-group-[:has(input[id$="-switch"]:checked)]:text-base-content/60 not-group-[:has(input[id$="-switch"]:checked)]:hover:text-base-content'
        >
          Código
        </label>
      </div>

      {hasPanels ? (
        <div class='tabs tabs-lift'>
          {panels.map((panel, idx) =>
            cloneElement(panel, {
              id,
              defaultChecked: idx === 0
            })
          )}
        </div>
      ) : (
        <>
          <div class='group-[:has(input[id$="-switch"]:checked)]:hidden w-full border border-base-300 bg-preview bg-base-100 p-6'>
            <ChildrenContainer>
              {children}
            </ChildrenContainer>
          </div>

          <div class='hidden group-[:has(input[id$="-switch"]:checked)]:block'>
            <CodeBlock code={code ?? ''} lang='tsx' />
          </div>
        </>
      )}
    </div>
  )
}

function Panel ({ id, title, code, defaultChecked, children }: InternalPanelProps) {
  return (
    <>
      <input
        type='radio'
        name={`${id}-tab`}
        class='tab font-semibold'
        aria-label={title}
        defaultChecked={defaultChecked}
      />

      <div class='tab-content border-base-300 bg-preview bg-base-100 p-6'>
        <div class='group-[:has(input[id$="-switch"]:checked)]:hidden'>
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
        </div>

        <div class='hidden group-[:has(input[id$="-switch"]:checked)]:block'>
          <CodeBlock code={code ?? ''} lang='tsx' />
        </div>
      </div>
    </>
  )
}

Demo.Panel = Panel as DemoComponent<PanelProps>

export { Demo }
