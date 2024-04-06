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
    disabled: false,
    label: 'Input',
    type: 'text',
    value: 'Input',
    variant: 'default',
  },
}

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    type: 'text',
    value: 'Input',
    variant: 'default',
  },
}
export const DefaultError: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    label: 'Input',
    type: 'text',
    value: 'Input',
    variant: 'default',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Password',
    type: 'password',
    value: 'password',
    variant: 'default',
  },
}
export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Password',
    type: 'password',
    value: 'password',
    variant: 'default',
  },
}
export const PasswordError: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    label: 'Password',
    type: 'password',
    value: 'password',
    variant: 'default',
  },
}
export const Search: Story = {
  args: {
    disabled: false,
    type: 'text',
    value: 'search',
    variant: 'search',
  },
}
export const SearchDisabled: Story = {
  args: {
    disabled: true,
    type: 'text',
    value: 'search',
    variant: 'search',
  },
}
export const SearchError: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    type: 'text',
    value: 'search',
    variant: 'search',
  },
}

export const SearchValue: Story = {
  args: {
    disabled: false,
    type: 'text',
    value: 'text',
    variant: 'search',
  },
}
