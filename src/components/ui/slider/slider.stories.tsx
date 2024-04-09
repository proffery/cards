import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider, SliderProps } from './' // Make sure this path is correct

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
}

export default meta

export const Default: StoryObj<typeof Slider> = (args: SliderProps) => {
  const [value, setValue] = useState<number[]>(args.value)

  return <Slider {...args} onValueChange={setValue} value={value} />
}

Default.args = {
  max: 99,
  min: 1,
  value: [2, 50],
}
