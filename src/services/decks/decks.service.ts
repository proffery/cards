import { baseApi } from '@/services/base-api'
import {
  CreateDeckParams,
  Deck,
  DecksParams,
  DecksResponse,
  MinMaxCards,
} from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<Deck, CreateDeckParams>({
      invalidatesTags: ['Decks'],
      query: args => ({
        body: args,
        method: 'POST',
        url: `v1/decks`,
      }),
    }),
    deleteDeck: builder.mutation<Deck, string>({
      invalidatesTags: ['Decks'],
      query: deckId => ({
        method: 'DELETE',
        url: `v1/decks/${deckId}`,
      }),
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
  }),
})

export const { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery, useGetMinMaxQuery } =
  decksService
