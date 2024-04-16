import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit, Logout } from '@/assets/icons'
import { Avatar, Button, Card, Input, Typography } from '@/components'
import { editProfileSchema } from '@/components/forms/edit-profile/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from '../forms.module.scss'
import s2 from './edit-profile.module.scss'

import { FormFields } from './types'

type Props = {
  avatarUrl?: string
  email: string
  name: string
  onAvatarChange: (data: File) => void
  onLogout: () => void
  onSubmit: (data: FormFields) => void
}

export const EditProfile = ({
  avatarUrl,
  email,
  name,
  onAvatarChange,
  onLogout,
  onSubmit,
}: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormFields>({ resolver: zodResolver(editProfileSchema) })

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

  return (
    <Card className={classNames.root}>
      <Typography.H1>Personal Information</Typography.H1>
      {editMode ? (
        <>
          <Avatar className={classNames.avatar} name={name} size={'l'} url={avatarUrl} />
          <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
            <Input
              defaultValue={name}
              errorMessage={errors.name?.message}
              fullWidth
              label={'Nickname'}
              {...register('name')}
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
              <Avatar className={classNames.avatar} name={name} size={'l'} url={avatarUrl} />
              <label className={classNames.editLabel} htmlFor={'avatar'} title={'Upload photo'}>
                <input
                  accept={'image/*'}
                  className={classNames.fileInput}
                  id={'avatar'}
                  onChange={avatarChangeHandler}
                  type={'file'}
                />
                <Edit />
              </label>
            </div>
            <Typography.H2 as={'span'} className={classNames.nameContainer}>
              {name}
              <button
                className={classNames.editButton}
                onClick={() => setEditMode(true)}
                title={'Edit name'}
              >
                <Edit />
              </button>
            </Typography.H2>
            <Typography.Body2 className={classNames.description}>{email}</Typography.Body2>
            <Button
              className={classNames.logoutButton}
              onClick={onLogout}
              title={'Logout'}
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
