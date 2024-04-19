import { useState } from 'react'

import defaultImage from '@/assets/images/cover.png'
import { Button } from '@/components'
import { DeckDialog } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DeckDialog,
  tags: ['autodocs'],
  title: 'Dialogs/DeckDialog',
} satisfies Meta<typeof DeckDialog>

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
        <DeckDialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={data => alert(`Confirm: ${JSON.stringify(data)}`)}
          onOpenChange={setOpen}
          open={open}
        />
      </>
    )
  },
}
export const EditDeck: Story = {
  args: {
    defaultValues: {
      cover: defaultImage,
      isPrivate: true,
      name: 'Default Name',
    },
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeckDialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={data => alert(`Confirm: ${JSON.stringify(data)}`)}
          onOpenChange={setOpen}
          open={open}
        />
      </>
    )
  },
}
