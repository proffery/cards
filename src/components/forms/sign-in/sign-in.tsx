import { useController, useForm } from 'react-hook-form'

import { Button, Card, Checkbox, Input, Typography } from '@/components'
import clsx from 'clsx'

import s from '@/components/forms/forms.module.scss'

const classNames = {
  form: clsx(s.form),
  root: clsx(s.root),
  signInButton: clsx(s.linkButton),
  submitButton: clsx(s.topMargin),
}

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign In</Typography.H1>
      <form className={classNames.form} onSubmit={onSubmit}>
        <Input fullWidth label={'Email'} {...register('email')} />
        <Input fullWidth label={'Password'} type={'password'} {...register('password')} />
        <Checkbox checked={value} label={'Remember me'} onCheckedChange={onChange} />
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
