import type { Meta, StoryObj } from '@storybook/react'

import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../ui/drop-down'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/MenuDeck',
}

export default meta

type MenuDeckStory = StoryObj<typeof DropdownMenu>

export const Default: MenuDeckStory = {
  args: {
    ariaLabel: 'Menu deck',
    trigger: <MoreVertical />,
  },
  render: args => (
    <DropdownMenu {...args}>
      <DropdownItem>
        <Play />
        Learn
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <Edit />
        Edit
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <Trash />
        Delete
      </DropdownItem>
    </DropdownMenu>
  ),
}
