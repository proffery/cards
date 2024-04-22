import { useForm } from 'react-hook-form'

import { Button, Card, Input, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { FormValues, signInSchema } from '@/components/forms/sign-in/signInSchema'
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
    watch,
  } = useForm<FormValues>({ resolver: zodResolver(signInSchema) })

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign In</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <Input
          fullWidth
          label={'Email'}
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Input
          fullWidth
          label={'Password'}
          type={'password'}
          value={watch('password', '')}
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.formLink}>
          {/*//Need add link*/}
          <Typography.Body2>Forgot Password?</Typography.Body2>
        </div>
        <Button className={classNames.submitButton} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography.Body2>Don't have an account?</Typography.Body2>
      <Typography.Link3 className={classNames.signInButton} href={'/signup'}>
        Sign Up
      </Typography.Link3>
    </Card>
  )
}
