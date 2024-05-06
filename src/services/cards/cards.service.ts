import { baseApi } from '@/services/base-api'
import { Card, CardsParams, CardsResponse, CreateCardParams } from '@/services/cards/cards.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<Card, CreateCardParams>({
      invalidatesTags: ['Cards', 'Card', 'Deck', 'Decks'],
      query: ({ deckId, ...args }) => {
        const formData = new FormData()

        formData.append('question', args.question)
        formData.append('answer', args.answer)
        if (args.questionImg) {
          formData.append('questionImg', args.questionImg)
        }
        if (args.answerImg) {
          formData.append('answerImg', args.answerImg)
        }

        return {
          body: formData,
          method: 'POST',
          url: `/v1/decks/${deckId}/cards`,
        }
      },
    }),
    getCards: builder.query<CardsResponse, CardsParams>({
      providesTags: ['Cards'],
      query: ({ deckId, ...params }) => {
        return {
          params: params ?? undefined,
          url: `/v1/decks/${deckId}/cards`,
        }
      },
    }),
  }),
})

export const { useCreateCardMutation, useGetCardsQuery } = cardsService
