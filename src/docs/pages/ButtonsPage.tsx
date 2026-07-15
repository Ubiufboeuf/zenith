import { useId } from 'preact/hooks'
import * as Examples from '@/docs/examples/ButtonsExamples'
import { Demo } from '../components/Demo'

export function Buttons () {
  return <>
    { Object.values(Examples).map((Example) => {
      if ('Component' in Example) {
        const { title, description, code, Component } = Example
        return (
          <Demo key={title} title={title} description={description} code={code}>
            {Component}
          </Demo>
        )
      }

      const id = useId()

      const { tabs, title, description } = Example
      
      return (
        <Demo key={title} title={title} description={description}>
          {tabs.map(({ tab, code, Component }) => (
            <Demo.Panel key={id} title={tab} code={code}>
              {Component}
            </Demo.Panel>
          ))}
        </Demo>
      )
    })
  }
  {/* <Playground /> */}
  </>
}
