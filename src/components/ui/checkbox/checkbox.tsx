import { ComponentPropsWithoutRef, ElementRef, ForwardRefRenderFunction, forwardRef } from 'react'

import { CheckboxChecked } from '@/assets/icons'
import { Typography } from '@/components'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as RadixLabel from '@radix-ui/react-label'

import s from './checkbox.module.scss'

type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

const CheckboxComponent: ForwardRefRenderFunction<
  ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
> = ({ checked, className, disabled, id, label, required, ...rest }: CheckboxProps, ref) => {
  return (
    <Typography.Body2
      as={'div'}
      className={`${s.container} ${className || ''} ${disabled ? s.disabled : ''}`}
    >
      <RadixLabel.Root className={s.label} htmlFor={id}>
        <div className={`${s.button} ${disabled ? s.disabled : ''} ${checked ? s.checked : ''}`}>
          <RadixCheckbox.Root
            asChild
            checked={checked}
            className={s.checkbox}
            disabled={disabled}
            id={id}
            ref={ref}
            required={required}
            {...rest}
          >
            <RadixCheckbox.Indicator className={s.indicator}>
              {checked && <CheckboxChecked />}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </div>
        {label}
      </RadixLabel.Root>
    </Typography.Body2>
  )
}

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  CheckboxComponent
)
