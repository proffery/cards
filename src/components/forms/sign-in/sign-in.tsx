import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { FormValues, schema } from '@/components/forms/sign-in/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from '@/components/forms/forms.module.scss'

const classNames = {
  form: clsx(s.form),
  root: clsx(s.root),
  signInButton: clsx(s.linkButton),
  submitButton: clsx(s.topMargin),
}

type Props = {
  onSubmit: (data: FormValues) => void
}
export const SignIn = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const onFormSubmit = (data: FormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign In</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(onFormSubmit)}>
        <ControlledInput
          control={control}
          fullWidth
          label={'Email'}
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <ControlledInput
          fullWidth
          label={'Password'}
          type={'password'}
          {...register('password')}
          control={control}
          errorMessage={errors.password?.message}
        />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.formLink}>
          <Typography.Body2 as={'a'} className={s.formLink} href={'/forgot-password'}>
            Forgot Password?
          </Typography.Body2>
        </div>
        <Button className={classNames.submitButton} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography.Body2 className={s.textOnCard900}>Don't have an account?</Typography.Body2>
      <Typography.Link3 className={classNames.signInButton} href={'/sign-up'}>
        Sign Up
      </Typography.Link3>
    </Card>
  )
}
