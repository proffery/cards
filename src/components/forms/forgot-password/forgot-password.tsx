import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { ForgotPasswordSchema } from '@/components/forms/forgot-password/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from '@/components/forms/forms.module.scss'

const classNames = {
  form: clsx(s.form),
  root: clsx(s.root),
  signInButton: clsx(s.linkButton),
  submitButton: clsx(s.topMargin),
}

type FormFields = {
  email: string
}
type Props = {
  onSubmit: (data: FormFields) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormFields>({ resolver: zodResolver(ForgotPasswordSchema) })

  return (
    <Card className={classNames.root}>
      <Typography.H1>Forgot your password?</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <ControlledInput
          fullWidth
          label={'Email'}
          {...register('email')}
          control={control}
          errorMessage={errors.email?.message}
        />
        <Typography.Subtitle2 className={s.enterEmail}>
          Enter your email address and we will send you further instructions
        </Typography.Subtitle2>
        <Button className={classNames.submitButton} fullWidth>
          Send Instructions
        </Button>
      </form>
      <Typography.Body2 className={s.rememberPassword}>
        Did you remember your password?
      </Typography.Body2>

      <Typography.Link3 as={Link} className={classNames.signInButton} to={'/sign-in'}>
        Try logging in
      </Typography.Link3>
    </Card>
  )
}
