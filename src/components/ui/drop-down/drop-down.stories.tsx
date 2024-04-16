import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './drop-down'
import { DropdownItem } from './drop-down-item'
import { DropdownSeparator } from './drop-down-separator'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
}

export default meta

type DropdownMenuStory = StoryObj<typeof DropdownMenu>

export const Default: DropdownMenuStory = {
  args: {
    ariaLabel: 'Dropdown menu',
    trigger: 'Open menu',
  },
  render: args => (
    <DropdownMenu {...args}>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Item 3</DropdownItem>
    </DropdownMenu>
  ),
}
