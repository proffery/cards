import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Option = {
  disabled?: boolean
  label: string
  required?: boolean
  value: string
}
export type RadioGroupProps = {
  options: Option[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  ({ options, ...rest }, ref) => {
    return (
      <RadioGroupRadix.Root className={s.root} {...rest} ref={ref}>
        {options.map(option => (
          <div className={s.item} key={option.value}>
            <RadioGroupRadix.Item
              className={s.radio}
              disabled={option.disabled}
              id={`${option.value}`}
              required={option.required}
              value={option.value}
            >
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
            <label className={s.label} htmlFor={`${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroupRadix.Root>
    )
  }
)
