import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components'

const meta = {
  argTypes: {
    cleanSearch: {
      action: 'cleaned',
      description: 'Changeble value',
    },
    onChange: {
      action: 'changed',
      description: 'Changeble value',
    },
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
    errorMessage: 'Error!',
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
    errorMessage: 'Error!',
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
    errorMessage: 'Error!',
    variant: 'search',
  },
}

export const SearchValue: Story = {
  args: {
    disabled: false,
    value: 'text',
    variant: 'search',
  },
}
