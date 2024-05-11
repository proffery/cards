import { Link } from 'react-router-dom'

import { Email } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { Button, Card, Typography } from '@/components/ui'

import s from './confirm-email.module.scss'

type Props = {
  email?: string
}

export const ConfirmedEmail = ({ email }: Props) => {
  return (
    <Card className={s.root}>
      <Typography.H1>Email confirmed!</Typography.H1>
      <Email size={96} />
      <div className={s.description}>
        <Typography.Body2>{email ? email : 'Your email'} is verified</Typography.Body2>
      </div>
      <Button as={Link} className={s.topMargin} fullWidth to={ROUTES.base}>
        {email ? 'Go to Decks' : 'Back to Sign In'}
      </Button>
    </Card>
  )
}
