import { baseApi } from '@/services/base-api'
import { DecksParams, DecksResponse, MinMaxCards } from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
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

export const { useGetDecksQuery, useGetMinMaxQuery } = decksService
