import { useState } from 'react'

import { Button } from '@/components'
import { AddNewCard } from '@/components/dialogs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddNewCard,
  tags: ['autodocs'],
  title: 'Dialogs/AddNewCard',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCardDialog: Story = {
  args: {
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AddNewCard
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
