import { Link } from 'react-router-dom'

import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { DropdownItem, DropdownMenu, DropdownSeparator } from '@/components/ui'

type MenuDeckProps = {
  deckId?: string
  onDelete: () => void
  onEdit: () => void
  triangleRight?: string
}

export const MenuDeck = (props: MenuDeckProps) => {
  const { deckId, onDelete, onEdit, triangleRight = '4px' } = props

  return (
    <div>
      <DropdownMenu
        ariaLabel={'Menu deck'}
        triangleRight={triangleRight}
        trigger={<MoreVertical />}
      >
        <DropdownItem asChild>
          <Link to={`${ROUTES.decks}/${deckId}${ROUTES.learn}`}>
            <Play />
            Learn
          </Link>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <button onClick={onEdit}>
            <Edit />
            Edit
          </button>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <button onClick={onDelete}>
            <Trash />
            Delete
          </button>
        </DropdownItem>
      </DropdownMenu>
    </div>
  )
}
