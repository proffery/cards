import { useNavigate } from 'react-router-dom'

import { ArrowBack } from '@/assets/icons'
import { Typography } from '@/components'

import s from './back-link.module.scss'

type Props = {
  className?: string
  text: string
}

export const BackLink = (props: Props) => {
  const { text } = props
  const navigate = useNavigate()

  const handlerBackLink = () => {
    navigate(-1)
  }

  return (
    <Typography.Link1 className={s.backLink} onClick={handlerBackLink}>
      <ArrowBack />
      <Typography.Body1>{text}</Typography.Body1>
    </Typography.Link1>
  )
}
