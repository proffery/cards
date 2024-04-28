import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from 'react'

import { ArrowDropDown } from '@/assets/icons'
import { Label } from '@radix-ui/react-label'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type VariantProps = {
  variant?: 'small'
}

type SelectProps = {
  children?: ReactNode
  disabled?: boolean
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root> &
  VariantProps

export const Select = (props: SelectProps) => {
  const { children, disabled, label, placeholder, variant, ...rest } = props
  const id = useId()

  return (
    <>
      {label && (
        <Label className={s.label} htmlFor={id}>
          {label}
        </Label>
      )}
      <SelectRadix.Root {...rest}>
        <SelectRadix.Trigger
          aria-label={label}
          className={clsx(s.trigger, variant === 'small' && s.smallTrigger)}
          disabled={disabled}
          id={id}
        >
          <SelectRadix.Value placeholder={placeholder} />
          <ArrowDropDown className={s.icon} />
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            className={clsx(s.content, variant === 'small' && s.smallContent)}
            position={'popper'}
          >
            <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}

type SelectItemProps = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Item> &
  VariantProps

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { children, className, variant, ...rest } = props

  return (
    <SelectRadix.Item
      {...rest}
      className={clsx(s.item, variant === 'small' && s.smallItem)}
      ref={ref}
    >
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})
