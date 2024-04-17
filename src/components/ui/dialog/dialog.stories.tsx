import { useState } from 'react'

import { Button, Dialog } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Dialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={() => alert(`Confirm`)}
          onOpenChange={setOpen}
          open={open}
        >
          Dialog content here
        </Dialog>
      </>
    )
  },
}
