import type { Meta, StoryObj } from '@storybook/react'

import { Logout } from '@/assets/icons'
import { Button } from '@/components'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['button', 'a'],
    },
    onClick: {
      action: 'clicked',
      description: 'Button clicked',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: 'button',
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    as: 'button',
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Disabled: Story = {
  args: {
    as: 'button',
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
}
export const Active: Story = {
  args: {
    as: 'button',
    children: 'Disabled Button',
    disabled: false,
    isActive: true,
    variant: 'primary',
  },
}

export const FullWidth: Story = {
  args: {
    as: 'button',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
export const WithIconPrimary: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <Logout size={16} />
        Button With Icon
      </>
    ),
    disabled: false,
    fullWidth: false,
    variant: 'primary',
  },
}
export const WithIconSecondary: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <Logout size={16} />
        Button With Icon
      </>
    ),
    disabled: false,
    fullWidth: false,
    variant: 'secondary',
  },
}
export const WithIconDisabled: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <Logout size={16} />
        Button With Icon
      </>
    ),
    disabled: true,
    fullWidth: false,
    variant: 'secondary',
  },
}
export const WithIconActive: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <Logout size={16} />
        Button With Icon
      </>
    ),
    disabled: false,
    fullWidth: false,
    isActive: true,
    variant: 'secondary',
  },
}

export const WithIconFullWidth: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <Logout size={16} />
        Button With Icon
      </>
    ),
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
}
