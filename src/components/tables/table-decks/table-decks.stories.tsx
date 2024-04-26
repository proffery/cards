import type { Meta, StoryObj } from '@storybook/react'

import cover from '@/assets/images/cover.png'
import { SortDirection, TableDecks } from '@/components/tables'
import { Deck } from '@/services/decks/decks.types'
export const decksMock: Deck[] = [
  {
    author: {
      id: '1',
      name: 'John Doe',
    },
    cardsCount: 10,
    cover: '',
    created: '2021-01-01',
    id: '1',
    isPrivate: true,
    name: 'Deck 1',
    updated: '2022-01-01',
    userId: 'user1',
  },
  {
    author: {
      id: '2',
      name: 'Mr. Anderson',
    },
    cardsCount: 2,
    cover: cover,
    created: '2022-01-01',
    id: '2',
    isPrivate: true,
    name: 'Deck 2',
    updated: '2022-01-01',
    userId: 'user2',
  },
  {
    author: {
      id: '3',
      name: 'No',
    },
    cardsCount: 0,
    cover: cover,
    created: '2022-01-01',
    id: '3',
    isPrivate: false,
    name: 'Deck 3',
    updated: '2022-01-01',
    userId: 'user3',
  },
]
const meta = {
  argTypes: {
    orderField: {
      control: { type: 'radio' },
      options: ['name', 'cardsCount', 'updated', 'author.name'],
    },
  },
  component: TableDecks,
  tags: ['autodocs'],
  title: 'Tables/DecksTable',
} satisfies Meta<typeof TableDecks>

export default meta

type Story = StoryObj<typeof meta>

export const DecksTable: Story = {
  args: {
    decks: decksMock,
    onDeckDelete: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onDeckEdit: itemId => {
      alert(`Edit button with id:${itemId} is pushed!`)
    },
    onDeckPlay: itemId => {
      alert(`Play button with id:${itemId} is pushed!`)
    },
    onDecksSort: (orderDirection: SortDirection, orderField: string) => {
      alert(`Table must be sorted: Field name: ${orderField}, Direction: ${orderDirection}`)
    },
    orderDirection: 'asc',
    orderField: 'name',
  },
}
