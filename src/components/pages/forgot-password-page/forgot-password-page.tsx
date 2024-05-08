import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { ForgotPassword } from '@/components/forms'
import { Page } from '@/components/layouts'
import { Loader } from '@/components/ui'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { RecoverPassword } from '@/services/auth/auth.types'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const [recoverPassword, { error, isLoading: loading, isSuccess: success }] =
    useRecoverPasswordMutation()

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

  useEffect(() => {
    if (success) {
      navigate(ROUTES.signIn)
    }
  }, [success, navigate])

  return (
    <Page>
      <ForgotPassword onSubmit={onSubmit} serverError={errorMessage} />
      {loading && <Loader />}
    </Page>
  )
}
