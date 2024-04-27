import type { Meta, StoryObj } from '@storybook/react'

import { useId, useState } from 'react'

import { DeckDialog, DeleteDeck } from '@/components/dialogs'

import { MenuDeck } from './menu-deck'

const meta: Meta<typeof MenuDeck> = {
  component: MenuDeck,
  tags: ['autodocs'],
  title: 'Menus/MenuDeck',
}

export default meta

type MenuDeckStory = StoryObj<typeof MenuDeck>

export const Default: MenuDeckStory = {
  args: {
    onDelete: () => alert(`Open "Delete Deck" dialog`),
    onEdit: () => alert(`Open "Edit Deck dialog`),
    onLearn: () => alert(`Open "Learn Deck page`),
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <MenuDeck {...args} />
    </div>
  ),
}

export const UsageExample: MenuDeckStory = {
  args: {
    onDelete: () => {},
    onEdit: () => {},
    onLearn: () => {},
  },
  render: () => {
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const id = useId()

    const handleDialogConfirmEdit = (data: { cover?: any; isPrivate: boolean; name: string }) => {
      alert(`Confirm: ${JSON.stringify(data)}`)
    }

    const handleDialogConfirmDelete = () => {
      alert(`Confirm deletion deck by id=${id}`)
    }

    const handleMenuLearn = () => {
      alert(`Redirect to learn deck page. Deck id=${id}`)
    }
    const handleMenuEdit = () => {
      setEditOpen(true)
    }
    const handleMenuDelete = () => {
      setDeleteOpen(true)
    }

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <MenuDeck onDelete={handleMenuDelete} onEdit={handleMenuEdit} onLearn={handleMenuLearn} />
        <DeckDialog
          defaultValues={{ cover: '', isPrivate: false, name: 'Deck Name' }}
          onCancel={() => setEditOpen(false)}
          onConfirm={handleDialogConfirmEdit}
          onOpenChange={setEditOpen}
          open={editOpen}
          title={'Edit Deck'}
        />
        <DeleteDeck
          deckName={'Deck Name'}
          onCancel={() => setDeleteOpen(false)}
          onConfirm={handleDialogConfirmDelete}
          onOpenChange={setDeleteOpen}
          open={deleteOpen}
        />
      </div>
    )
  },
}
