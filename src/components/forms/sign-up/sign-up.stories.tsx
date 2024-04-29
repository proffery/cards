import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/components/forms/'
import { fn } from '@storybook/test'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Forms/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpForm: Story = {
  args: {
    onSubmit: fn(),
  },
}
