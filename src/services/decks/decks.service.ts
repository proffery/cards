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
    deleteDeck: builder.mutation<Deck, DeleteDeckArgs>({
      invalidatesTags: ['Decks'],
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
      invalidatesTags: ['Decks'],
      query: ({ deckId, ...args }) => {
        const formData = new FormData()

        if (args.name) {
          formData.append('name', args.name)
        }
        formData.append('isPrivate', String(args.isPrivate))
        if (args.cover) {
          formData.append('cover', args.cover)
        }

        return {
          body: formData,
          method: 'PATCH',
          url: `/v1/decks/${deckId}`,
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
