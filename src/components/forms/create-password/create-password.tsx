import { useForm } from 'react-hook-form'

import { Button, Card, Input, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from '../forms.module.scss'

import { createPasswordSchema } from './schema'
import { FormFields } from './types'

type Props = {
  onSubmit: (data: FormFields) => void
}

export const CreatePassword = ({ onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormFields>({ resolver: zodResolver(createPasswordSchema) })

  const classNames = {
    description: clsx(s.description),
    form: clsx(s.form, s.topMargin),
    root: clsx(s.root),
    submitButton: clsx(s.topMargin),
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Create new password</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <Input
          errorMessage={errors.password?.message}
          fullWidth
          label={'Password'}
          type={'password'}
          value={watch('password', '')}
          {...register('password')}
        />
        <Typography.Body2 className={classNames.description}>
          Create new password and we will send you further instructions to email
        </Typography.Body2>
        <Button className={classNames.submitButton} fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
