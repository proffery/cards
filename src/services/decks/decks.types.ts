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
export type DeckParams = {
  deckId?: string
}

export type DeleteDeckArgs = { deckId: string }
export type CreateDeckParams = {
  cover?: File
  isPrivate?: boolean
  name: string
}
export type UpdateDeckParams = {
  getDecksParams?: DecksParams
  updateDeckParams: {
    cover?: File
    deckId?: string
    isPrivate: boolean
    name: string
  }
}

export type ErrorMessage = {
  field: string
  message: string
}

export type ErrorResponse = {
  data: ErrorResponseData
}
export type ErrorResponseData = {
  errorMessages: ErrorMessage[]
}
