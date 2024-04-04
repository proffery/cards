import React from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Item = {
  id: string
  label: string
  value: string
}

type RadioGroupProps = {
  defaultValue?: string
  disabled?: boolean
  radioItems: Item[]
} & React.ComponentProps<typeof RadioGroupRadix.Root>

export const RadioGroup: React.FC<RadioGroupProps> = props => {
  const { defaultValue, disabled, radioItems } = props

  return (
    <form>
      <RadioGroupRadix.Root className={s.root} defaultValue={defaultValue} disabled={disabled}>
        {radioItems?.map(item => (
          <div className={s.item} key={item.id}>
            <RadioGroupRadix.Item className={s.radio} id={item.id} value={item.value}>
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
            <label className={`${s.label} ${disabled ? s.labelDisabled : ''}`} htmlFor={item.id}>
              {item.label}
            </label>
          </div>
        ))}
      </RadioGroupRadix.Root>
    </form>
  )
}
