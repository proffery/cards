import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { MenuDeck } from './menu-deck'

const meta: Meta<typeof MenuDeck> = {
  component: MenuDeck,
  tags: ['autodocs'],
  title: 'Menus/MenuDeck',
}

export default meta

type MenuDeckStory = StoryObj<typeof MenuDeck>

export const Default: MenuDeckStory = {
  args: {
    onDelete: fn(),
    onEdit: fn(),
    onLearn: fn(),
  },
}
