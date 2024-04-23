import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout, Page } from '@/components/layouts'

const publicRoutes: RouteObject[] = [
  {
    element: <Page>SignIn page</Page>,
    path: '/sign-in',
  },
  {
    element: <Page>SignUp page</Page>,
    path: '/sign-up',
  },
  {
    element: <Page>ForgotPassword page</Page>,
    path: '/forgot-password',
  },
  {
    element: <Page>CheckEmail page</Page>,
    path: '/check-email',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={'/decks'} />,
    path: '/',
  },
  {
    element: <Page>Decks page</Page>,
    path: '/decks',
  },
  {
    element: <Page>Deck page</Page>,
    path: '/decks/:deckId',
  },
  {
    element: <Page>Learn Deck page</Page>,
    path: '/decks/:deckId/learn',
  },
  {
    element: <Page>Profile page</Page>,
    path: '/profile',
  },
  {
    element: <Page>CreateNewPassword page</Page>,
    path: '/create-password',
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
        <Page>Error404 page</Page>
      </Layout>
    ),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
