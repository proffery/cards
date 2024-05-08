import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { ForgotPassword } from '@/components/forms'
import { Page } from '@/components/layouts'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { RecoverPassword } from '@/services/auth/auth.types'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const [recoverPassword, { error, isSuccess: success }] = useRecoverPasswordMutation()

  const onSubmit = async (data: RecoverPassword) => {
    const { email } = data

    await recoverPassword({ email }).unwrap()
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.message
      ? (error.data as any).message
      : 'An unknown error occurred'
  }

  useErrorsNotification(error)
  useSuccessNotification(success, 'Email has been sent')

  useEffect(() => {
    if (success) {
      navigate(ROUTES.signIn)
    }
  }, [success, navigate])

  return (
    <Page>
      <ForgotPassword onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
