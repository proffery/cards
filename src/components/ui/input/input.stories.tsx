import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['password', 'text'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['password', 'search', 'default'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'Input',
    disabled: false,
    label: 'Input',
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Input',
    disabled: true,
    label: 'Input',
    variant: 'default',
  },
}
export const Error: Story = {
  args: {
    defaultValue: 'Input',
    disabled: false,
    error: 'Error!',
    label: 'Input',
    variant: 'default',
  },
}

export const Password: Story = {
  args: {
    defaultValue: 'password',
    disabled: false,
    label: 'Password',
    variant: 'password',
  },
}
