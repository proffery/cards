import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'
import { DropdownItem, DropdownMenu, DropdownSeparator } from '@/components/ui'

type MenuDeckProps = {
  onDelete: () => void
  onEdit: () => void
  onLearn: () => void
}

export const MenuDeck = ({ onDelete, onEdit, onLearn }: MenuDeckProps) => {
  return (
    <div>
      <DropdownMenu ariaLabel={'Menu deck'} trigger={<MoreVertical />}>
        <DropdownItem asChild>
          <button onClick={onLearn}>
            <Play />
            Learn
          </button>
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
