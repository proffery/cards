import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down.module.scss'

type Props = {
  ariaLabel?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = (props: Props) => {
  const { ariaLabel, children, trigger } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger aria-label={ariaLabel} className={s.trigger}>
        {trigger}
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align={'end'} className={s.content} sideOffset={12}>
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
