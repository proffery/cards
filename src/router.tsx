import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { Layout, Page } from '@/components/layouts'
import { CheckEmailPage, ErrorPage } from '@/components/pages'

const publicRoutes: RouteObject[] = [
  {
    element: <Page>SignIn page</Page>,
    path: ROUTES.signIn,
  },
  {
    element: <Page>SignUp page</Page>,
    path: ROUTES.signUp,
  },
  {
    element: <Page>ForgotPassword page</Page>,
    path: ROUTES.forgotPassword,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.checkEmail,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.decks} />,
    path: ROUTES.base,
  },
  {
    element: <Page>Decks page</Page>,
    path: ROUTES.decks,
  },
  {
    element: <Page>Deck page</Page>,
    path: `${ROUTES.decks}/:deckId`,
  },
  {
    element: <Page>Learn Deck page</Page>,
    path: `${ROUTES.decks}/:deckId/learn`,
  },
  {
    element: <Page>Profile page</Page>,
    path: ROUTES.profile,
  },
  {
    element: <Page>CreateNewPassword page</Page>,
    path: ROUTES.createPassword,
  },
]

const router = createBrowserRouter([
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
