import type { Meta, StoryObj } from '@storybook/react'

import icon from '../../../assets/icons/log-out.svg'
import { Button } from './'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['button', 'a'],
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

export const FullWidth: Story = {
  args: {
    as: 'button',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
export const WithIcon: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <img alt={'icon'} src={icon} />
        Button With Icon
      </>
    ),
    disabled: false,
    fullWidth: false,
    variant: 'primary',
  },
}
