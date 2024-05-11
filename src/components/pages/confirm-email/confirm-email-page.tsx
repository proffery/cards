import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { ConfirmedEmail } from '@/components/forms/confirmed-email/confirmed-email'
import { Page } from '@/components/layouts'
import { useGetMeQuery, useVerifyEmailMutation } from '@/services/auth/auth.service'

export const ConfirmEmailPage = () => {
  const [verifyEmail, { error, isSuccess: success }] = useVerifyEmailMutation()

  useErrorsNotification(error)
  useSuccessNotification(success, 'Email successfully verified!')

  const { data: meData } = useGetMeQuery()

  const { token } = useParams<{ token: string }>()

  useEffect(() => {
    if (token) {
      verifyEmail({ code: token })
    }
  }, [token])

  return (
    <Page>
      <ConfirmedEmail email={meData?.email} />
    </Page>
  )
}
