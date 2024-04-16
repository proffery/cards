import { CheckEmail } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Dialogs/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordForm: Story = {
  args: {
    email: 'email@email.email',
  },
}
