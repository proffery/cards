import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup, RadioGroupItem } from './radio-group'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
}

export default meta

type RadioGroupStory = StoryObj<typeof RadioGroup>

// Example options for the radio group
const options = [
  { disabled: true, label: 'Option 1', required: false, value: 'Option1' },
  { label: 'Option 2', required: false, value: 'option2' },
  { label: 'Option 3', required: false, value: 'option3' },
  { label: 'Option 4', required: false, value: 'option4' },
  { label: 'Option 5', required: false, value: 'option5' },
  { label: 'Option 6', required: false, value: 'option6' },
  { label: 'Option 7', required: false, value: 'option7' },
  { label: 'Option 8', required: false, value: 'option8' },
  { label: 'Option 9', required: false, value: 'option9' },
  { label: 'Option 10', required: false, value: 'option10' },
]

export const Default: RadioGroupStory = {
  render: () => {
    const [, setValue] = useState('option2')

    return (
      <RadioGroup onValueChange={setValue}>
        {options.map(option => (
          <RadioGroupItem
            disabled={option.disabled}
            key={option.value}
            required={option.required}
            value={option.value}
          >
            {option.label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    )
  },
}

export const Controlled: RadioGroupStory = {
  render: () => {
    const [value, setValue] = useState('option3')

    return (
      <RadioGroup onValueChange={setValue} value={value}>
        {options.map(option => (
          <RadioGroupItem
            disabled={option.disabled}
            key={option.value}
            required={option.required}
            value={option.value}
          >
            {option.label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    )
  },
}
