import { useState } from 'react'

import { Button, Dialog } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Dialog
          {...args}
          onCancel={() => setOpen(false)}
          onOpenChange={setOpen}
          open={open}
          title={'Title'}
        >
          Dialog content here
        </Dialog>
      </>
    )
  },
}
