import { CheckEmail } from '@/components/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Pages/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailDialog: Story = {
  args: {
    email: 'email@email.email',
  },
}