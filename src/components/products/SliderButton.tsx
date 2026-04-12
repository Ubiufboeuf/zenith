import { useEffect, useState, type ReactNode } from 'preact/compat'
import { useSwiper } from 'swiper/react'

interface Props {
  move?: 'prev' | 'next'
  class?: string
  children?: ReactNode
}

export function SliderButton ({ move, class: className, children }: Props) {
  const swiper = useSwiper()
  const [disabled, setDisabled] = useState(false)

  function handleClick () {
    if (!move) return
    if (move === 'prev') swiper.slidePrev()
    if (move === 'next') swiper.slideNext()
  }

  useEffect(() => {
    setDisabled((move === 'prev' && swiper.activeIndex === 0) || (move === 'next' && swiper.activeIndex === swiper.slides.length - 1))
  }, [swiper.activeIndex])

  return (
    <button
      class={`${className} absolute z-2 flex items-center justify-center not-disabled:cursor-pointer not-disabled:transition-colors`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
