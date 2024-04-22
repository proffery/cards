import { useId, useState } from 'react'

import { Edit, MoreVertical, Play, Trash } from '@/assets/icons'
import { DeckDialog, DeleteDeck } from '@/components/dialogs'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export const MenuDeck = () => {
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const id = useId()

  const handleConfirmEdit = (data: { cover?: any; isPrivate: boolean; name: string }) => {
    alert(`Confirm: ${JSON.stringify(data)}`)
    setEditOpen(false)
  }

  const handleConfirmDelete = () => {
    alert(`Confirm deletion deck by id=${id}`)
    setDeleteOpen(false)
  }

  return (
    <div>
      <DropdownMenu ariaLabel={'Menu deck'} trigger={<MoreVertical />}>
        <DropdownItem asChild>
          <button>
            <Play />
            Learn
          </button>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <button onClick={() => setEditOpen(true)}>
            <Edit />
            Edit
          </button>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem asChild>
          <button onClick={() => setDeleteOpen(true)}>
            <Trash />
            Delete
          </button>
        </DropdownItem>
      </DropdownMenu>
      <DeckDialog
        onCancel={() => setEditOpen(false)}
        onConfirm={handleConfirmEdit}
        open={editOpen}
      />
      <DeleteDeck
        deckName={'Deck Name'}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        open={deleteOpen}
      />
    </div>
  )
}
