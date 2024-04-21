import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export const MenuDeck = () => {
  return (
    <div>
      <DropdownMenu ariaLabel={'Menu deck'} trigger={<MoreVertical />}>
        <DropdownItem asChild>
          <a href={'#'}>
            <Play />
            Learn
          </a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <a href={'#'}>
            <Edit />
            Edit
          </a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <a href={'#'}>
            <Trash />
            Delete
          </a>
        </DropdownItem>
      </DropdownMenu>
    </div>
  )
}
