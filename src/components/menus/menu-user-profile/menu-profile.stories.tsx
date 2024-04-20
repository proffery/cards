import type { Meta, StoryObj } from '@storybook/react'

import { MenuProfile } from './menu-profile'

const meta: Meta<typeof MenuProfile> = {
  component: MenuProfile,
  tags: ['autodocs'],
  title: 'Menus/MenuProfile',
}

export default meta

type MenuProfileStory = StoryObj<typeof MenuProfile>

export const Default: MenuProfileStory = {
  render: () => <MenuProfile />,
}
