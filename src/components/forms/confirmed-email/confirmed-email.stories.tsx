import { ConfirmedEmail } from '@/components/forms/confirmed-email/confirmed-email'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ConfirmedEmail,
  tags: ['autodocs'],
  title: 'Forms/ConfirmedEmail',
} satisfies Meta<typeof ConfirmedEmail>

export default meta
type Story = StoryObj<typeof meta>

export const ConfirmedEmailDialog: Story = {
  args: {
    email: 'email@email.email',
  },
}
