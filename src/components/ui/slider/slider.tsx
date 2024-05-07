import { ComponentPropsWithoutRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type Props = {
  max?: number
  min?: number
  onValueChange: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = (props: Props) => {
  const { className, max = 99, min = 0, onValueChange, value, ...rest } = props

  const minValue = value?.[0] ?? min
  const maxValue = value?.[1] ?? max

  return (
    <div className={`${s.slider} ${className || ''}`}>
      <div className={s.value}>{minValue}</div>
      <SliderRadix.Root
        className={s.root}
        max={max}
        min={min}
        onValueChange={value => onValueChange(value)}
        value={value}
        {...rest}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range className={s.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Slider Thumb'} className={s.thumb} />
        <SliderRadix.Thumb aria-label={'Slider Thumb'} className={s.thumb} />
      </SliderRadix.Root>
      <div className={s.value}>{maxValue}</div>
    </div>
  )
}
