import type { Meta, StoryObj } from '@storybook/react'

import { TabContentItem, TabContentList, TabGroup, TabItem, TabList } from '@/components'

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
  render: args => (
    <TabGroup {...args}>
      <TabList>
        <TabItem>Tab1</TabItem>
        <TabItem>Tab2</TabItem>
        <TabItem disabled>Tab3</TabItem>
      </TabList>
      <TabContentList>
        <TabContentItem>Content1</TabContentItem>
        <TabContentItem>Content2</TabContentItem>
        <TabContentItem>Content3</TabContentItem>
      </TabContentList>
    </TabGroup>
  ),
}
