import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Props = {
  children: ReactNode
  defaultValue?: string
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = (props: Props) => {
  const { children, defaultValue, disabled } = props

  return (
    <form>
      <RadioGroupRadix.Root className={s.root} defaultValue={defaultValue} disabled={disabled}>
        {children}
      </RadioGroupRadix.Root>
    </form>
  )
}
