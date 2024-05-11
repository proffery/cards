import { useErrorsNotification } from '@/common/hooks/use-errors-notification'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { EditProfile, EditProfileFormFields } from '@/components/forms/edit-profile/edit-profile'
import { Page } from '@/components/layouts'
import { BackLink } from '@/components/ui'
import {
  useGetMeQuery,
  useLogoutMutation,
  useResendVerificationEmailMutation,
  useUpdateUserMutation,
} from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from './edit-profile-page.module.scss'

export const EditProfilePage = () => {
  const classNames = {
    root: clsx(s.root),
  }
  const { data: userData } = useGetMeQuery()
  const [logout, { isSuccess: logoutSuccess }] = useLogoutMutation()
  const [updateUser, { error: updateUserError, isSuccess: updateUserSuccess }] =
    useUpdateUserMutation()

  const [
    resendVerificationEmail,
    { error: verificationEmailError, isSuccess: verificationEmailSent },
  ] = useResendVerificationEmailMutation()

  useErrorsNotification(verificationEmailError)
  useErrorsNotification(updateUserError)
  useSuccessNotification(updateUserSuccess, 'Profile updated!')
  useSuccessNotification(logoutSuccess, 'You are successfully logged out!')
  useSuccessNotification(verificationEmailSent, 'Verification email has been sent.')

  const onAvatarChange = async (avatar: File) => {
    await updateUser({ avatar: avatar }).unwrap()
  }

  const onLogout = async () => {
    await logout().unwrap()
  }

  const onSubmit = async (data: EditProfileFormFields) => {
    await updateUser(data).unwrap()
  }

  return (
    <Page className={classNames.root} marginTop={24}>
      <BackLink text={'Go back'} />
      <EditProfile
        onAvatarChange={onAvatarChange}
        onLogout={onLogout}
        onSendVerification={resendVerificationEmail}
        onSubmit={onSubmit}
        userData={userData}
      />
    </Page>
  )
}
