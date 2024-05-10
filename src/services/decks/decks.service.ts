import { errorNotification } from '@/common/utils/errors-notification'
import { successNotification } from '@/common/utils/success-notification'
import { baseApi } from '@/services/base-api'
import {
  CreateDeckParams,
  Deck,
  DeckParams,
  DecksParams,
  DecksResponse,
  DeleteDeckArgs,
  MinMaxCards,
  UpdateDeckParams,
} from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<Deck, CreateDeckParams>({
      invalidatesTags: ['Decks'],
      query: args => {
        const formData = new FormData()

        formData.append('name', args.name)
        formData.append('isPrivate', String(args.isPrivate))
        if (args.cover) {
          formData.append('cover', args.cover)
        }

        return {
          body: formData,
          method: 'POST',
          url: `v1/decks`,
        }
      },
    }),
    deleteDeck: builder.mutation<Deck, DeleteDeckArgs & DecksParams>({
      async onQueryStarted({ deckId, ...args }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          decksService.util.updateQueryData('getDecks', args, draft => {
            const index = draft.items.findIndex(deck => deck.id === deckId)

            if (index !== -1) {
              draft.items.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
          successNotification('Deck successfully deleted!')
        } catch (error) {
          errorNotification(error)
          patchResult?.undo()
        }
      },
      query: ({ deckId }) => ({
        method: 'DELETE',
        url: `v1/decks/${deckId}`,
      }),
    }),
    getDeck: builder.query<Deck, DeckParams>({
      providesTags: ['Deck'],
      query: ({ deckId }) => `/v1/decks/${deckId}`,
    }),
    getDecks: builder.query<DecksResponse, DecksParams | void>({
      providesTags: ['Decks'],
      query: params => {
        return {
          params: params ?? undefined,
          url: `v2/decks`,
        }
      },
    }),
    getMinMax: builder.query<MinMaxCards, void>({
      providesTags: ['Decks'],
      query: () => `/v2/decks/min-max-cards`,
    }),
    updateDeck: builder.mutation<Deck, UpdateDeckParams>({
      async onQueryStarted({ getDecksParams, updateDeckParams }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          decksService.util.updateQueryData('getDecks', getDecksParams, draft => {
            const deckIndex = draft?.items?.findIndex(deck => deck?.id === updateDeckParams?.deckId)

            if (deckIndex !== -1) {
              draft.items[deckIndex].cover = updateDeckParams.cover
                ? URL.createObjectURL(updateDeckParams.cover)
                : ''
              draft.items[deckIndex].isPrivate = updateDeckParams.isPrivate
              draft.items[deckIndex].name = updateDeckParams.name
            }
          })
        )

        try {
          await queryFulfilled
          successNotification('Deck successfully updated!')
        } catch (error) {
          errorNotification(error)
          patchResult?.undo()
        }
      },
      query: ({ updateDeckParams }) => {
        const formData = new FormData()

        if (updateDeckParams.name) {
          formData.append('name', updateDeckParams.name)
        }
        formData.append('isPrivate', String(updateDeckParams.isPrivate))
        if (updateDeckParams.cover) {
          formData.append('cover', updateDeckParams.cover)
        }

        return {
          body: formData,
          method: 'PATCH',
          url: `/v1/decks/${updateDeckParams.deckId}`,
        }
      },
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetMinMaxQuery,
  useUpdateDeckMutation,
} = decksService
