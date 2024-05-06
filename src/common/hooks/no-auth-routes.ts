import { useLocation } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'

export type NoAuthRoute = typeof ROUTES.checkEmail | typeof ROUTES.signIn | typeof ROUTES.signUp

export const useNoAuthRoutes = (): boolean => {
  const location = useLocation()
  const noAuthNeededRoutes: NoAuthRoute[] = [ROUTES.signUp, ROUTES.checkEmail, ROUTES.signIn]

  return noAuthNeededRoutes.includes(location.pathname as NoAuthRoute)
}