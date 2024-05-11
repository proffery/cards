import { Pagination } from '@/services/decks/decks.types'

export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  /** @format date-time */
  created: string
  deckId: string
  grade: number
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
  previousCardId?: string
}

export type DeleteCardArgs = {
  cardId?: string
} & CardsParams

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
  answerImg?: File
  /**
   * @minLength 3
   * @maxLength 500
   */
  answerVideo?: string
  deckId?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  question: string
  /**
   * @minLength 0
   * @maxLength 0
   */
  questionImg?: File
  /**
   * @minLength 3
   * @maxLength 500
   */
  questionVideo?: string
}

export type UpdateCardParams = {
  cardId?: string
  cardsParams: CardsParams
  updateCardsParams: CreateCardParams
}

export type SaveGradeParams = {
  getRandomCardParams: GetRandomCardParams
  saveGradeParams: {
    cardId?: string
    grade: number
  }
}

export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
} & { deckId?: string }
