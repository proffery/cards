import type { Meta, StoryObj } from '@storybook/react'

import { TableDecks } from '@/components'

const meta = {
  component: TableDecks,
  tags: ['autodocs'],
  title: 'Components/TableDecks',
} satisfies Meta<typeof TableDecks>

export default meta

type Story = StoryObj<typeof meta>
const decksExample = [
  {
    author: {
      id: '3',
      name: 'Bob Johnson',
    },
    cardsCount: 18,
    cover: 'https://example.com/cover3.jpg',
    created: '2022-03-01',
    id: '3',
    isPrivate: false,
    name: 'Deck 3',
    rating: 4.2,
    shots: 8,
    updated: '2022-03-05',
    userId: 'user3',
  },
  {
    author: {
      id: '4',
      name: 'Alice Williams',
    },
    cardsCount: 12,
    cover: 'https://example.com/cover4.jpg',
    created: '2022-04-01',
    id: '4',
    isPrivate: true,
    name: 'Deck 4',
    rating: 3.1,
    shots: 2,
    updated: '2022-04-05',
    userId: 'user4',
  },
]

export const Table: Story = {
  render: () => <TableDecks items={decksExample} />,
}
