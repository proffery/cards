import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './drop-down.module.scss'

type Props = { children: ReactNode; className?: string } & ComponentPropsWithoutRef<
  typeof DropdownMenuRadix.Item
>

export const DropdownItem = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <DropdownMenuRadix.Item {...rest} className={clsx(s.item, className)}>
      {children}
    </DropdownMenuRadix.Item>
  )
}
