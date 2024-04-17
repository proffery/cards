import { useState } from 'react'

import { Button } from '@/components'
import { AddNewDeck } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddNewDeck,
  tags: ['autodocs'],
  title: 'Dialogs/AddNewDeck',
} satisfies Meta<typeof AddNewDeck>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeckDialog: Story = {
  args: {
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AddNewDeck
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={data => {
            alert(`Confirm: ${JSON.stringify(data)}`)
          }}
          onOpenChange={setOpen}
          open={open}
        />
      </>
    )
  },
}
