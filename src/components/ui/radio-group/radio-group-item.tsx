import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from 'react'

import { Label } from '@radix-ui/react-label'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from '@/components/ui/radio-group/radio-group.module.scss'

type Props = {
  children: ReactNode
  value?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export const RadioGroupItem = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, value, ...rest } = props
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
})
