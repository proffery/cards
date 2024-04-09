import React, { useId } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { RadioGroupItemProps } from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type RadioGroupProps = {
  children: React.ReactNode
  defaultValue?: string
  disabled?: boolean
  label: string
} & React.ComponentProps<typeof RadioGroupRadix.Root>

export const RadioGroup: React.FC<RadioGroupProps> = props => {
  const { children, defaultValue, disabled } = props

  return (
    <form>
      <RadioGroupRadix.Root className={s.root} defaultValue={defaultValue} disabled={disabled}>
        {children}
      </RadioGroupRadix.Root>
    </form>
  )
}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  (props, forwardedRef) => {
    const { children, value, ...rest } = props
    const id = useId()

    return (
      <div className={s.item}>
        <RadioGroupRadix.Item
          {...rest}
          className={s.radio}
          id={id}
          ref={forwardedRef}
          value={value}
        >
          <RadioGroupRadix.Indicator className={s.indicator} />
        </RadioGroupRadix.Item>
        <label className={s.label} htmlFor={id}>
          {children}
        </label>
      </div>
    )
  }
)
