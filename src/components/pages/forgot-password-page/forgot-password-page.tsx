import { useEffect, useState } from 'react'

import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { ForgotPassword } from '@/components/forms'
import { Page } from '@/components/layouts'
import { router } from '@/router'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { RecoverPassword } from '@/services/auth/auth.types'

export const ForgotPasswordPage = () => {
  const [recoverPassword, { error, isSuccess: success }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState<null | string>(null)

  const onSubmit = async (data: RecoverPassword) => {
    setEmail(data.email)
    await recoverPassword({ email: data.email }).unwrap()
    await router.navigate(ROUTES.checkEmail)
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
    if (success && email) {
      sessionStorage.setItem('email', email)
    }
  }, [success, email])

  return (
    <Page>
      <ForgotPassword onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
