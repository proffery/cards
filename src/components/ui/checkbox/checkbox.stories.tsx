import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Checkbox',
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Checkbox',
  },
}
