import { useEffect } from 'react'

import { emailConfirmTemplate } from '@/common/consts/email-confirm-template'
import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { SignUp } from '@/components/forms'
import { Page } from '@/components/layouts'
import { router } from '@/router'
import { useSignUpMutation } from '@/services/auth/auth.service'
import { Registration } from '@/services/auth/auth.types'

export const SignUpPage = () => {
  const [signUp, { data: signUpData, error, isSuccess: success }] = useSignUpMutation()

  useErrorsNotification(error)
  useSuccessNotification(success, 'Account successfully created!')

  const onSubmit = async (data: Registration) => {
    const { email, password, sendConfirmationEmail, ...rest } = data

    const registrationData = {
      email,
      html: emailConfirmTemplate,
      password,
      sendConfirmationEmail: true,
      ...rest,
    }

    await signUp(registrationData).unwrap()
    await router.navigate(ROUTES.checkEmail)
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.errorMessages
      ? (error.data as any).errorMessages[0]
      : 'An unknown error occurred'
  }

  useEffect(() => {
    if (success && signUpData?.email) {
      sessionStorage.setItem('email', signUpData.email)
    }
  }, [success, signUpData])

  return (
    <Page>
      <SignUp onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
