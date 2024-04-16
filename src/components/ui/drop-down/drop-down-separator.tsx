import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down.module.scss'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Separator>

export const DropdownSeparator = (props: Props) => {
  return <DropdownMenuRadix.Separator {...props} className={s.separator} />
}
