import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-expect-error ts shhh
import 'swiper/css'
import { SliderButton } from './SliderButton'
import { Icon } from '../ui/Icon'
import { IconChevron } from '../ui/Icons'
import { useState } from 'preact/hooks'
import { useProductStore } from '@/stores/useProductStore'

interface Props {
  class?: string
}

export function ImageSlider ({ class: className }: Props) {
  const product = useProductStore((state) => state.product)
  if (!product) return

  const { name, images } = product
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <div class={`${className} relative z-2 h-80 w-full max-w-xs flex items-center justify-center`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={({ activeIndex }: { activeIndex?: number }) => activeIndex !== undefined && setActiveIndex(activeIndex)}
      >
        <SliderButton move='prev' default='disabled' class='left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-neutral-800/70 disabled:*:text-neutral-500 disabled:bg-neutral-800/50 shr:not-disabled:bg-neutral-900/80'>
          <Icon class='rotate-180 size-6 stroke-2 text-neutral-300'>
            <IconChevron />
          </Icon>
        </SliderButton>
        { images?.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <div class='rounded-xl overflow-hidden'>
              <img src={src} alt={alt ?? name} />
            </div>
          </SwiperSlide>
        )) }
        <SliderButton move='next' class='right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-neutral-800/70 disabled:*:text-neutral-500 disabled:bg-neutral-800/50 shr:not-disabled:bg-neutral-900/80'>
          <Icon class='size-6 stroke-2 text-neutral-300'>
            <IconChevron />
          </Icon>
        </SliderButton>
      </Swiper>
      <div class='absolute z-2 left-1/2 bottom-4 -translate-x-1/2 flex items-center gap-1.5 p-2 rounded-full bg-neutral-700/70'>
        { images.map(({ id }) => (
          <div
            key={`slider-button-${id}`}
            class={`${images[activeIndex]?.id === id ? 'current' : ''} size-2 [.current]:w-5 rounded-full transition-all bg-neutral-400 [.current]:bg-neutral-200`}
          />
        )) }
      </div>
    </div>
  )
}
