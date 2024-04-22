import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <div>SignIn page</div>,
        path: '/sign-in',
      },
      {
        element: <div>SignUp page</div>,
        path: '/sign-up',
      },
      {
        element: <div>ForgotPassword page</div>,
        path: '/forgot-password',
      },
      {
        element: <div>CheckEmail page</div>,
        path: '/check-email',
      },
    ],
    element: <Outlet />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>Decks page</div>,
    path: '/',
  },
  {
    element: <div>Deck page</div>,
    path: '/decks/:deckId',
  },
  {
    element: <div>Learn Deck page</div>,
    path: '/decks/:deckId/learn',
  },
  {
    element: <div>Profile page</div>,
    path: '/profile',
  },
  {
    element: <div>CreateNewPassword page</div>,
    path: '/create-password',
  },
  {
    element: <div>Error404 page</div>,
    path: '*',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
