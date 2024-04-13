import { useForm } from 'react-hook-form'

import { Button, Card, Input, Typography } from '@/components'
import clsx from 'clsx'

import s from './sign-up.module.scss'

type Props = {
  onSubmit: (data: FormFields) => void
}
type FormFields = {
  confirmPassword: string
  email: string
  password: string
}

export const SignUp = ({ onSubmit }: Props) => {
  const { handleSubmit, register, setValue, watch } = useForm<FormFields>()
  const classNames = {
    form: clsx(s.form),
    root: clsx(s.root),
    submit: clsx(s.submit),
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign Up</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <Input fullWidth {...register('email')} label={'Email'} />
        <Input
          fullWidth
          label={'Password'}
          type={'password'}
          {...register('password')}
          onChange={e => setValue('password', e.target.value)}
          value={watch('password')}
        />
        <Input
          fullWidth
          label={'Confirm Password'}
          type={'password'}
          {...register('confirmPassword')}
          onChange={e => setValue('confirmPassword', e.target.value)}
          value={watch('confirmPassword')}
        />
        <Button className={classNames.submit} fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography.Body2>Already have an account?</Typography.Body2>
      <Typography.Link3 href={'/sign'}>Sign In</Typography.Link3>
    </Card>
  )
}
