import { ROUTES } from '@/common/consts/routes'
import { router } from '@/router'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (headers.get('Authorization')) {
      return headers
    }
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      const refreshResult = await baseQuery(
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
          },
          method: 'POST',
          url: '/v2/auth/refresh-token',
        },
        api,
        extraOptions
      )

      if (refreshResult.meta?.response?.status === 200) {
        if (
          refreshResult.data &&
          typeof refreshResult.data === 'object' &&
          'accessToken' in refreshResult.data &&
          'refreshToken' in refreshResult.data &&
          typeof refreshResult.data.accessToken === 'string' &&
          typeof refreshResult.data.refreshToken === 'string'
        ) {
          localStorage.setItem('accessToken', refreshResult.data.accessToken)
          localStorage.setItem('refreshToken', refreshResult.data.refreshToken)
          result = await baseQuery(args, api, extraOptions)
        }
      } else {
        await router.navigate(ROUTES.signIn)
      }
      release()
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
