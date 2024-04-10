import type { Meta, StoryObj } from '@storybook/react'

import { GradeIcons } from '@/components'

const meta = {
  argTypes: {
    from: {
      type: 'number',
      value: 5,
    },
    grade: {
      control: { type: 'radio' },
      options: [0, 1, 2, 3, 4, 5],
    },
  },
  component: GradeIcons,
  tags: ['autodocs'],
  title: 'Components/Table/Primitives/GradeIcon',
} satisfies Meta<typeof GradeIcons>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    from: 5,
    grade: 3,
  },
}
