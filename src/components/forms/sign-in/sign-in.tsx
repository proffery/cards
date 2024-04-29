import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { FormValues, signInSchema } from '@/components/forms/sign-in/signInSchema'
import { Button, Card, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from '@/components/forms/forms.module.scss'

const classNames = {
  form: clsx(s.form, s.topMargin),
  inputsContainer: clsx(s.inputsContainer),
  root: clsx(s.root),
  signInButton: clsx(s.linkButton),
  submitButton: clsx(s.topMargin),
}

type Props = {
  onSubmit: (data: FormValues) => void
}
export const SignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })
  const onFormSubmit = (data: FormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign In</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(onFormSubmit)}>
        <div className={classNames.inputsContainer}>
          <ControlledInput control={control} fullWidth label={'Email'} name={'email'} />
          <ControlledInput
            control={control}
            fullWidth
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.formLink}>
          <Typography.Body2 as={Link} className={s.formLink} to={ROUTES.forgotPassword}>
            Forgot Password?
          </Typography.Body2>
        </div>
        <Button className={classNames.submitButton} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography.Body2 className={s.text}>Don't have an account?</Typography.Body2>
      <Typography.Link3 as={Link} className={classNames.signInButton} to={ROUTES.signUp}>
        Sign Up
      </Typography.Link3>
    </Card>
  )
}
