import { baseApi } from '@/services/base-api'
import {
  Card,
  CardsParams,
  CardsResponse,
  CreateCardParams,
  DeleteCardArgs,
  GetRandomCardParams,
  SaveGradeParams,
  UpdateCardParams,
} from '@/services/cards/cards.types'

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
    deleteCard: builder.mutation<void, DeleteCardArgs>({
      invalidatesTags: ['Cards', 'Card', 'Deck', 'Decks'],
      query: ({ cardId }) => ({
        method: 'DELETE',
        url: `/v1/cards/${cardId}`,
      }),
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
    getRandomCard: builder.query<Card, GetRandomCardParams>({
      providesTags: ['Card'],
      query: ({ deckId, previousCardId }) => ({
        params: { previousCardId },
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    saveCardGrade: builder.mutation<Card, SaveGradeParams>({
      invalidatesTags: ['Cards'],
      query: args => ({
        body: args,
        method: 'POST',
        url: `/v1/decks/${args.cardId}/learn`,
      }),
    }),
    updateCard: builder.mutation<Card, UpdateCardParams>({
      invalidatesTags: ['Cards', 'Card', 'Deck', 'Decks'],
      query: ({ cardId, ...args }) => {
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
          method: 'PATCH',
          url: `/v1/cards/${cardId}`,
        }
      },
    }),
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useSaveCardGradeMutation,
  useUpdateCardMutation,
} = cardsService
