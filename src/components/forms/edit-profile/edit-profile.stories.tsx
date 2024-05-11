import { EditProfile } from '@/components/forms'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Forms/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const EditProfileForm: Story = {
  args: {
    onAvatarChange: fn(),
    onLogout: fn(),
    onSendVerification: fn(),
    onSubmit: fn(),
    userData: {
      avatar: '',
      created: new Date().toISOString(),
      email: 'john@doe.com',
      id: '1',
      isEmailVerified: false,
      name: 'John Doe',
      updated: new Date().toISOString(),
    },
  },
}
