import type { Meta, StoryObj } from '@storybook/react'

import defaultImage from '@/assets/images/cover.png'
import { Avatar } from '@/components'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'John',
    url: '',
  },
}

export const WithImage: Story = {
  args: {
    name: 'John',
    url: defaultImage,
  },
}

export const WithImageLarge: Story = {
  args: {
    name: 'John',
    url: defaultImage,
  },
  render: args => <Avatar {...args} style={{ height: '72px', width: '72px' }} />,
}
