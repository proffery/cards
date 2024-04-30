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
      query: args => ({
        body: args,
        invalidatesTags: ['Decks'],
        method: 'POST',
        url: `v1/decks`,
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

export const { useCreateDeckMutation, useGetDecksQuery, useGetMinMaxQuery } = decksService
