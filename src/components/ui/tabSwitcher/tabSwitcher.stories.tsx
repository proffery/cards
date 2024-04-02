import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components'

export default {}
const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

type Story = StoryObj<typeof meta>

export const Default: Story = {}
