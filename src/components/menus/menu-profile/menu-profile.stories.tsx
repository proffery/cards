import type { Meta, StoryObj } from '@storybook/react'

import avatarImage from '@/assets/images/user-profile.png'
import { MenuProfile } from '@/components/menus'

const meta: Meta<typeof MenuProfile> = {
  component: MenuProfile,
  tags: ['autodocs'],
  title: 'Menus/MenuProfile',
}

export default meta

type MenuProfileStory = StoryObj<typeof MenuProfile>

export const Default: MenuProfileStory = {
  args: {
    avatarUrl: avatarImage,
    email: 'john@example.com',
    onLogout: () => alert('Logged out'),
    userName: 'John Doe',
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <MenuProfile {...args} />
    </div>
  ),
}
