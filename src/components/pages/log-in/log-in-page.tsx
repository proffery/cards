import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { SignIn } from '@/components/forms/sign-in/sign-in'
import { Page } from '@/components/layouts'
import { Loader } from '@/components/ui'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginReq } from '@/services/auth/auth.types'

export const LogInPage = () => {
  const navigate = useNavigate()
  const [login, { error, isLoading: loading, isSuccess: success }] = useLoginMutation()

  const onSubmit = async (data: LoginReq) => {
    await login(data).unwrap()
  }

  let errorMessage = ''

  if (error && 'status' in error) {
    errorMessage = (error.data as any)?.message
      ? (error.data as any).message
      : 'An unknown error occurred'
  }

  useEffect(() => {
    if (success) {
      navigate(ROUTES.base)
    }
  }, [success, navigate])

  return (
    <Page>
      <SignIn onSubmit={onSubmit} serverError={errorMessage} />
      {loading && <Loader />}
    </Page>
  )
}
