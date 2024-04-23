import { Link } from 'react-router-dom'

import { Email } from '@/assets/icons'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.root}>
      <Typography.H1>Check Email</Typography.H1>
      <Email size={96} />
      <div className={s.description}>
        <Typography.Body2>We’ve sent an Email with instructions to</Typography.Body2>
        <Typography.Body2>{email}</Typography.Body2>
      </div>
      <Button as={Link} className={s.topMargin} fullWidth to={'/sign-in'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
