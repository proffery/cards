import { useLocation } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'

export type NoAuthRoute =
  | typeof ROUTES.checkEmail
  | typeof ROUTES.createPassword
  // | typeof ROUTES.resetPassword
  | typeof ROUTES.forgotPassword
  | typeof ROUTES.signIn
  | typeof ROUTES.signUp

export const useNoAuthRoutes = (): boolean => {
  const location = useLocation()
  const noAuthNeededRoutes: NoAuthRoute[] = [
    ROUTES.signUp,
    ROUTES.checkEmail,
    ROUTES.signIn,
    ROUTES.forgotPassword,
    // ROUTES.resetPassword,
    ROUTES.createPassword,
  ]

  return noAuthNeededRoutes.includes(location.pathname as NoAuthRoute)
}
