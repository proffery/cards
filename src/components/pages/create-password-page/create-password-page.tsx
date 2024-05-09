import { Navigate, useParams } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { CreatePassword } from '@/components/forms'
import { Page } from '@/components/layouts'
import { useResetPasswordMutation } from '@/services/auth/auth.service'
import { ResetPassword } from '@/services/auth/auth.types'

export const CreatePasswordPage = () => {
  const [resetPassword, { isSuccess: success }] = useResetPasswordMutation()

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

  if (success) {
    return <Navigate to={ROUTES.signIn} />
  }

  return (
    <Page>
      <CreatePassword onSubmit={onSubmit} />
    </Page>
  )
}
