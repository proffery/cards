import type { Meta, StoryObj } from '@storybook/react'

import defaultImage from '@/assets/images/cover.png'

import { Avatar } from './avatar'

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
    size: 'l',
    url: '',
  },
}

export const WithImage: Story = {
  args: {
    name: 'John',
    size: 'l',
    url: defaultImage,
  },
}
