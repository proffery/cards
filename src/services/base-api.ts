import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  refetchOnReconnect: true,
  tagTypes: ['Decks', 'Auth', 'Card', 'Deck', 'Cards'],
})
