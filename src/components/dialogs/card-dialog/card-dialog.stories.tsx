import { useState } from 'react'

import defaultImage from '@/assets/images/cover.png'
import { Button } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { CardDialog } from './card-dialog'

const meta = {
  component: CardDialog,
  tags: ['autodocs'],
  title: 'Dialogs/CardDialog',
} satisfies Meta<typeof CardDialog>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCard: Story = {
  args: {
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <CardDialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={data => alert(`Confirm: ${JSON.stringify(data)}`)}
          onOpenChange={setOpen}
          open={open}
          title={'Add New Card'}
        />
      </>
    )
  },
}

export const EditCard: Story = {
  args: {
    onConfirm: () => {},
    onOpenChange: () => {},
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <CardDialog
          {...args}
          defaultValues={{
            answer: 'Default Answer',
            answerImg: defaultImage,
            question: 'Default Question',
            questionImg: defaultImage,
          }}
          onCancel={() => setOpen(false)}
          onConfirm={data => alert(`Confirm: ${JSON.stringify(data)}`)}
          onOpenChange={setOpen}
          open={open}
          title={'Edit Card'}
        />
      </>
    )
  },
}
