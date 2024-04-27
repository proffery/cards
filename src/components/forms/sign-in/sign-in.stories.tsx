import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/forms/sign-in/sign-in'
import { fn } from '@storybook/test'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Forms/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
  args: {
    onSubmit: fn(),
  },
}
