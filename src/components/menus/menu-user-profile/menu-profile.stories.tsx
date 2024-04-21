import type { Meta, StoryObj } from '@storybook/react'

import AvatarImage from '@/assets/images/user-profile.png'

import { MenuProfile, Props } from './menu-profile'

const meta: Meta<typeof MenuProfile> = {
  component: MenuProfile,
  tags: ['autodocs'],
  title: 'Menus/MenuProfile',
}

export default meta

type MenuProfileStory = StoryObj<typeof MenuProfile>

export const Default: MenuProfileStory = {
  args: {
    avatar: AvatarImage,
    email: 'email@email.com',
    name: 'John Dou',
    profileUrl: 'https://www.google.com',
    signOutUrl: 'https://www.google.com',
  },
  render: (args: Props) => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <MenuProfile {...args} />
    </div>
  ),
}
