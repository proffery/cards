import { MoreVertical } from '@/assets/icons/components/MoreVertical'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../ui/drop-down'

export const MenuDeck = () => {
  return (
    <div>
      <DropdownMenu ariaLabel={'Menu deck'} trigger={<MoreVertical />}>
        <DropdownItem>Learn</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Edit</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
    </div>
  )
}
