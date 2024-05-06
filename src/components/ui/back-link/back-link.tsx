import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ArrowBack } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { Typography } from '@/components/ui'
import clsx from 'clsx'

import s from './back-link.module.scss'

type Props = {
  className?: string
  text: string
}

export const BackLink = (props: Props) => {
  const { className, text } = props
  const navigate = useNavigate()
  const location = useLocation()
  const isDeckRoute =
    location.pathname.startsWith(ROUTES.decks) && !location.pathname.endsWith('/learn')
  const classNames = {
    root: clsx(s.backLink, className),
  }

  const handlerBackLink = () => {
    if (isDeckRoute) {
      navigate(ROUTES.decks)
    } else {
      navigate(-1)
    }
  }

  return (
    <Typography.Body2 as={Link} className={classNames.root} onClick={handlerBackLink}>
      <ArrowBack />
      <Typography.Body1>{text}</Typography.Body1>
    </Typography.Body2>
  )
}
