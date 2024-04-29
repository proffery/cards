import { useState } from 'react'

import defaultImage from '@/assets/images/cover.png'
import { DeckDialog } from '@/components/dialogs'
import { Button } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: DeckDialog,
  tags: ['autodocs'],
  title: 'Dialogs/DeckDialog',
} satisfies Meta<typeof DeckDialog>

export default meta
type Story = StoryObj<typeof meta>

export const AddDeck: Story = {
  args: {
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeckDialog {...args} onCancel={() => setOpen(false)} open={open} />
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
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeckDialog {...args} onCancel={() => setOpen(false)} open={open} />
      </>
    )
  },
}
