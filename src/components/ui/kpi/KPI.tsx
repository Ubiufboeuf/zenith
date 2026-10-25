import type { KpiItem } from '@/types/ui/kpiTypes'
import { Icon } from '../Icon'
import { TrendBadge } from '../badges/TrendBadge'
import { useEffect, useState } from 'preact/hooks'
import type { TrendBadgeProps } from '@/types/ui/badgeTypes'

const COLORS: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info'
}

export function KPI ({ title, value, subtext, trend: _trend, color, icon: KpiIcon, class: className = '' }: KpiItem) {
  const iconColor = (color ? COLORS[color] : '') || color
  const [isLoadingContent, setIsLoadingContent] = useState(true)
  const [content, setContent] = useState<string>()
  const [trend, setTrend] = useState<TrendBadgeProps>()
    
  function loadFunctions () {
    setTimeout(() => {
      setContent(typeof value === 'function' ? value() : value)
      setTrend(typeof _trend === 'function' ? _trend() : _trend)
      setIsLoadingContent(false)
    }, 1000)
  }

  useEffect(() => {
    loadFunctions()
  }, [])

  return (
    <article class={`${className} relative card h-full w-full flex flex-col justify-between overflow-hidden p-4 px-5 gap-1 border border-base-content/20 bg-base-100`}>
      <div class={`${isLoadingContent ? '' : 'hide'} group absolute inset-0 h-full w-full bg-base-300 transition-all duration-300 transition-discrete opacity-100 [.hide]:opacity-0`} hidden={!isLoadingContent}>
        <Icon class={`${iconColor} size-5 animate-pulse absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 group-[.hide]:right-5 group-[.hide]:top-4 group-[.hide]:translate-[none] transition-all`}>
          <KpiIcon />
        </Icon>
      </div>
      <div class='h-fit w-full flex justify-between items-center'>
        <span class='text-sm text-base-content/50'>{title}</span>
        <Icon class={`${iconColor} size-5`}>
          <KpiIcon />
        </Icon>
      </div>
      <div class='mobile:flex justify-between items-center'>
        <div>
          <strong class='text-2xl font-bold'>{content}</strong>
          { subtext && <span class='text-sm text-base-content/50'>&nbsp;{subtext}</span> }
        </div>
        <div class='desktop:hidden'>
          <TrendBadge class='badge-sm px-0 gap-1 border-0' {...{...{ label: '', sentiment: 'neutral' }, ...trend}} />
        </div>
      </div>
      <div class='mobile:hidden'>
        <TrendBadge class='badge-sm px-0 gap-1 border-0' {...{...{ label: '', sentiment: 'neutral' }, ...trend}} />
      </div>
    </article>
  )
}
