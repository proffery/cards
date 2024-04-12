import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalTrigger,
  Select,
  SelectItem,
  Typography,
} from '@/components'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const InteractiveModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Modal
        onOpenChange={setIsOpen}
        open={isOpen}
        title={'Title'}
        trigger={
          <ModalTrigger>
            <Button>Open</Button>
          </ModalTrigger>
        }
      >
        <Typography.Body1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
        </Typography.Body1>
        <Input fullWidth label={'Input'} placeholder={'Input'} />
        <Select placeholder={'Select-box'}>
          <SelectItem value={'option'}>Option</SelectItem>
        </Select>
        <Checkbox
          checked={checked}
          label={'Checkbox'}
          onCheckedChange={() => setChecked(!checked)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button>Button primary</Button>
          <Button variant={'secondary'}>Button secondary</Button>
        </div>
      </Modal>
    </>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveModal />,
}
