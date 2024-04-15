import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from '@/components/forms'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Forms/CreatePassword',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordForm: Story = {
  args: {
    onSubmit: data => {
      alert(JSON.stringify(data))
    },
  },
}
