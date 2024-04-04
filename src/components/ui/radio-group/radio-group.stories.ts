import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup as RadioGroupComponent } from './'

const meta: Meta<typeof RadioGroupComponent> = {
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
}

export default meta

type Story = StoryObj<Meta<typeof RadioGroupComponent>>

export const RadioGroup: Story = {
  args: {
    radioItems: [
      { id: 'radio1', label: 'Radio 1', value: 'radio1' },
      { id: 'radio2', label: 'Radio 2', value: 'radio2' },
      { id: 'radio3', label: 'Radio 3', value: 'radio3' },
    ],
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
    radioItems: [
      { id: 'radio1', label: 'Radio 1', value: 'radio1' },
      { id: 'radio2', label: 'Radio 2', value: 'radio2' },
      { id: 'radio3', label: 'Radio 3', value: 'radio3' },
    ],
  },
}
