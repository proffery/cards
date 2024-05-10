import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'

export function useAuthData(token: null | string) {
  const { data } = useGetMeQuery(undefined, {
    skip: !token, // This tells the query to skip execution if no token is provided
  })
  const [logout] = useLogoutMutation()

  let headerData = null

  if (token && data && !('success' in data)) {
    headerData = {
      ...data,
    }
  }

  return { headerData, logout }
}
