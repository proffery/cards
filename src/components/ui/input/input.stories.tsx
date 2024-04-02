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
      options: ['search', 'default'],
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

export const DefaultDisabled: Story = {
  args: {
    defaultValue: 'Input',
    disabled: true,
    label: 'Input',
    variant: 'default',
  },
}
export const DefaultError: Story = {
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
    type: 'password',
    variant: 'default',
  },
}
export const PasswordDisabled: Story = {
  args: {
    defaultValue: 'password',
    disabled: true,
    label: 'Password',
    type: 'password',
    variant: 'default',
  },
}
export const PasswordError: Story = {
  args: {
    defaultValue: 'password',
    disabled: false,
    error: 'Error!',
    label: 'Password',
    type: 'password',
    variant: 'default',
  },
}
export const Search: Story = {
  args: {
    defaultValue: 'search',
    disabled: false,
    variant: 'search',
  },
}
export const SearchDisabled: Story = {
  args: {
    defaultValue: 'search',
    disabled: true,
    variant: 'search',
  },
}
export const SearchError: Story = {
  args: {
    defaultValue: 'search',
    disabled: false,
    error: 'Error!',
    variant: 'search',
  },
}
