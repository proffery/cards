import { useId, useState } from 'react'

import { DeleteCard } from '@/components/dialogs'
import { Button } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DeleteCard,
  tags: ['autodocs'],
  title: 'Dialogs/DeleteCard',
} satisfies Meta<typeof DeleteCard>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteCardDialog: Story = {
  args: {
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const id = useId()

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <DeleteCard
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={() => alert(`Confirm deletion card by id=${id}`)}
          onOpenChange={setOpen}
          open={open}
        />
      </>
    )
  },
}
