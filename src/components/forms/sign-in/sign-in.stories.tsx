import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/forms/sign-in/sign-in'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Forms/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
  args: {
    onSubmit: data => {
      alert(JSON.stringify(data))
    },
  },
}
