import { useState } from 'react'

import { Button } from '@/components/ui'
import { DeleteDeck } from '@/features/decks/dialogs'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: DeleteDeck,
  tags: ['autodocs'],
  title: 'Dialogs/DeleteDeck',
} satisfies Meta<typeof DeleteDeck>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteDeckDialog: Story = {
  args: {
    deckName: 'Deck Name',
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeleteDeck {...args} onCancel={() => setOpen(false)} open={open} />
      </>
    )
  },
}
