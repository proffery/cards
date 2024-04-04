import React from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Item = {
  id: string
  label: string
  value: string
}

type RadioGroupProps = {
  ariaLabel?: string
  defaultValue?: string
  radioItems: Item[]
} & React.ComponentProps<typeof RadioGroupRadix.Root>

export const RadioGroup: React.FC<RadioGroupProps> = props => {
  const { ariaLabel, defaultValue, radioItems } = props

  return (
    <form>
      <RadioGroupRadix.Root aria-label={ariaLabel} className={s.root} defaultValue={defaultValue}>
        {radioItems.map(item => (
          <div className={s.item} key={item.id}>
            <RadioGroupRadix.Item className={s.radio} id={item.id} value={item.value}>
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
            <label className={s.label} htmlFor={item.id}>
              {item.label}
            </label>
          </div>
        ))}
      </RadioGroupRadix.Root>
    </form>
  )
}
