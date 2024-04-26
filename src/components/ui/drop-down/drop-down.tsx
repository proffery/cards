import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down.module.scss'

type Props = {
  align?: 'center' | 'end' | 'start'
  ariaLabel?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = (props: Props) => {
  const { align = 'end', ariaLabel, children, trigger } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger aria-label={ariaLabel} className={s.trigger}>
        {trigger}
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align={align} className={s.content} sideOffset={12}>
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
