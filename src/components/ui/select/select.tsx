import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from 'react'

import { ArrowDropDown } from '@/assets/icons'
import { Label } from '@radix-ui/react-label'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  children?: ReactNode
  disabled?: boolean
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = (props: SelectProps) => {
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
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}

type SelectItemProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <SelectRadix.Item {...rest} className={s.item} ref={ref}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})
