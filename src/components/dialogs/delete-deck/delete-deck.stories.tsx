import { useId, useState } from 'react'

import { Button } from '@/components'
import { DeleteDeck } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

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
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const id = useId()

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeleteDeck
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={() => alert(`Confirm deletion deck by id=${id}`)}
          onOpenChange={setOpen}
          open={open}
        />
      </>
    )
  },
}
