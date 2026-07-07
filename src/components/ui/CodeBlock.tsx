import { createHighlighter, type BundledLanguage } from 'shiki'

interface Props {
  code: string
  lang?: BundledLanguage
}

const highlighter = await createHighlighter({
  themes: ['one-dark-pro'],
  langs: ['tsx', 'ts', 'jsx', 'js', 'html', 'css']
})

function highlightCode (code: string, lang: BundledLanguage) {
  const highlightedHtml = highlighter.codeToHtml(code, {
    lang,
    theme: 'one-dark-pro'
  })

  return highlightedHtml
}

export function CodeBlock ({ code, lang = 'tsx' }: Props) {
  return (
    <div 
      className='mockup-code bg-base-200 **:bg-transparent! **:not-italic!'
      dangerouslySetInnerHTML={{ __html: highlightCode(code, lang) }} 
    />
  )
}
