import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from '@/components/ui/select/select.module.scss'

type Props = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...rest } = props

  return (
    <SelectRadix.Item {...rest} className={s.item} ref={ref}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})
