// import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { errorNotification } from '@/common/utils/errors-notification'
import { successNotification } from '@/common/utils/success-notification'
// import { useSuccessNotification } from '@/common/hooks/use-success-notification'
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
      async onQueryStarted({ cardId, ...args }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cardsService.util.updateQueryData('getCards', args, draft => {
            const index = draft.items.findIndex(card => card.id === cardId)

            if (index !== -1) {
              draft.items.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
          successNotification('Card successfully deleted!')
        } catch (error) {
          errorNotification(error)
          patchResult?.undo()
        }
      },
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
      query: ({ deckId, previousCardId }) => {
        return {
          params: { previousCardId },
          url: `/v1/decks/${deckId}/learn`,
        }
      },
    }),
    saveCardGrade: builder.mutation<Card, SaveGradeParams>({
      async onQueryStarted({ getRandomCardParams }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(
            cardsService.util.updateQueryData('getRandomCard', getRandomCardParams, draft => {
              Object.assign(draft, data)
            })
          )
        } catch (error) {
          errorNotification(error)
        }
      },
      query: ({ getRandomCardParams: { deckId }, saveGradeParams }) => ({
        body: { ...saveGradeParams },
        method: 'POST',
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    updateCard: builder.mutation<Card, UpdateCardParams>({
      async onQueryStarted(
        { cardId, cardsParams, updateCardsParams },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          cardsService.util.updateQueryData('getCards', cardsParams, draft => {
            const cardIndex = draft?.items?.findIndex(card => card?.id === cardId)

            if (cardIndex !== -1) {
              draft.items[cardIndex].answerImg = updateCardsParams.answerImg
                ? URL.createObjectURL(updateCardsParams.answerImg)
                : draft.items[cardIndex].answerImg
              draft.items[cardIndex].questionImg = updateCardsParams.questionImg
                ? URL.createObjectURL(updateCardsParams.questionImg)
                : draft.items[cardIndex].questionImg
              draft.items[cardIndex].answer = updateCardsParams.answer
              draft.items[cardIndex].question = updateCardsParams.question
            }
          })
        )

        try {
          await queryFulfilled
          successNotification('Card successfully updated!')
        } catch (error) {
          errorNotification(error)
          patchResult?.undo()
        }
      },
      query: ({ cardId, updateCardsParams }) => {
        const formData = new FormData()

        formData.append('question', updateCardsParams.question)
        formData.append('answer', updateCardsParams.answer)
        if (updateCardsParams.questionImg) {
          formData.append('questionImg', updateCardsParams.questionImg)
        }
        if (updateCardsParams.answerImg) {
          formData.append('answerImg', updateCardsParams.answerImg)
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
