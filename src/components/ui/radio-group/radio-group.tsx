import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { Label } from '@radix-ui/react-label'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  (props, ref) => (
    <RadioGroupRadix.Root {...props} className={`${s.root} ${props.className}`} ref={ref} />
  )
)

type RadioGroupItemProps = {
  children: ReactNode
  disabled?: boolean
  required?: boolean
  value: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ children, value, ...rest }, ref) => {
    const id = useId()

    return (
      <div className={s.item}>
        <RadioGroupRadix.Item {...rest} className={s.radio} id={id} ref={ref} value={value}>
          <RadioGroupRadix.Indicator className={s.indicator} />
        </RadioGroupRadix.Item>
        <Label className={s.label} htmlFor={id}>
          {children}
        </Label>
      </div>
    )
  }
)
