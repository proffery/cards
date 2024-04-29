import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from '@/components/forms'
import { fn } from '@storybook/test'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Forms/CreatePassword',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordForm: Story = {
  args: {
    onSubmit: fn(),
  },
}
