import React, { useId } from 'react'

import { ArrowDropDown } from '@/assets/icons'
import { Label } from '@radix-ui/react-label'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  children?: React.ReactNode
  disabled?: boolean
  label: string
  placeholder: string
} & React.ComponentProps<typeof SelectRadix.Root>

type SelectItemProps = {
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const Select: React.FC<SelectProps> = props => {
  const { children, disabled, label, placeholder, ...rest } = props
  const id = useId()

  return (
    <>
      {label && (
        <Label className={s.label} htmlFor={id}>
          {label}
        </Label>
      )}

      <SelectRadix.Root {...rest}>
        <SelectRadix.Trigger aria-label={label} className={s.trigger} disabled={disabled} id={id}>
          <SelectRadix.Value placeholder={placeholder} />
          <ArrowDropDown className={s.icon} />
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content avoidCollisions={false} className={s.content} position={'popper'}>
            <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectRadix.Item
        {...props}
        className={s.item}
        ref={forwardedRef as React.ForwardedRef<HTMLDivElement>}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
