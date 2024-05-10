import { Header } from '@/components/layouts/header/header'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Layouts/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderDefault: Story = {
  args: {
    data: {
      avatar: '',
      created: new Date().toDateString(),
      email: 'john@doe.com',
      id: '1',
      isEmailVerified: true,
      name: 'John Doe',
      updated: new Date().toISOString(),
    },
    logout: fn(),
  },
}
