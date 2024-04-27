import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './drop-down.module.scss'

type DropdownMenuProps = {
  align?: 'center' | 'end' | 'start'
  ariaLabel?: string
  triangleRight?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { align = 'end', ariaLabel, children, triangleRight = '10px', trigger } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger aria-label={ariaLabel} className={s.trigger}>
        {trigger}
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content
          align={align}
          className={s.content}
          loop
          sideOffset={12}
          style={{ ['--triangle-right' as string]: triangleRight }}
        >
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

type DropdownLabelProps = { children: ReactNode; className?: string } & ComponentPropsWithoutRef<
  typeof DropdownMenuRadix.Label
>

export const DropdownLabel = (props: DropdownLabelProps) => {
  const { children, className, ...rest } = props

  return (
    <DropdownMenuRadix.Label {...rest} className={clsx(s.item, className)}>
      {children}
    </DropdownMenuRadix.Label>
  )
}

type DropdownSeparatorProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Separator>

export const DropdownSeparator = (props: DropdownSeparatorProps) => {
  return <DropdownMenuRadix.Separator {...props} className={s.separator} />
}
