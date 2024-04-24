import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { Button, Card, Typography } from '@/components'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from '../forms.module.scss'

import { signUpSchema } from './schema'

type Props = {
  onSubmit: (data: Omit<FormFields, 'confirmPassword'>) => void
}
type FormFields = z.infer<typeof signUpSchema>
export const SignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const classNames = {
    form: clsx(s.form, s.topMargin),
    inputsContainer: clsx(s.inputsContainer),
    root: clsx(s.root),
    signInButton: clsx(s.linkButton),
    submitButton: clsx(s.topMargin),
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Sign Up</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={classNames.inputsContainer}>
          <ControlledInput control={control} fullWidth label={'Email'} name={'email'} />
          <ControlledInput
            control={control}
            fullWidth
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <ControlledInput
            control={control}
            fullWidth
            label={'Confirm Password'}
            name={'confirmPassword'}
            type={'password'}
          />
          <Button className={classNames.submitButton} fullWidth>
            Sign Up
          </Button>
        </div>
      </form>
      <Typography.Body2>Already have an account?</Typography.Body2>
      <Typography.Link3 as={Link} className={classNames.signInButton} to={ROUTES.signIn}>
        Sign In
      </Typography.Link3>
    </Card>
  )
}
