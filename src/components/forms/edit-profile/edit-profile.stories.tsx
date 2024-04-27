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
    avatarUrl: '',
    email: 'john@doe.com',
    name: 'John Doe',
    onAvatarChange: fn(),
    onLogout: fn(),
    onSubmit: fn(),
  },
}
