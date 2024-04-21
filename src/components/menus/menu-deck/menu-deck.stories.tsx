import type { Meta, StoryObj } from '@storybook/react'

import { MenuDeck } from './menu-deck'

const meta: Meta<typeof MenuDeck> = {
  component: MenuDeck,
  tags: ['autodocs'],
  title: 'Menus/MenuDeck',
}

export default meta

type MenuDeckStory = StoryObj<typeof MenuDeck>

export const Default: MenuDeckStory = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <MenuDeck />
    </div>
  ),
}
