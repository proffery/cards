import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, Input, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from '../forms.module.scss'

import { logoutSchema } from './schema'

type Props = {
  onSubmit: (data: Omit<FormFields, 'confirmPassword'>) => void
}
type FormFields = z.infer<typeof logoutSchema>
export const SignUp = ({ onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormFields>({ resolver: zodResolver(logoutSchema) })

  const classNames = {
    form: clsx(s.form),
    root: clsx(s.root),
    signInButton: clsx(s.linkButton),
    submitButton: clsx(s.topMargin),
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign Up</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <Input
          fullWidth
          {...register('email')}
          errorMessage={errors.email?.message}
          label={'Email'}
        />
        <Input
          errorMessage={errors.password?.message}
          fullWidth
          label={'Password'}
          type={'password'}
          value={watch('password', '')}
          {...register('password')}
        />
        <Input
          errorMessage={errors.confirmPassword?.message}
          fullWidth
          label={'Confirm Password'}
          type={'password'}
          value={watch('confirmPassword', '')}
          {...register('confirmPassword')}
        />
        <Button className={classNames.submitButton} fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography.Body2>Already have an account?</Typography.Body2>
      <Typography.Link3 as={Link} className={classNames.signInButton} to={'/sign-in'}>
        Sign In
      </Typography.Link3>
    </Card>
  )
}
