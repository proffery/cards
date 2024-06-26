import { useState } from 'react'

import { Button } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { DeleteCard } from './delete-card'

const meta = {
  component: DeleteCard,
  tags: ['autodocs'],
  title: 'Dialogs/DeleteCard',
} satisfies Meta<typeof DeleteCard>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteCardDialog: Story = {
  args: {
    cardName: 'DeleteCard',
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeleteCard {...args} onCancel={() => setOpen(false)} open={open} />
      </>
    )
  },
}
