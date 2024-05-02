import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { Layout, Page } from '@/components/layouts'
import {
  CheckEmailPage,
  CreatePasswordPage,
  EditProfilePage,
  ErrorPage,
  ForgotPasswordPage,
  SignUpPage,
} from '@/components/pages'
import { LogInPage } from '@/components/pages/log-in/log-in-page'
import { DecksPage } from '@/features/decks-cards/decks/decks-page/decks-page'

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
    path: `${ROUTES.checkEmail}/:email`,
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
    element: <Page>Deck page</Page>,
    path: `${ROUTES.decks}/:deckId`,
  },
  {
    element: <Page>Learn Deck page</Page>,
    path: `${ROUTES.decks}/:deckId${ROUTES.learn}`,
  },
  {
    element: <EditProfilePage avatarUrl={''} email={'bob@bob.bob'} name={'Bob'} />,
    path: ROUTES.profile,
  },
  {
    element: <CreatePasswordPage />,
    path: `${ROUTES.createPassword}/:token`,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.signIn} />
}
