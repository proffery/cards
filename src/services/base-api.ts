//import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://api.flashcards.andrii.es',
  //   credentials: 'include',
  //   prepareHeaders: headers => {
  //     headers.append('x-auth-skip', 'true')
  //   },
  // }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Auth', 'Card', 'Deck', 'Cards'],
})
