import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { SignIn } from '@/components/forms/sign-in/sign-in'
import { Page } from '@/components/layouts'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/auth.service'
import { LoginReq } from '@/services/auth/auth.types'

export const LogInPage = () => {
  const [login, { error, isSuccess: success }] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const onSubmit = async (data: LoginReq) => {
    await login(data).unwrap()
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.message
      ? (error.data as any).message
      : 'An unknown error occurred'
  }

  useErrorsNotification(error)
  useSuccessNotification(success, 'You are successfully logged in!')

  if (me && !('success' in me)) {
    return <Navigate replace to={ROUTES.decks} />
  }

  return (
    <Page>
      <SignIn onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
