import { Navigate, useParams } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { CreatePassword } from '@/components/forms'
import { Page } from '@/components/layouts'
import { useResetPasswordMutation } from '@/services/auth/auth.service'
import { ResetPassword } from '@/services/auth/auth.types'

export const CreatePasswordPage = () => {
  const [resetPassword, { error, isSuccess: success }] = useResetPasswordMutation()

  useErrorsNotification(error)
  useSuccessNotification(success, 'Password successfully changed!')

  const { token } = useParams<{ token: string }>()

  const onSubmit = async (data: ResetPassword) => {
    if (!token) {
      return
    }
    await resetPassword({
      body: { password: data.password },
      params: { token },
    }).unwrap()
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.message
      ? (error.data as any).message
      : 'An unknown error occurred'
  }

  if (success) {
    return <Navigate to={ROUTES.signIn} />
  }

  return (
    <Page>
      <CreatePassword onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
