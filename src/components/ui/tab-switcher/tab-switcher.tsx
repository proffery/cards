import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabGroupProps = {
  children?: ReactNode
  className?: string
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>
export const TabGroup = forwardRef<ElementRef<typeof Tabs.Root>, TabGroupProps>(
  ({ children, className, label, ...props }: TabGroupProps, ref) => {
    return (
      <div className={`${s.group} ${className || ''}`}>
        {label && <Typography.Body2>{label}</Typography.Body2>}
        <Tabs.Root ref={ref} {...props}>
          {children}
        </Tabs.Root>
      </div>
    )
  }
)

type TabListProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tabs.List>
export const TabList = forwardRef<ElementRef<typeof Tabs.List>, TabListProps>(
  ({ children, ...props }: TabListProps, ref) => {
    return (
      <Tabs.List ref={ref} {...props}>
        {children}
      </Tabs.List>
    )
  }
)

type TabItemProps = {
  children?: ReactNode
  selected?: boolean
} & ComponentPropsWithoutRef<typeof Tabs.Trigger>
export const TabItem = forwardRef<ElementRef<typeof Tabs.Trigger>, TabItemProps>(
  ({ children, selected, ...props }: TabItemProps, ref) => {
    return (
      <Tabs.Trigger className={`${s.tabItem} ${selected && s.selected}`} {...props} ref={ref}>
        {children}
      </Tabs.Trigger>
    )
  }
)

type TabContentItemProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tabs.Content>
export const TabContentItem = forwardRef<ElementRef<typeof Tabs.Content>, TabContentItemProps>(
  ({ children, ...props }: TabContentItemProps, ref) => {
    return (
      <Tabs.Content {...props} ref={ref}>
        {children}
      </Tabs.Content>
    )
  }
)
