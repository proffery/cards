import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Props, Slider } from './slider' // Make sure this path is correct

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
}

export default meta

export const Default: StoryObj<typeof Slider> = (args: Props) => {
  const [value, setValue] = useState<number[]>(args.value)

  return <Slider {...args} onValueChange={setValue} value={value} />
}

Default.args = {
  max: 99,
  min: 1,
  value: [2, 50],
}
