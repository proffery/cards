import { Link } from 'react-router-dom'

import Image404 from '@/assets/images/404.png'
import { ROUTES } from '@/common/consts/routes'
import { Button, Typography } from '@/components'
import { Page } from '@/components/layouts'

import s from './error-page.module.scss'

export const ErrorPage = () => {
  return (
    <Page marginTop={'127px'}>
      <div className={s.content}>
        <img alt={'Error 404'} src={Image404} />
        <Typography.Body1>Sorry! Page not found!</Typography.Body1>
        <Button as={Link} to={ROUTES.base}>
          Back to home page
        </Button>
      </div>
    </Page>
  )
}
