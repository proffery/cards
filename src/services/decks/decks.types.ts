import { Card } from '@/services/cards/cards.types'

export type DeckAuthor = {
  id: string
  name: string
}

export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: null | string
  /** @format date-time */
  created: string
  id: string
  isPrivate: boolean
  name: string
  /** @format date-time */
  updated: string
  userId: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type MinMaxCards = {
  max: number
  min: number
}

export type DecksParams = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}

export type UpdateDeckArgs = CreateDeckParams & { deckId: string }

export type CreateDeckParams = {
  /**
   * Cover image (has to be sent inside FormData, does NOT accept base64)
   * @format binary
   */
  cover?: File
  /** Private decks are not visible to other users */
  isPrivate?: boolean
  /**
   * @minLength 3
   * @maxLength 30
   */
  name: string
}
export type UpdateDeckParams = {
  /**
   * Cover image (has to be sent inside FormData, does NOT accept base64)
   * @format binary
   */
  cover?: File
  isPrivate?: boolean
  name?: string
}

export type CardsResponse = {
  items: Card[]
  pagination: Pagination
}

export type CreateCardParams = {
  /**
   * @minLength 3
   * @maxLength 500
   */
  answer: string
  /**
   * @minLength 0
   * @maxLength 0
   */
  answerImg?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  answerVideo?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  question: string
  /**
   * @minLength 0
   * @maxLength 0
   */
  questionImg?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  questionVideo?: string
}

export type SaveGradeParams = {
  cardId: string
  /**
   * @min 1
   * @max 5
   */
  grade: number
}
