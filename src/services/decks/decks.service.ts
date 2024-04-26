import { baseApi } from '@/services/base-api'
import { DecksParams, DecksResponse } from '@/services/decks/decks.types'

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
  }),
})

export const { useGetDecksQuery } = decksService
