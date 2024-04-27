import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'
import { DropdownItem, DropdownMenu, DropdownSeparator } from '@/components/ui'

type MenuDeckProps = {
  onDelete: () => void
  onEdit: () => void
  onLearn: () => void
  triangleRight?: string
}

export const MenuDeck = (props: MenuDeckProps) => {
  const { onDelete, onEdit, onLearn, triangleRight = '4px' } = props

  return (
    <div>
      <DropdownMenu
        ariaLabel={'Menu deck'}
        triangleRight={triangleRight}
        trigger={<MoreVertical />}
      >
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
