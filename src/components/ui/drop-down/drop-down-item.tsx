import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down.module.scss'

type Props = {} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropdownItem = (props: Props) => {
  const { children, ...rest } = props

  return (
    <DropdownMenuRadix.Item {...rest} className={s.item}>
      {children}
    </DropdownMenuRadix.Item>
  )
}
