import React from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  max: number
  min: number
  onValueChange: (value: number[]) => void
  value: number[]
} & Omit<React.ComponentProps<typeof SliderRadix.Root>, 'max' | 'min' | 'onValueChange' | 'value'>

export const Slider: React.FC<SliderProps> = ({ max, min, onValueChange, value, ...rest }) => {
  const minValue = value?.[0] ?? min
  const maxValue = value?.[1] ?? max

  return (
    <div className={s.slider}>
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
