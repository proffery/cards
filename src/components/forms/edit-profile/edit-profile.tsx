import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit, Logout } from '@/assets/icons'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { editProfileSchema } from '@/components/forms/edit-profile/schema'
import { Avatar, Button, Card, Typography } from '@/components/ui'
import { GetUser, ResendVerificationEmail } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from '../forms.module.scss'
import s2 from './edit-profile.module.scss'

type Props = {
  onAvatarChange: (data: File) => void
  onLogout: () => void
  onSendVerification: (data: ResendVerificationEmail) => void
  onSubmit: (data: EditProfileFormFields) => void
  userData?: GetUser
}
export type EditProfileFormFields = z.infer<typeof editProfileSchema>
export const EditProfile = ({
  onAvatarChange,
  onLogout,
  onSendVerification,
  onSubmit,
  userData,
}: Props) => {
  const { control, handleSubmit } = useForm<EditProfileFormFields>({
    defaultValues: { name: userData?.name },
    resolver: zodResolver(editProfileSchema),
  })

  const classNames = {
    avatar: clsx(s.centered),
    backButton: clsx(s.linkButton),
    description: clsx(s.description, s.centered),
    editAvatarContainer: clsx(s2.editAvatarContainer, s.centered),
    editButton: clsx(s2.editButton),
    editLabel: clsx(s2.editButton, s2.fileLabel),
    fileInput: clsx(s2.fileInput),
    form: clsx(s.form),
    logoutButton: clsx(s.centered),
    nameContainer: clsx(s2.nameContainer, s.centered),
    root: clsx(s.root),
    submitButton: clsx(s.topMargin),
  }
  const [editMode, setEditMode] = useState<boolean>(false)
  const avatarChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget?.files && onAvatarChange(e.currentTarget?.files[0])
  }

  const verificationEmailHandler = () => {
    userData && onSendVerification({ userId: userData?.id })
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Personal Information</Typography.H1>
      {editMode ? (
        <>
          <Avatar
            className={classNames.avatar}
            name={userData?.name}
            size={'l'}
            url={userData?.avatar}
          />
          <form
            className={classNames.form}
            onSubmit={handleSubmit(data => {
              onSubmit(data)
              setEditMode(false)
            })}
          >
            <ControlledInput
              autoFocus
              control={control}
              defaultValue={userData?.name}
              fullWidth
              label={'Nickname'}
              name={'name'}
            />
            <Button className={classNames.submitButton} fullWidth type={'submit'}>
              Save Changes
            </Button>
          </form>
          <Typography.Link3
            as={'button'}
            className={classNames.backButton}
            onClick={() => setEditMode(false)}
          >
            Back
          </Typography.Link3>
        </>
      ) : (
        <>
          <form className={classNames.form}>
            <div className={classNames.editAvatarContainer}>
              <Avatar
                className={classNames.avatar}
                name={userData?.name}
                size={'l'}
                url={userData?.avatar}
              />
              <label className={classNames.editLabel} htmlFor={'avatar'} title={'Upload photo'}>
                <input
                  accept={'image/*'}
                  className={classNames.fileInput}
                  id={'avatar'}
                  onChange={avatarChangeHandler}
                  type={'file'}
                />
                <Edit size={16} />
              </label>
            </div>
            <Typography.H2 as={'span'} className={classNames.nameContainer}>
              {userData?.name}
              <button
                className={classNames.editButton}
                onClick={() => setEditMode(true)}
                title={'Edit name'}
              >
                <Edit size={16} />
              </button>
            </Typography.H2>
            <Typography.Body2 className={classNames.description}>
              {`${userData?.email} ${!userData?.isEmailVerified ? '(not verified)' : ''}`}
            </Typography.Body2>
            {!userData?.isEmailVerified && (
              <Button
                className={classNames.logoutButton}
                onClick={verificationEmailHandler}
                type={'button'}
              >
                Send verification email
              </Button>
            )}
            <Button
              className={classNames.logoutButton}
              onClick={onLogout}
              title={'Logout'}
              type={'submit'}
              variant={'secondary'}
            >
              <Logout /> Logout
            </Button>
          </form>
        </>
      )}
    </Card>
  )
}
