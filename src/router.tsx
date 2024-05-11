import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { Layout } from '@/components/layouts'
import {
  CheckEmailPage,
  CreatePasswordPage,
  EditProfilePage,
  ErrorPage,
  ForgotPasswordPage,
  SignUpPage,
} from '@/components/pages'
import { ConfirmEmailPage } from '@/components/pages/confirm-email/confirm-email-page'
import { LogInPage } from '@/components/pages/log-in/log-in-page'
import { DeckPage } from '@/features/decks-cards/deck/deck-page/deck-page'
import { DecksPage } from '@/features/decks-cards/decks/decks-page/decks-page'
import { LearnPage } from '@/features/learn/learn-page/learn-page'
import { useGetMeQuery } from '@/services/auth/auth.service'

const publicRoutes: RouteObject[] = [
  {
    element: <LogInPage />,
    path: ROUTES.signIn,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.signUp,
  },
  {
    element: <ForgotPasswordPage />,
    path: ROUTES.forgotPassword,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.checkEmail,
  },
  {
    element: <CreatePasswordPage />,
    path: `${ROUTES.createPassword}/:token`,
  },
  {
    element: <ConfirmEmailPage />,
    path: `${ROUTES.confirmEmail}/:token`,
  },
  {
    element: <ErrorPage />,
    path: ROUTES.rest,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.decks} />,
    path: ROUTES.base,
  },
  {
    element: <DecksPage />,
    path: ROUTES.decks,
  },
  {
    element: <DeckPage />,
    path: `${ROUTES.decks}/:deckId`,
  },
  {
    element: <LearnPage />,
    path: `${ROUTES.decks}/:deckId${ROUTES.learn}`,
  },
  {
    element: <EditProfilePage />,
    path: ROUTES.profile,
  },
]

function PrivateRoutes() {
  const { data } = useGetMeQuery()
  const isAuthenticated = !!data && !('success' in data)

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.signIn} />
}

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: ROUTES.base,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
