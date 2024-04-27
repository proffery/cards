import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './drop-down.module.scss'

type DropdownMenuProps = {
  align?: 'center' | 'end' | 'start'
  ariaLabel?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = (props: DropdownMenuProps) => {
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

type DropdownItemProps = { children: ReactNode; className?: string } & ComponentPropsWithoutRef<
  typeof DropdownMenuRadix.Item
>

export const DropdownItem = (props: DropdownItemProps) => {
  const { children, className, ...rest } = props

  return (
    <DropdownMenuRadix.Item {...rest} className={clsx(s.item, className)}>
      {children}
    </DropdownMenuRadix.Item>
  )
}

type DropdownSeparatorProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Separator>

export const DropdownSeparator = (props: DropdownSeparatorProps) => {
  return <DropdownMenuRadix.Separator {...props} className={s.separator} />
}
