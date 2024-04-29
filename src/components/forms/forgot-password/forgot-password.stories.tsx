import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/components/forms/forgot-password/forgot-password'
import { fn } from '@storybook/test'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Forms/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordForm: Story = {
  args: {
    onSubmit: fn(),
  },
}
