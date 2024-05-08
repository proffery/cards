import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { SignUp } from '@/components/forms'
import { Page } from '@/components/layouts'
import { useSignUpMutation } from '@/services/auth/auth.service'
import { Registration } from '@/services/auth/auth.types'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [signUp, { data: signUpData, error, isSuccess: success }] = useSignUpMutation()

  const onSubmit = async (data: Registration) => {
    const { email, password, sendConfirmationEmail, ...rest } = data

    const registrationData = {
      email,
      password,
      sendConfirmationEmail: true,
      ...rest,
    }

    await signUp(registrationData).unwrap()
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.errorMessages
      ? (error.data as any).errorMessages[0]
      : 'An unknown error occurred'
  }

  useErrorsNotification(error)

  useEffect(() => {
    if (success && signUpData?.email) {
      sessionStorage.setItem('email', signUpData.email)

      navigate(ROUTES.checkEmail)
    }
  }, [success, signUpData, navigate])

  return (
    <Page>
      <SignUp onSubmit={onSubmit} serverError={errorMessage} />
    </Page>
  )
}
