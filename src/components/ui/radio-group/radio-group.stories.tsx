import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from './radio-group' // Ensure the correct path

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
}

export default meta

type RadioGroupStory = StoryObj<typeof RadioGroup>

// Options for the radio group
const fruitOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

export const Default: RadioGroupStory = {
  args: {
    defaultValue: 'apple',
    label: 'Favorite Fruit',
  },
  render: args => (
    <RadioGroup {...args}>
      {fruitOptions.map(option => (
        <RadioGroupItem key={option.value} value={option.value}>
          {option.label}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: RadioGroupStory = {
  args: {
    defaultValue: 'apple',
    disabled: true,
    label: 'Favorite Fruit',
  },
  render: args => (
    <RadioGroup {...args}>
      {fruitOptions.map(option => (
        <RadioGroupItem key={option.value} value={option.value}>
          {option.label}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  ),
}
