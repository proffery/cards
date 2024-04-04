import { Fragment } from 'react'

import { Tab } from '@headlessui/react'

import s from './tabSwitcher.module.scss'

export const TabSwitcher = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={`${s.tab} ${selected ? s.selected : s.default}`}>Tab1</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={`${s.tab} ${selected ? s.selected : s.default}`}>Tab2</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={`${s.tab} ${selected ? s.selected : s.default}`} disabled>
              Tab3
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
