import React from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down.module.scss'

type Props = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = (props: Props) => {
  const { children } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          {/*<HamburgerMenuIcon />*/}
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={'DropdownMenuContent'} sideOffset={5}>
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
