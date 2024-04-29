import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { CheckboxChecked } from '@/assets/icons'
import { Typography } from '@/components/ui'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as RadixLabel from '@radix-ui/react-label'

import s from './checkbox.module.scss'

type CheckboxProps = {
  label?: string
  position?: 'left' | 'right'
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    { checked, className, disabled, label, position = 'left', required, ...rest }: CheckboxProps,
    ref
  ) => {
    let id = useId()

    if (rest.id) {
      id = rest.id
    }

    return (
      <Typography.Body2 as={'div'} className={`${s.container} ${className || ''}`}>
        <RadixLabel.Root
          className={`${s.label} ${disabled ? s.disabled : ''} ${
            position === 'right' ? s.reverse : ''
          }`}
          htmlFor={id}
        >
          <RadixCheckbox.Root
            checked={checked}
            className={`${s.checkbox} ${disabled ? s.disabled : ''} ${checked ? s.checked : ''}`}
            disabled={disabled}
            id={id}
            ref={ref}
            required={required}
            {...rest}
          >
            <RadixCheckbox.Indicator
              className={`${s.indicator} ${disabled ? s.disabled : ''} ${checked ? s.checked : ''}`}
            >
              {checked && <CheckboxChecked />}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
          {label}
        </RadixLabel.Root>
      </Typography.Body2>
    )
  }
)
