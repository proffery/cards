import type { Meta, StoryObj } from '@storybook/react'

import cover from '@/assets/images/cover.png'
import { CardType, SortDirection, TableCards } from '@/components/tables'

const cardsExample: CardType[] = [
  {
    answer: 'First answer',
    answerImg: '',
    answerVideo: '',
    created: '2024-04-08T07:00:27.306Z',
    deckId: 'deckId1',
    grade: 0,
    id: '1',
    question: 'First question',
    questionImg: '',
    questionVideo: '',
    shots: 5,
    updated: '2024-04-08T07:00:27.306Z',
    userId: 'userId1',
  },
  {
    answer: 'Second answer',
    answerImg: cover,
    answerVideo: '',
    created: '2024-04-08T07:00:27.306Z',
    deckId: 'deckId2',
    grade: 2,
    id: '2',
    question: 'Second question',
    questionImg: cover,
    questionVideo: '',
    shots: 3,
    updated: '2024-04-08T07:00:27.306Z',
    userId: '2',
  },
  {
    answer: '',
    answerImg: cover,
    answerVideo: '',
    created: '2024-04-08T07:00:27.306Z',
    deckId: '3',
    grade: 5,
    id: '3',
    question: '',
    questionImg: cover,
    questionVideo: '',
    shots: 1,
    updated: '2024-04-08T07:00:27.306Z',
    userId: '4',
  },
]

const meta = {
  argTypes: {
    orderField: {
      control: { type: 'radio' },
      options: ['name', 'cardsCount', 'updated', 'author.name'],
    },
  },
  component: TableCards,
  tags: ['autodocs'],
  title: 'Tables/CardsTable',
} satisfies Meta<typeof TableCards>

export default meta

type Story = StoryObj<typeof meta>

export const CardsTable: Story = {
  args: {
    cards: cardsExample,
    isOwner: true,
    onCardDelete: itemId => {
      alert(`Delete button with id:${itemId} is pushed!`)
    },
    onCardEdit: itemId => {
      alert(`Edit button with id:${itemId} is pushed!`)
    },
    onCardsSort: (orderDirection: SortDirection, orderField: string) => {
      alert(`Table must be sorted: Field name: ${orderField}, Direction: ${orderDirection}`)
    },
    orderDirection: 'asc',
    orderField: 'updated',
  },
}
