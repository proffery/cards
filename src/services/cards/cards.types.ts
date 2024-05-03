import { Pagination } from '@/services/decks/decks.types'

export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  /** @format date-time */
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  /** @format date-time */
  updated: string
  userId: string
}

export type GetRandomCardParams = {
  deckId?: string
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
