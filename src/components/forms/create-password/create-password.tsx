import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button, Card, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from '../forms.module.scss'

import { createPasswordSchema } from './schema'

type Props = {
  onSubmit: (data: FormFields) => void
}
type FormFields = z.infer<typeof createPasswordSchema>
export const CreatePassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(createPasswordSchema),
  })

  const classNames = {
    description: clsx(s.description),
    form: clsx(s.form, s.topMargin),
    inputsContainer: clsx(s.topMargin),
    root: clsx(s.root),
    submitButton: clsx(s.topMargin),
  }

  return (
    <Card className={classNames.root}>
      <Typography.H1>Create new password</Typography.H1>
      <form className={classNames.form} onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={classNames.inputsContainer}>
          <ControlledInput
            control={control}
            fullWidth
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <Typography.Body2 className={classNames.description}>
          Create new password and we will send you further instructions to email
        </Typography.Body2>
        <Button as={Link} className={classNames.submitButton} fullWidth to={'#'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
