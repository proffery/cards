import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TabContentItem, TabGroup, TabItem, TabList } from '@/components'

const meta = {
  component: TabGroup,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  args: {
    label: 'TabsSwitcher',
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState('0')

    return (
      <TabGroup {...args} onValueChange={value => setSelectedValue(value)}>
        <TabList>
          <TabItem selected={selectedValue === '0'} value={'0'}>
            Tab1
          </TabItem>
          <TabItem selected={selectedValue === '1'} value={'1'}>
            Tab2
          </TabItem>
          <TabItem disabled selected={selectedValue === '2'} value={'2'}>
            Tab3
          </TabItem>
        </TabList>
        <TabContentItem value={'0'}>Content1</TabContentItem>
        <TabContentItem value={'1'}>Content2</TabContentItem>
        <TabContentItem value={'2'}>Content3</TabContentItem>
      </TabGroup>
    )
  },
}
