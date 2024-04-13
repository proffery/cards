import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/components/forms/'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Forms/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpForm: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
