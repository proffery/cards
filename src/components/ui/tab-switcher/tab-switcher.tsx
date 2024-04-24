import { ComponentPropsWithoutRef, Fragment, ReactNode } from 'react'

import { Typography } from '@/components'
import { Tab } from '@headlessui/react'

import s from './tab-switcher.module.scss'

type TabGroupProps = {
  children?: ReactNode
  className?: string
  label?: string
} & ComponentPropsWithoutRef<typeof Tab.Group>
export const TabGroup = ({ children, className, label }: TabGroupProps) => {
  return (
    <div className={`${s.group} ${className || ''}`}>
      {label && <Typography.Body2>{label}</Typography.Body2>}
      <Tab.Group>{children}</Tab.Group>
    </div>
  )
}

type TabListProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tab.List>
export const TabList = ({ children }: TabListProps) => {
  return <Tab.List>{children}</Tab.List>
}

type TabItemProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<'button'>
export const TabItem = ({ children, disabled }: TabItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button className={`${s.tabItem} ${selected ? s.selected : s.default}`} disabled={disabled}>
          {children}
        </button>
      )}
    </Tab>
  )
}

type TabContentListProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tab.Panels>
export const TabContentList = ({ children }: TabContentListProps) => {
  return <Tab.Panels>{children}</Tab.Panels>
}

type TabContentItemProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tab.Panel>
export const TabContentItem = ({ children }: TabContentItemProps) => {
  return <Tab.Panel>{children}</Tab.Panel>
}
