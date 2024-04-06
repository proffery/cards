import type { Meta, StoryObj } from '@storybook/react'

import cover from '@/assets/images/cover.png'
import { Deck, DecksTableSortField, SortDirection, TableDecks } from '@/components'
const myDecksExample: Deck[] = [
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
    cardsCount: 0,
    cover: cover,
    created: '2022-01-01',
    id: '2',
    isPrivate: true,
    name: 'Deck 2',
    updated: '2022-01-01',
    userId: 'user2',
  },
]

const allDecksExemple = [
  {
    author: {
      id: '3',
      name: 'Bob Johnson',
    },
    cardsCount: 18,
    cover: '',
    created: '2022-01-01',
    id: '3',
    isPrivate: false,
    name: 'Deck 3',
    updated: '2023-01-01',
    userId: 'user3',
  },
  {
    author: {
      id: '4',
      name: 'Alice Williams',
    },
    cardsCount: 0,
    cover: cover,
    created: '2022-01-01',
    id: '4',
    isPrivate: false,
    name: 'Deck 4',
    updated: '2024-04-04',
    userId: 'user4',
  },
]
const meta = {
  component: TableDecks,
  tags: ['autodocs'],
  title: 'Components/TableDecks',
} satisfies Meta<typeof TableDecks>

export default meta

type Story = StoryObj<typeof meta>

export const TableWithMyDecks: Story = {
  args: {
    items: myDecksExample,
    onDelete: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onEdit: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onPlay: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onSort: (orderDirection: SortDirection, orderField: DecksTableSortField) => {
      alert(`Table must be sorted: Field name: ${orderField}, Direction: ${orderDirection}`)
    },
    orderDirection: 'asc',
    orderField: 'name',
  },
}
export const TableWithAllDecks: Story = {
  args: {
    items: allDecksExemple,
    onDelete: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onEdit: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onPlay: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onSort: (orderDirection: SortDirection, orderField: DecksTableSortField) => {
      alert(`Table must be sorted: Field name: ${orderField}, Direction: ${orderDirection}`)
    },
    orderDirection: 'asc',
    orderField: 'name',
  },
}
