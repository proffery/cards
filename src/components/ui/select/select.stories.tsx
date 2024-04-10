import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'
import { SelectItem } from './select-item'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

type SelectStory = StoryObj<typeof Select>

// Options for the select component
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

export const Defaul: SelectStory = {
  args: {
    label: 'Select box',
    placeholder: 'Choose option...',
  },
  render: args => (
    <Select {...args}>
      {options.map(option => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
}

export const Disabled: SelectStory = {
  args: {
    disabled: true,
    label: 'Select box',
    placeholder: 'Choose option...',
  },
  render: args => (
    <Select {...args}>
      {options.map(option => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
}
