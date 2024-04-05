import type { Meta, StoryObj } from '@storybook/react'

import { Select as SelectComponent } from './'

const meta: Meta<typeof SelectComponent> = {
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

type Story = StoryObj<Meta<typeof SelectComponent>>

export const Select: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Select box',
    selectLabel: 'Select box',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Select box',
    selectLabel: 'Select box',
  },
}
