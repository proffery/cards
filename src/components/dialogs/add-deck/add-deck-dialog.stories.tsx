import { useState } from 'react'

import { Button } from '@/components'
import { AddDeckDialog } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddDeckDialog,
  tags: ['autodocs'],
  title: 'Dialogs/AddDeckDialog',
} satisfies Meta<typeof AddDeckDialog>

export default meta
type Story = StoryObj<typeof meta>

export const AddDeck: Story = {
  args: {
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AddDeckDialog
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
