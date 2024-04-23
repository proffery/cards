import { Link } from 'react-router-dom'

import Image404 from '@/assets/images/404.png'
import { Button, Typography } from '@/components'
import { Page } from '@/components/layouts'

import s from './error-page.module.scss'

export const ErrorPage = () => {
  return (
    <Page className={s.content}>
      <img alt={'Error 404'} src={Image404} />
      <Typography.Body1>Sorry! Page not found!</Typography.Body1>
      <Button as={Link} to={'/'}>
        Back to home page
      </Button>
    </Page>
  )
}
