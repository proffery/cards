import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'

import s from './menu-deck.module.scss'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export const MenuDeck = () => {
  return (
    <div>
      <DropdownMenu ariaLabel={'Menu deck'} trigger={<MoreVertical />}>
        <DropdownItem asChild>
          <a className={s.deckItemLink} href={'#'}>
            <Play />
            Learn
          </a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <a className={s.deckItemLink} href={'#'}>
            <Edit />
            Edit
          </a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <a className={s.deckItemLink} href={'#'}>
            <Trash />
            Delete
          </a>
        </DropdownItem>
      </DropdownMenu>
    </div>
  )
}
