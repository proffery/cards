import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from '@/components'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
}

export default meta

type RadioGroupStory = StoryObj<typeof RadioGroup>

// Options for the radio group
const options = [
  { disabled: true, label: 'Option 1', value: 'Option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
  { label: 'Option 6', value: 'option6' },
  { label: 'Option 7', value: 'option7' },
  { label: 'Option 8', value: 'option8' },
  { label: 'Option 9', value: 'option9' },
  { label: 'Option 10', value: 'option10' },
]

export const Default: RadioGroupStory = {
  render: () => {
    const [value, setValue] = useState('banana')

    return <RadioGroup onValueChange={setValue} options={options} value={value} />
  },
}
