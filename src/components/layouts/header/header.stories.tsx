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

export const HeaderLogged: Story = {
  args: {
    avatarUrl: '',
    email: 'john@doe.com',
    isLoggedIn: true,
    onLogout: fn(),
    userName: 'John Doe',
  },
}

export const HeaderNotLogged: Story = {
  args: {
    avatarUrl: '',
    email: 'john@doe.com',
    isLoggedIn: false,
    onLogout: fn(),
    userName: 'John Doe',
  },
}
