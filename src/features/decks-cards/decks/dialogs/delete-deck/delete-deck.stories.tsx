import { useState } from 'react'

import { Button } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { DeleteDeck } from './delete-deck'

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
