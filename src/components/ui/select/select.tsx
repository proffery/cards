import React, { useState } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@/assets/icons'
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

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {label && (
        <Label className={s.label} htmlFor={label}>
          {label}
        </Label>
      )}

      <SelectRadix.Root {...rest} onOpenChange={setIsOpen} open={isOpen}>
        <SelectRadix.Trigger
          aria-label={label}
          className={s.trigger}
          disabled={disabled}
          id={label}
        >
          <SelectRadix.Value placeholder={placeholder} />
          {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
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
