import { Header } from '@/components/layout/header/header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Pages/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderLogged: Story = {
  args: {
    avatarUrl: '',
    email: 'john@doe.com',
    isLoggedIn: true,
    onLogout: () => {
      alert('Logged out')
    },
    userName: 'John Doe',
  },
}

export const HeaderNotLogged: Story = {
  args: {
    avatarUrl: '',
    email: 'john@doe.com',
    isLoggedIn: false,
    onLogout: () => {
      alert('Logged out')
    },
    userName: 'John Doe',
  },
}
